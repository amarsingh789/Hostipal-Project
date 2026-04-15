import React from "react";
import { HeartPulse, HeartHandshake, ArrowRight, CheckCircle2, ShieldAlert, Syringe, Activity } from 'lucide-react';
import { motion } from "motion/react"; 
import { Link } from "react-router-dom";

const ServicePage = () => {
  const services = [
    {
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostics and treatments.",
      icon: <HeartPulse size={36} strokeWidth={1.5} />,
      features: [
        "State-of-the-art cardiac imaging",
        "Minimally invasive procedures",
        "Personalized treatment plans"
      ],
      accentColor: "text-red-500",
      bgAccent: "bg-red-500",
      borderAccent: "group-hover:border-red-200",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]",
      size: "md:col-span-2 lg:col-span-2", 
      isWide: true,
    },
    {
      title: "Check Up",
      description: "Regular health assessments to keep you in optimal condition.",
      icon: <HeartHandshake size={32} strokeWidth={1.5} />,
      features: [
        "Comprehensive health evaluations",
        "Preventive care strategies",
        "Personalized wellness plans"
      ],
      accentColor: "text-blue-500",
      bgAccent: "bg-blue-500",
      borderAccent: "group-hover:border-blue-200",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]",
      size: "col-span-1",
      isWide: false,
    },
    {
      title: "Emergency Care",
      description: "24/7 availability of expert medical professionals for critical situations.",
      icon: <ShieldAlert size={32} strokeWidth={1.5} />,
      features: [
        "Round-the-clock medical support",
        "Rapid response to emergencies",
        "Advanced life-saving techniques"
      ],
      accentColor: "text-orange-500",
      bgAccent: "bg-orange-500",
      borderAccent: "group-hover:border-orange-200",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)]",
      size: "col-span-1",
      isWide: false,
    },
    {
      title: "Dental Care",
      description: "Comprehensive dental services for a healthy and beautiful smile.",
      icon: <Syringe size={32} strokeWidth={1.5} />,
      features: [
        "Preventive dental care",
        "Cosmetic dentistry",
        "Advanced restorative treatments"
      ],
      accentColor: "text-teal-500",
      bgAccent: "bg-teal-500",
      borderAccent: "group-hover:border-teal-200",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]",
      size: "col-span-1",
      isWide: false,
    },
    {
      title: "Gastroenterology",
      description: "Expert care for digestive health and gastrointestinal disorders.",
      icon: <Activity size={32} strokeWidth={1.5} />,
      features: [
        "Advanced endoscopic procedures",
        "Personalized treatment plans",
        "Comprehensive digestive health management"
      ],
      accentColor: "text-indigo-500",
      bgAccent: "bg-indigo-500",
      borderAccent: "group-hover:border-indigo-200",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]",
      size: "col-span-1",
      isWide: false,
    }
  ];

 
  const customEase = [0.22, 1, 0.36, 1]; 

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
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }, 
    visible: (index) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        delay: index * 0.15, 
        duration: 0.8, 
        ease: customEase
      } 
    })
  };

  return (
    <div className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden" id="services">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-teal-200/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/*  Animated  */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 hover:shadow-md transition-shadow cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              Departments of Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-poppins text-[#0F172A] mb-6 leading-tight tracking-tight">
            Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Excellence</span> <br className="hidden md:block" />
            Tailored For You
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-inter leading-relaxed max-w-2xl">
            From routine check-ups to specialized treatments, our world-class facilities are designed to prioritize your well-being.
          </p>
        </motion.div>

        {/*  Animated Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div 
                // 🚀 Attach child animation and pass the index
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Directly triggered on scroll
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }} 
                key={index} 
                className={`relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[2.5rem] p-8 flex group transition-colors duration-500 ${service.borderAccent} ${service.shadowAccent} ${service.size} cursor-pointer overflow-hidden ${service.isWide ? 'flex-col md:flex-row md:items-center gap-10' : 'flex-col'}`}
              >
                {/* Big Ghost Icon in Background */}
                <div className={`absolute -bottom-4 -right-4 opacity-[0.03] transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none ${service.accentColor}`}>
                  {React.cloneElement(service.icon, { size: 140 })}
                </div>

                {/* Left/Top Content Block */}
                <div className={`${service.isWide ? 'md:w-5/12 lg:w-1/2 flex flex-col justify-center' : 'flex flex-col'}`}>
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.bgAccent}`}>
                     {service.icon}
                   </div>
                   <h3 className="text-3xl font-bold mb-3 font-poppins text-gray-900 tracking-tight">{service.title}</h3>
                   <p className="text-base leading-relaxed mb-6 font-inter text-gray-500">{service.description}</p>
                </div>

                {/* Features & Button Block */}
                <div className={`${service.isWide ? 'flex-1 flex flex-col justify-center bg-gray-50/50 p-6 rounded-3xl border border-gray-100 backdrop-blur-sm' : 'flex-grow flex flex-col mt-auto'}`}>
                   
                   <ul className={`mb-8 space-y-4 ${service.isWide ? '' : 'flex-grow'}`}>
                     {service.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <div className={`mt-0.5 rounded-full p-1 bg-white shadow-sm border border-gray-100 ${service.accentColor}`}>
                           <CheckCircle2 size={16} strokeWidth={3} />
                         </div>
                         <span className="text-sm font-semibold font-inter text-gray-700">{feature}</span>
                       </li>
                     ))}
                   </ul>

                   <Link to='/dashboard' className={`mt-auto flex items-center justify-between w-full font-bold text-sm py-4 px-6 rounded-xl transition-all duration-300 bg-gray-900 text-white hover:opacity-90 group/btn`}>
                     Explore Department
                     <ArrowRight
                       size={18}
                       className={`transition-transform group-hover/btn:translate-x-1`}
                     />
                   </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServicePage;