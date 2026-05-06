import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";
const PlanPage = lazy(() => import("./components/Pages/PlanPage"));
const ServicePage = lazy(() => import("./components/Pages/ServicePage"));
import TeamPage from "./components/Pages/TeamPage";
const ReviewPage = lazy(() => import("./components/Pages/ReviewPage"));
const FAQPage = lazy(() => import("./components/Pages/FAQPage"));
import StatsSection from "./components/Pages/StatsSection";
import Footer from "./components/Footer/Footer";
const LoginPage = lazy(() => import("./components/Pages/LoginPage"));
import { Route, Routes, useLocation } from "react-router-dom";
const SignupPage = lazy(() => import("./components/Pages/SignupPage"));
import { Toaster } from "react-hot-toast";
const BookDoctor = lazy(() => import("./components/Pages/BookDoctor"));
import { Loader2 } from "lucide-react";
import api from "./utils/axiosInstance";
import {
  loginSuccess,
  logout,
} from "./Redux/Features/authentication/authSlice";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
const PatientDashboard = lazy(
  () => import("./components/Pages/PatientDashboard"),
);
const UserPage = lazy(() => import("./components/Pages/UserPage"));
const DoctorPage = lazy(() => import("./components/Pages/DoctorPage"));
const AboutPage = lazy(() => import("./components/Pages/AboutPage"));
import ZivaChatbot from "./components/GenAi/ZivaChatbot";
const Insurance = lazy(() => import("./components/Pages/Insurance"));
const Result = lazy(() => import("./components/QuickLinks/Result"));
const Records = lazy(() => import("./components/QuickLinks/Record"));
const Telehealth = lazy(() => import("./components/QuickLinks/Telehealth"));
import PreLoader from "./PreLoader/PreLoader";
import NotFound from "./components/Pages/NotFound";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const dispatch = useDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const checkUserAuth = async () => {
      const savedToken = localStorage.getItem("ziva_token"); // Access Token nikaalo

      if (!savedToken) {
        setIsCheckingAuth(false);
        return;
      }

      try {
        const res = await api.get("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
          withCredentials: true,
        });

        if (res.data && res.data.user) {
          dispatch(
            loginSuccess({
              user: res.data.user,
              token: savedToken,
            }),
          );
        }
      } catch (err) {
        console.error(
          "No active session found. Please login.",
          err.response?.data?.message || err.message,
        );
        localStorage.removeItem("ziva_token"); // Token hata do kyunki expire/galat hai
        dispatch(logout());
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkUserAuth();
  }, [dispatch]);

  useEffect(() => {
    let timer;
    if (!isCheckingAuth && scrollRef.current) {
      timer = setTimeout(() => {
        locoScrollRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smartphone: { smooth: true },
          tablet: { smooth: true },
          multiplier: 1,
        });
      }, 100);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, [isCheckingAuth]);

  // useEffect(() => {
  //   let timer;
  //   if (locoScrollRef.current) {
  //     const timer = setTimeout(() => {
  //       locoScrollRef.current.update();
  //     }, 500);
  //   }

  //   return () => {
  //     if (timer) clearTimeout(timer);
  //   };
  // }, [location.pathname]);

  // if (isCheckingAuth) {
  //   return (
  //     <div className="min-h-screen bg-[#E6F4F1] flex flex-col items-center justify-center">
  //       <Loader2 className="w-12 h-12 text-[#0F766E] animate-spin mb-4" />
  //       <p className="text-[#053b32] font-medium font-inter animate-pulse">
  //         Starting Ziva Healthcare...
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <>
      <PreLoader />
      {!isCheckingAuth && (
        <div className="relative">
          <Toaster position="top-center" reverseOrder={false} />
          <div
            data-scroll-container
            ref={scrollRef}
            className="w-full min-h-screen bg-white"
          >
            <div data-scroll-section>
              <Suspense
                fallback={
                  <div className="w-full h-screen flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-[#0F766E] animate-spin" />
                  </div>
                }
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div>
                        <Navbar />
                        <div className="px-4">
                          <HeroSection />
                          <BodyPage />
                        </div>
                        <PlanPage />
                        <div>
                          <ServicePage />
                          <StatsSection />
                          <TeamPage />
                          <ReviewPage />
                          <FAQPage />
                          <Footer />
                        </div>
                      </div>
                    }
                  />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route
                    path="/appointment"
                    element={
                      <ProtectedRoute>
                        <Navbar />
                        <BookDoctor />
                        <Footer />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Navbar />
                        <PatientDashboard />
                        <Footer />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Navbar />
                        <UserPage />
                        <Footer />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/doctor"
                    element={
                      <div>
                        <Navbar />
                        <DoctorPage />
                        <Footer />
                      </div>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <div>
                        <Navbar />
                        <AboutPage />
                        <Footer />
                      </div>
                    }
                  />
                  {/* <Route path="/ai" element= {<ZivaChatbot/>}/> */}
                  <Route
                    path="/insurance"
                    element={
                      <div>
                        <Navbar />
                        <Insurance />
                        <Footer />
                      </div>
                    }
                  />
                  <Route
                    path="/results"
                    element={
                      <div>
                        <ProtectedRoute>
                          <Navbar />
                          <Result />
                          <Footer />
                        </ProtectedRoute>
                      </div>
                    }
                  />
                  <Route
                    path="/records"
                    element={
                      <div>
                        <ProtectedRoute>
                          <Navbar />
                          <Records />
                          <Footer />
                        </ProtectedRoute>
                      </div>
                    }
                  />
                  <Route
                    path="/telehealth"
                    element={
                      <div>
                        <ProtectedRoute>
                          <Navbar />
                          <Telehealth />
                          <Footer />
                        </ProtectedRoute>
                      </div>
                    }
                  />
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
