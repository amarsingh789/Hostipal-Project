import React from 'react';
import { ArrowUpRight, Award, Star, Clock, Stethoscope, User } from 'lucide-react';
import { motion } from 'motion/react';
import doctorImg from '../../assets/doctor.webp';
import { Link } from 'react-router-dom';

// ── ANIMATION VARIANTS ──
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } }
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, delay, ease: 'easeOut' } }
});

const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } }
});

const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } }
});

const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className='relative w-full min-h-[700px] md:h-[650px] md:min-h-[650px] bg-[#F4F7F6] overflow-hidden flex flex-col md:block mt-2 md:mt-4 group rounded-b-[3rem] md:rounded-[2.5rem] md:bg-clinic-green'
    >

      {/* ── MOBILE: BACKGROUND ── */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[90%] bg-clinic-green rounded-b-[3rem] shadow-xl z-0 overflow-hidden">
        <motion.div
          variants={fadeIn(0)}
          className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-[#0F766E] rounded-full blur-[80px] opacity-60"
        />
        <motion.h1
          variants={fadeIn(0.1)}
          className='absolute top-20 left-0 w-full text-center font-poppins text-[18vw] font-black text-white/5 select-none uppercase tracking-tighter leading-none z-0'
        >
          Health <br /> Care
        </motion.h1>
      </div>

      {/* ── DESKTOP: BACKGROUND TEXT ── */}
      <div className="hidden md:block absolute inset-0 z-0">
        <motion.h1
          variants={fadeIn(0.1)}
          className='absolute top-20 left-0 w-full text-center font-poppins text-[180px] font-black text-white/5 select-none uppercase tracking-tighter leading-none z-0'
        >
          Healthcare
        </motion.h1>
      </div>

      {/* ── DESKTOP FLOATING BADGE: LEFT ── */}
      <motion.div
        variants={slideLeft(0.5)}
        className="hidden md:flex absolute top-[25%] left-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300"
        >
          <Stethoscope size={20} />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Result</span>
          <span className="text-white text-sm font-semibold">Reduce HbA1c</span>
        </div>
      </motion.div>

      {/* ── DESKTOP FLOATING BADGE: RIGHT ── */}
      <motion.div
        variants={slideRight(0.6)}
        className="hidden md:flex absolute top-[40%] right-[10%] z-30 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl items-center gap-3 border border-white/20 shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300"
        >
          <User size={20} />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Lifestyle</span>
          <span className="text-white text-sm font-semibold">No Medications</span>
        </div>
      </motion.div>

      {/* ── DOCTOR IMAGE ── */}
      <motion.div
        variants={scaleUp(0.15)}
        className="absolute top-[15%] md:top-auto md:bottom-0 left-0 right-0 h-[60%] md:h-[95%] flex justify-center items-end pointer-events-none z-10 overflow-visible md:overflow-hidden"
      >
        <img
          src={doctorImg}
          alt="Doctor"
          className="h-full w-auto object-contain object-bottom scale-110 md:scale-100 transition-transform duration-700 md:group-hover:scale-[1.02] drop-shadow-2xl md:drop-shadow-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, rgba(0,0,0,0.2) 95%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* ── MOBILE: FLOATING INFO CARD ── */}
      <motion.div
        variants={fadeUp(0.35)}
        className="md:hidden absolute bottom-4 left-4 right-4 z-30 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_10px_40px_rgba(5,59,50,0.15)] border border-white"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <motion.div
              variants={fadeIn(0.45)}
              className="flex items-center gap-1.5 mb-1 bg-green-50 text-green-700 w-fit px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
            >
              <Star size={10} className="fill-green-700" /> Top Rated
            </motion.div>
            <motion.h3 variants={fadeUp(0.5)} className="text-[#021814] font-poppins font-bold text-xl leading-tight">
              Dr. Ananya Singh
            </motion.h3>
            <motion.p variants={fadeUp(0.55)} className="text-[#0F766E] text-xs font-semibold mt-0.5">
              Endocrinologist
            </motion.p>
          </div>

          <motion.div variants={scaleUp(0.5)} className="text-right bg-gray-50 p-2 rounded-xl border border-gray-100">
            <p className="text-[#053b32] text-sm font-bold">12+ Yrs</p>
            <p className="text-gray-400 text-[9px] uppercase tracking-wider font-semibold">Experience</p>
          </motion.div>
        </div>

        {/* <motion.div
          variants={fadeUp(0.6)}
          className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-5 bg-gray-50 p-2.5 rounded-xl border border-gray-100"
        >
          <Clock size={14} className="text-green-500" />
          Next Available: <span className="text-green-600 font-bold">Today, 02:00 PM</span>
        </motion.div> */}

        <motion.div
          variants={fadeUp(0.6)}
          className="flex items-center text-sm font-semibold text-gray-900 mb-4  p-2 rounded-xl border border-gray-100"
        >
          Experience Our Best Doctor on Ziva Care
        </motion.div>

        <motion.div variants={fadeUp(0.65)} whileTap={{ scale: 0.97 }}>
          <Link
            to='/appointment'
            className='block w-full text-center bg-[#053b32] hover:bg-[#0F766E] text-[#dfff4f] font-poppins font-bold px-6 py-4 rounded-2xl transition-all shadow-lg text-sm'
          >
            Book Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* ── DESKTOP: BOTTOM CONTENT AREA ── */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full p-10 justify-between items-end z-20 pointer-events-none">

        {/* Desktop Name Tag */}
        <motion.div
          variants={slideLeft(0.5)}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
          className="absolute bottom-[20%] left-[12%] z-30 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 flex items-center gap-4 w-max pointer-events-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-clinic-yellow flex items-center justify-center text-clinic-green shadow-inner">
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-white font-poppins font-bold text-lg leading-tight">Dr. Ananya Singh</h3>
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest">12+ Yrs Exp</p>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp(0.6)}
          className="max-w-[280px] text-white/60 text-[11px] tracking-[0.2em] font-medium leading-relaxed uppercase pointer-events-auto"
        >
          Whether you're looking for preventive care or managing a chronic condition, we are here.
        </motion.p>

        {/* Desktop Buttons */}
        <motion.div variants={fadeUp(0.7)} className="flex items-center gap-3 pointer-events-auto">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to='/appointment'
              className='bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-8 py-4 rounded-2xl transition-all shadow-lg block'
            >
              Book Consultation
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
            <Link
              to='/appointment'
              className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-clinic-yellow text-white hover:text-clinic-green rounded-2xl border border-white/10 transition-all backdrop-blur-md block"
            >
              <ArrowUpRight size={24} />
            </Link>
          </motion.div>
        </motion.div>

      </div>

    </motion.div>
  );
};

export default HeroSection;