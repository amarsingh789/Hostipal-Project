// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, User, FileText, Phone, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
// // import TeamPage from './TeamPage'; // Agar aap chahein toh seedha apna TeamPage yahan import kar sakte hain

// const PatientDashboard = () => {
//   // Redux se logged-in user ka data nikal rahe hain
//   const { user } = useSelector((state) => state.auth);

//   // Yeh abhi ke liye Mock Data hai. Aage chalkar aap isko backend API se fetch karenge
//   const upcomingAppointment = {
//     hasAppointment: true, // Isko false karke dekhiye, UI automatically change ho jayega
//     doctorName: "Dr. Priya Verma",
//     specialty: "Neurology",
//     date: "15 April, 2026",
//     time: "10:30 AM",
//     status: "Confirmed"
//   };

//   const MOCK_TEAM = [
//     { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️" },
//     { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️" },
//     { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F4F7F6] pt-28 pb-16 px-4 sm:px-8 font-inter">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* ========================================== */}
//         {/* 1. WELCOME BANNER                          */}
//         {/* ========================================== */}
//         <div className="bg-gradient-to-r from-[#053b32] to-[#0F766E] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
//              <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <path fill="#dfff4f" d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.2,-40.8C85.3,-26.3,91.3,-11.3,90.2,3.2C89.1,17.7,80.9,31.7,71.5,44.2C62.1,56.7,51.5,67.7,38.6,75.1C25.7,82.5,10.5,86.3,-4.2,88.8C-18.9,91.3,-32.1,92.5,-44.2,86.5C-56.3,80.5,-67.3,67.3,-75.3,52.8C-83.3,38.3,-88.3,22.5,-87.8,7C-87.3,-8.5,-81.3,-23.5,-73.3,-36.8C-65.3,-50.1,-55.3,-61.7,-42.6,-69.1C-29.9,-76.5,-14.9,-79.7,0.7,-80.7C16.3,-81.7,32.5,-83.3,45.7,-76.3Z" transform="translate(100 100)" />
//             </svg>
//           </div>

//           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <div>
//               <p className="text-[#dfff4f] font-semibold tracking-wider text-sm mb-2 uppercase">Patient Dashboard</p>
//               <h1 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
//                 Welcome back, {user?.name ? user.name.split(" ")[0] : 'User'}! 👋
//               </h1>
//               <p className="text-[#E6F4F1] text-sm sm:text-base max-w-md opacity-90">
//                 Here is your health overview and upcoming schedules. Stay healthy, stay safe.
//               </p>
//             </div>
//             <Link 
//               to="/appointment" 
//               className="bg-[#dfff4f] text-[#053b32] font-bold font-poppins px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 max-w-[200px]"
//             >
//               <Calendar size={18} /> Book Visit
//             </Link>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* ========================================== */}
//           {/* 2. UPCOMING APPOINTMENT CARD (Main Col)    */}
//           {/* ========================================== */}
//           <div className="lg:col-span-2 space-y-6">
//             <h2 className="text-2xl font-bold font-poppins text-[#053b32] flex items-center gap-2">
//               <Activity className="text-[#0F766E]" /> My Appointment
//             </h2>
            
//             {upcomingAppointment.hasAppointment ? (
//               // If Appointment Exists
//               <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(5,59,50,0.06)] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-transform hover:-translate-y-1 duration-300">
//                 <div className="flex items-center gap-5">
//                   <div className="w-16 h-16 bg-[#E6F4F1] rounded-2xl flex items-center justify-center text-3xl shadow-inner">
//                     🩺
//                   </div>
//                   <div>
//                     <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
//                       {upcomingAppointment.status}
//                     </span>
//                     <h3 className="text-xl font-bold text-[#053b32] font-poppins mb-1">{upcomingAppointment.doctorName}</h3>
//                     <p className="text-[#64748b] text-sm font-medium">{upcomingAppointment.specialty} Consultation</p>
//                   </div>
//                 </div>

//                 <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100 w-full sm:w-auto">
//                   <div className="flex items-center gap-3 text-[#334155] mb-2">
//                     <Calendar size={16} className="text-[#0F766E]" />
//                     <span className="font-semibold text-sm">{upcomingAppointment.date}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-[#334155]">
//                     <Clock size={16} className="text-[#0F766E]" />
//                     <span className="font-semibold text-sm">{upcomingAppointment.time}</span>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // If NO Appointment
//               <div className="bg-white rounded-2xl p-10 text-center shadow-[0_8px_30px_rgba(5,59,50,0.06)] border border-dashed border-gray-300">
//                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Calendar size={32} className="text-gray-400" />
//                 </div>
//                 <h3 className="text-lg font-bold text-[#334155] mb-2">No Upcoming Appointments</h3>
//                 <p className="text-gray-500 mb-6 max-w-sm mx-auto text-sm">You don't have any consultations scheduled at the moment.</p>
//                 <Link to="/appointment" className="text-[#0F766E] font-semibold hover:underline">
//                   Book a new appointment &rarr;
//                 </Link>
//               </div>
//             )}

//           </div>

//           {/* ========================================== */}
//           {/* 3. QUICK ACTIONS (Right Col)               */}
//           {/* ========================================== */}
//           <div className="space-y-6">
//             <h2 className="text-xl font-bold font-poppins text-[#053b32]">Quick Links</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <button className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:border-[#0F766E] group">
//                 <div className="w-12 h-12 bg-[#E6F4F1] text-[#0F766E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <FileText size={20} />
//                 </div>
//                 <span className="text-sm font-semibold text-[#334155]">Records</span>
//               </button>
//               <button className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:border-[#0F766E] group">
//                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <ShieldCheck size={20} />
//                 </div>
//                 <span className="text-sm font-semibold text-[#334155]">Insurance</span>
//               </button>
//               <button className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:border-[#0F766E] group">
//                 <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <User size={20} />
//                 </div>
//                 <span className="text-sm font-semibold text-[#334155]">Profile</span>
//               </button>
//               <button className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:border-[#0F766E] group">
//                 <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <Phone size={20} />
//                 </div>
//                 <span className="text-sm font-semibold text-[#334155]">Support</span>
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* ========================================== */}
//         {/* 4. DOCTORS / TEAM PAGE INTEGRATION         */}
//         {/* ========================================== */}
//         <div className="pt-8">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-2xl font-bold font-poppins text-[#053b32]">Consult Our Specialists</h2>
//             <button className="text-[#0F766E] font-semibold text-sm hover:underline flex items-center gap-1">
//               View All <ArrowRight size={16} />
//             </button>
//           </div>
          
//           {/* Note: Aap yahan sidha <TeamPage /> render karwa sakte hain.
//               For now, main ek beautiful inline grid bana raha hu. */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {MOCK_TEAM.map((doc) => (
//               <div key={doc.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className="w-16 h-16 bg-[#FAFAFA] rounded-full flex items-center justify-center text-3xl group-hover:bg-[#E6F4F1] transition-colors">
//                   {doc.img}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[#053b32] font-poppins text-lg">{doc.name}</h3>
//                   <p className="text-[#64748b] text-sm mb-2">{doc.specialty}</p>
//                   <Link to="/appointment" className="text-[#0F766E] text-xs font-bold uppercase tracking-wider group-hover:underline">
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;

// v-02

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { 
//   Calendar, Clock, User, FileText, Phone, Activity, 
//   ArrowRight, ShieldCheck, HeartPulse, Droplet, Thermometer, ChevronRight
// } from 'lucide-react';

// const PatientDashboard = () => {
//   const { user } = useSelector((state) => state.auth);

//   const upcomingAppointment = {
//     hasAppointment: true, // Isey false karke dekhna, empty state bhi bohot pyara banaya hai
//     doctorName: "Dr. Priya Verma",
//     specialty: "Neurology",
//     date: "15 April, 2026",
//     time: "10:30 AM",
//     status: "Confirmed"
//   };

//   const MOCK_TEAM = [
//     { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️" },
//     { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️" },
//     { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️" },
//   ];

//   const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

//   return (
//     <div className="min-h-screen bg-[#F4F7F6] pt-28 pb-16 px-4 sm:px-8 font-inter selection:bg-[#0F766E] selection:text-white">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* ========================================== */}
//         {/* 1. HEADER GREETING                         */}
//         {/* ========================================== */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//           <div>
//             <p className="text-[#64748b] font-medium mb-1 uppercase tracking-wide text-xs">{today}</p>
//             <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-[#053b32]">
//               Good Morning, <span className="text-[#0F766E]">{user?.name ? user.name.split(" ")[0] : 'User'}</span> 👋
//             </h1>
//           </div>
//           <Link 
//             to="/appointment" 
//             className="bg-[#053b32] text-[#dfff4f] font-bold font-poppins px-6 py-3.5 rounded-2xl hover:bg-[#0F766E] transition-all duration-300 shadow-[0_8px_20px_rgba(5,59,50,0.15)] hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
//           >
//             <Calendar size={18} /> Book New Visit
//           </Link>
//         </div>

//         {/* ========================================== */}
//         {/* BENTO GRID LAYOUT                          */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* LEFT COLUMN (Takes 2/3 space) */}
//           <div className="lg:col-span-2 flex flex-col gap-6">
            
//             {/* --- UPCOMING APPOINTMENT (TICKET STYLE) --- */}
//             <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col">
//               <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
//                 <h2 className="font-bold font-poppins text-[#053b32] flex items-center gap-2">
//                   <Clock className="text-[#0F766E]" size={20} /> Next Appointment
//                 </h2>
//                 <Link to="#" className="text-sm font-semibold text-[#0F766E] hover:underline">Manage</Link>
//               </div>

//               {upcomingAppointment.hasAppointment ? (
//                 <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
//                   {/* Date/Time Block */}
//                   <div className="flex flex-col items-center justify-center p-4 bg-[#E6F4F1] rounded-2xl min-w-[120px] text-center border border-[#0F766E]/20">
//                     <span className="text-[#0F766E] text-sm font-bold uppercase tracking-wider">{upcomingAppointment.date.split(" ")[1]}</span>
//                     <span className="text-3xl font-black font-poppins text-[#053b32] my-1">{upcomingAppointment.date.split(" ")[0]}</span>
//                     <span className="text-[#0F766E] text-xs font-semibold bg-white px-2 py-1 rounded-lg mt-1 w-full">{upcomingAppointment.time}</span>
//                   </div>
                  
//                   {/* Doctor Info */}
//                   <div className="flex-1 text-center sm:text-left">
//                     <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
//                       {upcomingAppointment.status}
//                     </span>
//                     <h3 className="text-2xl font-bold text-[#053b32] font-poppins mb-1">{upcomingAppointment.doctorName}</h3>
//                     <p className="text-[#64748b] font-medium flex items-center justify-center sm:justify-start gap-2">
//                       <Activity size={16} /> {upcomingAppointment.specialty} Consultation
//                     </p>
//                   </div>

//                   {/* Icon */}
//                   <div className="hidden sm:flex w-16 h-16 bg-gray-50 rounded-full items-center justify-center text-3xl border border-gray-100">
//                     🏥
//                   </div>
//                 </div>
//               ) : (
//                 <div className="p-10 text-center flex flex-col items-center justify-center">
//                   <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
//                     <Calendar size={28} className="text-gray-400" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#334155] mb-2">Schedule is Clear</h3>
//                   <p className="text-gray-500 mb-6 text-sm">You have no upcoming visits planned.</p>
//                 </div>
//               )}
//             </div>

//             {/* --- QUICK ACTIONS (HORIZONTAL GRID) --- */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {[
//                 { icon: FileText, label: "Records", color: "bg-blue-50 text-blue-600" },
//                 { icon: Droplet, label: "Lab Tests", color: "bg-red-50 text-red-500" },
//                 { icon: ShieldCheck, label: "Insurance", color: "bg-purple-50 text-purple-600" },
//                 { icon: Phone, label: "Support", color: "bg-orange-50 text-orange-500" }
//               ].map((item, idx) => (
//                 <button key={idx} className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-md group">
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
//                     <item.icon size={22} strokeWidth={2.5} />
//                   </div>
//                   <span className="text-sm font-semibold text-[#334155]">{item.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT COLUMN (Takes 1/3 space) */}
//           <div className="flex flex-col gap-6">
            
//             {/* --- VITALS SNAPSHOT (DARK PREMIUM CARD) --- */}
//             <div className="bg-gradient-to-br from-[#053b32] to-[#125247] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
//               {/* Abstract Rings */}
//               <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-[#dfff4f]/10 rounded-full"></div>
              
//               <div className="relative z-10">
//                 <h2 className="font-bold font-poppins text-[#E6F4F1] mb-6 flex items-center gap-2">
//                   <HeartPulse className="text-[#dfff4f]" size={20} /> Health Snapshot
//                 </h2>
                
//                 <div className="space-y-5">
//                   <div className="flex items-center justify-between border-b border-white/10 pb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-white/10 rounded-lg"><Activity size={18} className="text-[#dfff4f]"/></div>
//                       <span className="text-sm text-gray-300 font-medium">Heart Rate</span>
//                     </div>
//                     <span className="font-bold font-poppins text-lg text-white">72 <span className="text-xs text-gray-400 font-normal">bpm</span></span>
//                   </div>

//                   <div className="flex items-center justify-between border-b border-white/10 pb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-white/10 rounded-lg"><Droplet size={18} className="text-red-400"/></div>
//                       <span className="text-sm text-gray-300 font-medium">Blood Pressure</span>
//                     </div>
//                     <span className="font-bold font-poppins text-lg text-white">120/80 <span className="text-xs text-gray-400 font-normal">mmHg</span></span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-white/10 rounded-lg"><Thermometer size={18} className="text-orange-400"/></div>
//                       <span className="text-sm text-gray-300 font-medium">Weight</span>
//                     </div>
//                     <span className="font-bold font-poppins text-lg text-white">68 <span className="text-xs text-gray-400 font-normal">kg</span></span>
//                   </div>
//                 </div>
                
//                 <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-3 rounded-xl transition-colors">
//                   Update Vitals
//                 </button>
//               </div>
//             </div>

//             {/* --- RECENT ACTIVITY --- */}
//             <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex-1">
//               <h2 className="font-bold font-poppins text-[#053b32] mb-4">Recent Activity</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="w-2 h-2 mt-2 rounded-full bg-[#0F766E]"></div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#334155]">Blood Test Report Added</p>
//                     <p className="text-xs text-gray-500">2 days ago</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#334155]">Account Created</p>
//                     <p className="text-xs text-gray-500">1 week ago</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* RECOMMENDED DOCTORS                        */}
//         {/* ========================================== */}
//         <div className="pt-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold font-poppins text-[#053b32]">Our Top Specialists</h2>
//             <Link to="/team" className="text-[#0F766E] font-semibold text-sm hover:underline flex items-center gap-1 group">
//               View Directory <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {MOCK_TEAM.map((doc) => (
//               <div key={doc.id} className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:border-[#0F766E]/30 transition-all cursor-pointer group">
//                 <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-2xl group-hover:bg-[#E6F4F1] transition-colors border border-gray-100">
//                   {doc.img}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-bold text-[#053b32] font-poppins text-base">{doc.name}</h3>
//                   <p className="text-[#64748b] text-xs font-medium mb-1">{doc.specialty}</p>
//                 </div>
//                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
//                   <ChevronRight size={16} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;

// v-03

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { 
//   Calendar, Clock, User, FileText, Phone, Activity, 
//   ShieldCheck, HeartPulse, Droplet, Thermometer, ChevronRight, Video, FilePlus
// } from 'lucide-react';

// // Swiper Imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// // Shadcn Imports (Make sure these paths are correct for your project)
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
// import { Badge } from '../ui/badge';
// import { Progress } from '../ui/progress';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// const PatientDashboard = () => {
//   const { user } = useSelector((state) => state.auth);

//   const upcomingAppointment = {
//     hasAppointment: true,
//     doctorName: "Dr. Priya Verma",
//     specialty: "Neurology",
//     date: "15 April, 2026",
//     time: "10:30 AM",
//     status: "Confirmed",
//     type: "In-Clinic"
//   };

//   const MOCK_TEAM = [
//     { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️", rating: 4.9, reviews: 120 },
//     { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️", rating: 4.8, reviews: 95 },
//     { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️", rating: 5.0, reviews: 200 },
//     { id: "d4", name: "Dr. Arjun Singh", specialty: "Dermatology", img: "👨‍⚕️", rating: 4.7, reviews: 80 },
//   ];

//   const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-16 px-4 sm:px-8 font-inter">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* ========================================== */}
//         {/* 1. HEADER & GREETING                       */}
//         {/* ========================================== */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <div className="space-y-1">
//             <Badge variant="outline" className="text-[#0F766E] bg-[#E6F4F1] border-none mb-2 px-3 py-1">
//               {today}
//             </Badge>
//             <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-[#053b32]">
//               Good Morning, <span className="text-[#0F766E]">{user?.name ? user.name.split(" ")[0] : 'User'}</span> 👋
//             </h1>
//             <p className="text-slate-500 font-medium">Your health dashboard is looking great today.</p>
//           </div>
          
//           <div className="flex gap-3">
//             <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-sm">
//               <FilePlus size={20} />
//             </button>
//             <Link 
//               to="/appointment" 
//               className="bg-[#053b32] text-[#dfff4f] font-bold font-poppins px-6 py-3 rounded-xl hover:bg-[#0F766E] transition-all duration-300 shadow-[0_8px_20px_rgba(5,59,50,0.15)] hover:shadow-lg flex items-center gap-2"
//             >
//               <Calendar size={18} /> Book Visit
//             </Link>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* 2. MAIN BENTO GRID                         */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
//           {/* --- LEFT SECTION (Appointments & Quick Actions) --- */}
//           <div className="lg:col-span-8 flex flex-col gap-6">
            
//             {/* APPOINTMENT TABS */}
//             <Card className="border-slate-100 shadow-sm rounded-3xl overflow-hidden">
//               <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="text-xl font-bold font-poppins text-[#053b32]">Your Schedule</CardTitle>
//                   <Link to="#" className="text-sm font-semibold text-[#0F766E] hover:underline">View All</Link>
//                 </div>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <Tabs defaultValue="upcoming" className="w-full">
//                   <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100/80 rounded-xl p-1">
//                     <TabsTrigger value="upcoming" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0F766E] data-[state=active]:shadow-sm">Upcoming</TabsTrigger>
//                     <TabsTrigger value="past" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0F766E] data-[state=active]:shadow-sm">Past Visits</TabsTrigger>
//                   </TabsList>
                  
//                   <TabsContent value="upcoming" className="mt-0">
//                     {upcomingAppointment.hasAppointment ? (
//                       <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 border border-slate-100 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#0F766E]/30 transition-colors group cursor-pointer">
//                         <div className="flex items-center gap-5 w-full sm:w-auto">
//                           <div className="w-16 h-16 bg-[#E6F4F1] text-[#0F766E] rounded-xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
//                             {upcomingAppointment.type === "In-Clinic" ? '🏥' : '💻'}
//                           </div>
//                           <div>
//                             <div className="flex items-center gap-2 mb-1">
//                               <h3 className="text-lg font-bold text-[#053b32] font-poppins">{upcomingAppointment.doctorName}</h3>
//                               <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-[10px] px-2 py-0">{upcomingAppointment.status}</Badge>
//                             </div>
//                             <p className="text-slate-500 text-sm font-medium">{upcomingAppointment.specialty} • {upcomingAppointment.type}</p>
//                           </div>
//                         </div>
                        
//                         <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 w-full sm:w-auto bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
//                           <div className="flex items-center gap-2 text-slate-700 font-semibold">
//                             <Calendar size={16} className="text-[#0F766E]" /> {upcomingAppointment.date.split(",")[0]}
//                           </div>
//                           <div className="flex items-center gap-2 text-slate-700 font-semibold">
//                             <Clock size={16} className="text-[#0F766E]" /> {upcomingAppointment.time}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="py-8 text-center border-2 border-dashed border-slate-200 rounded-2xl">
//                         <Calendar size={32} className="mx-auto text-slate-300 mb-3" />
//                         <p className="text-slate-500 font-medium">No upcoming appointments</p>
//                       </div>
//                     )}
//                   </TabsContent>
                  
//                   <TabsContent value="past" className="mt-0">
//                     <div className="py-8 text-center border border-slate-100 rounded-2xl bg-slate-50/50">
//                       <p className="text-slate-500 font-medium">No past visits found.</p>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//             </Card>

//             {/* QUICK ACTIONS GRID */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {[
//                 { icon: FileText, label: "Prescriptions", color: "text-blue-600", bg: "bg-blue-50/80" },
//                 { icon: Droplet, label: "Lab Reports", color: "text-red-500", bg: "bg-red-50/80" },
//                 { icon: Video, label: "Teleconsult", color: "text-purple-600", bg: "bg-purple-50/80" },
//                 { icon: ShieldCheck, label: "Insurance", color: "text-emerald-600", bg: "bg-emerald-50/80" }
//               ].map((item, idx) => (
//                 <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1 bg-white rounded-2xl">
//                   <CardContent className="p-5 flex flex-col items-center justify-center gap-3">
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${item.bg} ${item.color}`}>
//                       <item.icon size={22} strokeWidth={2.5} />
//                     </div>
//                     <span className="text-sm font-semibold text-slate-700">{item.label}</span>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//           </div>

//           {/* --- RIGHT SECTION (Health Vitals) --- */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
            
//             <Card className="border-none shadow-xl bg-gradient-to-br from-[#053b32] via-[#0a4b41] to-[#053b32] text-white rounded-3xl overflow-hidden relative h-full flex flex-col">
//               {/* Glassmorphism elements */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfff4f] rounded-full blur-[80px] opacity-20"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0F766E] rounded-full blur-[60px] opacity-40"></div>
              
//               <CardHeader className="pb-2 relative z-10">
//                 <CardTitle className="flex items-center gap-2 text-[#E6F4F1] font-poppins text-lg">
//                   <HeartPulse className="text-[#dfff4f]" size={22} /> Health Overview
//                 </CardTitle>
//                 <CardDescription className="text-slate-300">Last updated: Today</CardDescription>
//               </CardHeader>
              
//               <CardContent className="relative z-10 flex-1 flex flex-col justify-between pt-4">
//                 <div className="space-y-6">
                  
//                   {/* Metric 1 */}
//                   <div>
//                     <div className="flex justify-between items-end mb-2">
//                       <span className="text-sm text-slate-300 font-medium">BMI Status</span>
//                       <span className="font-bold text-xl font-poppins">22.4 <span className="text-xs text-slate-400 font-normal">Normal</span></span>
//                     </div>
//                     <Progress value={45} className="h-2 bg-white/10 indicator-clinic-yellow" />
//                   </div>

//                   {/* Metric 2 & 3 in a grid */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Activity size={16} className="text-[#dfff4f]" />
//                         <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">Pulse</span>
//                       </div>
//                       <p className="text-2xl font-bold font-poppins">72 <span className="text-sm text-slate-400 font-medium">bpm</span></p>
//                     </div>
                    
//                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Droplet size={16} className="text-red-400" />
//                         <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">BP</span>
//                       </div>
//                       <p className="text-2xl font-bold font-poppins">120/80</p>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors border border-white/10 backdrop-blur-sm">
//                   Update Health Profile
//                 </button>
//               </CardContent>
//             </Card>

//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* 3. SWIPER CAROUSEL: TOP SPECIALISTS        */}
//         {/* ========================================== */}
//         <div className="pt-4">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h2 className="text-2xl font-bold font-poppins text-[#053b32]">Top Specialists</h2>
//               <p className="text-slate-500 text-sm mt-1">Book a consultation with our expert team.</p>
//             </div>
//             <Link to="/team" className="hidden sm:flex text-[#0F766E] font-semibold text-sm hover:bg-[#E6F4F1] px-4 py-2 rounded-full transition-colors items-center gap-1 group">
//               View Directory <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
//             </Link>
//           </div>
          
//           <Swiper
//             slidesPerView={1.2}
//             spaceBetween={20}
//             freeMode={true}
//             pagination={{ clickable: true }}
//             modules={[FreeMode, Pagination]}
//             breakpoints={{
//               640: { slidesPerView: 2.2 },
//               1024: { slidesPerView: 3.5 },
//             }}
//             className="pb-12" // Padding bottom for pagination dots
//           >
//             {MOCK_TEAM.map((doc) => (
//               <SwiperSlide key={doc.id}>
//                 <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl">
//                   <CardContent className="p-5 flex flex-col h-full">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-2xl border border-slate-100 shadow-inner">
//                         {doc.img}
//                       </div>
//                       <Badge variant="secondary" className="bg-[#E6F4F1] text-[#0F766E] flex items-center gap-1">
//                         ★ {doc.rating}
//                       </Badge>
//                     </div>
                    
//                     <div className="flex-1">
//                       <h3 className="font-bold text-[#053b32] font-poppins text-lg leading-tight">{doc.name}</h3>
//                       <p className="text-slate-500 text-sm font-medium mt-1">{doc.specialty}</p>
//                       <p className="text-slate-400 text-xs mt-2">{doc.reviews} patient reviews</p>
//                     </div>
                    
//                     <Link to="/appointment" className="mt-5 w-full block text-center bg-slate-50 hover:bg-[#0F766E] text-[#0F766E] hover:text-white border border-slate-200 hover:border-[#0F766E] font-semibold text-sm py-2.5 rounded-xl transition-all">
//                       Book Now
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>

//       <style>{`
//         /* Custom Swiper Pagination Color */
//         .swiper-pagination-bullet-active {
//           background-color: #0F766E !important;
//         }
//         /* Custom Progress Bar Indicator Color for Vitals Card */
//         .indicator-clinic-yellow > div {
//           background-color: #dfff4f !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PatientDashboard;


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { 
//   Calendar, Clock, User, FileText, Phone, Activity, 
//   ShieldCheck, HeartPulse, Droplet, Thermometer, ChevronRight, Video, 
//   MapPin, BellRing
// } from 'lucide-react';
// import UpdateVitalsModal from './UpdateVitalsModal';

// // Swiper Imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// const PatientDashboard = () => {
//   const { user } = useSelector((state) => state.auth);

//   const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
//   const [vitalsData, setVitalsData] = useState({
//     heartRate: 72,
//     bpSys: 120,
//     bpDia: 80,
//     weight: 68,
//     score: 85 // BMI ya overall score
//   });

//   const handleSaveVitals = (newVitals) => {
//     setVitalsData({
//       heartRate: newVitals.heartRate,
//       bpSys: newVitals.bpSys,
//       bpDia: newVitals.bpDia,
//       weight: newVitals.weight,
//       // Fake logic to change score for UI effect
//       score: Math.floor(Math.random() * (98 - 75 + 1) + 75) 
//     });
//   };

//   const upcomingAppointment = {
//     hasAppointment: true,
//     doctorName: "Dr. Priya Verma",
//     specialty: "Neurology",
//     date: "15 Apr",
//     day: "Wednesday",
//     time: "10:30 AM",
//     status: "Confirmed",
//     location: "Ziva Main Wing, Room 402"
//   };

//   const MOCK_TEAM = [
//     { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️", rating: 4.9, exp: "15 Yrs" },
//     { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️", rating: 4.8, exp: "12 Yrs" },
//     { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️", rating: 5.0, exp: "20 Yrs" },
//     { id: "d4", name: "Dr. Arjun Singh", specialty: "Dermatology", img: "👨‍⚕️", rating: 4.7, exp: "8 Yrs" },
//   ];

//   const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

//   return (
//     <div className="min-h-screen bg-[#F4F7F6] font-inter relative pb-20">
      
//       {/* ========================================== */}
//       {/* 1. DARK HERO BACKGROUND (The Depth Layer)  */}
//       {/* ========================================== */}
//       <div className="absolute top-0 left-0 w-full h-[450px] bg-gradient-to-b from-[#021814] via-[#053b32] to-[#0A4B41] rounded-b-[4rem] z-0 overflow-hidden">
//         {/* Abstract Glowing Orbs */}
//         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0F766E] rounded-full blur-[120px] opacity-50"></div>
//         <div className="absolute top-40 -left-20 w-72 h-72 bg-[#dfff4f] rounded-full blur-[150px] opacity-10"></div>
        
//         {/* Subtle Grid Pattern overlay */}
//         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
//       </div>

//       {/* ========================================== */}
//       {/* MAIN CONTENT WRAPPER (Floating over Hero)  */}
//       {/* ========================================== */}
//       <div className="relative z-10 max-w-7xl mx-auto pt-32 px-4 sm:px-8">
        
//         {/* --- HEADER GREETING --- */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#dfff4f] text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-sm">
//               <Calendar size={12} /> {today}
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-black font-poppins text-white tracking-tight">
//               Hello, {user?.name ? user.name.split(" ")[0] : 'User'}.
//             </h1>
//             <p className="text-[#E6F4F1] mt-2 font-medium opacity-80 max-w-md">
//               Your health vitals are stable. You have 1 upcoming appointment this week.
//             </p>
//           </div>
          
//           <div className="flex gap-4">
//             <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-md relative group">
//               <BellRing size={20} />
//               <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#dfff4f] rounded-full border-2 border-[#053b32]"></span>
//             </button>
//             <Link to="/appointment" className="bg-[#dfff4f] hover:bg-white text-[#021814] font-bold font-poppins px-6 py-3 rounded-2xl transition-all shadow-[0_0_30px_rgba(223,255,79,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2">
//               Book Appointment <ChevronRight size={18} />
//             </Link>
//           </div>
//         </div>

//         {/* --- BENTO GRID --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* LEFT: TICKET & ACTIONS (Col span 7) */}
//           <div className="lg:col-span-7 flex flex-col gap-8">
            
//             {/* 🎟️ REALISTIC TICKET UI */}
//             <div className="relative group hover:-translate-y-1 transition-transform duration-500">
//               <div className="flex flex-col sm:flex-row bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-gray-100/50 z-10">
                
//                 {/* Left Ticket Stub (Date & Time) */}
//                 <div className="sm:w-2/5 bg-gradient-to-br from-[#E6F4F1] to-[#F4F7F6] p-8 flex flex-col justify-center relative">
//                   {/* Dashed line separator for desktop */}
//                   <div className="hidden sm:block absolute right-0 top-6 bottom-6 w-px border-r-2 border-dashed border-gray-300"></div>
//                   {/* Cutout semi-circles for realism */}
//                   <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F4F7F6] rounded-full shadow-inner z-20"></div>
                  
//                   <div className="text-[#0F766E] font-bold uppercase tracking-widest text-xs mb-1">{upcomingAppointment.day}</div>
//                   <div className="text-5xl font-black font-poppins text-[#021814] mb-2">{upcomingAppointment.date}</div>
//                   <div className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-xl text-[#0F766E] font-bold shadow-sm w-max">
//                     <Clock size={16} /> {upcomingAppointment.time}
//                   </div>
//                 </div>

//                 {/* Right Ticket Body (Details) */}
//                 <div className="sm:w-3/5 p-8 relative bg-white">
//                   <div className="flex justify-between items-start mb-4">
//                     <span className="bg-green-50 text-green-600 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-green-100">
//                       {upcomingAppointment.status}
//                     </span>
//                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl shadow-inner">
//                       🩺
//                     </div>
//                   </div>
                  
//                   <h2 className="text-2xl font-bold text-[#053b32] font-poppins mb-1">{upcomingAppointment.doctorName}</h2>
//                   <p className="text-[#64748b] font-medium mb-6">{upcomingAppointment.specialty} Consultation</p>
                  
//                   <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
//                     <MapPin size={16} className="text-[#0F766E]" /> {upcomingAppointment.location}
//                   </div>
//                 </div>
//               </div>
//               {/* Ticket shadow reflection */}
//               <div className="absolute -bottom-4 left-10 right-10 h-8 bg-[#0F766E]/20 blur-xl rounded-full z-0 group-hover:bg-[#0F766E]/30 transition-colors"></div>
//             </div>

//             {/* 💊 FLOATING ACTION PILLS */}
//             <div className="flex flex-wrap gap-4">
//               {[
//                 { icon: FileText, label: "Medical Records", bg: "bg-blue-50 text-blue-600 border-blue-100" },
//                 { icon: Droplet, label: "Lab Results", bg: "bg-red-50 text-red-500 border-red-100" },
//                 { icon: Video, label: "Teleconsult", bg: "bg-purple-50 text-purple-600 border-purple-100" },
//                 { icon: ShieldCheck, label: "Insurance", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" }
//               ].map((item, idx) => (
//                 <button key={idx} className={`flex-1 min-w-[140px] flex items-center gap-3 p-4 rounded-2xl border ${item.bg} hover:shadow-lg transition-all hover:-translate-y-1 bg-white hover:bg-opacity-50 backdrop-blur-md`}>
//                   <div className="p-2 bg-white rounded-xl shadow-sm">
//                     <item.icon size={20} strokeWidth={2.5} />
//                   </div>
//                   <span className="font-bold text-sm text-[#021814]">{item.label}</span>
//                 </button>
//               ))}
//             </div>

//           </div>

//           {/* RIGHT: VITALS (Col span 5) */}
//           <div className="lg:col-span-5 h-full">
            
//             {/* 🫀 NEON GLASSMORPHISM VITALS CARD */}
//             <div className="bg-[#021814]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group">
              
//               {/* Inner Glowing Effects */}
//               <div className="absolute top-0 right-0 w-48 h-48 bg-[#dfff4f]/10 rounded-full blur-[60px] group-hover:bg-[#dfff4f]/20 transition-all duration-700"></div>
//               <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0F766E]/30 rounded-full blur-[60px]"></div>

//               <div className="relative z-10 flex justify-between items-center mb-8">
//                 <h2 className="font-bold font-poppins text-xl flex items-center gap-2 text-[#E6F4F1]">
//                   <Activity className="text-[#dfff4f]" size={24} /> Health Overview
//                 </h2>
//                 <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-[#dfff4f]">Live</span>
//               </div>

//               {/* Health Score Ring (Custom SVG) */}
//               <div className="relative z-10 flex items-center justify-center mb-8">
//                 <div className="relative w-36 h-36 flex items-center justify-center">
//                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                     <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
//                     <path className="text-[#dfff4f] animate-[dash_2s_ease-out_forwards]" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//                   </svg>
//                   <div className="absolute flex flex-col items-center justify-center text-center">
//                     <span className="text-4xl font-black font-poppins text-white">{vitalsData.score}</span>
//                     <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Score</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats Grid */}
//               <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
//                 <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
//                   <div className="flex items-center gap-2 mb-1">
//                     <HeartPulse size={14} className="text-red-400 animate-pulse" />
//                     <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Heart Rate</span>
//                   </div>
//                   <p className="text-2xl font-bold font-poppins">{vitalsData.heartRate} <span className="text-sm font-normal text-gray-500">bpm</span></p>
//                 </div>
//                 <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Droplet size={14} className="text-blue-400" />
//                     <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Blood Pres.</span>
//                   </div>
//                   <p className="text-2xl font-bold font-poppins">{vitalsData.bpSys}<span className="text-lg text-gray-400">/{vitalsData.bpDia}</span></p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* ========================================== */}
//         {/* 3. SWIPER CAROUSEL (Doctors)               */}
//         {/* ========================================== */}
//         <div className="pt-16">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-black font-poppins text-[#053b32]">Top Specialists</h2>
//             <Link to="/team" className="text-[#0F766E] font-bold text-sm hover:underline flex items-center gap-1 group bg-[#E6F4F1] px-5 py-2.5 rounded-full">
//               Directory <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
//             </Link>
//           </div>
          
//           <Swiper
//             slidesPerView={1.2}
//             spaceBetween={24}
//             freeMode={true}
//             modules={[FreeMode, Autoplay]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2.2 },
//               1024: { slidesPerView: 3.2 },
//             }}
//             className="pb-4"
//           >
//             {MOCK_TEAM.map((doc) => (
//               <SwiperSlide key={doc.id}>
//                 <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:border-[#0F766E]/30 transition-all group">
//                   <div className="flex justify-between items-start mb-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#E6F4F1] to-white rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
//                       {doc.img}
//                     </div>
//                     <div className="bg-yellow-50 text-yellow-700 font-bold text-xs px-3 py-1.5 rounded-xl flex items-center gap-1">
//                       ★ {doc.rating}
//                     </div>
//                   </div>
                  
//                   <h3 className="font-bold text-[#021814] font-poppins text-xl mb-1">{doc.name}</h3>
//                   <p className="text-[#0F766E] font-semibold text-sm mb-4">{doc.specialty} <span className="text-gray-400 font-normal ml-1">• {doc.exp}</span></p>
                  
//                   <Link to="/appointment" className="block w-full text-center bg-gray-50 hover:bg-[#021814] text-[#053b32] hover:text-[#dfff4f] font-bold py-3 rounded-xl transition-colors">
//                     Book Consult
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>

//       <style>{`
//         @keyframes dash {
//           to { stroke-dasharray: 85, 100; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PatientDashboard;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, FileText, Phone, Activity, 
  ShieldCheck, HeartPulse, Droplet, Thermometer, ChevronRight, Video, 
  MapPin, BellRing, FilePlus
} from 'lucide-react';
import UpdateVitalsModal from './UpdateVitalsModal';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const PatientDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
  const [vitalsData, setVitalsData] = useState({
    heartRate: 72,
    bpSys: 120,
    bpDia: 80,
    weight: 68,
    score: 85 // BMI ya overall score
  });

  const handleSaveVitals = (newVitals) => {
    setVitalsData({
      heartRate: newVitals.heartRate,
      bpSys: newVitals.bpSys,
      bpDia: newVitals.bpDia,
      weight: newVitals.weight,
      // Fake logic to change score for UI effect
      score: Math.floor(Math.random() * (98 - 75 + 1) + 75) 
    });
  };

  const upcomingAppointment = {
    hasAppointment: true,
    doctorName: "Dr. Priya Verma",
    specialty: "Neurology",
    date: "15 Apr",
    day: "Wednesday",
    time: "10:30 AM",
    status: "Confirmed",
    location: "Ziva Main Wing, Room 402"
  };

  const MOCK_TEAM = [
    { id: "d1", name: "Dr. Ananya Sharma", specialty: "Cardiology", img: "👩‍⚕️", rating: 4.9, exp: "15 Yrs" },
    { id: "d2", name: "Dr. Rohan Gupta", specialty: "Orthopedics", img: "👨‍⚕️", rating: 4.8, exp: "12 Yrs" },
    { id: "d3", name: "Dr. Meera Patel", specialty: "General Med", img: "👩‍⚕️", rating: 5.0, exp: "20 Yrs" },
    { id: "d4", name: "Dr. Arjun Singh", specialty: "Dermatology", img: "👨‍⚕️", rating: 4.7, exp: "8 Yrs" },
  ];

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-inter relative pb-20">
      
      {/* ========================================== */}
      {/* 1. DARK HERO BACKGROUND (The Depth Layer)  */}
      {/* ========================================== */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-gradient-to-b from-[#021814] via-[#053b32] to-[#0A4B41] rounded-b-[4rem] z-0 overflow-hidden">
        {/* Abstract Glowing Orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0F766E] rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[#dfff4f] rounded-full blur-[150px] opacity-10"></div>
        
        {/* Subtle Grid Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* ========================================== */}
      {/* MAIN CONTENT WRAPPER (Floating over Hero)  */}
      {/* ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 px-4 sm:px-8">
        
        {/* --- HEADER GREETING --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#dfff4f] text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-sm">
              <Calendar size={12} /> {today}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins text-white tracking-tight">
              Hello, {user?.name ? user.name.split(" ")[0] : 'User'}.
            </h1>
            <p className="text-[#E6F4F1] mt-2 font-medium opacity-80 max-w-md">
              Your health vitals are stable. You have 1 upcoming appointment this week.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-md relative group">
              <BellRing size={20} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#dfff4f] rounded-full border-2 border-[#053b32]"></span>
            </button>
            <Link to="/appointment" className="bg-[#dfff4f] hover:bg-white text-[#021814] font-bold font-poppins px-6 py-3 rounded-2xl transition-all shadow-[0_0_30px_rgba(223,255,79,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2">
              Book Appointment <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: TICKET & ACTIONS (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* 🎟️ REALISTIC TICKET UI */}
            <div className="relative group hover:-translate-y-1 transition-transform duration-500">
              <div className="flex flex-col sm:flex-row bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-gray-100/50 z-10">
                
                {/* Left Ticket Stub (Date & Time) */}
                <div className="sm:w-2/5 bg-gradient-to-br from-[#E6F4F1] to-[#F4F7F6] p-8 flex flex-col justify-center relative">
                  <div className="hidden sm:block absolute right-0 top-6 bottom-6 w-px border-r-2 border-dashed border-gray-300"></div>
                  <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F4F7F6] rounded-full shadow-inner z-20"></div>
                  
                  <div className="text-[#0F766E] font-bold uppercase tracking-widest text-xs mb-1">{upcomingAppointment.day}</div>
                  <div className="text-5xl font-black font-poppins text-[#021814] mb-2">{upcomingAppointment.date}</div>
                  <div className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-xl text-[#0F766E] font-bold shadow-sm w-max">
                    <Clock size={16} /> {upcomingAppointment.time}
                  </div>
                </div>

                {/* Right Ticket Body (Details) */}
                <div className="sm:w-3/5 p-8 relative bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-green-50 text-green-600 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-green-100">
                      {upcomingAppointment.status}
                    </span>
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl shadow-inner">
                      🩺
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#053b32] font-poppins mb-1">{upcomingAppointment.doctorName}</h2>
                  <p className="text-[#64748b] font-medium mb-6">{upcomingAppointment.specialty} Consultation</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                    <MapPin size={16} className="text-[#0F766E]" /> {upcomingAppointment.location}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-10 right-10 h-8 bg-[#0F766E]/20 blur-xl rounded-full z-0 group-hover:bg-[#0F766E]/30 transition-colors"></div>
            </div>

            {/* 💊 FLOATING ACTION PILLS */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FileText, label: "Medical Records", bg: "bg-blue-50 text-blue-600 border-blue-100" },
                { icon: Droplet, label: "Lab Results", bg: "bg-red-50 text-red-500 border-red-100" },
                { icon: Video, label: "Teleconsult", bg: "bg-purple-50 text-purple-600 border-purple-100" },
                { icon: ShieldCheck, label: "Insurance", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" }
              ].map((item, idx) => (
                <button key={idx} className={`flex-1 min-w-[140px] flex items-center gap-3 p-4 rounded-2xl border ${item.bg} hover:shadow-lg transition-all hover:-translate-y-1 bg-white hover:bg-opacity-50 backdrop-blur-md`}>
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-sm text-[#021814]">{item.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: VITALS (Col span 5) */}
          <div className="lg:col-span-5 h-full">
            
            {/* 🫀 NEON GLASSMORPHISM VITALS CARD */}
            <div className="bg-[#021814]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group">
              
              {/* Inner Glowing Effects */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dfff4f]/10 rounded-full blur-[60px] group-hover:bg-[#dfff4f]/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0F766E]/30 rounded-full blur-[60px]"></div>

              <div className="relative z-10 flex justify-between items-center mb-8">
                <h2 className="font-bold font-poppins text-xl flex items-center gap-2 text-[#E6F4F1]">
                  <Activity className="text-[#dfff4f]" size={24} /> Health Overview
                </h2>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-[#dfff4f]">Live</span>
              </div>

              {/* Health Score Ring */}
              <div className="relative z-10 flex items-center justify-center mb-8">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-[#dfff4f] animate-[dash_2s_ease-out_forwards]" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black font-poppins text-white">{vitalsData.score}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Score</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-2 mb-1">
                    <HeartPulse size={14} className="text-red-400 animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Heart Rate</span>
                  </div>
                  <p className="text-2xl font-bold font-poppins">{vitalsData.heartRate} <span className="text-sm font-normal text-gray-500">bpm</span></p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplet size={14} className="text-blue-400" />
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Blood Pres.</span>
                  </div>
                  <p className="text-2xl font-bold font-poppins">{vitalsData.bpSys}<span className="text-lg text-gray-400">/{vitalsData.bpDia}</span></p>
                </div>
              </div>

              {/* 🚀 ADDED UPDATE BUTTON HERE */}
              <button 
                onClick={() => setIsVitalsModalOpen(true)}
                className="relative z-10 w-full mt-8 bg-white/10 hover:bg-white/20 text-[#dfff4f] hover:text-white font-bold font-poppins py-3.5 rounded-xl transition-all border border-white/10 backdrop-blur-sm"
              >
                Update Health Vitals
              </button>

            </div>
          </div>

        </div>

        {/* ========================================== */}
        {/* 3. SWIPER CAROUSEL (Doctors)               */}
        {/* ========================================== */}
        <div className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black font-poppins text-[#053b32]">Top Specialists</h2>
            <Link to="/team" className="text-[#0F766E] font-bold text-sm hover:underline flex items-center gap-1 group bg-[#E6F4F1] px-5 py-2.5 rounded-full">
              Directory <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
          
          <Swiper
            slidesPerView={1.2}
            spaceBetween={24}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            className="pb-4"
          >
            {MOCK_TEAM.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:border-[#0F766E]/30 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E6F4F1] to-white rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
                      {doc.img}
                    </div>
                    <div className="bg-yellow-50 text-yellow-700 font-bold text-xs px-3 py-1.5 rounded-xl flex items-center gap-1">
                      ★ {doc.rating}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-[#021814] font-poppins text-xl mb-1">{doc.name}</h3>
                  <p className="text-[#0F766E] font-semibold text-sm mb-4">{doc.specialty} <span className="text-gray-400 font-normal ml-1">• {doc.exp}</span></p>
                  
                  <Link to="/appointment" className="block w-full text-center bg-gray-50 hover:bg-[#021814] text-[#053b32] hover:text-[#dfff4f] font-bold py-3 rounded-xl transition-colors">
                    Book Consult
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🚀 ADDED MODAL HERE */}
        <UpdateVitalsModal 
          isOpen={isVitalsModalOpen} 
          onClose={() => setIsVitalsModalOpen(false)} 
          onSave={handleSaveVitals} 
        />

      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dasharray: 85, 100; }
        }
      `}</style>
    </div>
  );
};

export default PatientDashboard;