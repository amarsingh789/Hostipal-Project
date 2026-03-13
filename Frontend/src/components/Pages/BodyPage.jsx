// import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'

// const BodyPage = () => {
//   return (
//     <div>
//       <Swiper>
//         <SwiperSlide>Slide 1</SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default BodyPage

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Mousewheel } from 'swiper/modules';
// import { ArrowRight, Star } from 'lucide-react';

// // Swiper Styles
// import 'swiper/css';
// import 'swiper/css/free-mode';

// const services = [
//   {
//     type: 'service',
//     tag: 'Instant Access',
//     num: '01',
//     icon: <VideoIcon />,
//     title: 'Instant Video Consultation',
//     desc: 'Connect with a certified doctor within 60 seconds, anytime.',
//     stat: '60 sec connect',
//     bg: 'bg-gradient-to-br from-[#e8432d] to-[#b32d1c]',
//   },
//   {
//     type: 'testimonial',
//     author: 'Michael Johnson',
//     initials: 'MJ',
//     authorSub: 'Diabetes Patient · 2 yrs',
//     quote: '"From preventive care to managing complex conditions, their team truly cares."',
//   },
//   // ... baki services aap as it is rakh sakte hain
// ];

// const BodyPage = () => {
//   return (
//     <div className="w-full py-16 bg-[#f8fafc]">
//       <div className="px-6 mb-8 flex justify-between items-end">
//         <div>
//           <h2 className="text-3xl font-black text-clinic-green font-poppins tracking-tight">Our Services</h2>
//           <p className="text-gray-500 text-sm mt-1">Quality care at your fingertips</p>
//         </div>
//       </div>

//       <Swiper
//         slidesPerView={1.2}
//         spaceBetween={20}
//         freeMode={true}
//         mousewheel={{ forceToAxis: true }}
//         modules={[FreeMode, Mousewheel]}
//         breakpoints={{
//           640: { slidesPerView: 2.2 },
//           1024: { slidesPerView: 3.5 },
//         }}
//         className="px-6"
//       >
//         {services.map((item, i) => (
//           <SwiperSlide key={i}>
//             {item.type === 'service' ? (
//               <ServiceCard item={item} />
//             ) : (
//               <TestimonialCard item={item} />
//             )}
//           </SwiperSlide>
//         ))}

//         {/* End Card - Modern look */}
//         <SwiperSlide>
//           <div className="h-[360px] rounded-[2.5rem] bg-clinic-green p-8 flex flex-col justify-between group cursor-pointer hover:bg-black transition-colors duration-500">
//              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-clinic-yellow border border-white/10">
//                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//              </div>
//              <h3 className="text-white text-3xl font-bold leading-tight">View All<br/>Services</h3>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// // --- Sub Components ---

// const ServiceCard = ({ item }) => (
//   <div className={`relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden ${item.bg} group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}>
//     {/* Animated Watermark */}
//     <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/5 leading-none transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
//       {item.num}
//     </span>

//     <div className="z-10">
//       <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-lg">
//         {item.icon}
//       </div>
//       <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
//       <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
//     </div>

//     <div className="flex items-center justify-between z-10">
//       <div className="px-4 py-2 rounded-xl bg-black/10 border border-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
//         {item.stat}
//       </div>
//       <div className="w-12 h-12 rounded-full bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-lg group-hover:scale-110 transition-transform">
//         <ArrowRight size={20} />
//       </div>
//     </div>
//   </div>
// );

// const TestimonialCard = ({ item }) => (
//   <div className="relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between bg-white border border-gray-100 shadow-xl overflow-hidden">
//     {/* Mesh Gradient Background Layer */}
//     <div className="absolute inset-0 opacity-40 pointer-events-none"
//       style={{ background: 'radial-gradient(at 0% 0%, #dcfce7 0px, transparent 50%), radial-gradient(at 100% 100%, #fef9c3 0px, transparent 50%)' }} />

//     <div className="z-10">
//       <div className="flex gap-1 mb-6">
//         {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
//       </div>
//       <p className="text-clinic-green font-medium text-lg leading-snug italic">"{item.quote}"</p>
//     </div>

//     <div className="flex items-center gap-4 z-10 pt-6 border-t border-gray-100">
//       <div className="w-12 h-12 rounded-2xl bg-clinic-green flex items-center justify-center text-white font-bold">
//         {item.initials}
//       </div>
//       <div>
//         <p className="text-clinic-green font-bold text-sm">{item.author}</p>
//         <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{item.authorSub}</p>
//       </div>
//     </div>
//   </div>
// );

// const VideoIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
//     <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//   </svg>
// );

// export default BodyPage;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { ArrowRight, Star, Activity, FileText } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

// 1. Pehle Icons/Sub-components define karein
const VideoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="text-white"
  >
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

// 2. Phir Services array (Ab isse VideoIcon mil jayega)
const services = [
  {
    type: "service",
    tag: "Instant Access",
    num: "01",
    icon: <VideoIcon />, // Ab error nahi aayega
    title: "Instant Video Consultation",
    desc: "Connect with a certified doctor within 60 seconds, anytime.",
    stat: "60 sec connect",
    bg: "bg-gradient-to-br from-[#e8432d] to-[#b32d1c]",
  },
  {
    type: "service",
    num: "02",
    tag: "Prescriptions",
    icon: <FileText size={28} strokeWidth={2.5} color="white"/>,
    title: "Digital Prescriptions",
    desc: "Get e-prescriptions sent directly to your pharmacy in minutes.",
    stat: "Pharmacy-ready",
    bg: "bg-gradient-to-br from-[#f07c3a] to-[#c45e1e]",
  },
  {
    type: "testimonial",
    author: "Michael Johnson",
    initials: "MJ",
    authorSub: "Diabetes Patient · 2 yrs",
    quote:
      '"From preventive care to managing complex conditions, their team truly cares."',
  },
  {
    type: "service",
    num: "03",
    tag: "Live Session",
    icon: <Activity size={28} strokeWidth={2.5} color="white" />,
    title: "Live Health Monitoring",
    desc: "Track vitals in real-time with your doctor present online.",
    stat: "Real-time",
    bg: "bg-gradient-to-br from-[#2563eb] to-[#1440a8]",
  },
];

const LiveDot = () => (
  <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse shrink-0" />
);

const StartChip = ({ label }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/15 border border-white/10 text-white text-[11px] font-bold uppercase tracking-wider">
    <LiveDot />
    {label}
  </div>
  );

// 3. Phir baaki Cards
const ServiceCard = ({ item }) => (
  // ... aapka code
  <div
    className={`relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden ${item.bg} group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}
  >
    <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/5 leading-none   transition-all duration-700 pointer-events-none select-none group-hover:scale-110 group-hover:-rotate-12 group-hover:text-white/10">
      {item.num}
    </span>
    <div className="z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-lg">
        {item.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
        {item.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
        {item.desc}
      </p>
    </div>
    <div className="flex items-center justify-between z-10">
        <StartChip label={item.tag} />
        
    </div>
    <div className="flex items-center justify-between z-10">
      <div className="px-4 py-2 rounded-xl bg-black/10 border border-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
        {item.stat}
      </div>
      <div className="w-12 h-12 rounded-full bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-lg group-hover:scale-110 transition-transform">
        <ArrowRight size={20} />
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ item }) => (
  // ... aapka code
  <div className="relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between bg-white border border-gray-100 shadow-xl overflow-hidden">
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        background:
          "radial-gradient(at 0% 0%, #dcfce7 0px, transparent 50%), radial-gradient(at 100% 100%, #fef9c3 0px, transparent 50%)",
      }}
    />
    <div className="z-10">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-clinic-green font-medium text-lg leading-snug italic">
        "{item.quote}"
      </p>
    </div>
    <div className="flex items-center gap-4 z-10 pt-6 border-t border-gray-100">
      <div className="w-12 h-12 rounded-2xl bg-clinic-green flex items-center justify-center text-white font-bold">
        {item.initials}
      </div>
      <div>
        <p className="text-clinic-green font-bold text-sm">{item.author}</p>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
          {item.authorSub}
        </p>
      </div>
    </div>
  </div>
);

// 4. Last mein Main Component
const BodyPage = () => {
  return (
    <div className="w-full py-16 bg-[#f8fafc]">
      {/* ... Swiper aur baaki JSX ... */}
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Mousewheel]}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-6"
      >
        {services.map((item, i) => (
          <SwiperSlide key={i}>
            {item.type === "service" ? (
              <ServiceCard item={item} />
            ) : (
              <TestimonialCard item={item} />
            )}
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="h-[360px] rounded-[2.5rem] bg-clinic-green p-8 flex flex-col justify-between group cursor-pointer hover:bg-black transition-colors duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-clinic-yellow border border-white/10">
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </div>
            <h3 className="text-white text-3xl font-bold leading-tight">
              View All
              <br />
              Services
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BodyPage;
