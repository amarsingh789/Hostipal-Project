// import { Users, User, Briefcase, Handshake, ArrowRight } from "lucide-react";
// import React from "react";

// const PlanPage = () => {
//   const plans = [
//     {
//       title: "For Family",
//       desc: "Comprehensive health coverage ensuring your family's well-being without financial stress.",
//       icon: <Users size={28} />,
//       badge: "Most Popular",
//       theme: "bg-clinic-green text-white",
//       iconBg: "bg-white/20 text-clinic-yellow",
//       btnText: "text-white group-hover:text-clinic-yellow",
//     },
//     {
//       title: "For Individual",
//       desc: "Tailored health plans designed for your personal medical needs and easy reimbursements.",
//       icon: <User size={28} />,
//       theme: "bg-white border border-gray-100",
//       iconBg: "bg-clinic-yellow/20 text-clinic-green",
//       btnText: "text-clinic-green group-hover:text-clinic-green",
//     },
//     {
//       title: "For Employers",
//       desc: "Boost your team's productivity by offering top-tier health reimbursement benefits.",
//       icon: <Briefcase size={28} />,
//       theme: "bg-white border border-gray-100",
//       iconBg: "bg-blue-50 text-blue-600",
//       btnText: "text-blue-600 group-hover:text-blue-700",
//     },
//     {
//       title: "For Clients",
//       desc: "Exclusive priority processing and premium doctor access for our esteemed clients.",
//       icon: <Handshake size={28} />,
//       theme: "bg-white border border-gray-100",
//       iconBg: "bg-purple-50 text-purple-600",
//       btnText: "text-purple-600 group-hover:text-purple-700",
//     },
//   ];

//   return (
//     <div className="w-full py-20 px-6 bg-[#f8fafc]">
//       <div className="header-box max-w-3xl mx-auto text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-black font-poppins text-gray-900 mb-4 leading-tight tracking-tighter">
//           Choose Your Doctor{" "}
//           <span className="text-clinic-teal underline decoration-clinic-green decoration-4 underline-offset-8">
//             Reimbursment
//           </span>
//         </h1>
//         <p className="text-gray-500">
//           Your health, your doctor, your way and we'll take care of the rest.
//         </p>
//       </div>
//       <div className="card-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`relative rounded-[2rem] p-8 flex flex-col h-[380px] group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.theme}`}
//           >
//             {plan.badge && (
//               <span className="absolute top-5 right-5 bg-clinic-yellow text-clinic-green text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
//                 {plan.badge}
//               </span>
//             )}
//             <div
//               className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 ${plan.iconBg}`}
//             >
//               {plan.icon}
//             </div>
//             <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
//             <p className={`text-sm leading-relaxed mb-auto opacity-80`}>
//               {plan.desc}
//             </p>
//             <button
//               className={`flex items-center gap-2 font-bold text-sm transition-all mt-6 ${plan.btnText}`}
//             >
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

// export default PlanPage;


// version 2 with more vibrant colors and a badge on the most popular plan
// import { Users, User, Briefcase, Handshake, ArrowRight } from "lucide-react";
// import React from "react";

// const PlanPage = () => {
//   const plans = [
//     {
//       title: "For Family",
//       desc: "Comprehensive health coverage ensuring your family's well-being without financial stress.",
//       icon: <Users size={28} />,
//       badge: "Most Popular",
//       // Highlighted Card (Yellow)
//       theme: "bg-clinic-yellow text-clinic-green shadow-[0_0_40px_rgba(223,255,79,0.2)]",
//       iconBg: "bg-clinic-green/10 text-clinic-green",
//       btnTheme: "bg-clinic-green text-white hover:scale-105",
//       badgeTheme: "bg-clinic-green text-clinic-yellow"
//     },
//     {
//       title: "For Individual",
//       desc: "Tailored health plans designed for your personal medical needs and easy reimbursements.",
//       icon: <User size={28} />,
//       // Glassmorphism Cards
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
//       iconBg: "bg-white/10 text-clinic-yellow",
//       btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
//     },
//     {
//       title: "For Employers",
//       desc: "Boost your team's productivity by offering top-tier health reimbursement benefits.",
//       icon: <Briefcase size={28} />,
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
//       iconBg: "bg-white/10 text-clinic-yellow",
//       btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
//     },
//     {
//       title: "For Clients",
//       desc: "Exclusive priority processing and premium doctor access for our esteemed clients.",
//       icon: <Handshake size={28} />,
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
//       iconBg: "bg-white/10 text-clinic-yellow",
//       btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
//     },
//   ];

//   return (
//     // Section Background changed to dark Clinic Green
//     <div className="relative w-full py-24 px-6 bg-clinic-green overflow-hidden">
      
//       {/* Background Glow Effect for Extra Premium Feel */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-clinic-yellow opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 header-box max-w-3xl mx-auto text-center mb-20">
//         <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 leading-tight tracking-tighter">
//           Choose Your Doctor{" "}
//           <br className="hidden md:block" />
//           <span className="text-clinic-yellow relative inline-block">
//             Reimbursement
//             {/* Custom Underline */}
//             <svg className="absolute w-full h-4 -bottom-2 left-0 text-white/30" viewBox="0 0 100 20" preserveAspectRatio="none">
//               <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//             </svg>
//           </span>
//         </h1>
//         <p className="text-white/70 text-lg font-inter max-w-xl mx-auto">
//           Your health, your doctor, your way and we'll take care of the rest.
//         </p>
//       </div>

//       <div className="relative z-10 card-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`relative rounded-[2.5rem] p-8 flex flex-col h-[400px] group transition-all duration-500 hover:-translate-y-3 ${plan.theme}`}
//           >
//             {/* Badge */}
//             {plan.badge && (
//               <span className={`absolute top-6 right-6 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${plan.badgeTheme}`}>
//                 {plan.badge}
//               </span>
//             )}

//             {/* Icon */}
//             <div
//               className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${plan.iconBg}`}
//             >
//               {plan.icon}
//             </div>

//             {/* Text Content */}
//             <h3 className="text-2xl font-bold mb-3 font-poppins">{plan.title}</h3>
//             <p className="text-sm leading-relaxed mb-auto opacity-80 font-inter">
//               {plan.desc}
//             </p>

//             {/* Button */}
//             <button
//               className={`flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl transition-all duration-300 mt-6 ${plan.btnTheme}`}
//             >
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

// export default PlanPage;


// version 3 with a completely new design and layout, more focus on typography and a doctor image for better context

import { Users, User, Briefcase, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

const PlanPage = () => {
  const plans = [
    {
      title: "For Family",
      desc: "Comprehensive health coverage ensuring your family's well-being.",
      icon: <Users size={28} />,
      badge: "Most Popular",
      // Features added
      features: ["Up to 6 family members", "24/7 priority support", "Dedicated health advisor"],
      // Highlighted Card (Yellow)
      theme: "bg-clinic-yellow text-clinic-green shadow-[0_0_40px_rgba(223,255,79,0.2)]",
      iconBg: "bg-clinic-green/10 text-clinic-green",
      btnTheme: "bg-clinic-green text-white hover:scale-105",
      badgeTheme: "bg-clinic-green text-clinic-yellow",
      checkColor: "text-clinic-green",
      textColor: "text-clinic-green/80"
    },
    {
      title: "For Individual",
      desc: "Tailored health plans designed for your personal medical needs.",
      icon: <User size={28} />,
      // Features added
      features: ["1-on-1 consultations", "Same-day reimbursements", "Digital health records"],
      // Glassmorphism Cards
      theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
      iconBg: "bg-white/10 text-clinic-yellow",
      btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
      checkColor: "text-clinic-yellow",
      textColor: "text-white/70"
    },
    {
      title: "For Employers",
      desc: "Boost your team's productivity by offering top-tier health benefits.",
      icon: <Briefcase size={28} />,
      // Features added
      features: ["Team wellness tracking", "Custom corporate plans", "HR dashboard access"],
      theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
      iconBg: "bg-white/10 text-clinic-yellow",
      btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
      checkColor: "text-clinic-yellow",
      textColor: "text-white/70"
    },
    {
      title: "For Clients",
      desc: "Exclusive priority processing and premium doctor access.",
      icon: <Handshake size={28} />,
      // Features added
      features: ["Premium doctor network", "Zero waiting time", "Concierge desk support"],
      theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
      iconBg: "bg-white/10 text-clinic-yellow",
      btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
      checkColor: "text-clinic-yellow",
      textColor: "text-white/70"
    },
  ];

  return (
    <div className="relative w-full py-24 px-6 bg-clinic-green overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-clinic-yellow opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 header-box max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 leading-tight tracking-tighter">
          Choose Your Doctor{" "}
          <br className="hidden md:block" />
          <span className="text-clinic-yellow relative inline-block">
            Reimbursement
            {/* Custom Underline */}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-white/30" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="text-white/70 text-lg font-inter max-w-xl mx-auto">
          Your health, your doctor, your way and we'll take care of the rest.
        </p>
      </div>

      <div className="relative z-10 card-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            // Height increased slightly to h-[460px] to fit the features list comfortably
            className={`relative rounded-[2.5rem] p-8 flex flex-col h-[480px] group transition-all duration-500 hover:-translate-y-3 ${plan.theme}`}
          >
            {/* Badge */}
            {plan.badge && (
              <span className={`absolute top-6 right-6 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${plan.badgeTheme}`}>
                {plan.badge}
              </span>
            )}

            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${plan.iconBg}`}
            >
              {plan.icon}
            </div>

            {/* Main Content */}
            <h3 className="text-2xl font-bold mb-2 font-poppins">{plan.title}</h3>
            <p className={`text-sm leading-relaxed mb-6 font-inter ${plan.textColor}`}>
              {plan.desc}
            </p>

            {/* NEW: Features Checklist */}
            <ul className="mb-auto space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${plan.checkColor}`} />
                  <span className={`text-sm font-medium font-inter ${plan.textColor}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl transition-all duration-300 mt-6 ${plan.btnTheme}`}
            >
              Explore Plan{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPage;