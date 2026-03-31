import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

api.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem('ziva_token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if(error.response && (error.response.status === 401 || error.response.status === 403) && !originalRequest._retry ){
            originalRequest._retry = true

            try{
                const res = await axios.get('http://localhost:5000/api/refresh-token', {
                    withCredentials: true
                });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem('ziva_token', newAccessToken)

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return api(originalRequest)
            }catch(refreshError){
                console.error("Refresh token expire ho gaya ya fail ho gaya:", refreshError);
                localStorage.removeItem('ziva_token');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error)
    }
);

export default api