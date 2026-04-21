import React, { useEffect, useState, useRef } from "react";
import {
  ChevronLeft, Video, Calendar as CalendarIcon, Clock, Phone, 
  Mic, Camera, Wifi, Loader2, ServerCrash, CheckCircle2, ShieldCheck, 
  AlertCircle, Play, XCircle, Plus, X, Send, Stethoscope, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import toast from "react-hot-toast";
import api from "../../utils/axiosInstance.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge"; 

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

import { addAppointment, setAllAppointments } from "../../Redux/Features/authentication/appointmentSlice.js";

const Telehealth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  
  const [activeTab, setActiveTab] = useState("upcoming");
  // const [appointments, setAppointments] = useState([]);
  const appointments = useSelector((state) => state.appointment?.list || [])
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [sysCheck, setSysCheck] = useState({ mic: false, cam: false, net: false, testing: false });

  // 🚀 Booking States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 🚀 Custom Dropdown Controls
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false)
  
  const [bookingData, setBookingData] = useState({
    specialty: "",
    doctor: "",
    date: null,
    time: "",
    reason: ""
  });

  const specialtiesList = [
    "General Physician", "Cardiology", "Dermatology", 
    "Mental Health", "Orthopedics", "Pediatrics", "Neurology"
  ];
  
  const timeSlotsList = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "04:00 PM"
  ];

  const doctorsList = [
    "Dr. Meera Patel", "Dr. Ananya Sharma", "Dr. Neha Verma", 
    "Dr. Vikram Singh", "Dr. Rohan Gupta", "Dr. Sanjay Kumar", "Dr. Amit Desai"
  ];

  const getDoctorBySpecialty = (specialty) => {
    const doctors = {
      "General Physician": "Dr. Meera Patel",
      "Cardiology": "Dr. Ananya Sharma",
      "Dermatology": "Dr. Neha Verma",
      "Mental Health": "Dr. Vikram Singh",
      "Orthopedics": "Dr. Rohan Gupta",
      "Pediatrics": "Dr. Sanjay Kumar",
      "Neurology": "Dr. Amit Desai"
    };
    return doctors[specialty] || "Dr. Available Specialist";
  };

  const fetchTelehealthAppointments = async () => {
    try {
      setLoading(true);
      setHasError(false);

      if (appointments.length > 0) {
        setLoading(false);
        return; 
      }

      const response = await api.get("/zivacare/getAppointments").catch(() => ({ data: { appointments: [] } }));
      let fetchedRecords = response.data?.appointments || [];

      if(fetchedRecords.length > 0){
        fetchedRecords = fetchedRecords.map((rec) => ({
          ...rec,
          upcoming: rec.status !== "Completed" && rec.status !== "Cancelled",
          isTelehealth: true
        }))
        dispatch(setAllAppointments(fetchedRecords))
      }

      // fetchedRecords = fetchedRecords.map((rec) => ({
      //   ...rec,
      //   upcoming: rec.status !== "Completed" && rec.status !== "Cancelled",
      //   isTelehealth: true, 
      // }));
      
      // setAppointments(fetchedRecords);
      // if(fetchedRecords.length > 0){
      //   dispatch(setAllAppointments(fetchedRecords))
      // }
    } catch (error) {
      console.error("Error fetching records:", error);
      toast.error("Failed to load telehealth appointments");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (user) fetchTelehealthAppointments();
  }, [user]);

  const filteredAppointments = appointments.filter(rec => 
    activeTab === "past" ? !rec.upcoming : rec.upcoming
  );

  const runSystemCheck = () => {
    setSysCheck({ mic: false, cam: false, net: false, testing: true });
    setTimeout(() => setSysCheck(prev => ({ ...prev, net: true })), 800);
    setTimeout(() => setSysCheck(prev => ({ ...prev, mic: true })), 1600);
    setTimeout(() => setSysCheck(prev => ({ ...prev, cam: true, testing: false })), 2400);
  };

  useEffect(() => {
    runSystemCheck();
  }, []);

  const handleJoinCall = (doctorName) => {
    toast.success(`Initializing secure video link with ${doctorName}...`, {
        icon: "🔐",
        style: { borderRadius: '10px', background: '#021814', color: '#dfff4f' }
    });
  };

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    if (!bookingData.specialty || !bookingData.doctor || !bookingData.date || !bookingData.time || !bookingData.reason) {
      toast.error("Please fill all fields to book.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formattedDate = format(bookingData.date, "PP"); 
      
      await new Promise(resolve => setTimeout(resolve, 1500));

      const newAppointment = {
        _id: "new_" + Date.now(),
        // doctorName: getDoctorBySpecialty(bookingData.specialty),
        doctorName: bookingData.doctor,
        department: bookingData.specialty,
        date: bookingData.date.toISOString(),
        time: bookingData.time,
        status: "Scheduled",
        upcoming: true,
        isTelehealth: true,
        clinic: "Ziva Virtual Clinic",
        reason: bookingData.reason
      };

      // setAppointments(prev => [newAppointment, ...prev]);
      dispatch(addAppointment(newAppointment))

      setActiveTab("upcoming");

      toast.success(
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm">Consultation Booked!</span>
          <span className="text-xs text-gray-500">
            {bookingData.specialty} • {formattedDate} at {bookingData.time}
          </span>
        </div>, 
        { duration: 5000, icon: '✅' }
      );
      
      console.log("🚀 Payload going to DB:", {
        specialty: bookingData.specialty,
        appointmentDate: bookingData.date,
        timeSlot: bookingData.time,
        reason: bookingData.reason
      });

      setIsBookingOpen(false);
      setBookingData({ specialty: "", doctor: "", date: null, time: "", reason: "" });
      // fetchTelehealthAppointments(); 

    } catch (error) {
      toast.error("Failed to book appointment. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const closeAllDropdowns = () => {
    setIsSpecialtyOpen(false);
    setIsDoctorOpen(false);
    setIsCalendarOpen(false);
    setIsTimeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-inter pb-24 relative selection:bg-[#0F766E] selection:text-white">
      
      {/* ── HEADER ── */}
      <div className="bg-[#021814] pt-28 pb-40 md:pt-36 md:pb-48 px-6 rounded-b-[2.5rem] md:rounded-b-[3.5rem] relative overflow-hidden z-0 shadow-2xl">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#0F766E] opacity-40 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#dfff4f] opacity-10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/60 hover:text-[#dfff4f] transition-all text-sm font-semibold mb-10 group">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(15,118,110,0.3)]">
                <Video className="text-[#dfff4f]" size={30} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black font-poppins text-white tracking-tight">Telehealth <span className="text-[#0F766E]">.</span></h1>
                <p className="text-[#a8cfc3] text-sm md:text-base mt-1 font-medium">Your Virtual Consultation Hub.</p>
              </div>
            </div>

            <button onClick={() => setIsBookingOpen(true)} className="bg-[#dfff4f] text-[#021814] px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(223,255,79,0.2)]">
              <Plus size={18} strokeWidth={3} /> Quick Book Consult
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - APPOINTMENTS */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white/80 backdrop-blur-2xl p-1.5 rounded-2xl shadow-sm border border-white flex w-full sm:w-max relative z-10">
              <button onClick={() => setActiveTab("upcoming")} className={`relative flex-1 sm:w-[150px] py-3 text-xs sm:text-sm font-bold rounded-xl transition-all z-10 ${activeTab === "upcoming" ? "text-white" : "text-gray-500 hover:text-gray-800"}`}>
                Waiting Room
              </button>
              <button onClick={() => setActiveTab("past")} className={`relative flex-1 sm:w-[150px] py-3 text-xs sm:text-sm font-bold rounded-xl transition-all z-10 ${activeTab === "past" ? "text-[#021814]" : "text-gray-500 hover:text-gray-800"}`}>
                Past Logs
              </button>
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] sm:w-[150px] rounded-xl transition-all duration-400 ease-out z-0 shadow-md ${activeTab === "upcoming" ? "translate-x-0 bg-[#0F766E]" : "translate-x-[calc(100%+6px)] sm:translate-x-[150px] bg-[#dfff4f]"}`}></div>
            </motion.div>

            {/* List Area */}
            <div className="min-h-[400px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-[300px] bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                  <Loader2 size={40} className="animate-spin text-[#0F766E] mb-4" />
                  <p className="text-gray-500 font-semibold text-sm">Securing channels...</p>
                </div>
              ) : hasError ? (
                <div className="flex flex-col items-center justify-center h-[300px] bg-white rounded-[2rem] border border-red-100 shadow-sm text-center px-6">
                  <ServerCrash size={32} className="text-red-500 mb-4" />
                  <h3 className="text-[#021814] font-bold text-xl font-poppins mb-1">Connection Lost</h3>
                  <p className="text-sm text-gray-500 max-w-sm mb-6">Servers are currently unreachable. Please check your network.</p>
                  <button onClick={() => window.location.reload()} className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-sm">Retry Connection</button>
                </div>
              ) : filteredAppointments.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[300px] bg-white rounded-[2rem] border border-gray-100 shadow-sm text-center px-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                    <Video size={32} className="text-gray-300" />
                  </div>
                  <h3 className="text-[#021814] font-bold text-xl font-poppins mb-1">Room Empty</h3>
                  <p className="text-sm text-gray-500 max-w-sm">No {activeTab} online consultations scheduled right now.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <AnimatePresence mode="popLayout">
                    {filteredAppointments.map((apt) => {
                       const dateObj = new Date(apt.date || apt.appointmentDate);
                       const formattedDate = !isNaN(dateObj.getTime()) 
                          ? dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "Unknown Date";

                       const isCancelled = apt.status === 'Cancelled';

                       if (activeTab === "upcoming") {
                         return (
                          <motion.div key={apt._id || apt.id} variants={itemVariants} initial="hidden" animate="visible" exit="exit" layout className="relative bg-gradient-to-br from-[#021814] to-[#082b26] rounded-[2rem] p-1 shadow-lg overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfff4f] opacity-5 blur-[50px] rounded-full pointer-events-none"></div>
                            <div className="bg-[#021814]/80 backdrop-blur-xl rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 border border-white/5">
                              <div className="flex items-center gap-5">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-[#dfff4f] rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl border border-white/20 relative z-10">👨‍⚕️</div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#dfff4f] bg-[#dfff4f]/10 px-2.5 py-1 rounded-md border border-[#dfff4f]/20">
                                      <span className="w-1.5 h-1.5 bg-[#dfff4f] rounded-full animate-ping"></span> Live Scheduled
                                    </span>
                                  </div>
                                  <h3 className="text-2xl font-bold font-poppins text-white tracking-tight">{apt.doctorName || apt.doctor}</h3>
                                  <p className="text-xs text-[#a8cfc3] font-medium mt-1 flex items-center gap-1.5"><Stethoscope size={14}/> {apt.department || apt.specialty}</p>
                                </div>
                              </div>

                              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-full md:w-auto">
                                <div className="flex justify-between md:justify-end gap-8 mb-4 text-white">
                                  <div>
                                    <p className="text-[10px] text-[#a8cfc3] uppercase font-bold tracking-wider mb-1">Date</p>
                                    <p className="text-sm font-bold flex items-center gap-1.5"><CalendarIcon size={14} className="text-[#0F766E]"/> {formattedDate}</p>
                                  </div>
                                  <div>
                                    <p className="text-[10px] text-[#a8cfc3] uppercase font-bold tracking-wider mb-1">Time</p>
                                    <p className="text-sm font-bold flex items-center gap-1.5"><Clock size={14} className="text-[#0F766E]"/> {apt.time || apt.timeSlot}</p>
                                  </div>
                                </div>
                                <button onClick={() => handleJoinCall(apt.doctorName || apt.doctor)} className="w-full bg-[#0F766E] hover:bg-[#dfff4f] hover:text-[#021814] text-white px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                  <Video size={18} /> Join Secure Room
                                </button>
                              </div>
                            </div>
                          </motion.div>
                         )
                       }

                       return (
                        <motion.div key={apt._id || apt.id} variants={itemVariants} initial="hidden" animate="visible" exit="exit" layout className={`transition-all duration-300 bg-white border border-gray-100 p-6 rounded-[2rem] hover:shadow-md hover:border-[#0F766E]/20 ${isCancelled ? 'opacity-70 grayscale-[30%]' : ''}`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-5">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${isCancelled ? 'bg-gray-100' : 'bg-[#E6F4F1]'}`}>👨‍⚕️</div>
                              <div>
                                <h3 className={`text-lg font-bold font-poppins leading-tight ${isCancelled ? 'text-gray-500 line-through' : 'text-[#021814]'}`}>{apt.doctorName || apt.doctor}</h3>
                                <p className="text-xs text-gray-500 font-medium mt-1 flex items-center gap-1.5"><Stethoscope size={14} className="text-[#0F766E]" /> {apt.department || apt.specialty}</p>
                              </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto bg-gray-50 sm:bg-transparent p-4 sm:p-0 rounded-2xl">
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-700 bg-white sm:bg-gray-50 px-3 py-1.5 rounded-lg border sm:border-gray-200">{formattedDate}</span>
                                <span className="text-xs font-bold text-[#0F766E]">{apt.time || apt.timeSlot}</span>
                              </div>
                              {isCancelled ? (
                                <span className="text-[10px] font-bold uppercase text-red-500 flex items-center gap-1"><XCircle size={14} /> Cancelled</span>
                              ) : (
                                <span className="text-[10px] font-bold uppercase text-emerald-600 flex items-center gap-1"><CheckCircle2 size={14} /> Completed</span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - SYSTEM CHECK */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F766E]/5 rounded-bl-full pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold font-poppins text-[#021814] flex items-center gap-2">
                      <ShieldCheck size={20} className="text-[#0F766E]" /> Diagnostics
                    </h3>
                    <button onClick={runSystemCheck} disabled={sysCheck.testing} className="text-[#0F766E] bg-gray-50 p-2 rounded-full hover:bg-[#E6F4F1] hover:scale-110 transition-all disabled:opacity-50 disabled:hover:scale-100">
                       <Play size={14} className={sysCheck.testing ? "" : "fill-current"} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Network Stability", icon: Wifi, state: sysCheck.net },
                      { label: "Microphone Access", icon: Mic, state: sysCheck.mic },
                      { label: "Camera Detection", icon: Camera, state: sysCheck.cam },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-[#021814] font-medium">
                          <div className={`p-2 rounded-xl ${item.state ? 'bg-green-100 text-green-600' : 'bg-white shadow-sm text-gray-400'}`}>
                            <item.icon size={16} />
                          </div> 
                          {item.label}
                        </div>
                        {sysCheck.testing && !item.state ? <Loader2 size={18} className="animate-spin text-[#0F766E]"/> : item.state ? <CheckCircle2 size={18} className="text-green-500" /> : <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
                      </div>
                    ))}
                  </div>

                  <div className={`mt-6 p-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-center transition-all ${sysCheck.testing ? "bg-[#021814] text-[#dfff4f] animate-pulse" : sysCheck.cam && sysCheck.mic && sysCheck.net ? "bg-[#E6F4F1] text-[#0F766E]" : "bg-gray-100 text-gray-500"}`}>
                    {sysCheck.testing ? "Analyzing Hardware..." : sysCheck.cam && sysCheck.mic && sysCheck.net ? "Systems Optimized" : "Click Play to Test"}
                  </div>
                </div>
              </motion.div>

              {/* Support Card */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-[#021814] p-6 md:p-8 rounded-[2.5rem] border border-white/5 shadow-lg text-white relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform"><Phone size={100} /></div>
                <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 border border-white/10 backdrop-blur-sm">
                  <Phone size={24} className="text-[#dfff4f]" />
                </div>
                <h4 className="font-bold text-xl mb-2 font-poppins relative z-10">Tech Support</h4>
                <p className="text-sm text-[#a8cfc3] leading-relaxed mb-6 font-medium relative z-10">Having audio or video trouble? Our 24/7 IT team is ready to assist.</p>
                <a href="tel:1800123456" className="inline-flex bg-[#dfff4f] text-[#021814] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors relative z-10">Call 1800-123-456</a>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* 🚀 QUICK BOOKING MODAL */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              variants={modalVariants} initial="hidden" animate="visible" exit="exit"
              className="bg-white w-full max-w-[450px] rounded-2xl shadow-xl relative z-10 overflow-visible border border-gray-200 flex flex-col max-h-[90vh]"
            >
              {/* Clean Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Quick Book Telehealth</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Schedule a video consultation</p>
                </div>
                <button onClick={() => setIsBookingOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleBookSubmit} className="space-y-5 pb-2">
                  
                  {/* 🚀 CUSTOM SPECIALTY DROPDOWN */}
                  <div className="space-y-1.5 relative">
                    <label className="text-sm font-medium leading-none text-gray-700">Specialty</label>
                    <button 
                      type="button" 
                      onClick={() => {
                        setIsSpecialtyOpen(!isSpecialtyOpen);
                        setIsDoctorOpen(false); setIsCalendarOpen(false); setIsTimeOpen(false);
                      }}
                      className={`flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm transition-all outline-none ${isSpecialtyOpen ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20' : 'border-gray-300 hover:bg-gray-50'}`}
                    >
                      <span className={bookingData.specialty ? "text-gray-900" : "text-gray-500"}>
                        {bookingData.specialty || "Select a specialty"}
                      </span>
                      <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isSpecialtyOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isSpecialtyOpen && (
                        <motion.div 
                          initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 5}} exit={{opacity: 0, y: -5}}
                          className="absolute top-[100%] left-0 w-full bg-white rounded-md border border-gray-200 shadow-lg z-50 overflow-hidden max-h-48 overflow-y-auto"
                        >
                          {specialtiesList.map(spec => (
                            <div 
                              key={spec} 
                              onClick={() => {setBookingData({...bookingData, specialty: spec}); setIsSpecialtyOpen(false);}}
                              className="px-3 py-2.5 text-sm text-gray-700 hover:bg-[#E6F4F1] hover:text-[#0F766E] cursor-pointer transition-colors"
                            >
                              {spec}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 🚀 CUSTOM DOCTOR DROPDOWN */}
                  <div className="space-y-1.5 relative">
                    <label className="text-sm font-medium leading-none text-gray-700">Doctor</label>
                    <button 
                      type="button" 
                      onClick={() => {
                        setIsDoctorOpen(!isDoctorOpen);
                        setIsSpecialtyOpen(false); setIsCalendarOpen(false); setIsTimeOpen(false);
                      }}
                      className={`flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm transition-all outline-none ${isDoctorOpen ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20' : 'border-gray-300 hover:bg-gray-50'}`}
                    >
                      <span className={bookingData.doctor ? "text-gray-900" : "text-gray-500"}>
                        {bookingData.doctor || "Select a doctor"}
                      </span>
                      <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isDoctorOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDoctorOpen && (
                        <motion.div 
                          initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 5}} exit={{opacity: 0, y: -5}}
                          className="absolute top-[100%] left-0 w-full bg-white rounded-md border border-gray-200 shadow-lg z-50 overflow-hidden max-h-48 overflow-y-auto"
                        >
                          {doctorsList.map(doc => (
                            <div 
                              key={doc} 
                              onClick={() => {setBookingData({...bookingData, doctor: doc}); setIsDoctorOpen(false);}}
                              className="px-3 py-2.5 text-sm text-gray-700 hover:bg-[#E6F4F1] hover:text-[#0F766E] cursor-pointer transition-colors"
                            >
                              {doc}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* CUSTOM DATE PICKER */}
                    <div className="space-y-1.5 relative">
                      <label className="text-sm font-medium leading-none text-gray-700">Date</label>
                      <button
                        type="button"
                        onClick={() => {setIsCalendarOpen(!isCalendarOpen); setIsSpecialtyOpen(false); setIsTimeOpen(false);}}
                        className={`flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm transition-all outline-none ${isCalendarOpen ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20' : 'border-gray-300 hover:bg-gray-50'}`}
                      >
                        <span className={`flex items-center gap-2 ${!bookingData.date ? 'text-gray-500' : 'text-gray-900'}`}>
                          <CalendarIcon size={16} className="text-gray-500"/> 
                          {bookingData.date ? format(bookingData.date, "PP") : "Pick a date"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isCalendarOpen && (
                          <motion.div 
                            initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 5}} exit={{opacity: 0, y: -5}}
                            className="absolute top-[100%] left-0 bg-white rounded-md border border-gray-200 shadow-md z-50 p-3"
                          >
                            <DayPicker
                              mode="single"
                              selected={bookingData.date}
                              onSelect={(date) => { 
                                if(date) { 
                                  setBookingData({...bookingData, date}); 
                                  setIsCalendarOpen(false); 
                                } 
                              }}
                              disabled={{ before: new Date() }}
                              className="font-inter text-sm"
                              modifiersClassNames={{
                                selected: "bg-[#021814] text-white hover:bg-[#021814] hover:text-white rounded-md font-bold",
                                today: "text-[#0F766E] font-bold"
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CUSTOM TIME DROPDOWN */}
                    <div className="space-y-1.5 relative">
                      <label className="text-sm font-medium leading-none text-gray-700">Time</label>
                      <button 
                        type="button" 
                        onClick={() => {
                          setIsTimeOpen(!isTimeOpen); 
                          setIsSpecialtyOpen(false); setIsDoctorOpen(false); setIsCalendarOpen(false);
                        }}
                        className={`flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm transition-all outline-none ${isTimeOpen ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20' : 'border-gray-300 hover:bg-gray-50'}`}
                      >
                        <span className={bookingData.time ? "text-gray-900 flex items-center gap-2" : "text-gray-500 flex items-center gap-2"}>
                           <Clock size={16} className="text-gray-500"/>
                          {bookingData.time || "Select time"}
                        </span>
                        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isTimeOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isTimeOpen && (
                          <motion.div 
                            initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 5}} exit={{opacity: 0, y: -5}}
                            className="absolute bottom-[100%] left-0 mb-2 w-full bg-white rounded-md border border-gray-200 shadow-lg z-50 overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-1 p-2 max-h-48 overflow-y-auto custom-scrollbar">
                              {timeSlotsList.map(time => (
                                <div 
                                  key={time} 
                                  onClick={() => {setBookingData({...bookingData, time}); setIsTimeOpen(false);}}
                                  className={`px-2 py-2 text-xs text-center rounded-md cursor-pointer transition-colors ${bookingData.time === time ? 'bg-[#0F766E] text-white font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                  {time}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700">Brief Reason</label>
                    <textarea 
                      required placeholder="e.g. Follow-up for fever..." rows="3"
                      value={bookingData.reason} onChange={(e) => setBookingData({...bookingData, reason: e.target.value})}
                      className="flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E]/20 transition-all resize-none"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* Footer / Buttons */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl shrink-0">
                <button 
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-200 text-gray-700 h-10 px-4 py-2"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleBookSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:opacity-50 bg-[#0F766E] text-white hover:bg-[#021814] h-10 px-4 py-2 gap-2 shadow-sm"
                >
                  {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Confirm Appointment"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Telehealth;