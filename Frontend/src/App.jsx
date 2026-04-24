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

// import React, { useEffect, useState, useRef } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { Loader2 } from "lucide-react";
// import { motion, AnimatePresence } from "motion/react";
// import { useSelector, useDispatch } from "react-redux";
// import api from "./utils/axiosInstance";
// import {
//   loginSuccess,
//   logout,
// } from "./Redux/Features/authentication/authSlice";

// // 🚀 Naya Import: GSAP For Awwwards Level Animation
// import gsap from "gsap";

// // Components
// import Navbar from "./components/Header/Navbar";
// import HeroSection from "./components/Header/HeroSection";
// import BodyPage from "./components/Pages/BodyPage";
// import PlanPage from "./components/Pages/PlanPage";
// import ServicePage from "./components/Pages/ServicePage";
// import TeamPage from "./components/Pages/TeamPage";
// import ReviewPage from "./components/Pages/ReviewPage";
// import FAQPage from "./components/Pages/FAQPage";
// import StatsSection from "./components/Pages/StatsSection";
// import Footer from "./components/Footer/Footer";
// import LoginPage from "./components/Pages/LoginPage";
// import SignupPage from "./components/Pages/SignupPage";
// import BookDoctor from "./components/Pages/BookDoctor";
// import ProtectedRoute from "./components/Pages/ProtectedRoute";
// import PatientDashboard from "./components/Pages/PatientDashboard";
// import UserPage from "./components/Pages/UserPage";
// import DoctorPage from "./components/Pages/DoctorPage";
// import AboutPage from "./components/Pages/AboutPage";
// import Insurance from "./components/Pages/Insurance";
// import Result from "./components/QuickLinks/Result";
// import Records from "./components/QuickLinks/Record";
// import Telehealth from "./components/QuickLinks/Telehealth";

// const App = () => {
//   const dispatch = useDispatch();

//   // 🚀 Dual State Logic: Dono poore honge tab app khulegi
//   const [authReady, setAuthReady] = useState(false);
//   const [animReady, setAnimReady] = useState(false);

//   // GSAP Refs
//   const loaderRef = useRef(null);
//   const progressRef = useRef(null);
//   const counterRef = useRef(null);
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);

//   // 1. Check Authentication (Background task)
//   useEffect(() => {
//     const checkUserAuth = async () => {
//       const savedToken = localStorage.getItem("ziva_token");
//       if (!savedToken) {
//         setAuthReady(true);
//         return;
//       }

//       try {
//         const res = await api.get("http://localhost:5000/api/user", {
//           headers: { Authorization: `Bearer ${savedToken}` },
//           withCredentials: true,
//         });

//         if (res.data && res.data.user) {
//           dispatch(loginSuccess({ user: res.data.user, token: savedToken }));
//         }
//       } catch (err) {
//         console.error("Session invalid.", err.message);
//         localStorage.removeItem("ziva_token");
//         dispatch(logout());
//       } finally {
//         setAuthReady(true); // Auth ho gaya
//       }
//     };

//     checkUserAuth();
//   }, [dispatch]);

//   // 2. GSAP Awwwards Animation (Foreground task)
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         onComplete: () => {
//           setAnimReady(true); // Animation poora ho gaya
//         },
//       });

//       // Ziva & Care text reveal (from bottom with slight skew)
//       tl.fromTo(
//         [text1Ref.current, text2Ref.current],
//         { y: 150, skewY: 7, opacity: 0 },
//         {
//           y: 0,
//           skewY: 0,
//           opacity: 1,
//           duration: 1.5,
//           ease: "power4.out",
//           stagger: 0.15,
//         },
//         0.2,
//       );

//       // Progress Bar Expanding
//       tl.to(
//         progressRef.current,
//         {
//           scaleX: 1,
//           duration: 2.2,
//           ease: "expo.inOut", // The classic cinematic ease
//         },
//         0,
//       );

//       // Number Counter 0 to 100
//       tl.to(
//         counterRef.current,
//         {
//           innerText: 100,
//           duration: 2.2,
//           snap: { innerText: 1 },
//           ease: "expo.inOut",
//         },
//         0,
//       );
//     }, loaderRef);

//     return () => ctx.revert(); // Cleanup GSAP on unmount
//   }, []);

//   const isAppLoading = !(authReady && animReady);

//   // The golden "Awwwards" cubic-bezier for buttery smooth exit
//   const awwwardsEase = [0.76, 0, 0.24, 1];

//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       <Toaster position="top-center" reverseOrder={false} />

//       {/* 🚀 AWWWARDS-STYLE CINEMATIC PRELOADER */}
//       <AnimatePresence mode="wait">
//         {isAppLoading && (
//           <motion.div
//             ref={loaderRef}
//             key="splash"
//             exit={{
//               y: "-100vh",
//               transition: { duration: 1.2, ease: awwwardsEase },
//             }}
//             className="fixed inset-0 z-[9999] bg-[#021814] flex flex-col justify-between p-8 md:p-12 lg:p-16 origin-top"
//           >
//             {/* Top Bar */}
//             <div className="flex justify-between items-start text-[#a8cfc3] font-mono text-xs uppercase tracking-[0.2em] overflow-hidden">
//               <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
//                 Ziva Healthcare
//               </motion.div>
//               <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
//                 System OS // 2026
//               </motion.div>
//             </div>

//             {/* Center Massive Typography */}
//             <div className="flex flex-col items-center justify-center flex-1 text-center">
//               <div className="overflow-hidden pb-2">
//                 <h1
//                   ref={text1Ref}
//                   className="text-5xl md:text-8xl lg:text-[9rem] font-black font-poppins text-white leading-none tracking-tighter"
//                 >
//                   ELEVATING
//                 </h1>
//               </div>
//               <div className="overflow-hidden pb-4">
//                 <h1
//                   ref={text2Ref}
//                   className="text-5xl md:text-8xl lg:text-[9rem] font-black font-poppins text-[#dfff4f] leading-none tracking-tighter"
//                 >
//                   HEALTHCARE.
//                 </h1>
//               </div>
//             </div>

//             {/* Bottom Bar: Counter & Progress */}
//             <motion.div
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col gap-5 w-full"
//             >
//               <div className="flex justify-between items-end">
//                 <span className="text-[#a8cfc3] font-inter text-sm uppercase tracking-widest font-semibold">
//                   Initializing
//                 </span>
//                 <span className="text-[#dfff4f] font-mono text-5xl md:text-7xl font-light leading-none flex items-baseline">
//                   <span ref={counterRef}>0</span>%
//                 </span>
//               </div>

//               {/* Progress Line */}
//               <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
//                 <div
//                   ref={progressRef}
//                   className="absolute top-0 left-0 w-full h-full bg-[#dfff4f] origin-left scale-x-0"
//                 ></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── ACTUAL APP CONTENT ── */}
//       <motion.div
//         className="w-full h-full bg-white"
//         initial={{ scale: 0.95, y: 20, opacity: 0 }}
//         animate={
//           !isAppLoading
//             ? { scale: 1, y: 0, opacity: 1 }
//             : { scale: 0.95, y: 20, opacity: 0 }
//         }
//         transition={{ duration: 1.2, ease: awwwardsEase, delay: 0.2 }}
//       >
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Navbar />
//                 <div className="px-4">
//                   <HeroSection />
//                   <BodyPage />
//                 </div>
//                 <PlanPage />
//                 <div>
//                   <ServicePage />
//                   <StatsSection />
//                   <TeamPage />
//                   <ReviewPage />
//                   <FAQPage />
//                   <Footer />
//                 </div>
//               </div>
//             }
//           />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />

//           <Route
//             path="/appointment"
//             element={
//               <ProtectedRoute>
//                 <Navbar />
//                 <BookDoctor />
//                 <Footer />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Navbar />
//                 <PatientDashboard />
//                 <Footer />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute>
//                 <Navbar />
//                 <UserPage />
//                 <Footer />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/doctor"
//             element={
//               <div>
//                 <Navbar />
//                 <DoctorPage />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <div>
//                 <Navbar />
//                 <AboutPage />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route
//             path="/insurance"
//             element={
//               <div>
//                 <Navbar />
//                 <Insurance />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route
//             path="/results"
//             element={
//               <div>
//                 <Navbar />
//                 <Result />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route
//             path="/records"
//             element={
//               <div>
//                 <Navbar />
//                 <Records />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route
//             path="/telehealth"
//             element={
//               <div>
//                 <Navbar />
//                 <Telehealth />
//                 <Footer />
//               </div>
//             }
//           />
//         </Routes>
//       </motion.div>
//     </div>
//   );
// };

// export default App;
