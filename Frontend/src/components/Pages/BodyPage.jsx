import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { ArrowRight, Star, Activity, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";

// 1. Icons/Sub-components
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

// 2. Services array
const services = [
  {
    type: "service",
    tag: "Instant Access",
    num: "01",
    icon: <VideoIcon />,
    title: "Instant Video Consultation",
    desc: "Connect with a certified doctor within 60 seconds, anytime.",
    stat: "60 sec connect",
    bg: "bg-gradient-to-br from-[#e8432d] to-[#b32d1c]",
    link: "/telehealth",
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
    link: "/records",
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
    link: "/dashboard",
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

// 3. Cards
const ServiceCard = ({ item, navigate }) => (
  <div
    className={`relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden ${item.bg} group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500`}
  >
    <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/5 leading-none transition-all duration-700 pointer-events-none select-none group-hover:scale-110 group-hover:-rotate-12 group-hover:text-white/10">
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
      <StartChip label={item.stat} />
      <div onClick={()=>{if(item.link) navigate(item.link)}} className="w-12 h-12 rounded-full bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-lg group-hover:scale-110 transition-transform">
        <ArrowRight size={20} />
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="relative h-[360px] rounded-[2.5rem] p-8 flex flex-col justify-between bg-white border border-gray-100 shadow-lg overflow-hidden">
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

// ==========================================
// 🚀 ANIMATION VARIANTS
// ==========================================
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// 4. Main Component
const BodyPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full py-20 bg-white overflow-hidden">
      
      <style>{`
        .mySwiper,
        .swiper,
        .swiper-wrapper,
        .swiper-slide {
          background-color: transparent !important;
        }
      `}</style>
      
      {/* 🚀 FIXED: Text Alignment and Container Size */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 md:px-12 lg:px-16 mb-12 max-w-[90rem] mx-auto" // Using a wider max-w to match full screen layouts
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
           <Activity size={16} className="text-green-600" />
           <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
             Our Capabilities
           </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins text-[#021814] mb-4 tracking-tight leading-tight">
          Pioneering Digital <br className="hidden md:block" /> Healthcare.
        </h2>
        <p className="text-gray-500 font-medium text-lg max-w-2xl leading-relaxed">
          Experience world-class healthcare from the comfort of your home with our advanced digital tools and expert team.
        </p>
      </motion.div>

      {/* Swiper Section */}
      <div className="relative w-full max-w-[100vw]">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          modules={[FreeMode, Mousewheel]}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.5, spaceBetween: 32 },
            1280: { slidesPerView: 4.2, spaceBetween: 32 },
          }}
          className="mySwiper !px-6 md:!px-12 lg:!px-16 pb-12"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                {item.type === "service" ? (
                  <ServiceCard item={item} navigate={navigate} />
                ) : (
                  <TestimonialCard item={item} />
                )}
              </motion.div>
            </SwiperSlide>
          ))}
          
          <SwiperSlide>
            <motion.div
              custom={services.length}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onClick={()=>navigate("/about")}
              className="h-[360px] rounded-[2.5rem] bg-[#053b32] p-8 flex flex-col justify-between group cursor-pointer hover:bg-black transition-colors duration-500 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#dfff4f] border border-white/10">
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-white text-3xl font-bold leading-tight">
                View All
                <br />
                Services
              </h3>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BodyPage;