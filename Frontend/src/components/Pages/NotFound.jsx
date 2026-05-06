import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Activity, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#021814] flex flex-col items-center justify-center p-6 font-inter relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dfff4f]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#dfff4f] mb-8 shadow-[0_0_50px_rgba(223,255,79,0.1)]"
        >
          <Activity size={48} strokeWidth={1.5} />
        </motion.div>

        {/* 404 Text */}
        <h1 className="text-[120px] md:text-[180px] font-black font-poppins text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none tracking-tighter mb-4 select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Flatline! Page Not Found.
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
          It looks like this link has lost its pulse. The page you are looking for might have been moved, renamed, or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-2xl bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <Link 
            to="/"
            className="px-8 py-4 rounded-2xl bg-[#dfff4f] text-[#021814] font-bold shadow-[0_10px_30px_rgba(223,255,79,0.2)] hover:bg-white transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <Home size={20} />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;