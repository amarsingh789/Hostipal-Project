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
import axios from "axios";
import {
  loginSuccess,
  logout,
} from "./Redux/Features/authentication/authSlice";
import { useDispatch } from "react-redux";
import PatientDashboard from "./components/Pages/PatientDashboard";
import UserPage from "./components/Pages/UserPage";

const App = () => {
  const dispatch = useDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkUserAuth = async () => {
      const savedToken = localStorage.getItem("ziva_token"); // Access Token nikaalo

      if (!savedToken) {
        setIsCheckingAuth(false);
        return; // Agar access token nahi hai, toh check mat karo. User needs to login.
      }

      try {
        // Backend ko Header mein token bhej kar verify karo
        const res = await axios.get("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
          withCredentials: true, // Yeh ensure karega ki cookie (refreshToken) bhi jaaye agar needed ho future me
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
            <div>
              <Navbar />
              <BookDoctor />
              <Footer />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Navbar />
              <PatientDashboard />
              <Footer />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <Navbar />
              <UserPage />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
