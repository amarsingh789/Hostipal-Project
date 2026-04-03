// import React, { useEffect, useState } from "react";
// import { MapPin, Users, HeartHandshake, Star } from "lucide-react";

// // Updated Custom Counter Component (Runs immediately on load)
// const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTime = null;
//     let animationFrameId;

//     const animateCount = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
      
//       // Check if it's a float/decimal number (like 4.9)
//       const isFloat = end % 1 !== 0;
      
//       let currentCount;
//       if (isFloat) {
//         // Keeps 1 decimal place for floats
//         currentCount = Math.min((progress / duration) * end, end).toFixed(1);
//       } else {
//         // Whole numbers for regular counts
//         currentCount = Math.min(Math.floor((progress / duration) * end), end);
//       }
      
//       setCount(currentCount);

//       if (progress < duration) {
//         animationFrameId = requestAnimationFrame(animateCount);
//       } else {
//         setCount(end); // Ensure it stops exactly at the end value
//       }
//     };

//     // Start animation immediately when component loads
//     animationFrameId = requestAnimationFrame(animateCount);

//     // Cleanup function
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [end, duration]); // Re-run if end value changes

//   return (
//     <span className="tabular-nums">
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const StatsSection = () => {
//   const stats = [
//     {
//       id: 1,
//       icon: <HeartHandshake size={32} />,
//       count: 50,
//       suffix: "k+",
//       label: "Happy Patients",
//       description: "Successfully treated & recovered"
//     },
//     {
//       id: 2,
//       icon: <Users size={32} />,
//       count: 120,
//       suffix: "+",
//       label: "Expert Doctors",
//       description: "Top specialists across India"
//     },
//     {
//       id: 3,
//       icon: <MapPin size={32} />,
//       count: 15,
//       suffix: "+",
//       label: "Clinic Locations",
//       description: "World-class facilities near you"
//     },
//     {
//       id: 4,
//       icon: <Star size={32} />,
//       count: 4.9, // Float value ab perfectly count hoga (e.g., 0.0 -> 2.5 -> 4.9)
//       suffix: "/5",
//       label: "Average Rating",
//       description: "Based on 10,000+ reviews"
//     }
//   ];

//   return (
//     <div className="relative w-full py-24 bg-[#03231e] overflow-hidden font-inter">
      
//       {/* Abstract Background Glows */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-clinic-yellow/10 blur-[120px] rounded-full pointer-events-none"></div>
//       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-clinic-green/30 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* The Glassy Ribbon Container */}
//         <div className="relative w-full rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
//             {stats.map((stat, index) => (
//               <div 
//                 key={stat.id} 
//                 className={`flex flex-col items-center text-center ${index !== 0 ? 'pt-12 md:pt-0' : ''}`}
//               >
//                 {/* Icon in a glowing circle */}
//                 <div className="w-16 h-16 rounded-full bg-clinic-yellow/10 border border-clinic-yellow/20 flex items-center justify-center text-clinic-yellow mb-6 shadow-[0_0_20px_rgba(223,255,79,0.15)]">
//                   {stat.icon}
//                 </div>

//                 {/* Animated Number Counter */}
//                 <h3 className="text-5xl md:text-6xl font-black font-poppins text-white mb-2 tracking-tight">
//                   <AnimatedCounter end={stat.count} suffix={stat.suffix} />
//                 </h3>

//                 {/* Labels */}
//                 <h4 className="text-clinic-yellow font-bold text-lg mb-1 tracking-wide">
//                   {stat.label}
//                 </h4>
//                 <p className="text-white/50 text-sm font-medium">
//                   {stat.description}
//                 </p>
//               </div>
//             ))}

//           </div>

//           {/* Decorative Corner Elements */}
//           <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-clinic-yellow/50 rounded-tl-lg"></div>
//           <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-clinic-yellow/50 rounded-br-lg"></div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;

import React, { useEffect, useState } from "react";
import { MapPin, Users, HeartHandshake, Star } from "lucide-react";

// Updated Custom Counter Component (Runs immediately on load)
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const isFloat = end % 1 !== 0;
      
      let currentCount;
      if (isFloat) {
        currentCount = Math.min((progress / duration) * end, end).toFixed(1);
      } else {
        currentCount = Math.min(Math.floor((progress / duration) * end), end);
      }
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(end); 
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]); 

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <HeartHandshake size={24} className="md:w-8 md:h-8" />,
      count: 50,
      suffix: "k+",
      label: "Happy Patients",
      description: "Successfully treated"
    },
    {
      id: 2,
      icon: <Users size={24} className="md:w-8 md:h-8" />,
      count: 120,
      suffix: "+",
      label: "Expert Doctors",
      description: "Top specialists"
    },
    {
      id: 3,
      icon: <MapPin size={24} className="md:w-8 md:h-8" />,
      count: 15,
      suffix: "+",
      label: "Clinic Locations",
      description: "World-class facilities"
    },
    {
      id: 4,
      icon: <Star size={24} className="md:w-8 md:h-8" />,
      count: 4.9, 
      suffix: "/5",
      label: "Average Rating",
      description: "From 10k+ reviews"
    }
  ];

  return (
    <div className="relative w-full py-16 md:py-24 bg-[#03231e] overflow-hidden font-inter">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-clinic-yellow/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-clinic-green/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* The Glassy Ribbon Container */}
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          
          {/* 🚀 Grid System Updated: Mobile (2 cols), Desktop (4 cols) 🚀 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8 lg:gap-6 lg:divide-x divide-white/10">
            
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                // Border handling for 2x2 grid on mobile/tablet
                className={`flex flex-col items-center text-center ${
                  // Top 2 items get bottom padding and border on mobile
                  index < 2 ? 'pb-10 lg:pb-0 border-b border-white/10 lg:border-b-0' : 'pt-2 lg:pt-0'
                } ${
                  // Left items get right border on mobile
                  index % 2 === 0 ? 'border-r border-white/10 lg:border-r-0 pr-2 lg:pr-0' : 'pl-2 lg:pl-0'
                }`}
              >
                {/* Icon in a glowing circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-clinic-yellow/10 border border-clinic-yellow/20 flex items-center justify-center text-clinic-yellow mb-4 md:mb-6 shadow-[0_0_20px_rgba(223,255,79,0.15)]">
                  {stat.icon}
                </div>

                {/* Animated Number Counter */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-poppins text-white mb-1 md:mb-2 tracking-tight">
                  <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                </div>

                {/* Labels */}
                <h4 className="text-clinic-yellow font-bold text-sm sm:text-base md:text-lg mb-1 tracking-wide leading-tight">
                  {stat.label}
                </h4>
                <p className="text-white/50 text-[10px] sm:text-xs md:text-sm font-medium px-1">
                  {stat.description}
                </p>
              </div>
            ))}

          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-clinic-yellow/50 rounded-tl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-clinic-yellow/50 rounded-br-lg"></div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;