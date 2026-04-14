import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "motion/react"; 
import {
  Calendar, Clock, FileText, Phone, Activity,
  ShieldCheck, HeartPulse, Droplet, ChevronRight, Video,
  MapPin, BellRing, XCircle, Edit3, CheckCircle2, Eye, Menu, Loader2
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

import UpdateVitalsModal from "./UpdateVitalsModal";
import RescheduleModal from "./RescheduleModal";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import api from "../../utils/axiosInstance.js";
import axios from "axios";
import { loginSuccess } from "@/Redux/Features/authentication/authSlice";
import ZivaChatbot from "../GenAi/ZivaChatbot";

const PatientDashboard = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  //  STATE
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  // Modals State
  const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedApt, setSelectedApt] = useState(null);

  const [vitalsData, setVitalsData] = useState({
    heartRate: user?.heartRate || null,
    bpSys: user?.bpSys || null,
    bpDia: user?.bpDia || null,
    weight: user?.userWeight || null,
    score: user?.healthScore || null,
  });

  useEffect(() => {
    setVitalsData({
      heartRate: user?.heartRate || null,
      bpSys: user?.bpSys || null,
      bpDia: user?.bpDia || null,
      weight: user?.userWeight || null,
      score: user?.healthScore || null,
    });
  }, [user]);

  //  FETCH DATA
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await api.get("/zivacare/getAppointments");
      setAppointments(res.data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (id) => {
    try {
      await api.put(`/zivacare/cancel/${id}`);
      toast.success("Appointment cancelled successfully");
      fetchAppointments();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel");
    }
  };

  const handleSaveVitals = async (newVitals) => {
    try{
      const generatedScore = Math.floor(Math.random() * (98 - 75 + 1) + 75);
      const updateData = {
        heartRate: newVitals.heartRate,
        bpSys: newVitals.bpSys,
        bpDia: newVitals.bpDia,
        userWeight: newVitals.weight, 
        healthScore: generatedScore
      };

      const res = await axios.put(`http://localhost:5000/api/update/${user._id}`, updateData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      dispatch(loginSuccess({ user: res.data.user, token: token }));
      toast.success("Vitals saved to Database successfully!");
      setIsVitalsModalOpen(false);
    } catch (error) {
      console.error("Vitals Update Error:", error);
      toast.error("Failed to save vitals to Database");
    }
  };

  const openReschedule = (apt) => {
    setSelectedApt(apt);
    setIsRescheduleOpen(true);
  };

  const openDetails = (apt) => {
    setSelectedApt(apt);
    setIsDetailsOpen(true);
  };

  const upcomingApts = appointments.filter((a) => a.status !== "Cancelled" && a.status !== "Completed");
  const pastApts = appointments.filter((a) => a.status === "Cancelled" || a.status === "Completed");
  const displayApts = activeTab === "upcoming" ? upcomingApts : pastApts;

  const MOCK_TEAM = [
    { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️" },
    { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️" },
    { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️" },
  ];

  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  //  ANIMATION VARIANTS
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#F6F9F8] font-inter pb-20 overflow-hidden">
      {/* ── HEADER & HERO ── */}
      <div className="bg-[#021814] pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-12 relative rounded-b-[2rem] md:rounded-b-[3rem] z-0">
        
        {/*  Animated Glow Effects */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0F766E] rounded-full blur-[100px] md:blur-[150px] pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#dfff4f] rounded-full blur-[100px] md:blur-[150px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Section */}
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-12">
            <div className="w-full md:w-auto text-center md:text-left">
              <motion.p variants={fadeUp} className="text-[#dfff4f] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 flex items-center justify-center md:justify-start gap-2">
                <Calendar size={14} /> {today}
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
                Hello, {user?.name ? user.name.split(" ")[0] : "User"}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#a8cfc3] text-sm md:text-base">
                Here is your daily health and schedule overview.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex w-full md:w-auto justify-center gap-3 md:gap-4 mt-4 md:mt-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors relative shrink-0">
                <BellRing size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-[#dfff4f] rounded-full"></span>
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/appointment" className="w-full md:w-auto justify-center bg-[#dfff4f] text-[#021814] font-bold font-poppins px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(223,255,79,0.2)] flex items-center gap-2 group">
                  Book Visit <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/*  Animated Vitals Grid */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            
            {/* Score Card */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="lg:col-span-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-row lg:flex-col justify-between items-center lg:items-stretch transition-shadow hover:shadow-[0_8px_30px_rgba(15,118,110,0.2)]">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:mb-4 gap-1">
                <span className="text-[#a8cfc3] font-medium text-sm">Health Score</span>
                <button onClick={() => setIsVitalsModalOpen(true)} className="text-[#dfff4f] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider w-max">
                  {vitalsData.score ? "Update" : "Add Vitals"}
                </button>
              </div>
              <div className="flex items-end gap-1">
                {vitalsData.score ? (
                  <>
                    <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="text-4xl md:text-5xl font-poppins font-bold text-white leading-none">
                      {vitalsData.score}
                    </motion.span>
                    <span className="text-[#a8cfc3] text-xs md:text-sm mb-1 hidden sm:inline">/ 100</span>
                  </>
                ) : (
                  <span className="text-2xl font-poppins font-bold text-white leading-tight">No Data<br /><span className="text-sm font-normal text-[#a8cfc3]">Click Add Vitals</span></span>
                )}
              </div>
            </motion.div>

            {/* Minor Stats */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: HeartPulse, label: "Heart Rate", val: vitalsData.heartRate, unit: "bpm", color: "text-red-400", bg: "bg-red-500/20" },
                { icon: Droplet, label: "Blood Pres.", val: vitalsData.bpSys ? `${vitalsData.bpSys}/${vitalsData.bpDia}` : null, unit: "", color: "text-blue-400", bg: "bg-blue-500/20" },
                { icon: Activity, label: "Weight", val: vitalsData.weight, unit: "kg", color: "text-orange-400", bg: "bg-orange-500/20" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }} className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 flex items-center gap-4 transition-all hover:bg-white/10">
                  <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[#a8cfc3] text-[10px] md:text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-bold text-white font-poppins">
                      {stat.val ? <>{stat.val} {stat.unit && <span className="text-xs md:text-sm font-normal text-gray-400">{stat.unit}</span>}</> : "--"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-6 md:-mt-8 relative z-20">
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* LEFT COL: APPOINTMENTS */}
          <motion.div variants={fadeUp} className="lg:col-span-2 bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold font-poppins text-[#021814]">My Appointments</h2>
              <div className="flex p-1 bg-gray-100 rounded-xl w-full sm:w-max overflow-hidden relative">
                <button onClick={() => setActiveTab("upcoming")} className={`relative z-10 flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors ${activeTab === "upcoming" ? "text-[#0F766E]" : "text-gray-500 hover:text-gray-700"}`}>
                  {activeTab === "upcoming" && <motion.div layoutId="tab-pill" className="absolute inset-0 bg-white shadow-sm rounded-lg -z-10" />}
                  Upcoming
                </button>
                <button onClick={() => setActiveTab("past")} className={`relative z-10 flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors ${activeTab === "past" ? "text-[#0F766E]" : "text-gray-500 hover:text-gray-700"}`}>
                  {activeTab === "past" && <motion.div layoutId="tab-pill" className="absolute inset-0 bg-white shadow-sm rounded-lg -z-10" />}
                  Past
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-12 text-center flex flex-col items-center justify-center text-gray-400 text-sm">
                <Loader2 size={30} className="animate-spin mb-2" /> Loading schedule...
              </div>
            ) : displayApts.length === 0 ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 md:py-16 text-center border-2 border-dashed border-gray-100 rounded-2xl">
                <Calendar size={32} className="mx-auto text-gray-300 mb-3" />
                <h3 className="text-gray-800 font-bold mb-1 text-sm md:text-base">No {activeTab} appointments</h3>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-4">
                    {displayApts.map((apt, idx) => {
                      const isCancelled = apt.status === "Cancelled";
                      const date = new Date(apt.appointmentDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
                      return (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={apt._id} className={`p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all ${isCancelled ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200 hover:border-[#0F766E]/30 hover:shadow-md"}`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center text-lg md:text-xl ${isCancelled ? "bg-gray-200 grayscale" : "bg-[#E6F4F1]"}`}>👩‍⚕️</div>
                              <div>
                                <h3 className={`font-bold font-poppins text-base md:text-lg leading-tight ${isCancelled ? "text-gray-500 line-through" : "text-[#021814]"}`}>{apt.doctorName}</h3>
                                <p className="text-gray-500 text-xs md:text-sm capitalize mt-0.5">{apt.department} • Ziva Clinic</p>
                              </div>
                            </div>
                            <div className={`flex sm:flex-col items-center sm:items-end justify-between sm:justify-center mt-2 sm:mt-0 ${isCancelled ? "opacity-50" : ""}`}>
                              <p className="font-semibold text-[#0F766E] bg-[#E6F4F1] px-2.5 py-1 rounded-md text-xs md:text-sm mb-0 sm:mb-1">{date}</p>
                              <p className="text-gray-500 text-xs md:text-sm font-medium flex items-center gap-1"><Clock size={12} /> {apt.timeSlot}</p>
                            </div>
                          </div>
                          
                          {/* ... Badges and Buttons stay the same ... */}
                          <div className="mt-4 pt-3 md:pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                            {isCancelled ? (
                              <Badge variant="destructive" className="bg-red-50 text-red-600 border-none font-bold gap-1 text-[10px] md:text-xs hover:bg-red-50"><XCircle size={12} /> Cancelled</Badge>
                            ) : (
                              <Badge className="bg-[#E6F4F1] text-[#0F766E] border-none font-bold gap-1 text-[10px] md:text-xs hover:bg-[#E6F4F1]"><CheckCircle2 size={12} /> {apt.status}</Badge>
                            )}

                            <div className="flex flex-wrap gap-1 md:gap-2">
                              <button onClick={() => openDetails(apt)} className="text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"><Eye size={14} /> View</button>
                              {!isCancelled && activeTab === "upcoming" && (
                                <>
                                  <button onClick={() => openReschedule(apt)} className="text-[10px] md:text-xs font-semibold text-blue-600 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"><Edit3 size={14} /> Reschedule</button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <button className="text-[10px] md:text-xs font-semibold text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"><XCircle size={14} /> Cancel</button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="rounded-2xl md:rounded-[2rem] w-[90vw] md:w-auto max-w-md">
                                      <AlertDialogHeader>
                                        <AlertDialogTitle className="font-poppins text-[#021814]">Cancel Appointment?</AlertDialogTitle>
                                        <AlertDialogDescription className="font-inter text-sm">This will permanently cancel your appointment. Note: Cancellations are not allowed within 24 hours.</AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter className="mt-4">
                                        <AlertDialogCancel className="rounded-xl">Keep it</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleCancelAppointment(apt._id)} className="bg-red-500 hover:bg-red-600 rounded-xl">Yes, Cancel</AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* RIGHT COL: QUICK LINKS & DOCTORS */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div variants={fadeUp} className="bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8">
              <h3 className="font-bold font-poppins text-[#021814] mb-4 text-sm md:text-base">Quick Links</h3>
              <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 md:gap-3">
                {[
                  { icon: FileText, label: "Records", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Droplet, label: "Results", color: "text-red-500", bg: "bg-red-50" },
                  { icon: Video, label: "Telehealth", color: "text-purple-600", bg: "bg-purple-50" },
                  { icon: ShieldCheck, label: "Insurance", color: "text-emerald-600", bg: "bg-emerald-50" },
                ].map((item, idx) => (
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} key={idx} className={`p-3 md:p-4 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1.5 md:gap-2 transition-shadow hover:shadow-md ${item.bg}`}>
                    <item.icon size={18} className={`${item.color}`} />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold font-poppins text-[#021814] text-sm md:text-base">Top Doctors</h3>
                <Link to="/doctor" className="text-[#0F766E] text-[10px] md:text-xs font-bold hover:underline">View All</Link>
              </div>
              <Swiper slidesPerView={1} spaceBetween={16} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} className="w-full">
                {MOCK_TEAM.map((doc) => (
                  <SwiperSlide key={doc.id}>
                    <div className="p-3 md:p-4 border border-gray-100 rounded-xl md:rounded-2xl hover:border-[#0F766E]/30 transition-colors">
                      <div className="flex items-center gap-3 md:gap-4 mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E6F4F1] rounded-full flex items-center justify-center text-lg md:text-xl shrink-0">{doc.img}</div>
                        <div>
                          <h4 className="font-bold text-[#021814] text-xs md:text-sm font-poppins leading-tight">{doc.name}</h4>
                          <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{doc.specialty}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/*  MODALS  */}
      <UpdateVitalsModal isOpen={isVitalsModalOpen} onClose={() => setIsVitalsModalOpen(false)} onSave={handleSaveVitals} initialData={vitalsData} />
      {selectedApt && (
        <>
          <RescheduleModal isOpen={isRescheduleOpen} onClose={() => setIsRescheduleOpen(false)} appointment={selectedApt} onSuccess={fetchAppointments} />
          <AppointmentDetailsModal isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} appointment={selectedApt} />
        </>
      )}
      <ZivaChatbot/>
    </div>
  );
};

export default PatientDashboard;