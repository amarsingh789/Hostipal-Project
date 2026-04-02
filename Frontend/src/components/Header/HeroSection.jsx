// import React from 'react'
// import { Stethoscope, User, ArrowUpRight, Award } from 'lucide-react'
// import doctorImg from '../../assets/doctor.webp';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <div className='relative w-full min-h-[500px] md:h-[650px] bg-clinic-green rounded-[2.5rem] overflow-hidden flex justify-center mt-4 group'>
      
//       {/* Background Text */}
//       <h1 className='absolute top-20 left-0 w-full text-center font-poppins text-[15vw] md:text-[180px] font-black text-white/5 select-none uppercase tracking-tighter leading-none z-0'>
//         Healthcare
//       </h1>

//       {/* Floating Badges */}
//       <div className="absolute top-[25%] left-[5%] md:left-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-2xl animate-bounce-slow">
//         <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300">
//           <Stethoscope size={20} />
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Result</span>
//           <span className="text-white text-sm font-semibold">Reduce HbA1c</span>
//         </div>
//       </div>

//       <div className="absolute top-[40%] right-[5%] md:right-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-2xl animate-float">
//         <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300">
//           <User size={20} />
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Lifestyle</span>
//           <span className="text-white text-sm font-semibold">No Medications</span>
//         </div>
//       </div>

//       {/* --- NEW: Doctor Name & Experience Tag --- */}
//       {/* Isse image ke paas rakha hai for better context */}
//       <div className="absolute bottom-[20%] left-[5%] md:left-[12%] z-30 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 flex items-center gap-4 animate-float delay-75">
//         <div className="w-12 h-12 rounded-2xl bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-inner">
//            <Award size={24} />
//         </div>
//         <div>
//           <h3 className="text-white font-poppins font-bold text-lg leading-tight">Dr. Ananya Singh</h3>
//           <p className="text-white/60 text-xs font-medium uppercase tracking-widest">12+ Years Experience</p>
//         </div>
//       </div>

//       {/* Doctor Image Container */}
//       <div className="absolute bottom-0 left-0 right-0 h-full flex justify-center items-end pointer-events-none z-10">
//         <img 
//           src={doctorImg} 
//           alt="Doctor" 
//           className="h-[90%] md:h-[95%] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
//           style={{
//             maskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)',
//             WebkitMaskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)'
//           }}
//         />
//       </div>

//       {/* Bottom Content Area */}
//       <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-end z-20 pointer-events-none">
        
//         <p className="max-w-[280px] text-white/60 text-[10px] md:text-[11px] tracking-[0.2em] font-medium leading-relaxed uppercase mb-6 md:mb-0 text-center md:text-left pointer-events-auto">
//           Whether you're looking for preventive care or managing a chronic condition, we are here.
//         </p>

//         <div className="flex items-center gap-3 pointer-events-auto">
//           {/* <button className="bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg active:scale-95">
//             Book Consultation
//           </button> */}
//           <Link to='/appointment' className='bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg active:scale-95'>
//             Book Consultation
//           </Link>
//           <Link to='/appointment' className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-clinic-yellow text-white hover:text-clinic-green rounded-2xl border border-white/10 transition-all duration-300 backdrop-blur-md">
//             <ArrowUpRight size={24} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection


// import React from 'react';
// import { Stethoscope, User, ArrowUpRight, Award } from 'lucide-react';
// import doctorImg from '../../assets/doctor.webp';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <div className='relative w-full h-[calc(100vh-50px)] min-h-[500px] md:h-[650px] md:min-h-[650px] bg-clinic-green rounded-3xl md:rounded-[2.5rem] overflow-hidden flex flex-col md:block mt-2 md:mt-4 group'>
      
//       {/* ── BACKGROUND TEXT ── */}
//       {/* Mobile par font size chhota, desktop par bada */}
//       <h1 className='absolute top-8 md:top-20 left-0 w-full text-center font-poppins text-[20vw] md:text-[180px] font-black text-white/5 select-none uppercase tracking-tighter leading-none z-0'>
//         Healthcare
//       </h1>

//       {/* ── FLOATING BADGES (Desktop Only - Hidden on Mobile) ── */}
//       {/* Mobile me hide kiya (hidden md:flex), sirf Tablet/Desktop pe dikhega */}
//       <div className="hidden md:flex absolute top-[25%] left-[5%] lg:left-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl animate-bounce-slow">
//         <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300">
//           <Stethoscope size={20} />
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Result</span>
//           <span className="text-white text-sm font-semibold">Reduce HbA1c</span>
//         </div>
//       </div>

//       <div className="hidden md:flex absolute top-[40%] right-[5%] lg:right-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl animate-float">
//         <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300">
//           <User size={20} />
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Lifestyle</span>
//           <span className="text-white text-sm font-semibold">No Medications</span>
//         </div>
//       </div>

//       {/* Doctor Name Tag (Mobile me upar, Desktop me left center) */}
//       <div className="absolute top-[12%] left-1/2 -translate-x-1/2 md:translate-x-0 md:top-auto md:bottom-[20%] md:left-[8%] lg:left-[12%] z-30 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full md:rounded-3xl border border-white/10 flex items-center gap-3 md:animate-float md:delay-75 w-max">
//         <div className="w-8 h-8 md:w-12 md:h-12 rounded-full md:rounded-2xl bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-inner">
//            <Award size={18} className="md:w-6 md:h-6" />
//         </div>
//         <div className="pr-2 md:pr-0">
//           <h3 className="text-white font-poppins font-bold text-sm md:text-lg leading-tight">Dr. Ananya Singh</h3>
//           <p className="text-white/60 text-[9px] md:text-xs font-medium uppercase tracking-widest">12+ Yrs Exp</p>
//         </div>
//       </div>

//       {/* ── DOCTOR IMAGE ── */}
//       {/* Mobile par height fix, Desktop par absolute full height */}
//       <div className="relative md:absolute bottom-0 left-0 right-0 h-[70%] sm:h-[75%] md:h-full flex justify-center items-end pointer-events-none z-10 mt-auto md:mt-0">
//         <img 
//           src={doctorImg} 
//           alt="Doctor" 
//           className="h-full w-auto object-contain object-bottom transition-transform duration-700 md:group-hover:scale-[1.02]"
//           style={{
//             maskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)',
//             WebkitMaskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)'
//           }}
//         />
//       </div>

//       {/* ── BOTTOM CONTENT AREA (Zomato-like clean bottom bar on mobile) ── */}
//       {/* Mobile par gradient background ke sath bottom stick karega */}
//       <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-end z-20 bg-gradient-to-t from-[#053b32] via-[#053b32]/90 to-transparent md:bg-none pointer-events-none pb-6 md:pb-10">
        
//         <p className="max-w-[280px] text-white/80 md:text-white/60 text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] font-medium leading-relaxed uppercase mb-5 md:mb-0 text-center md:text-left pointer-events-auto">
//           Whether you're looking for preventive care or managing a chronic condition, we are here.
//         </p>

//         {/* Buttons */}
//         <div className="flex items-center gap-2 md:gap-3 pointer-events-auto w-full md:w-auto px-2 md:px-0">
//           <Link 
//             to='/appointment' 
//             className='flex-1 md:flex-none text-center bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg active:scale-95 text-sm md:text-base'
//           >
//             Book Consultation
//           </Link>
//           <Link 
//             to='/appointment' 
//             className="w-[50px] h-[50px] md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white/10 hover:bg-clinic-yellow text-white hover:text-clinic-green rounded-xl md:rounded-2xl border border-white/10 transition-all duration-300 backdrop-blur-md"
//           >
//             <ArrowUpRight size={20} className="md:w-6 md:h-6" />
//           </Link>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default HeroSection;

import React from 'react';
import { Stethoscope, User, ArrowUpRight, Award } from 'lucide-react';
import doctorImg from '../../assets/doctor.webp';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='relative w-full h-[calc(100vh-50px)] min-h-[500px] md:h-[650px] md:min-h-[650px] bg-clinic-green rounded-3xl md:rounded-[2.5rem] overflow-hidden flex flex-col md:block mt-2 md:mt-4 group'>
      
      {/* ── BACKGROUND TEXT ── */}
      {/* Mobile par font size chhota, desktop par bada */}
      <h1 className='absolute top-8 md:top-20 left-0 w-full text-center font-poppins text-[20vw] md:text-[180px] font-black text-white/5 select-none uppercase tracking-tighter leading-none z-0'>
        Healthcare
      </h1>

      {/* ── FLOATING BADGES (Desktop Only - Hidden on Mobile) ── */}
      <div className="hidden md:flex absolute top-[25%] left-[5%] lg:left-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl animate-bounce-slow">
        <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300">
          <Stethoscope size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Result</span>
          <span className="text-white text-sm font-semibold">Reduce HbA1c</span>
        </div>
      </div>

      <div className="hidden md:flex absolute top-[40%] right-[5%] lg:right-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl animate-float">
        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300">
          <User size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Lifestyle</span>
          <span className="text-white text-sm font-semibold">No Medications</span>
        </div>
      </div>

      {/* Doctor Name Tag (Mobile me upar, Desktop me left center) */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 md:translate-x-0 md:top-auto md:bottom-[20%] md:left-[8%] lg:left-[12%] z-30 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full md:rounded-3xl border border-white/10 flex items-center gap-3 md:animate-float md:delay-75 w-max">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full md:rounded-2xl bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-inner">
           <Award size={18} className="md:w-6 md:h-6" />
        </div>
        <div className="pr-2 md:pr-0">
          <h3 className="text-white font-poppins font-bold text-sm md:text-lg leading-tight">Dr. Ananya Singh</h3>
          <p className="text-white/60 text-[9px] md:text-xs font-medium uppercase tracking-widest">12+ Yrs Exp</p>
        </div>
      </div>

      {/* ── DOCTOR IMAGE ── */}
      {/* 🚀 NAYA: h-[75%] sm:h-[80%] kiya hai mobile ke liye taaki image badi dikhe 🚀 */}
      <div className="relative md:absolute bottom-0 left-0 right-0 h-[75%] sm:h-[80%] md:h-full flex justify-center items-end pointer-events-none z-10 mt-auto md:mt-0">
        <img 
          src={doctorImg} 
          alt="Doctor" 
          className="h-full w-auto object-contain object-bottom transition-transform duration-700 md:group-hover:scale-[1.02]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 90%, transparent 100%)'
          }}
        />
      </div>

      {/* ── BOTTOM CONTENT AREA (Zomato-like clean bottom bar on mobile) ── */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-end z-20 bg-gradient-to-t from-[#053b32] via-[#053b32]/90 to-transparent md:bg-none pointer-events-none pb-6 md:pb-10">
        
        <p className="max-w-[280px] text-white/80 md:text-white/60 text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] font-medium leading-relaxed uppercase mb-5 md:mb-0 text-center md:text-left pointer-events-auto">
          Whether you're looking for preventive care or managing a chronic condition, we are here.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto w-full md:w-auto px-2 md:px-0">
          <Link 
            to='/appointment' 
            className='flex-1 md:flex-none text-center bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg active:scale-95 text-sm md:text-base'
          >
            Book Consultation
          </Link>
          <Link 
            to='/appointment' 
            className="w-[50px] h-[50px] md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white/10 hover:bg-clinic-yellow text-white hover:text-clinic-green rounded-xl md:rounded-2xl border border-white/10 transition-all duration-300 backdrop-blur-md"
          >
            <ArrowUpRight size={20} className="md:w-6 md:h-6" />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection;