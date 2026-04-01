import React, { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";
import PlanPage from "./components/Pages/PlanPage";
import ServicePage from "./components/Pages/ServicePage";
import TeamPage from "./components/Pages/TeamPage";
import ReviewPage from "./components/Pages/ReviewPage";
import FAQPage from "./components/Pages/FAQPage";
import StatsSection from "./components/Pages/StatsSection";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/Pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/Pages/SignupPage";
import { Toaster } from "react-hot-toast";
import BookDoctor from "./components/Pages/BookDoctor";
import { Loader2 } from "lucide-react";
import api from "./utils/axiosInstance";
import {
  loginSuccess,
  logout,
} from "./Redux/Features/authentication/authSlice";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
import PatientDashboard from "./components/Pages/PatientDashboard";
import UserPage from "./components/Pages/UserPage";
import DoctorPage from "./components/Pages/DoctorPage";

const App = () => {
  const dispatch = useDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

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

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#E6F4F1] flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#0F766E] animate-spin mb-4" />
        <p className="text-[#053b32] font-medium font-inter animate-pulse">
          Starting Ziva Healthcare...
        </p>
      </div>
    );
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
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
        <Route path="/doctor" element={
          <div>
            <Navbar />
            <DoctorPage/>
            <Footer/>
          </div>
        }/>
      </Routes>
    </div>
  );
};

export default App;
