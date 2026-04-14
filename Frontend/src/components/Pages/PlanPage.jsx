import { Users, User, Briefcase, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";
import { motion } from "motion/react"; 
import { useNavigate } from "react-router-dom";

const PlanPage = () => {
  const navigate = useNavigate()
  const plans = [
    {
      title: "For Family",
      desc: "Comprehensive health coverage ensuring your family's well-being.",
      icon: <Users size={28} />,
      badge: "Most Popular",
      features: ["Up to 6 family members", "24/7 priority support", "Dedicated health advisor"],
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
      features: ["1-on-1 consultations", "Same-day reimbursements", "Digital health records"],
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
      features: ["Premium doctor network", "Zero waiting time", "Concierge desk support"],
      theme: "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10",
      iconBg: "bg-white/10 text-clinic-yellow",
      btnTheme: "bg-white/10 text-white hover:bg-clinic-yellow hover:text-clinic-green",
      checkColor: "text-clinic-yellow",
      textColor: "text-white/70"
    },
  ];

  // ==========================================
  // 🚀 ANIMATION VARIANTS
  // ==========================================
  
  // Header text animation
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Parent container for cards (handles staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card ke aane me 0.15s ka gap
        delayChildren: 0.2     // Thodi der baad cards aana start honge
      }
    }
  };

  // Individual card pop-up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="relative w-full py-24 px-6 bg-clinic-green overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-clinic-yellow opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 🚀 Animated Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Scroll karne par ek baar chalega
        className="relative z-10 header-box max-w-3xl mx-auto text-center mb-20"
      >
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
      </motion.div>

      {/* 🚀 Animated Cards Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 card-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {plans.map((plan, index) => (
          <motion.div
            variants={cardVariants} // Child variant attach kiya
            key={index}
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

            {/* Features Checklist */}
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
              onClick={() => navigate("/insurance")}
              className={`flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-2xl transition-all duration-300 mt-6 ${plan.btnTheme}`}
            >
              Explore Plan{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlanPage;