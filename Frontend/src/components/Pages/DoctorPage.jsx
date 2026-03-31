// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Search, Filter, Star, Clock, MapPin, CalendarCheck, ChevronRight } from 'lucide-react';
// import { Badge } from "@/components/ui/badge"; // Shadcn Badge (Agar aapne install kiya hai toh, nahi toh normal span use kar lena)

// // ── Mock Data (Aapke project se liya gaya hai) ────────────────────────────────
// const SPECIALTIES = [
//   { id: "all", label: "All Specialties" },
//   { id: "cardiology", label: "Cardiology" },
//   { id: "neurology", label: "Neurology" },
//   { id: "orthopedics", label: "Orthopedics" },
//   { id: "general", label: "General Med" },
//   { id: "pediatrics", label: "Pediatrics" },
//   { id: "gastroenterology", label: "Gastroenterology" },
// ];

// const DOCTORS = [
//   { id: "d1", name: "Dr. Ananya Sharma", specialty: "cardiology", exp: "15 Yrs", rating: 4.9, reviews: 124, img: "👩‍⚕️" },
//   { id: "d2", name: "Dr. Rahul Verma", specialty: "gastroenterology", exp: "10+ Yrs", rating: 4.7, reviews: 89, img: "👨‍⚕️" },
//   { id: "d3", name: "Dr. Neha Kapoor", specialty: "pediatrics", exp: "9+ Yrs", rating: 4.6, reviews: 56, img: "👩‍⚕️" },
//   { id: "d4", name: "Dr. Vikram Joshi", specialty: "general", exp: "11 Yrs", rating: 4.7, reviews: 110, img: "👨‍⚕️" },
//   { id: "d5", name: "Dr. Akash Kumar", specialty: "gastroenterology", exp: "8 Yrs", rating: 4.8, reviews: 75, img: "👨‍⚕️" },
//   { id: "d6", name: "Dr. Rohan Gupta", specialty: "cardiology", exp: "10 Yrs", rating: 4.7, reviews: 92, img: "👨‍⚕️" },
//   { id: "d7", name: "Dr. Priya Verma", specialty: "neurology", exp: "12 Yrs", rating: 4.8, reviews: 140, img: "👩‍⚕️" },
//   { id: "d8", name: "Dr. Arjun Singh", specialty: "orthopedics", exp: "8 Yrs", rating: 4.6, reviews: 64, img: "👨‍⚕️" },
//   { id: "d9", name: "Dr. Meera Patel", specialty: "general", exp: "20 Yrs", rating: 5.0, reviews: 312, img: "👩‍⚕️" },
// ];

// const DoctorPage = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSpecialty, setSelectedSpecialty] = useState('all');

//   // Filter Logic
//   const filteredDoctors = DOCTORS.filter((doc) => {
//     const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSpecialty = selectedSpecialty === 'all' || doc.specialty === selectedSpecialty;
//     return matchesSearch && matchesSpecialty;
//   });

//   const handleBookNow = (doctorId) => {
//     // Navigate to appointment page. You can pass the doctor ID in state or URL if needed.
//     navigate('/appointment', { state: { preSelectedDoctorId: doctorId } });
//   };

//   return (
//     <div className="min-h-screen bg-[#F6F9F8] font-inter pt-28 pb-20">
      
//       {/* ── HEADER / HERO SECTION ── */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
//         <div className="bg-[#053b32] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
//           {/* Abstract Background Elements */}
//           <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-[#0F766E] rounded-full blur-[100px] opacity-60"></div>
//           <div className="absolute bottom-[-20%] left-[-5%] w-72 h-72 bg-[#dfff4f] rounded-full blur-[100px] opacity-20"></div>

//           <div className="relative z-10 max-w-2xl">
//             <span className="text-[#dfff4f] font-bold tracking-widest uppercase text-sm mb-4 block">Meet Our Experts</span>
//             <h1 className="text-4xl md:text-6xl font-black font-poppins mb-6 leading-tight">
//               Find the Right <br/> <span className="text-[#dfff4f]">Doctor</span> for You.
//             </h1>
//             <p className="text-[#E6F4F1] text-lg opacity-90 mb-8 max-w-lg">
//               Our team of highly qualified specialists is here to provide you with the best possible care.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
        
//         {/* ── SIDEBAR (Filters) ── */}
//         <div className="w-full lg:w-1/4 flex flex-col gap-6">
          
//           {/* Search Box */}
//           <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
//             <h3 className="font-bold font-poppins text-[#021814] mb-4 flex items-center gap-2">
//               <Search size={18} className="text-[#0F766E]" /> Search
//             </h3>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search doctors, specialties..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full h-12 pl-4 pr-10 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all text-sm"
//               />
//               {searchTerm && (
//                 <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Specialty Filter */}
//           <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
//             <h3 className="font-bold font-poppins text-[#021814] mb-4 flex items-center gap-2">
//               <Filter size={18} className="text-[#0F766E]" /> Specialties
//             </h3>
//             <div className="flex flex-col gap-2">
//               {SPECIALTIES.map((spec) => (
//                 <button
//                   key={spec.id}
//                   onClick={() => setSelectedSpecialty(spec.id)}
//                   className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
//                     selectedSpecialty === spec.id
//                       ? "bg-[#0F766E] text-white shadow-md"
//                       : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-[#0F766E]"
//                   }`}
//                 >
//                   <span className="capitalize">{spec.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* ── MAIN CONTENT (Doctors List) ── */}
//         <div className="w-full lg:w-3/4">
          
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold font-poppins text-[#021814]">
//               {selectedSpecialty === 'all' ? 'All Doctors' : `${SPECIALTIES.find(s => s.id === selectedSpecialty)?.label} Specialists`}
//             </h2>
//             <span className="text-gray-500 font-medium text-sm bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
//               {filteredDoctors.length} found
//             </span>
//           </div>

//           {filteredDoctors.length === 0 ? (
//             <div className="bg-white rounded-[2rem] p-16 text-center border border-gray-100 shadow-sm">
//               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Search size={32} className="text-gray-400" />
//               </div>
//               <h3 className="text-xl font-bold text-[#021814] mb-2">No doctors found</h3>
//               <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
//               <button 
//                 onClick={() => {setSearchTerm(''); setSelectedSpecialty('all');}}
//                 className="mt-6 text-[#0F766E] font-semibold hover:underline"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredDoctors.map((doc) => (
//                 <div 
//                   key={doc.id} 
//                   className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
//                 >
//                   <div>
//                     {/* Top Row: Image & Rating */}
//                     <div className="flex justify-between items-start mb-6">
//                       <div className="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-[#E6F4F1] to-[#F6F9F8] flex items-center justify-center text-4xl shadow-inner border border-white group-hover:scale-105 transition-transform">
//                         {doc.img}
//                       </div>
//                       <div className="flex flex-col items-end">
//                         <div className="bg-yellow-50 text-yellow-700 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 border border-yellow-100">
//                           <Star size={12} className="fill-yellow-500 text-yellow-500" /> {doc.rating}
//                         </div>
//                         <span className="text-[10px] text-gray-400 font-semibold mt-1 uppercase tracking-wider">{doc.reviews} Reviews</span>
//                       </div>
//                     </div>

//                     {/* Info */}
//                     <h3 className="text-xl font-bold font-poppins text-[#021814] mb-1">{doc.name}</h3>
//                     <p className="text-[#0F766E] font-semibold text-sm capitalize mb-4">
//                       {doc.specialty} Specialist
//                     </p>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 gap-3 mb-6">
//                       <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-3">
//                         <Clock size={16} className="text-gray-400" />
//                         <div>
//                           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Experience</p>
//                           <p className="font-semibold text-gray-800 text-sm">{doc.exp}</p>
//                         </div>
//                       </div>
//                       <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-3">
//                         <MapPin size={16} className="text-gray-400" />
//                         <div>
//                           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Location</p>
//                           <p className="font-semibold text-gray-800 text-sm">Ziva Clinic</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action Button */}
//                   <button 
//                     onClick={() => handleBookNow(doc.id)}
//                     className="w-full flex items-center justify-center gap-2 bg-[#053b32] hover:bg-[#0F766E] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#053b32]/20"
//                   >
//                     <CalendarCheck size={18} /> Book Appointment
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DoctorPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Clock, MapPin, CalendarCheck, ArrowRight, ShieldCheck } from 'lucide-react';

// ── Mock Data ──────────────────────────────────────────────────────────────────
const SPECIALTIES = [
  { id: "all", label: "All Specialists", icon: "🌟" },
  { id: "cardiology", label: "Cardiology", icon: "🫀" },
  { id: "neurology", label: "Neurology", icon: "🧠" },
  { id: "orthopedics", label: "Orthopedics", icon: "🦴" },
  { id: "general", label: "General Med", icon: "🩺" },
  { id: "pediatrics", label: "Pediatrics", icon: "👶" },
  { id: "gastroenterology", label: "Gastro", icon: "🦠" },
];

const DOCTORS = [
  { id: "d1", name: "Dr. Ananya Sharma", specialty: "cardiology", exp: "15 Yrs", rating: 4.9, reviews: 124, img: "👩‍⚕️", available: true, nextSlot: "Today, 02:00 PM" },
  { id: "d2", name: "Dr. Rahul Verma", specialty: "gastroenterology", exp: "10+ Yrs", rating: 4.7, reviews: 89, img: "👨‍⚕️", available: true, nextSlot: "Tomorrow, 10:00 AM" },
  { id: "d3", name: "Dr. Neha Kapoor", specialty: "pediatrics", exp: "9+ Yrs", rating: 4.6, reviews: 56, img: "👩‍⚕️", available: false, nextSlot: "Wed, 09:30 AM" },
  { id: "d4", name: "Dr. Vikram Joshi", specialty: "general", exp: "11 Yrs", rating: 4.7, reviews: 110, img: "👨‍⚕️", available: true, nextSlot: "Today, 04:30 PM" },
  { id: "d5", name: "Dr. Akash Kumar", specialty: "gastroenterology", exp: "8 Yrs", rating: 4.8, reviews: 75, img: "👨‍⚕️", available: true, nextSlot: "Today, 06:00 PM" },
  { id: "d6", name: "Dr. Rohan Gupta", specialty: "cardiology", exp: "10 Yrs", rating: 4.7, reviews: 92, img: "👨‍⚕️", available: false, nextSlot: "Thu, 11:00 AM" },
  { id: "d7", name: "Dr. Priya Verma", specialty: "neurology", exp: "12 Yrs", rating: 4.8, reviews: 140, img: "👩‍⚕️", available: true, nextSlot: "Today, 01:00 PM" },
  { id: "d8", name: "Dr. Arjun Singh", specialty: "orthopedics", exp: "8 Yrs", rating: 4.6, reviews: 64, img: "👨‍⚕️", available: true, nextSlot: "Tomorrow, 03:00 PM" },
];

export default function DoctorPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState('all');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = activeSpecialty === 'all' || doc.specialty === activeSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookNow = (doctorId) => {
    navigate('/appointment', { state: { preSelectedDoctorId: doctorId } });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-inter pb-24">
      
      {/* ── 1. HERO SECTION (Immersive & Dark) ── */}
      <div className="relative bg-[#021814] pt-32 pb-40 px-6 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#0F766E] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#dfff4f] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Badge className="bg-white/10 text-[#dfff4f] border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2 backdrop-blur-md">
            <ShieldCheck size={14} /> Verified Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black font-poppins text-white leading-tight mb-6">
            Find Your <span className="text-[#dfff4f] relative inline-block">
              Perfect Doctor
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#0F766E]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-[#a8cfc3] text-lg max-w-2xl mx-auto font-medium">
            Book appointments with top-rated specialists in your city. Real-time availability, verified reviews, and seamless booking.
          </p>
        </div>
      </div>

      {/* ── 2. FLOATING SEARCH & FILTERS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-20">
        
        {/* Floating Search Bar */}
        <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl shadow-[#053b32]/10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 border border-white/50 backdrop-blur-xl mb-12">
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2">
            <Search className="text-[#0F766E]" size={22} />
            <input 
              type="text" 
              placeholder="Search doctors by name or specialty..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none focus:outline-none text-[#021814] font-medium placeholder:text-gray-400 text-lg"
            />
          </div>
          <button className="w-full md:w-auto bg-[#053b32] hover:bg-[#0F766E] text-[#dfff4f] font-bold font-poppins px-8 py-4 md:py-3 rounded-xl md:rounded-full transition-all shadow-lg">
            Search
          </button>
        </div>

        {/* Horizontal Specialty Pills */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-8 snap-x">
          {SPECIALTIES.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveSpecialty(spec.id)}
              className={`snap-start whitespace-nowrap flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold transition-all duration-300 ${
                activeSpecialty === spec.id 
                ? 'bg-[#0F766E] text-white shadow-lg shadow-[#0F766E]/20 scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="text-xl">{spec.icon}</span> 
              {spec.label}
            </button>
          ))}
        </div>

        {/* ── 3. DOCTORS GRID (Premium Profile Cards) ── */}
        <div className="mb-6 flex justify-between items-end">
          <h2 className="text-2xl font-bold font-poppins text-[#021814]">
            {activeSpecialty === 'all' ? 'Featured Specialists' : `${SPECIALTIES.find(s => s.id === activeSpecialty)?.label} Doctors`}
          </h2>
          <p className="text-gray-500 font-medium text-sm">{filteredDoctors.length} results</p>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-16 text-center border border-gray-100 shadow-sm mt-8">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-2xl font-bold text-[#021814] mb-2">No specialists found</h3>
            <p className="text-gray-500">We couldn't find any doctor matching your criteria.</p>
            <button onClick={() => {setSearchTerm(''); setActiveSpecialty('all');}} className="mt-6 bg-gray-100 text-[#0F766E] px-6 py-2 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div 
                key={doc.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl hover:shadow-[#0F766E]/10 transition-all duration-500 group flex flex-col hover:-translate-y-2"
              >
                
                {/* Card Header (Cover Photo Style) */}
                <div className="h-24 bg-gradient-to-r from-[#E6F4F1] to-[#F4F7F6] relative">
                  {/* Rating Badge Floating */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-white">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-800">{doc.rating}</span>
                  </div>
                </div>

                <div className="px-6 pb-6 relative flex-1 flex flex-col">
                  {/* Avatar overlapping cover */}
                  <div className="relative w-20 h-20 -mt-10 mx-auto mb-4">
                    <div className="w-full h-full rounded-2xl bg-white p-1 shadow-md">
                      <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center text-4xl">
                        {doc.img}
                      </div>
                    </div>
                    {/* Live Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 rounded-full ${doc.available ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold font-poppins text-[#021814] leading-tight">{doc.name}</h3>
                    <p className="text-[#0F766E] text-sm font-semibold capitalize mt-1">{doc.specialty} Specialist</p>
                  </div>

                  {/* Mini Stats Bento */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Experience</p>
                      <p className="text-sm font-bold text-gray-800">{doc.exp}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Reviews</p>
                      <p className="text-sm font-bold text-gray-800">{doc.reviews}+</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {/* Availability Tag */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-3 justify-center">
                      <Clock size={14} className={doc.available ? "text-green-500" : "text-gray-400"} />
                      Next Slot: <span className={doc.available ? "text-green-600 font-bold" : "text-gray-600"}>{doc.nextSlot}</span>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => handleBookNow(doc.id)}
                      className="w-full h-12 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 bg-gray-50 text-[#053b32] group-hover:bg-[#053b32] group-hover:text-[#dfff4f]"
                    >
                      Book Consult <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* Hide scrollbar for horizontal scrolling filters */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// Chhota sa Badge component agar Shadcn ka import nahi chal raha ho
function Badge({ children, className }) {
  return <span className={className}>{children}</span>;
}