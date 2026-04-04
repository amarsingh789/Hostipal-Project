import React from "react";
import {
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Quote,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";
import ReviewPage from "./ReviewPage";
import { Link } from "react-router-dom";

const AboutPage = () => {
  
  // Premium Animation Variants
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: customEase },
    },
  };

  // Staggering for the Bento Grid (Ek-ek karke aayenge)
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.15, // Har card me 0.15s ka delay
        duration: 0.8,
        ease: customEase,
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const values = [
    {
      icon: <HeartPulse size={36} strokeWidth={1.5} />,
      title: "Patient-First Approach",
      desc: "Every decision we make is centered around the well-being and comfort of our patients. Your health is our ultimate priority, and we ensure you feel at home.",
      theme: "bg-white border-gray-100 text-[#0F172A]",
      iconTheme: "bg-rose-50 text-rose-500",
      descTheme: "text-gray-500",
      colSpan: "md:col-span-1 md:row-span-2 flex-col",
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: "Medical Innovation",
      desc: "We constantly upgrade our technology and methods to provide the most advanced, painless, and effective treatments available globally.",
      theme: "bg-[#021814] border-[#053b32] text-white",
      iconTheme: "bg-white/10 text-[#dfff4f]",
      descTheme: "text-white/70",
      colSpan:
        "md:col-span-2 flex-col md:flex-row items-start md:items-center gap-8",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Uncompromising Quality",
      desc: "From hygiene to surgical precision, we maintain global standards of excellence in every single aspect of our medical facility.",
      theme: "bg-[#dfff4f] border-[#ccee3c] text-[#021814]",
      iconTheme: "bg-[#021814]/10 text-[#021814]",
      descTheme: "text-[#021814]/70",
      colSpan:
        "md:col-span-2 flex-col md:flex-row items-start md:items-center gap-8",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] font-inter overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-black font-poppins text-[#0F172A] leading-[1.1] tracking-tight mb-6"
            >
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Healthcare
              </span>{" "}
              <br />
              for Tomorrow.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8"
            >
              Founded with a vision to make world-class medical care accessible,
              compassionate, and highly advanced. ZIVA is more than a clinic;
              it's a commitment to your life.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                to="/doctor"
                className="group inline-flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-emerald-600 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
              >
                Meet Our Team
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageReveal}
            className="relative h-[500px] lg:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
              alt="Modern Clinic"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl flex items-center gap-4 text-white shadow-xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 font-black text-xl shadow-inner">
                15+
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest">
                  Years of
                </p>
                <p className="font-medium text-white/90 text-sm">
                  Medical Excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-7xl mx-auto bg-[#021814] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#dfff4f]/10 to-transparent pointer-events-none"></div>

          {/* Image Side */}
          <div className="lg:w-5/12 h-[300px] lg:h-auto relative">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=80"
              alt="Doctor and Patient"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#021814] hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#021814] to-transparent block lg:hidden"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <Quote size={60} className="text-[#dfff4f]/20 mb-6 rotate-180" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-poppins text-white leading-tight mb-8">
              "Our mission is to bridge the gap between{" "}
              <span className="text-[#dfff4f] font-bold">
                advanced medical science
              </span>{" "}
              and genuine human empathy."
            </h2>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 rounded-full border-2 border-[#dfff4f] p-1">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
                  alt="Founder"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold font-poppins text-lg">
                  Dr. Ananya Singh
                </p>
                <p className="text-[#dfff4f] uppercase tracking-[0.2em] font-bold text-[10px]">
                  Founder & Chief Surgeon, ZIVA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section>
        <StatsSection />
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-500 mb-6">
            <Target size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-poppins text-[#0F172A] mb-4 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            The pillars that build the foundation of our healthcare philosophy.
          </p>
        </motion.div>

        {/* 🚀 The Custom Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
          {values.map((val, index) => (
            <motion.div
              custom={index} // Stagger index pass kiya
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative flex p-8 sm:p-10 rounded-[2.5rem] border shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden ${val.theme} ${val.colSpan}`}
            >
              {/* Big Ghost Icon */}
              <div
                className={`absolute -bottom-6 -right-6 opacity-[0.05] transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none`}
              >
                {React.cloneElement(val.icon, { size: 180 })}
              </div>

              {/* Icon Container */}
              <div
                className={`${val.colSpan.includes("flex-row") ? "w-20 shrink-0" : "mb-8"}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-md ${val.iconTheme}`}
                >
                  {val.icon}
                </div>
              </div>

              {/* Text Container */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-poppins tracking-tight">
                  {val.title}
                </h3>
                <p
                  className={`leading-relaxed font-medium text-base sm:text-lg ${val.descTheme}`}
                >
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
        <ReviewPage />
      </section>
    </div>
  );
};

export default AboutPage;
