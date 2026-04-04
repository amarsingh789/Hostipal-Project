// import React from "react";
// import { Star, Quote, BadgeCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

// const ReviewPage = () => {
//   return (
//     <div className="relative w-full py-20 md:py-32 px-4 sm:px-6 bg-[#053b32] overflow-hidden font-inter">
      
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-clinic-yellow opacity-10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-6">
//             <ShieldCheck size={16} className="text-clinic-yellow md:w-[18px] md:h-[18px]" />
//             <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
//               Real People. Real Care.
//             </span>
//           </div>
//           {/* Responsive Typography for Header */}
//           <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-poppins text-white leading-tight tracking-tight">
//             Stories Of <br className="hidden sm:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-yellow to-white">True Healing </span>
//           </h2>
//         </div>

//         {/* =========================================
//             THE ENHANCED BENTO GRID (Responsive)
//             ========================================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
//           {/* 1. THE GIANT PATIENT REVIEW (2x2) - Top Left */}
//           <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
//             <Quote className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 text-white/5 rotate-180 transition-transform duration-700 group-hover:scale-110" />
            
//             <div className="relative z-10">
//               <div className="flex gap-1 mb-4 md:mb-6">
//                 {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-clinic-yellow text-clinic-yellow md:w-5 md:h-5" />)}
//               </div>
//               <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight mb-4 md:mb-6">
//                 "They didn't just treat my heart condition, they treated my fear. I felt like family from day one."
//               </h3>
//               <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
//                 The entire cardiology team works like magic. The way they explained the bypass procedure calmed all my anxieties. Waking up post-surgery, I knew I was in the safest hands possible.
//               </p>
//             </div>
            
//             {/* Patient Profile & Verified Badge */}
//             <div className="relative z-10 mt-auto flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 md:pt-6">
//               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20" />
//               <div>
//                 <h4 className="text-white font-bold font-poppins text-sm md:text-base">Siddharth Menon</h4>
//                 <div className="flex items-center gap-1.5 text-clinic-yellow text-[10px] md:text-xs font-medium mt-0.5 md:mt-1">
//                   <BadgeCheck size={14} /> Verified Patient
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 2. THE TALL DOCTOR REVIEW (1x2) - Center Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-clinic-yellow text-clinic-green flex flex-col group hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_30px_-15px_rgba(223,255,79,0.3)]">
//             <HeartPulse className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-clinic-green/40 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
            
//             <p className="text-base md:text-lg font-bold font-poppins mb-6 md:mb-auto leading-snug">
//               "As a surgeon, having access to these state-of-the-art robotic operation theaters allows me to deliver 100% precision."
//             </p>
            
//             {/* Doctor Profile & Icon */}
//             <div className="mt-auto md:mt-8 bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm flex items-center gap-3">
//               <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-clinic-green/30" />
//               <div>
//                 <h4 className="font-bold font-poppins text-xs md:text-sm">Dr. Ananya S.</h4>
//                 <div className="flex items-center gap-1 text-clinic-green/80 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5 md:mt-1">
//                   <Stethoscope size={10} className="md:w-3 md:h-3" /> Chief Surgeon
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 3. TRUST SCORE CARD (1x1) - Top Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300">
//             <h3 className="text-5xl md:text-6xl font-black font-poppins text-white mb-2">4.9</h3>
//             <div className="flex gap-1 mb-2">
//               {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-clinic-yellow text-clinic-yellow" />)}
//             </div>
//             <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Based on 10k+ Reviews</p>
//           </div>

//           {/* 4. SHORT PATIENT REVIEW (1x1) - Middle Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
//             <p className="text-white/90 text-xs md:text-sm font-medium italic mb-4 md:mb-auto">
//               "Zero wait time. I was in and out of the X-Ray department in 15 minutes."
//             </p>
//             {/* Patient Profile */}
//             <div className="mt-auto md:mt-6 flex items-center gap-3">
//               <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
//               <div>
//                 <h4 className="text-white font-bold text-xs md:text-sm">Rahul V.</h4>
//                 <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-medium">
//                   <BadgeCheck size={10} className="md:w-3 md:h-3" /> Verified Patient
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 5. THE WIDE PATIENT REVIEW (2x1) - Bottom Left */}
//           <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center hover:bg-white/10 transition-colors duration-300">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
//               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl object-cover border border-white/20" />
//               <div>
//                 <p className="text-white text-sm md:text-lg font-medium mb-2 md:mb-3">
//                   "The app made everything seamless. Got my lab results and prescriptions directly on my phone. Very futuristic!"
//                 </p>
//                 <div className="flex flex-wrap items-center gap-2 md:gap-3">
//                   <span className="text-white font-bold text-xs md:text-sm">Amit Desai</span>
//                   <span className="flex items-center gap-1 text-clinic-yellow text-[10px] md:text-xs font-medium">
//                     <BadgeCheck size={12} className="md:w-3 md:h-3" /> Verified Outpatient
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 6. SECOND DOCTOR REVIEW (1x1) - Bottom Center */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-clinic-yellow/30 bg-clinic-yellow/5 backdrop-blur-md flex flex-col hover:-translate-y-1 transition-transform duration-300">
//              <p className="text-white font-bold text-xs md:text-sm mb-4 md:mb-auto">
//               "The collaborative environment here ensures every patient gets multi-disciplinary care."
//             </p>
//             {/* Doctor Profile */}
//             <div className="mt-auto md:mt-6 flex items-center gap-3">
//               <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-clinic-yellow/50" />
//               <div>
//                 <h4 className="text-white font-bold text-xs md:text-sm">Dr. Vikram J.</h4>
//                 <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5">
//                    Orthopedics
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 7. FINAL PATIENT REVIEW (1x1) - Bottom Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
//             <p className="text-white/90 text-xs md:text-sm font-medium italic mb-4 md:mb-auto">
//               "The physiotherapy wing is equipped with top-notch machines. Recovered fast."
//             </p>
//             {/* Patient Profile */}
//             <div className="mt-auto md:mt-6 flex items-center gap-3">
//               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
//               <div>
//                 <h4 className="text-white font-bold text-xs md:text-sm">Sneha K.</h4>
//                 <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-medium mt-0.5">
//                   <BadgeCheck size={10} className="md:w-3 md:h-3" /> Verified
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ReviewPage;

import React from "react";
import { Star, Quote, BadgeCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion"; // 🚀 Added Framer Motion

const ReviewPage = () => {

  // ==========================================
  // 🚀 Premium Animation Variants
  // ==========================================
  const customEase = [0.22, 1, 0.36, 1]; // Apple-style smooth glide

  const headerVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
    visible: (index) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        delay: index * 0.12, // Perfect stagger gap
        duration: 0.8, 
        ease: customEase
      } 
    })
  };

  return (
    <div className="relative w-full py-20 md:py-32 px-4 sm:px-6 bg-[#053b32] overflow-hidden font-inter">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-clinic-yellow opacity-10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 🚀 Animated Header Section */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-6">
            <ShieldCheck size={16} className="text-clinic-yellow md:w-[18px] md:h-[18px]" />
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
              Real People. Real Care.
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-poppins text-white leading-tight tracking-tight">
            Stories Of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-yellow to-white">True Healing </span>
          </h2>
        </motion.div>

        {/* =========================================
            🚀 THE ANIMATED BENTO GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. THE GIANT PATIENT REVIEW (2x2) - Top Left */}
          <motion.div 
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }} // Replaced tailwind hover for smoothness
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group transition-colors duration-500 overflow-hidden"
          >
            <Quote className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 text-white/5 rotate-180 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-clinic-yellow text-clinic-yellow md:w-5 md:h-5" />)}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight mb-4 md:mb-6">
                "They didn't just treat my heart condition, they treated my fear. I felt like family from day one."
              </h3>
              <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                The entire cardiology team works like magic. The way they explained the bypass procedure calmed all my anxieties. Waking up post-surgery, I knew I was in the safest hands possible.
              </p>
            </div>
            
            {/* Patient Profile & Verified Badge */}
            <div className="relative z-10 mt-auto flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 md:pt-6">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20" />
              <div>
                <h4 className="text-white font-bold font-poppins text-sm md:text-base">Siddharth Menon</h4>
                <div className="flex items-center gap-1.5 text-clinic-yellow text-[10px] md:text-xs font-medium mt-0.5 md:mt-1">
                  <BadgeCheck size={14} /> Verified Patient
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. THE TALL DOCTOR REVIEW (1x2) - Center Right */}
          <motion.div 
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-2 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-clinic-yellow text-clinic-green flex flex-col group transition-colors duration-500 shadow-[0_10px_30px_-15px_rgba(223,255,79,0.3)]"
          >
            <HeartPulse className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-clinic-green/40 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
            
            <p className="text-base md:text-lg font-bold font-poppins mb-6 md:mb-auto leading-snug">
              "As a surgeon, having access to these state-of-the-art robotic operation theaters allows me to deliver 100% precision."
            </p>
            
            {/* Doctor Profile & Icon */}
            <div className="mt-auto md:mt-8 bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-clinic-green/30" />
              <div>
                <h4 className="font-bold font-poppins text-xs md:text-sm">Dr. Ananya S.</h4>
                <div className="flex items-center gap-1 text-clinic-green/80 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5 md:mt-1">
                  <Stethoscope size={10} className="md:w-3 md:h-3" /> Chief Surgeon
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. TRUST SCORE CARD (1x1) - Top Right */}
          <motion.div 
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="text-5xl md:text-6xl font-black font-poppins text-white mb-2">4.9</h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-clinic-yellow text-clinic-yellow" />)}
            </div>
            <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Based on 10k+ Reviews</p>
          </motion.div>

          {/* 4. SHORT PATIENT REVIEW (1x1) - Middle Right */}
          <motion.div 
            custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <p className="text-white/90 text-xs md:text-sm font-medium italic mb-4 md:mb-auto">
              "Zero wait time. I was in and out of the X-Ray department in 15 minutes."
            </p>
            {/* Patient Profile */}
            <div className="mt-auto md:mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Rahul V.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-medium">
                  <BadgeCheck size={10} className="md:w-3 md:h-3" /> Verified Patient
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. THE WIDE PATIENT REVIEW (2x1) - Bottom Left */}
          <motion.div 
            custom={4} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl object-cover border border-white/20" />
              <div>
                <p className="text-white text-sm md:text-lg font-medium mb-2 md:mb-3">
                  "The app made everything seamless. Got my lab results and prescriptions directly on my phone. Very futuristic!"
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="text-white font-bold text-xs md:text-sm">Amit Desai</span>
                  <span className="flex items-center gap-1 text-clinic-yellow text-[10px] md:text-xs font-medium">
                    <BadgeCheck size={12} className="md:w-3 md:h-3" /> Verified Outpatient
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. SECOND DOCTOR REVIEW (1x1) - Bottom Center */}
          <motion.div 
            custom={5} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-clinic-yellow/30 bg-clinic-yellow/5 backdrop-blur-md flex flex-col transition-colors duration-300"
          >
             <p className="text-white font-bold text-xs md:text-sm mb-4 md:mb-auto">
              "The collaborative environment here ensures every patient gets multi-disciplinary care."
            </p>
            {/* Doctor Profile */}
            <div className="mt-auto md:mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-clinic-yellow/50" />
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Dr. Vikram J.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5">
                   Orthopedics
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. FINAL PATIENT REVIEW (1x1) - Bottom Right */}
          <motion.div 
            custom={6} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <p className="text-white/90 text-xs md:text-sm font-medium italic mb-4 md:mb-auto">
              "The physiotherapy wing is equipped with top-notch machines. Recovered fast."
            </p>
            {/* Patient Profile */}
            <div className="mt-auto md:mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Sneha K.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[9px] md:text-[10px] font-medium mt-0.5">
                  <BadgeCheck size={10} className="md:w-3 md:h-3" /> Verified
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ReviewPage;