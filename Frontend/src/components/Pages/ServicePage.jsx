// import React from 'react'

// const ServicePage = () => {
//   return (
//     <div className="relative w-full py-24 px-6 bg-[#c5cfd9] overflow-hidden">
//       <div className="relative z-10 header-box max-w-3xl mx-auto text-center mb-20">
//         <h1 className="text-4xl md:text-6xl font-black font-poppins text-gray-900 mb-6 leading-tight tracking-tighter">
//           Services For Your{" "}
//           <br className="hidden md:block" />
//           <span className="text-clinic-green/70 relative inline-block">
//             Health
//             {/* Custom Underline */}
//             <svg className="absolute w-full h-4 -bottom-2 left-0 text-black/30" viewBox="0 0 100 20" preserveAspectRatio="none">
//               <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//             </svg>
//           </span>
//         </h1>
//         <p className="text-black/70 text-lg font-inter max-w-xl mx-auto">
//           Your health, your doctor, your way and we'll take care of the rest.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default ServicePage

import React from "react";

const ServicePage = () => {
  return (
    // 1. Soft Gradient Background for depth
    <div className="relative w-full py-28 px-6 bg-gradient-to-b from-[#f8fafc] to-[#c5cfd9] overflow-hidden">
      {/* 2. Decorative Ambient Orbs (Soft Glows in background) */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-clinic-yellow/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 header-box max-w-4xl mx-auto text-center">
        {/* 3. Premium Top Badge with a pulsing dot */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/40 shadow-sm backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-clinic-green animate-pulse"></span>
          <span className="text-xs font-bold text-clinic-green uppercase tracking-widest">
            Our Expertise
          </span>
        </div>

        {/* 4. Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl font-black font-poppins text-gray-900 mb-6 leading-[1.1] tracking-tighter">
          Services For Your <br className="hidden md:block" />
          <span className="text-clinic-green relative inline-block">
            Health
            {/* Custom Underline (Thicker and matching theme) */}
            {/* <svg className="absolute w-full h-5 -bottom-2 left-0 text-gradient-to-br from-[#f07c3a] to-[#c45e1e]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg> */}
            <svg
              className="absolute w-full h-5 -bottom-2 left-0"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              {/* Gradient Define Yahan Hota Hai */}
              <defs>
                <linearGradient
                  id="orangeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f07c3a" />
                  <stop offset="100%" stopColor="#c45e1e" />
                </linearGradient>
              </defs>

              {/* Path mein stroke="url(#orangeGradient)" lagaya hai */}
              <path
                d="M0 15 Q 50 0 100 15"
                fill="none"
                stroke="url(#orangeGradient)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl font-inter max-w-2xl mx-auto leading-relaxed mt-8">
          Your health, your doctor, your way—and we'll take care of the rest
          with our world-class medical facilities.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
