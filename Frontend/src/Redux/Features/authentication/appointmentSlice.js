// import { createSlice } from "@reduxjs/toolkit";

// const savedAppointment = JSON.parse(localStorage.getItem("local_appointments")) || [];

// const appointmentSlice = createSlice({
//     name: "appointments",
//     initialState: {
//         list: savedAppointment
//     },
//     reducers : {
//         addAppointment: (state, action) => {
//             state.list = [action.payload, ...state.list];

//             localStorage.setItem("local_appointments", JSON.stringify(state.list))
//         },
//         setAllAppointments : (state, action) => {
//             state.list = action.payload;
//             localStorage.setItem("local_appointments", JSON.stringify(state.list))
//         }
//     }
// })

// export const {addAppointment, setAllAppointments} = appointmentSlice.actions;
// export default appointmentSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
    name: "appointments",
    initialState: {
        list: []
    },
    reducers: {
        addAppointment: (state, action) => {
            const {appointment, userId} = action.payload;
            state.list = [appointment, ...state.list]

            if(userId){
                localStorage.setItem(`local_appointments_${userId}`, JSON.stringify(state.list))
            }
        },
        setAllAppointments : (state, action) => {
            const {records, userId} = action.payload;
            state.list = records;
            if(userId){
                localStorage.setItem(`local_appointments_${userId}`, JSON.stringify(state.list))
            }
        },
        clearAppointments: (state) => {
            state.list = [];
        }

    }
})

export const {addAppointment, setAllAppointments, clearAppointments} = appointmentSlice.actions;
export default appointmentSlice.reducer;