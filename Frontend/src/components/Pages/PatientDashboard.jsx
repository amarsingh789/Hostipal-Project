// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { 
//   Calendar, Clock, FileText, Phone, Activity, 
//   ShieldCheck, HeartPulse, Droplet, ChevronRight, Video, 
//   MapPin, BellRing, XCircle, Edit3, CheckCircle2, User
// } from 'lucide-react';
// import UpdateVitalsModal from './UpdateVitalsModal';

// // Swiper Imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';

// const PatientDashboard = () => {
//   const { user } = useSelector((state) => state.auth);

//   // 🚀 STATE
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

//   const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
//   const [vitalsData, setVitalsData] = useState({
//     heartRate: 72,
//     bpSys: 120,
//     bpDia: 80,
//     weight: 68,
//     score: 85
//   });

//   // 🚀 FETCH DATA
//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("ziva_token");
//       const res = await axios.get("http://localhost:5000/zivacare/getAppointments", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setAppointments(res.data.appointments);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//       toast.error("Failed to load appointments");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🚀 CANCEL APPOINTMENT
//   const handleCancelAppointment = async (id) => {
//     if (!window.confirm("Are you sure you want to cancel? This cannot be undone within 24hrs.")) return;
    
//     try {
//       const token = localStorage.getItem("ziva_token");
//       await axios.put(`http://localhost:5000/zivacare/cancel/${id}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       toast.success("Appointment cancelled");
//       fetchAppointments(); 
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to cancel");
//     }
//   };

//   const handleSaveVitals = (newVitals) => {
//     setVitalsData({
//       heartRate: newVitals.heartRate,
//       bpSys: newVitals.bpSys,
//       bpDia: newVitals.bpDia,
//       weight: newVitals.weight,
//       score: Math.floor(Math.random() * (98 - 75 + 1) + 75) 
//     });
//   };

//   // Helper arrays
//   const upcomingApts = appointments.filter(a => a.status !== 'Cancelled' && a.status !== 'Completed');
//   const pastApts = appointments.filter(a => a.status === 'Cancelled' || a.status === 'Completed');
//   const displayApts = activeTab === 'upcoming' ? upcomingApts : pastApts;

//   const MOCK_TEAM = [
//     { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️", rating: 4.9 },
//     { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️", rating: 4.8 },
//     { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️", rating: 5.0 },
//     { id: "d4", name: "Dr. Arjun Singh", specialty: "Dermatology", img: "👨‍⚕️", rating: 4.7 },
//   ];

//   const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

//   return (
//     <div className="min-h-screen bg-[#F6F9F8] font-inter pb-20">
      
//       {/* ── HEADER & HERO (Health Vitals Area) ── */}
//       <div className="bg-[#021814] pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden rounded-b-[3rem]">
//         {/* Abstract Background */}
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0F766E] rounded-full blur-[150px] opacity-40"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#dfff4f] rounded-full blur-[150px] opacity-10"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
          
//           {/* Top Nav Row */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
//             <div>
//               <p className="text-[#dfff4f] text-sm font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
//                 <Calendar size={14}/> {today}
//               </p>
//               <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
//                 Hello, {user?.name ? user.name.split(" ")[0] : 'User'}
//               </h1>
//               <p className="text-[#a8cfc3] text-sm md:text-base">Here is your daily health and schedule overview.</p>
//             </div>
//             <div className="flex gap-4">
//               <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all relative">
//                 <BellRing size={20} />
//                 <span className="absolute top-3 right-3 w-2 h-2 bg-[#dfff4f] rounded-full"></span>
//               </button>
//               <Link to="/appointment" className="bg-[#dfff4f] hover:bg-white text-[#021814] font-bold font-poppins px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(223,255,79,0.2)] flex items-center gap-2 hover:-translate-y-1">
//                 Book Visit <ChevronRight size={18} />
//               </Link>
//             </div>
//           </div>

//           {/* Vitals Horizontal Row */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Main Score Card */}
//             <div className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-[#a8cfc3] font-medium text-sm">Health Score</span>
//                 <button onClick={() => setIsVitalsModalOpen(true)} className="text-[#dfff4f] hover:text-white text-xs font-bold uppercase tracking-wider">Update</button>
//               </div>
//               <div className="flex items-end gap-2">
//                 <span className="text-5xl font-poppins font-bold text-white">{vitalsData.score}</span>
//                 <span className="text-[#a8cfc3] text-sm mb-1">/ 100</span>
//               </div>
//             </div>

//             {/* Vitals Cards */}
//             <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center">
//                   <HeartPulse size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Heart Rate</p>
//                   <p className="text-2xl font-bold text-white font-poppins">{vitalsData.heartRate} <span className="text-sm font-normal text-gray-400">bpm</span></p>
//                 </div>
//               </div>

//               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
//                   <Droplet size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Blood Pres.</p>
//                   <p className="text-2xl font-bold text-white font-poppins">{vitalsData.bpSys}/{vitalsData.bpDia}</p>
//                 </div>
//               </div>

//               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center">
//                   <Activity size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Weight</p>
//                   <p className="text-2xl font-bold text-white font-poppins">{vitalsData.weight} <span className="text-sm font-normal text-gray-400">kg</span></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ── MAIN CONTENT (Appointments & Quick Links) ── */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-8 relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* APPOINTMENTS LIST (Left 2 columns) */}
//           <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8">
            
//             {/* Tabs */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
//               <h2 className="text-2xl font-bold font-poppins text-[#021814]">My Appointments</h2>
//               <div className="flex p-1 bg-gray-100 rounded-xl w-max">
//                 <button 
//                   onClick={() => setActiveTab('upcoming')}
//                   className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'upcoming' ? 'bg-white text-[#0F766E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   Upcoming
//                 </button>
//                 <button 
//                   onClick={() => setActiveTab('past')}
//                   className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'past' ? 'bg-white text-[#0F766E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   Past & Cancelled
//                 </button>
//               </div>
//             </div>

//             {/* List */}
//             {loading ? (
//               <div className="py-12 text-center text-gray-400">Loading your schedule...</div>
//             ) : displayApts.length === 0 ? (
//               <div className="py-16 text-center border-2 border-dashed border-gray-100 rounded-2xl">
//                 <Calendar size={40} className="mx-auto text-gray-300 mb-4" />
//                 <h3 className="text-gray-800 font-bold mb-1">No {activeTab} appointments</h3>
//                 <p className="text-gray-400 text-sm">You have a clear schedule right now.</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {displayApts.map((apt) => {
//                   const isCancelled = apt.status === 'Cancelled';
//                   const date = new Date(apt.appointmentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

//                   return (
//                     <div key={apt._id} className={`p-5 rounded-2xl border transition-all ${isCancelled ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 hover:border-[#0F766E]/30 hover:shadow-md'}`}>
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        
//                         {/* Info */}
//                         <div className="flex items-center gap-4">
//                           <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${isCancelled ? 'bg-gray-200 grayscale' : 'bg-[#E6F4F1]'}`}>
//                             👩‍⚕️
//                           </div>
//                           <div>
//                             <h3 className={`font-bold font-poppins text-lg ${isCancelled ? 'text-gray-500 line-through' : 'text-[#021814]'}`}>
//                               {apt.doctorName}
//                             </h3>
//                             <p className="text-gray-500 text-sm capitalize">{apt.department} • Ziva Clinic</p>
//                           </div>
//                         </div>

//                         {/* Date & Time */}
//                         <div className={`flex flex-col sm:items-end ${isCancelled ? 'opacity-50' : ''}`}>
//                           <p className="font-semibold text-[#0F766E] bg-[#E6F4F1] px-3 py-1 rounded-md text-sm w-max mb-1">
//                             {date}
//                           </p>
//                           <p className="text-gray-500 text-sm font-medium flex items-center gap-1">
//                             <Clock size={14}/> {apt.timeSlot}
//                           </p>
//                         </div>

//                       </div>

//                       {/* Actions Row */}
//                       <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
//                         {isCancelled ? (
//                           <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full flex items-center gap-1">
//                             <XCircle size={14} /> Cancelled
//                           </span>
//                         ) : (
//                           <span className="text-xs font-bold text-[#0F766E] bg-[#E6F4F1] px-3 py-1 rounded-full flex items-center gap-1">
//                             <CheckCircle2 size={14} /> {apt.status}
//                           </span>
//                         )}

//                         {!isCancelled && activeTab === 'upcoming' && (
//                           <div className="flex gap-2">
//                             <button onClick={() => toast.info("Reschedule flow here")} className="text-xs font-semibold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
//                               Reschedule
//                             </button>
//                             <button onClick={() => handleCancelAppointment(apt._id)} className="text-xs font-semibold text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
//                               Cancel
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}

//           </div>

//           {/* RIGHT COL: QUICK LINKS & DOCTORS (Col span 1) */}
//           <div className="flex flex-col gap-8">
            
//             {/* Quick Actions */}
//             <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8">
//               <h3 className="font-bold font-poppins text-[#021814] mb-4">Quick Links</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   { icon: FileText, label: "Records", color: "text-blue-600", bg: "bg-blue-50" },
//                   { icon: Droplet, label: "Results", color: "text-red-500", bg: "bg-red-50" },
//                   { icon: Video, label: "Telehealth", color: "text-purple-600", bg: "bg-purple-50" },
//                   { icon: ShieldCheck, label: "Insurance", color: "text-emerald-600", bg: "bg-emerald-50" }
//                 ].map((item, idx) => (
//                   <button key={idx} className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all ${item.bg} group`}>
//                     <item.icon size={20} className={`${item.color} group-hover:scale-110 transition-transform`} />
//                     <span className="text-xs font-semibold text-gray-700">{item.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Doctors Swiper */}
//             <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold font-poppins text-[#021814]">Top Doctors</h3>
//                 <Link to="/team" className="text-[#0F766E] text-xs font-bold hover:underline">View All</Link>
//               </div>
              
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={16}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 modules={[Autoplay]}
//                 className="w-full"
//               >
//                 {MOCK_TEAM.map((doc) => (
//                   <SwiperSlide key={doc.id}>
//                     <div className="p-4 border border-gray-100 rounded-2xl hover:border-[#0F766E]/30 transition-colors">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="w-12 h-12 bg-[#E6F4F1] rounded-full flex items-center justify-center text-xl">{doc.img}</div>
//                         <div>
//                           <h4 className="font-bold text-[#021814] text-sm font-poppins">{doc.name}</h4>
//                           <p className="text-xs text-gray-500">{doc.specialty}</p>
//                         </div>
//                       </div>
//                       <Link to="/appointment" className="block w-full text-center py-2 bg-gray-50 text-[#0F766E] text-xs font-bold rounded-lg hover:bg-[#0F766E] hover:text-white transition-colors">
//                         Book Consult
//                       </Link>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//           </div>

//         </div>
//       </div>

//       <UpdateVitalsModal 
//         isOpen={isVitalsModalOpen} 
//         onClose={() => setIsVitalsModalOpen(false)} 
//         onSave={handleSaveVitals} 
//       />

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
//       `}</style>
//     </div>
//   );
// };

// export default PatientDashboard;



import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  Calendar, Clock, FileText, Phone, Activity, 
  ShieldCheck, HeartPulse, Droplet, ChevronRight, Video, 
  MapPin, BellRing, XCircle, Edit3, CheckCircle2, Eye
} from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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

// Custom Modals (Hum inko next step me banayenge)
import UpdateVitalsModal from './UpdateVitalsModal';
import RescheduleModal from './RescheduleModal';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import api from '../../utils/axiosInstance.js';

const PatientDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // 🚀 STATE
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

  // Modals State
  const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedApt, setSelectedApt] = useState(null); // Jis appointment par click kiya gaya

  const [vitalsData, setVitalsData] = useState({
    heartRate: 72, bpSys: 120, bpDia: 80, weight: 68, score: 85
  });

  // 🚀 FETCH DATA
  useEffect(() => {
    fetchAppointments();
  }, []);

  // const fetchAppointments = async () => {
  //   try {
  //     const token = localStorage.getItem("ziva_token");
  //     const res = await axios.get("http://localhost:5000/zivacare/getAppointments", {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     setAppointments(res.data.appointments);
  //   } catch (error) {
  //     console.error("Error fetching appointments:", error);
  //     toast.error("Failed to load appointments");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      const res = await api.get('/zivacare/getAppointments')
      setAppointments(res.data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  // 🚀 CANCEL APPOINTMENT (Now using Shadcn Alert Dialog)
  const handleCancelAppointment = async (id) => {
    try {
      const token = localStorage.getItem("ziva_token");
      await axios.put(`http://localhost:5000/zivacare/cancel/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Appointment cancelled successfully");
      fetchAppointments(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel");
    }
  };

  const handleSaveVitals = (newVitals) => {
    setVitalsData({
      ...newVitals,
      score: Math.floor(Math.random() * (98 - 75 + 1) + 75) 
    });
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
  const upcomingApts = appointments.filter(a => a.status !== 'Cancelled' && a.status !== 'Completed');
  const pastApts = appointments.filter(a => a.status === 'Cancelled' || a.status === 'Completed');
  const displayApts = activeTab === 'upcoming' ? upcomingApts : pastApts;

  const MOCK_TEAM = [
    { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️" },
    { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️" },
    { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️" },
  ];

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-[#F6F9F8] font-inter pb-20">
      
      {/* ── HEADER & HERO (Health Vitals Area) ── */}
      <div className="bg-[#021814] pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0F766E] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#dfff4f] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <p className="text-[#dfff4f] text-sm font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
                <Calendar size={14}/> {today}
              </p>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
                Hello, {user?.name ? user.name.split(" ")[0] : 'User'}
              </h1>
              <p className="text-[#a8cfc3] text-sm md:text-base">Here is your daily health and schedule overview.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all relative">
                <BellRing size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-[#dfff4f] rounded-full"></span>
              </button>
              <Link to="/appointment" className="bg-[#dfff4f] hover:bg-white text-[#021814] font-bold font-poppins px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(223,255,79,0.2)] flex items-center gap-2 hover:-translate-y-1">
                Book Visit <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#a8cfc3] font-medium text-sm">Health Score</span>
                <button onClick={() => setIsVitalsModalOpen(true)} className="text-[#dfff4f] hover:text-white text-xs font-bold uppercase tracking-wider">Update</button>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-poppins font-bold text-white">{vitalsData.score}</span>
                <span className="text-[#a8cfc3] text-sm mb-1">/ 100</span>
              </div>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center"><HeartPulse size={24} /></div>
                <div>
                  <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Heart Rate</p>
                  <p className="text-2xl font-bold text-white font-poppins">{vitalsData.heartRate} <span className="text-sm font-normal text-gray-400">bpm</span></p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center"><Droplet size={24} /></div>
                <div>
                  <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Blood Pres.</p>
                  <p className="text-2xl font-bold text-white font-poppins">{vitalsData.bpSys}/{vitalsData.bpDia}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center"><Activity size={24} /></div>
                <div>
                  <p className="text-[#a8cfc3] text-xs font-semibold uppercase tracking-wider">Weight</p>
                  <p className="text-2xl font-bold text-white font-poppins">{vitalsData.weight} <span className="text-sm font-normal text-gray-400">kg</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (Appointments & Quick Links) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* APPOINTMENTS LIST */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold font-poppins text-[#021814]">My Appointments</h2>
              <div className="flex p-1 bg-gray-100 rounded-xl w-max">
                <button onClick={() => setActiveTab('upcoming')} className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'upcoming' ? 'bg-white text-[#0F766E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Upcoming
                </button>
                <button onClick={() => setActiveTab('past')} className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'past' ? 'bg-white text-[#0F766E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Past & Cancelled
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-12 text-center text-gray-400">Loading your schedule...</div>
            ) : displayApts.length === 0 ? (
              <div className="py-16 text-center border-2 border-dashed border-gray-100 rounded-2xl">
                <Calendar size={40} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-gray-800 font-bold mb-1">No {activeTab} appointments</h3>
              </div>
            ) : (
              <div className="space-y-4">
                {displayApts.map((apt) => {
                  const isCancelled = apt.status === 'Cancelled';
                  const date = new Date(apt.appointmentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

                  return (
                    <div key={apt._id} className={`p-5 rounded-2xl border transition-all ${isCancelled ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 hover:border-[#0F766E]/30 hover:shadow-md'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isCancelled ? 'bg-gray-200 grayscale' : 'bg-[#E6F4F1]'}`}>
                            👩‍⚕️
                          </div>
                          <div>
                            <h3 className={`font-bold font-poppins text-lg ${isCancelled ? 'text-gray-500 line-through' : 'text-[#021814]'}`}>
                              {apt.doctorName}
                            </h3>
                            <p className="text-gray-500 text-sm capitalize">{apt.department} • Ziva Clinic</p>
                          </div>
                        </div>

                        <div className={`flex flex-col sm:items-end ${isCancelled ? 'opacity-50' : ''}`}>
                          <p className="font-semibold text-[#0F766E] bg-[#E6F4F1] px-3 py-1 rounded-md text-sm w-max mb-1">{date}</p>
                          <p className="text-gray-500 text-sm font-medium flex items-center gap-1"><Clock size={14}/> {apt.timeSlot}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        {/* Status Badge */}
                        {isCancelled ? (
                          <Badge variant="destructive" className="bg-red-50 text-red-600 hover:bg-red-50 border-none font-bold shadow-none gap-1">
                            <XCircle size={12}/> Cancelled
                          </Badge>
                        ) : (
                          <Badge className="bg-[#E6F4F1] text-[#0F766E] hover:bg-[#E6F4F1] border-none font-bold shadow-none gap-1">
                            <CheckCircle2 size={12}/> {apt.status}
                          </Badge>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button onClick={() => openDetails(apt)} className="text-xs font-semibold text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            <Eye size={14}/> View
                          </button>

                          {!isCancelled && activeTab === 'upcoming' && (
                            <>
                              <button onClick={() => openReschedule(apt)} className="text-xs font-semibold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                <Edit3 size={14}/> Reschedule
                              </button>

                              {/* SHADCN ALERT DIALOG FOR CANCEL */}
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <button className="text-xs font-semibold text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                    <XCircle size={14}/> Cancel
                                  </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="rounded-[2rem]">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="font-poppins text-xl text-[#021814]">Cancel Appointment?</AlertDialogTitle>
                                    <AlertDialogDescription className="font-inter">
                                      This will permanently cancel your appointment with <strong>{apt.doctorName}</strong>. 
                                      <br/>Note: Cancellations are not allowed within 24 hours of the scheduled time.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel className="rounded-xl">Keep it</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleCancelAppointment(apt._id)} className="bg-red-500 hover:bg-red-600 rounded-xl">
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
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="font-bold font-poppins text-[#021814] mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: "Records", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Droplet, label: "Results", color: "text-red-500", bg: "bg-red-50" },
                  { icon: Video, label: "Telehealth", color: "text-purple-600", bg: "bg-purple-50" },
                  { icon: ShieldCheck, label: "Insurance", color: "text-emerald-600", bg: "bg-emerald-50" }
                ].map((item, idx) => (
                  <button key={idx} className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all ${item.bg} group`}>
                    <item.icon size={20} className={`${item.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold font-poppins text-[#021814]">Top Doctors</h3>
                <Link to="/team" className="text-[#0F766E] text-xs font-bold hover:underline">View All</Link>
              </div>
              <Swiper slidesPerView={1} spaceBetween={16} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} className="w-full">
                {MOCK_TEAM.map((doc) => (
                  <SwiperSlide key={doc.id}>
                    <div className="p-4 border border-gray-100 rounded-2xl hover:border-[#0F766E]/30 transition-colors">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-[#E6F4F1] rounded-full flex items-center justify-center text-xl">{doc.img}</div>
                        <div>
                          <h4 className="font-bold text-[#021814] text-sm font-poppins">{doc.name}</h4>
                          <p className="text-xs text-gray-500">{doc.specialty}</p>
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
      <UpdateVitalsModal isOpen={isVitalsModalOpen} onClose={() => setIsVitalsModalOpen(false)} onSave={handleSaveVitals} />
      
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

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default PatientDashboard;