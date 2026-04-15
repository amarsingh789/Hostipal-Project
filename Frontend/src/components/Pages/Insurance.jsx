import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, FileText, Activity, Clock, CheckCircle2, ChevronLeft, 
  ArrowRight, HeartPulse, Building2, XCircle, IndianRupee, AlertCircle, PhoneCall,
  User, Users, Briefcase, Handshake
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import toast from "react-hot-toast";

// 🚀 SAARE PLANS KA DYNAMIC DATA
const plansData = {
  individual: {
    id: "individual",
    tabIcon: <User size={14} className="md:w-4 md:h-4" />,
    tabName: "Individual",
    title: "Ziva Solo Cover",
    desc: "Tailored health plan for individuals. Get comprehensive coverage with zero paperwork and instant claim approvals.",
    sumInsured: "5,00,000",
    monthly: 599,
    yearly: 5988,
    covered: [
      "In-patient Hospitalization (No room rent capping)",
      "Pre & Post Hospitalization (60 & 90 days)",
      "Day Care Treatments (Cataract, Dialysis etc.)",
      "Free Annual Full Body Checkup",
      "Ambulance Cover up to ₹5,000"
    ]
  },
  family: {
    id: "family",
    tabIcon: <Users size={14} className="md:w-4 md:h-4" />,
    tabName: "Family",
    title: "Ziva Family Floater",
    desc: "Complete protection for your entire family (up to 6 members). Share a massive cover amount with priority support.",
    sumInsured: "15,00,000",
    monthly: 1499,
    yearly: 14990,
    covered: [
      "Covers 2 Adults + up to 4 Children",
      "Maternity Benefits & Newborn Baby Cover",
      "In-patient & Day Care Treatments",
      "Pediatrician Consultations Included",
      "Organ Donor Expenses"
    ]
  },
  employers: {
    id: "employers",
    tabIcon: <Briefcase size={14} className="md:w-4 md:h-4" />,
    tabName: "Employers",
    title: "Ziva Corporate Plus",
    desc: "Boost your team's productivity by offering top-tier health benefits. Custom corporate plans with HR dashboard access.",
    sumInsured: "25,00,000",
    monthly: 4999,
    yearly: 49990,
    covered: [
      "Group Health Insurance for 10+ employees",
      "Team Wellness Tracking & Reports",
      "Pre-existing diseases covered from Day 1",
      "Mental Healthcare & Therapy sessions",
      "Dedicated Corporate Health Manager"
    ]
  },
  clients: {
    id: "clients",
    tabIcon: <Handshake size={14} className="md:w-4 md:h-4" />,
    tabName: "Clients (VIP)",
    title: "Ziva Platinum VIP",
    desc: "Exclusive priority processing, global coverage, and premium doctor access for our high-net-worth clients.",
    sumInsured: "1,00,00,000",
    monthly: 9999,
    yearly: 99990,
    covered: [
      "Global Coverage (Valid outside India too)",
      "Zero Waiting Time at network hospitals",
      "Concierge Desk Support 24/7",
      "Robotic Surgeries & Modern Treatments",
      "Air Ambulance Coverage"
    ]
  }
};

const Insurance = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth); 
  
  const [activePlan, setActivePlan] = useState("individual");
  const [billingCycle, setBillingCycle] = useState("yearly");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }, [])

  const currentPlan = plansData[activePlan];

  const handleProceedToBuy = () => {
    if (!user || !token) {
      toast.error("Please login to proceed with the purchase.");
      navigate("/login", { state: { returnTo: "/insurance" } }); 
    } else {
      navigate("/payment", { 
        state: { 
          planDetails: currentPlan, 
          billing: billingCycle,
          price: billingCycle === "yearly" ? currentPlan.yearly : currentPlan.monthly
        } 
      });
    }
  };

  const contentVariants = {
    initial: { opacity: 0, x: 40, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } },
    exit: { opacity: 0, x: -40, filter: "blur(4px)", transition: { duration: 0.3, ease: "easeIn" } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  };

  const numberVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
    exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.2 } }
  };

  const benefits = [
    { icon: <ShieldCheck size={24} />, title: "Cashless Treatment", desc: "Network of 5,000+ top hospitals." },
    { icon: <Clock size={24} />, title: "30 Min Approval", desc: "Instant cashless authorization." },
    { icon: <FileText size={24} />, title: "Zero Copay", desc: "We pay 100% of approved bills." },
    { icon: <Activity size={24} />, title: "Tax Benefits", desc: "Save tax under Sec 80D." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter selection:bg-[#0F766E] selection:text-white pb-24">
      
      {/* ── HERO SECTION ── */}
      <div className="relative bg-[#021814] pt-32 pb-36 md:pt-40 md:pb-48 px-6 overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0F766E] opacity-40 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#dfff4f] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-white/70 hover:text-[#dfff4f] transition-colors text-sm font-semibold"
            >
              <ChevronLeft size={18} /> Back to Plans
            </button>

            {/* 🚀 RESPONSIVE 2x2 GRID TABS FOR MOBILE */}
            <div className="w-full md:w-auto grid grid-cols-2 md:flex bg-white/5 p-1.5 rounded-2xl md:rounded-full backdrop-blur-md border border-white/10 gap-1 md:gap-0">
              {Object.values(plansData).map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActivePlan(plan.id)}
                  className={`relative flex items-center justify-center gap-1.5 md:gap-2 px-2 py-3 md:px-6 md:py-2.5 rounded-xl md:rounded-full text-[11px] sm:text-xs md:text-sm font-bold transition-colors duration-300 overflow-hidden ${
                    activePlan === plan.id ? "text-[#021814]" : "text-white/70 hover:text-white hover:bg-white/5 md:hover:bg-transparent"
                  }`}
                >
                  {/* Active Background Slide Animation */}
                  {activePlan === plan.id && (
                    <motion.div 
                      layoutId="activeTabBg" 
                      className="absolute inset-0 bg-[#dfff4f] rounded-xl md:rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                    {plan.tabIcon} <span>{plan.tabName}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[280px] md:min-h-[220px] relative"> 
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePlan} 
                variants={contentVariants}
                initial="initial" animate="animate" exit="exit"
                className="max-w-2xl absolute inset-0"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#dfff4f] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                    {currentPlan.tabName} Plan
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#0F766E]/50 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 flex items-center gap-1">
                    <ShieldCheck size={14} /> 99.4% Claim Ratio
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 leading-tight">
                  {currentPlan.title.split(" ")[0]} <br className="hidden md:block" />
                  <span className="text-[#dfff4f]">{currentPlan.title.split(" ").slice(1).join(" ")}</span>
                </h1>
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                  {currentPlan.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (Split Layout) ── */}
      <div className="max-w-7xl mx-auto px-6 pt-8 -mt-24 md:-mt-32 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-[#E6F4F1] text-[#0F766E] rounded-full flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-bold font-poppins text-[#021814] mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                <div className="p-6 md:p-8 bg-[#F8FFFA] min-h-[350px]">
                  <h2 className="text-xl font-bold font-poppins text-[#021814] mb-6 flex items-center gap-2">
                    <HeartPulse className="text-green-600" size={24} /> What's Covered?
                  </h2>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activePlan} 
                      variants={contentVariants}
                      initial="initial" animate="animate" exit="exit"
                      className="space-y-4"
                    >
                      {currentPlan.covered.map((item, i) => (
                        <motion.div variants={itemVariants} key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="p-6 md:p-8 bg-red-50/30">
                  <h2 className="text-xl font-bold font-poppins text-[#021814] mb-6 flex items-center gap-2">
                    <AlertCircle className="text-red-500" size={24} /> What's NOT Covered?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Initial Waiting Period (First 30 days)",
                      "Cosmetic or Plastic Surgery",
                      "Self-inflicted Injuries",
                      "Unprescribed dietary supplements"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0F766E] to-[#053b32] p-6 md:p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                  <Building2 size={28} className="text-[#dfff4f]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-1">5,000+ Network Hospitals</h3>
                  <p className="text-sm text-white/70">Find the nearest cashless hospital in your city.</p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-[#dfff4f] text-[#021814] font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                Search Hospitals
              </button>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6"> 
              
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#0F766E]/20 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#dfff4f]"></div>
                
                <h3 className="text-lg font-bold font-poppins text-[#021814] mb-4 mt-2">Plan Summary</h3>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-6 border border-gray-100">
                  <span className="text-sm text-gray-600 font-medium">Sum Insured</span>
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={activePlan} 
                      variants={numberVariants}
                      initial="initial" animate="animate" exit="exit"
                      className="text-lg font-black text-[#0F766E] flex items-center"
                    >
                      <IndianRupee size={16} strokeWidth={3} /> {currentPlan.sumInsured}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="flex p-1 bg-gray-100 rounded-full mb-8 relative">
                  <button onClick={() => setBillingCycle("monthly")} className={`flex-1 py-2 text-xs font-bold rounded-full z-10 transition-colors ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}>Monthly</button>
                  <button onClick={() => setBillingCycle("yearly")} className={`flex-1 py-2 text-xs font-bold rounded-full z-10 transition-colors ${billingCycle === "yearly" ? "text-white" : "text-gray-500"}`}>Yearly (-20%)</button>
                  <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#021814] rounded-full transition-transform duration-300 ease-out ${billingCycle === "yearly" ? "translate-x-[calc(100%+4px)]" : "translate-x-0"}`}></div>
                </div>

                <div className="mb-8 flex items-end justify-center gap-1 overflow-hidden h-[50px]">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={`${activePlan}-${billingCycle}`} 
                      variants={numberVariants}
                      initial="initial" animate="animate" exit="exit"
                      className="text-5xl font-black font-poppins text-[#021814] flex items-center tracking-tight"
                    >
                      <IndianRupee size={32} className="mt-2 text-[#0F766E]" strokeWidth={3} />
                      {billingCycle === "yearly" ? currentPlan.yearly.toLocaleString('en-IN') : currentPlan.monthly.toLocaleString('en-IN')}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-gray-500 mb-2 font-medium">/ {billingCycle === "yearly" ? "year" : "month"}</span>
                </div>

                <button 
                  onClick={handleProceedToBuy}
                  className="w-full bg-[#0F766E] hover:bg-[#021814] text-white font-bold font-poppins py-4 rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group mb-4"
                >
                  Proceed to Buy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-gray-400">Prices are exclusive of 18% GST. T&C Apply.</p>
              </div>

              <div className="bg-[#F8FFFA] p-6 rounded-[2rem] border border-green-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#021814]">Need Expert Advice?</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-2">Talk to our insurance advisors.</p>
                  <a href="tel:1800123456" className="text-[#0F766E] font-bold text-sm hover:underline">1800-123-456</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Insurance;