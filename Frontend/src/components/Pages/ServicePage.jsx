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

// import React from "react";
// import { HeartPulse, HeartHandshake, ArrowRight, CheckCircle2} from 'lucide-react';

// const ServicePage = () => {

//   const services = [
//     {
//       title: "Cardiology",
//       description: "Comprehensive heart care with advanced diagnostics and treatments.",
//       icon: <HeartPulse size={28}/>,
//       features: [
//         "State-of-the-art cardiac imaging",
//         "Minimally invasive procedures",
//         "Personalized treatment plans"
//       ]
//     },
//     {
//       title: "Check Up",
//       description: "Regular health assessments to keep you in optimal condition.",
//       icon: <HeartHandshake  size={28}/>,
//       features: [
//         "Comprehensive health evaluations",
//         "Preventive care strategies",
//         "Personalized wellness plans"
//       ]
//     },
//     {
//       title: "Emergency Care",
//       description: "24/7 availability of expert medical professionals for critical situations.",
//       icon: <HeartPulse  size={28}/>,
//       features: [
//         "Round-the-clock medical support",
//         "Rapid response to emergencies",
//         "Advanced life-saving techniques"
//       ]
//     },
//     {
//       title: "Dental Care",
//       description: "Comprehensive dental services for a healthy and beautiful smile.",
//       icon: <HeartHandshake  size={28}/>,
//       features: [
//         "Preventive dental care",
//         "Cosmetic dentistry",
//         "Advanced restorative treatments"
//       ]
//     },
//     {
//       title: "Gastroenterology",
//       description: "Expert care for digestive health and gastrointestinal disorders.",
//       icon: <HeartPulse  size={28}/>,
//       features: [
//         "Advanced endoscopic procedures",
//         "Personalized treatment plans",
//         "Comprehensive digestive health management"
//       ]
//     }
//   ]

//   return (
//     // 1. Soft Gradient Background for depth
//     <div className="relative w-full py-28 px-6 bg-gradient-to-b from-[#f8fafc] to-[#c5cfd9] overflow-hidden">
//       {/* 2. Decorative Ambient Orbs (Soft Glows in background) */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-10 right-10 w-48 h-48 bg-clinic-yellow/20 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="relative z-10 header-box max-w-4xl mx-auto text-center">
//         {/* 3. Premium Top Badge with a pulsing dot */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/40 shadow-sm backdrop-blur-md mb-8">
//           <span className="w-2 h-2 rounded-full bg-clinic-green animate-pulse"></span>
//           <span className="text-xs font-bold text-clinic-green uppercase tracking-widest">
//             Our Expertise
//           </span>
//         </div>

//         {/* 4. Enhanced Typography */}
//         <h1 className="text-5xl md:text-7xl font-black font-poppins text-gray-900 mb-6 leading-[1.1] tracking-tighter">
//           Services For Your <br className="hidden md:block" />
//           <span className="text-clinic-green relative inline-block">
//             Health
//             {/* Custom Underline (Thicker and matching theme) */}
//             {/* <svg className="absolute w-full h-5 -bottom-2 left-0 text-gradient-to-br from-[#f07c3a] to-[#c45e1e]" viewBox="0 0 100 20" preserveAspectRatio="none">
//               <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
//             </svg> */}
//             {/* <svg
//               className="absolute w-full h-5 -bottom-2 left-0"
//               viewBox="0 0 100 20"
//               preserveAspectRatio="none"
//             >
//               {/* Gradient Define Yahan Hota Hai */}
//               {/* <defs>
//                 <linearGradient
//                   id="orangeGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" stopColor="#f07c3a" />
//                   <stop offset="100%" stopColor="#c45e1e" />
//                 </linearGradient>
//               </defs> */}

//               {/* Path mein stroke="url(#orangeGradient)" lagaya hai */}
//               {/* <path
//                 d="M0 15 Q 50 0 100 15"
//                 fill="none"
//                 stroke="url(#orangeGradient)"
//                 strokeWidth="6"
//                 strokeLinecap="round"
//               /> 
//             </svg> */}
//           </span>
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl font-inter max-w-2xl mx-auto leading-relaxed mt-8">
//           Your health, your doctor, your way—and we'll take care of the rest
//           with our world-class medical facilities.
//         </p>
//       </div>
//       <div className="relative z-10 card-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index)=>(
//           <div key={index} className="relative rounded-[2.5rem] p-8 flex flex-col h-[480px] group transition-all duration-500 hover:-translate-y-3">
//             <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
//               {service.icon}
//             </div>
//             {/* content */}
//             <h3 className="text-2xl font-bold mb-2 font-poppins">{service.title}</h3>
//             <p className="text-sm leading-relaxed mb-6 font-inter">{service.description}</p>

//             <ul className="mb-auto space-y-3">
//               {service.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <CheckCircle2 className="shrink-0 mt-0.5" size={18}/>
//                   <span className="text-sm font-medium font-inter">{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button className="flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl transition-all duration-300 mt-6">
//               Explore Plan{" "}
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-2 transition-transform"
//               />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;



// v-03
// import React from "react";
// import { HeartPulse, HeartHandshake, ArrowRight, CheckCircle2, ShieldAlert, Syringe, Activity } from 'lucide-react';

// const ServicePage = () => {
//   const services = [
//     {
//       title: "Cardiology",
//       description: "Comprehensive heart care with advanced diagnostics and treatments.",
//       icon: <HeartPulse size={32} />,
//       features: [
//         "State-of-the-art cardiac imaging",
//         "Minimally invasive procedures",
//         "Personalized treatment plans"
//       ],
//       // Naya: Custom styling per card
//       accentColor: "text-red-500",
//       bgAccent: "bg-red-500/10",
//       borderAccent: "group-hover:border-red-500/50",
//       shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]",
//       size: "md:col-span-2 lg:col-span-2 row-span-2" // Bada Card
//     },
//     {
//       title: "Check Up",
//       description: "Regular health assessments to keep you in optimal condition.",
//       icon: <HeartHandshake size={28} />,
//       features: [
//         "Comprehensive health evaluations",
//         "Preventive care strategies",
//         "Personalized wellness plans"
//       ],
//       accentColor: "text-blue-500",
//       bgAccent: "bg-blue-500/10",
//       borderAccent: "group-hover:border-blue-500/50",
//       shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]",
//       size: "col-span-1"
//     },
//     {
//       title: "Emergency Care",
//       description: "24/7 availability of expert medical professionals for critical situations.",
//       icon: <ShieldAlert size={28} />,
//       features: [
//         "Round-the-clock medical support",
//         "Rapid response to emergencies",
//         "Advanced life-saving techniques"
//       ],
//       accentColor: "text-orange-500",
//       bgAccent: "bg-orange-500/10",
//       borderAccent: "group-hover:border-orange-500/50",
//       shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)]",
//       size: "col-span-1"
//     },
//     {
//       title: "Dental Care",
//       description: "Comprehensive dental services for a healthy and beautiful smile.",
//       icon: <Syringe size={28} />,
//       features: [
//         "Preventive dental care",
//         "Cosmetic dentistry",
//         "Advanced restorative treatments"
//       ],
//       accentColor: "text-teal-500",
//       bgAccent: "bg-teal-500/10",
//       borderAccent: "group-hover:border-teal-500/50",
//       shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]",
//       size: "col-span-1"
//     },
//     {
//       title: "Gastroenterology",
//       description: "Expert care for digestive health and gastrointestinal disorders.",
//       icon: <Activity size={28} />,
//       features: [
//         "Advanced endoscopic procedures",
//         "Personalized treatment plans",
//         "Comprehensive digestive health management"
//       ],
//       accentColor: "text-indigo-500",
//       bgAccent: "bg-indigo-500/10",
//       borderAccent: "group-hover:border-indigo-500/50",
//       shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]",
//       size: "col-span-1"
//     }
//   ];

//   return (
//     <div className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden">
      
//       {/* Background Ambience */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-clinic-green/10 blur-[120px] rounded-full pointer-events-none"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-clinic-yellow/20 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-20 max-w-3xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
//             <span className="w-2 h-2 rounded-full bg-clinic-green animate-pulse"></span>
//             <span className="text-xs font-bold text-gray-800 uppercase tracking-[0.15em]">
//               Comprehensive Care
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-black font-poppins text-gray-900 mb-6 leading-tight tracking-tight">
//             Medical <span className="text-clinic-green">Excellence</span> <br className="hidden md:block" />
//             Tailored For You
//           </h1>
//           <p className="text-gray-500 text-lg md:text-xl font-inter leading-relaxed">
//             From routine check-ups to specialized treatments, our world-class facilities are designed to prioritize your well-being.
//           </p>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[auto]">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className={`relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[2.5rem] p-8 flex flex-col group transition-all duration-500 hover:-translate-y-2 ${service.borderAccent} ${service.shadowAccent} ${service.size}`}
//             >
              
//               {/* Icon */}
//               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.bgAccent} ${service.accentColor}`}>
//                 {service.icon}
//               </div>
              
//               {/* Content */}
//               <h3 className="text-2xl font-bold mb-3 font-poppins text-gray-900">{service.title}</h3>
//               <p className="text-sm leading-relaxed mb-8 font-inter text-gray-600">{service.description}</p>

//               {/* Features - Flex-grow to push button down */}
//               <ul className="mb-8 space-y-4 flex-grow">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <CheckCircle2 className={`shrink-0 mt-0.5 ${service.accentColor}`} size={18} />
//                     <span className="text-sm font-medium font-inter text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Button */}
//               <button className={`mt-auto flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-800 transition-all duration-300 hover:bg-white hover:border-gray-300 ${service.accentColor}`}>
//                 Learn More{" "}
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ServicePage;


// v-05
import React from "react";
import { HeartPulse, HeartHandshake, ArrowRight, CheckCircle2, ShieldAlert, Syringe, Activity } from 'lucide-react';

const ServicePage = () => {
  const services = [
    {
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostics and treatments.",
      icon: <HeartPulse size={32} />,
      features: [
        "State-of-the-art cardiac imaging",
        "Minimally invasive procedures",
        "Personalized treatment plans"
      ],
      accentColor: "text-red-500",
      bgAccent: "bg-red-500/10",
      borderAccent: "group-hover:border-red-500/50",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]",
      // CHANGE HERE: Removed row-span-2, kept it wide only. Added md flex-row for layout
      size: "md:col-span-2 lg:col-span-2 flex-col md:flex-row md:items-center gap-8" 
    },
    {
      title: "Check Up",
      description: "Regular health assessments to keep you in optimal condition.",
      icon: <HeartHandshake size={28} />,
      features: [
        "Comprehensive health evaluations",
        "Preventive care strategies",
        "Personalized wellness plans"
      ],
      accentColor: "text-blue-500",
      bgAccent: "bg-blue-500/10",
      borderAccent: "group-hover:border-blue-500/50",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]",
      size: "col-span-1 flex-col"
    },
    {
      title: "Emergency Care",
      description: "24/7 availability of expert medical professionals for critical situations.",
      icon: <ShieldAlert size={28} />,
      features: [
        "Round-the-clock medical support",
        "Rapid response to emergencies",
        "Advanced life-saving techniques"
      ],
      accentColor: "text-orange-500",
      bgAccent: "bg-orange-500/10",
      borderAccent: "group-hover:border-orange-500/50",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)]",
      size: "col-span-1 flex-col"
    },
    {
      title: "Dental Care",
      description: "Comprehensive dental services for a healthy and beautiful smile.",
      icon: <Syringe size={28} />,
      features: [
        "Preventive dental care",
        "Cosmetic dentistry",
        "Advanced restorative treatments"
      ],
      accentColor: "text-teal-500",
      bgAccent: "bg-teal-500/10",
      borderAccent: "group-hover:border-teal-500/50",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]",
      size: "col-span-1 flex-col"
    },
    {
      title: "Gastroenterology",
      description: "Expert care for digestive health and gastrointestinal disorders.",
      icon: <Activity size={28} />,
      features: [
        "Advanced endoscopic procedures",
        "Personalized treatment plans",
        "Comprehensive digestive health management"
      ],
      accentColor: "text-indigo-500",
      bgAccent: "bg-indigo-500/10",
      borderAccent: "group-hover:border-indigo-500/50",
      shadowAccent: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]",
      size: "col-span-1 flex-col"
    }
  ];

  return (
    <div className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-clinic-green/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-clinic-yellow/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-clinic-green animate-pulse"></span>
            <span className="text-xs font-bold text-gray-800 uppercase tracking-[0.15em]">
              Comprehensive Care
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-poppins text-gray-900 mb-6 leading-tight tracking-tight">
            Medical <span className="text-clinic-green">Excellence</span> <br className="hidden md:block" />
            Tailored For You
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-inter leading-relaxed">
            From routine check-ups to specialized treatments, our world-class facilities are designed to prioritize your well-being.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Check if it's the large wide card
            const isWide = service.title === "Cardiology";

            return (
              <div 
                key={index} 
                // Removed 'flex-col' from base classes, letting 'service.size' handle flex direction
                className={`relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[2.5rem] p-8 flex group transition-all duration-500 hover:-translate-y-2 ${service.borderAccent} ${service.shadowAccent} ${service.size}`}
              >
                {/* Image/Icon Block for Wide Card vs Normal Card */}
                <div className={`${isWide ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.bgAccent} ${service.accentColor}`}>
                     {service.icon}
                   </div>
                   <h3 className="text-2xl font-bold mb-3 font-poppins text-gray-900">{service.title}</h3>
                   <p className="text-sm leading-relaxed mb-8 font-inter text-gray-600">{service.description}</p>
                </div>

                {/* Features & Button Block */}
                <div className={`${isWide ? 'md:w-1/2 flex flex-col justify-center' : 'flex-grow flex flex-col'}`}>
                   <ul className={`mb-8 space-y-4 ${isWide ? '' : 'flex-grow'}`}>
                     {service.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <CheckCircle2 className={`shrink-0 mt-0.5 ${service.accentColor}`} size={18} />
                         <span className="text-sm font-medium font-inter text-gray-700">{feature}</span>
                       </li>
                     ))}
                   </ul>

                   <button className={`mt-auto flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-800 transition-all duration-300 hover:bg-white hover:border-gray-300 ${service.accentColor}`}>
                     Learn More{" "}
                     <ArrowRight
                       size={18}
                       className="group-hover:translate-x-1 transition-transform"
                     />
                   </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServicePage;