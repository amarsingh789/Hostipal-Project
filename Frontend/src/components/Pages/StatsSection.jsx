import React, { useEffect, useState } from "react";
import { MapPin, Users, HeartHandshake, Star } from "lucide-react";
import { motion } from "motion/react"; // 🚀 Added Framer Motion

// Updated Custom Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Only start when in view

  useEffect(() => {
    if (!hasStarted) return; // Wait until triggered by scroll

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
  }, [end, duration, hasStarted]); 

  // Trick: We wrap the counter in a motion div that triggers 'onViewportEnter'
  return (
    <motion.span 
      className="tabular-nums"
      onViewportEnter={() => setHasStarted(true)} // Trigger count when visible
      viewport={{ once: true }}
    >
      {count}
      {suffix}
    </motion.span>
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

 
  // ANIMATION VARIANTS  
  // Outer Container Animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Smooth ease-out
        when: "beforeChildren",   // Container pehle aayega
        staggerChildren: 0.15     // Fir items ek-ek karke aayenge
      } 
    }
  };

  // Individual Stat Items Animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="relative w-full py-16 md:py-24 bg-[#03231e] overflow-hidden font-inter">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-clinic-yellow/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-clinic-green/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Animated Glassy Ribbon Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
        >
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8 lg:gap-6 lg:divide-x divide-white/10">
            
            {stats.map((stat, index) => (
              <motion.div 
                variants={itemVariants} // Attach child variant
                key={stat.id} 
                className={`flex flex-col items-center text-center ${
                  index < 2 ? 'pb-10 lg:pb-0 border-b border-white/10 lg:border-b-0' : 'pt-2 lg:pt-0'
                } ${
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
              </motion.div>
            ))}

          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-clinic-yellow/50 rounded-tl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-clinic-yellow/50 rounded-br-lg"></div>

        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;