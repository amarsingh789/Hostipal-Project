import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Calendar,
  Clock,
  FileText,
  Phone,
  Activity,
  ShieldCheck,
  HeartPulse,
  Droplet,
  ChevronRight,
  Video,
  MapPin,
  BellRing,
  XCircle,
  Edit3,
  CheckCircle2,
  Eye,
  Menu,
} from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Shadcn Imports
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

// Custom Modals
import UpdateVitalsModal from "./UpdateVitalsModal";
import RescheduleModal from "./RescheduleModal";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import api from "../../utils/axiosInstance.js";
import axios from "axios";
import { loginSuccess } from "@/Redux/Features/authentication/authSlice";

const PatientDashboard = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  // 🚀 STATE
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  // Modals State
  const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedApt, setSelectedApt] = useState(null);

  // const [vitalsData, setVitalsData] = useState({
  //   heartRate: null,
  //   bpSys: null,
  //   bpDia: null,
  //   weight: user?.userWeight || null,
  //   score: null
  // });

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

  // 🚀 FETCH DATA
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
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(loginSuccess({
        user: res.data.user,
        token: token
      }))
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

  // Helper arrays
  const upcomingApts = appointments.filter(
    (a) => a.status !== "Cancelled" && a.status !== "Completed",
  );
  const pastApts = appointments.filter(
    (a) => a.status === "Cancelled" || a.status === "Completed",
  );
  const displayApts = activeTab === "upcoming" ? upcomingApts : pastApts;

  const MOCK_TEAM = [
    { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️" },
    { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️" },
    { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️" },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F6F9F8] font-inter pb-20">
      {/* ── HEADER & HERO ── */}
      <div className="bg-[#021814] pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0F766E] rounded-full blur-[100px] md:blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#dfff4f] rounded-full blur-[100px] md:blur-[150px] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-12">
            <div className="w-full md:w-auto text-center md:text-left">
              <p className="text-[#dfff4f] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 flex items-center justify-center md:justify-start gap-2">
                <Calendar size={14} /> {today}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
                Hello, {user?.name ? user.name.split(" ")[0] : "User"}
              </h1>
              <p className="text-[#a8cfc3] text-sm md:text-base">
                Here is your daily health and schedule overview.
              </p>
            </div>

            <div className="flex w-full md:w-auto justify-center gap-3 md:gap-4 mt-4 md:mt-0">
              <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all relative shrink-0">
                <BellRing size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-[#dfff4f] rounded-full"></span>
              </button>
              <Link
                to="/appointment"
                className="w-full md:w-auto justify-center bg-[#dfff4f] hover:bg-white text-[#021814] font-bold font-poppins px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(223,255,79,0.2)] flex items-center gap-2 hover:-translate-y-1"
              >
                Book Visit <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Score Card */}
            <div className="lg:col-span-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-row lg:flex-col justify-between items-center lg:items-stretch">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:mb-4 gap-1">
                <span className="text-[#a8cfc3] font-medium text-sm">
                  Health Score
                </span>
                <button
                  onClick={() => setIsVitalsModalOpen(true)}
                  className="text-[#dfff4f] hover:text-white text-xs font-bold uppercase tracking-wider w-max"
                >
                  {vitalsData.score ? "Update" : "Add Vitals"}
                </button>
              </div>
              <div className="flex items-end gap-1">
                {vitalsData.score ? (
                  <>
                    <span className="text-4xl md:text-5xl font-poppins font-bold text-white leading-none">
                      {vitalsData.score}
                    </span>
                    <span className="text-[#a8cfc3] text-xs md:text-sm mb-1 hidden sm:inline">
                      / 100
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-poppins font-bold text-white leading-tight">
                    No Data
                    <br />
                    <span className="text-sm font-normal text-[#a8cfc3]">
                      Click Add Vitals
                    </span>
                  </span>
                )}
              </div>
            </div>

            {/* Minor Stats */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <p className="text-[#a8cfc3] text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    Heart Rate
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white font-poppins">
                    {vitalsData.heartRate ? (
                      <>
                        {vitalsData.heartRate}{" "}
                        <span className="text-xs md:text-sm font-normal text-gray-400">
                          bpm
                        </span>
                      </>
                    ) : (
                      "--"
                    )}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                  <Droplet size={20} />
                </div>
                <div>
                  <p className="text-[#a8cfc3] text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    Blood Pres.
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white font-poppins">
                    {vitalsData.bpSys && vitalsData.bpDia
                      ? `${vitalsData.bpSys}/${vitalsData.bpDia}`
                      : "--/--"}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-[#a8cfc3] text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    Weight
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white font-poppins">
                    {vitalsData.weight ? (
                      <>
                        {vitalsData.weight}{" "}
                        <span className="text-xs md:text-sm font-normal text-gray-400">
                          kg
                        </span>
                      </>
                    ) : (
                      "--"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-6 md:-mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT COL: APPOINTMENTS */}
          <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold font-poppins text-[#021814]">
                My Appointments
              </h2>
              <div className="flex p-1 bg-gray-100 rounded-xl w-full sm:w-max overflow-hidden">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${activeTab === "upcoming" ? "bg-white text-[#0F766E] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab("past")}
                  className={`flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${activeTab === "past" ? "bg-white text-[#0F766E] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Past
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-12 text-center text-gray-400 text-sm">
                Loading your schedule...
              </div>
            ) : displayApts.length === 0 ? (
              <div className="py-12 md:py-16 text-center border-2 border-dashed border-gray-100 rounded-2xl">
                <Calendar size={32} className="mx-auto text-gray-300 mb-3" />
                <h3 className="text-gray-800 font-bold mb-1 text-sm md:text-base">
                  No {activeTab} appointments
                </h3>
              </div>
            ) : (
              <div className="space-y-4">
                {displayApts.map((apt) => {
                  const isCancelled = apt.status === "Cancelled";
                  const date = new Date(apt.appointmentDate).toLocaleDateString(
                    "en-US",
                    { day: "numeric", month: "short", year: "numeric" },
                  );

                  return (
                    <div
                      key={apt._id}
                      className={`p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all ${isCancelled ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200 hover:border-[#0F766E]/30 hover:shadow-md"}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div
                            className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center text-lg md:text-xl ${isCancelled ? "bg-gray-200 grayscale" : "bg-[#E6F4F1]"}`}
                          >
                            👩‍⚕️
                          </div>
                          <div>
                            <h3
                              className={`font-bold font-poppins text-base md:text-lg leading-tight ${isCancelled ? "text-gray-500 line-through" : "text-[#021814]"}`}
                            >
                              {apt.doctorName}
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm capitalize mt-0.5">
                              {apt.department} • Ziva Clinic
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex sm:flex-col items-center sm:items-end justify-between sm:justify-center mt-2 sm:mt-0 ${isCancelled ? "opacity-50" : ""}`}
                        >
                          <p className="font-semibold text-[#0F766E] bg-[#E6F4F1] px-2.5 py-1 rounded-md text-xs md:text-sm mb-0 sm:mb-1">
                            {date}
                          </p>
                          <p className="text-gray-500 text-xs md:text-sm font-medium flex items-center gap-1">
                            <Clock size={12} /> {apt.timeSlot}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 md:pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                        {isCancelled ? (
                          <Badge
                            variant="destructive"
                            className="bg-red-50 text-red-600 hover:bg-red-50 border-none font-bold shadow-none gap-1 text-[10px] md:text-xs"
                          >
                            <XCircle size={12} /> Cancelled
                          </Badge>
                        ) : (
                          <Badge className="bg-[#E6F4F1] text-[#0F766E] hover:bg-[#E6F4F1] border-none font-bold shadow-none gap-1 text-[10px] md:text-xs">
                            <CheckCircle2 size={12} /> {apt.status}
                          </Badge>
                        )}

                        <div className="flex flex-wrap gap-1 md:gap-2">
                          <button
                            onClick={() => openDetails(apt)}
                            className="text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                          >
                            <Eye size={14} /> View
                          </button>

                          {!isCancelled && activeTab === "upcoming" && (
                            <>
                              <button
                                onClick={() => openReschedule(apt)}
                                className="text-[10px] md:text-xs font-semibold text-blue-600 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                              >
                                <Edit3 size={14} /> Reschedule
                              </button>

                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <button className="text-[10px] md:text-xs font-semibold text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                    <XCircle size={14} /> Cancel
                                  </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="rounded-2xl md:rounded-[2rem] w-[90vw] md:w-auto max-w-md">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="font-poppins text-lg md:text-xl text-[#021814]">
                                      Cancel Appointment?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription className="font-inter text-sm">
                                      This will permanently cancel your
                                      appointment with{" "}
                                      <strong>{apt.doctorName}</strong>.
                                      <br />
                                      Note: Cancellations are not allowed within
                                      24 hours.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter className="mt-4">
                                    <AlertDialogCancel className="rounded-xl">
                                      Keep it
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() =>
                                        handleCancelAppointment(apt._id)
                                      }
                                      className="bg-red-500 hover:bg-red-600 rounded-xl"
                                    >
                                      Yes, Cancel
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT COL: QUICK LINKS & DOCTORS */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8">
              <h3 className="font-bold font-poppins text-[#021814] mb-4 text-sm md:text-base">
                Quick Links
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 md:gap-3">
                {[
                  {
                    icon: FileText,
                    label: "Records",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Droplet,
                    label: "Results",
                    color: "text-red-500",
                    bg: "bg-red-50",
                  },
                  {
                    icon: Video,
                    label: "Telehealth",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Insurance",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1.5 md:gap-2 hover:shadow-md transition-all ${item.bg} group`}
                  >
                    <item.icon
                      size={18}
                      className={`${item.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Doctors Swiper */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-5 md:p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold font-poppins text-[#021814] text-sm md:text-base">
                  Top Doctors
                </h3>
                <Link
                  to="/doctor"
                  className="text-[#0F766E] text-[10px] md:text-xs font-bold hover:underline"
                >
                  View All
                </Link>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full"
              >
                {MOCK_TEAM.map((doc) => (
                  <SwiperSlide key={doc.id}>
                    <div className="p-3 md:p-4 border border-gray-100 rounded-xl md:rounded-2xl hover:border-[#0F766E]/30 transition-colors">
                      <div className="flex items-center gap-3 md:gap-4 mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E6F4F1] rounded-full flex items-center justify-center text-lg md:text-xl shrink-0">
                          {doc.img}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#021814] text-xs md:text-sm font-poppins leading-tight">
                            {doc.name}
                          </h4>
                          <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                            {doc.specialty}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 MODALS 🚀 */}
      <UpdateVitalsModal
        isOpen={isVitalsModalOpen}
        onClose={() => setIsVitalsModalOpen(false)}
        onSave={handleSaveVitals}
      />

      {selectedApt && (
        <>
          <RescheduleModal
            isOpen={isRescheduleOpen}
            onClose={() => setIsRescheduleOpen(false)}
            appointment={selectedApt}
            onSuccess={fetchAppointments}
          />
          <AppointmentDetailsModal
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            appointment={selectedApt}
          />
        </>
      )}
    </div>
  );
};

export default PatientDashboard;
