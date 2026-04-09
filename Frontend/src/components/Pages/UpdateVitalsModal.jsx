import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HeartPulse, Droplet, Activity, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

// 1. 🚀 Zod Schema: Ab sab kuch Required hai (.min(1) laga diya)
const vitalsSchema = z.object({
  heartRate: z.string().min(1, "Required").max(4, "Max 4 chars"),
  bpSys: z.string().min(1, "Required").max(4, "Max 4 chars"),
  bpDia: z.string().min(1, "Required").max(4, "Max 4 chars"),
  weight: z.string().min(1, "Required").max(4, "Max 4 chars")
});

const UpdateVitalsModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [activeRow, setActiveRow] = useState('hr'); 

  // 🚀 formState: { errors } ko extract kiya error dikhane ke liye
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
    resolver: zodResolver(vitalsSchema),
    defaultValues: {
      heartRate: initialData?.heartRate ? String(initialData.heartRate) : '',
      bpSys: initialData?.bpSys ? String(initialData.bpSys) : '',
      bpDia: initialData?.bpDia ? String(initialData.bpDia) : '',
      weight: initialData?.weight ? String(initialData.weight) : ''
    }
  });

  const onSubmit = (data) => {
    setLoading(true);
    setActiveRow(null); 
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSave({
          heartRate: Number(data.heartRate),
          bpSys: Number(data.bpSys),
          bpDia: Number(data.bpDia),
          weight: Number(data.weight),
        });
        reset();
        setActiveRow('hr'); 
      }, 1500); 
    }, 1000);
  };

  const handleClose = () => {
    reset();
    setActiveRow('hr');
    onClose();
  };

  const handleNumericInput = (e, fieldName) => {
    let val = e.target.value.replace(/[^0-9.]/g, ''); 
    if (val.length > 4) val = val.slice(0, 4); 
    setValue(fieldName, val);
  };

  const springConfig = { type: "spring", stiffness: 300, damping: 25 };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-0">
        
        <style>{`
          input[type=number]::-webkit-inner-spin-button, 
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
          input[type=text] { -moz-appearance: textfield; caret-color: #0F766E; }
        `}</style>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#021814]/30 backdrop-blur-md"
          onClick={handleClose}
        />

        <motion.div 
          layout
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={springConfig}
          className="relative bg-[#f8fafc] w-full max-w-[440px] rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <motion.div layout className="bg-white px-8 pt-8 pb-6 rounded-b-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative z-20 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black font-poppins text-[#021814] tracking-tight">Health Metrics</h2>
              <p className="text-gray-500 text-sm font-medium mt-1">All fields are mandatory</p>
            </div>
            <button onClick={handleClose} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center transition-colors">
              <X size={20} strokeWidth={2.5} />
            </button>
          </motion.div>

          <AnimatePresence>
            {success && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-[#0F766E] flex flex-col items-center justify-center text-white rounded-[2.5rem]"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}>
                  <CheckCircle2 size={72} strokeWidth={2} className="text-[#dfff4f] mb-4" />
                </motion.div>
                <h3 className="text-3xl font-black font-poppins tracking-tight">Logged!</h3>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6 space-y-3 relative z-10">
            
            {/* 1. HEART RATE */}
            <motion.div 
              layout transition={springConfig}
              onClick={() => setActiveRow('hr')}
              className={`overflow-hidden cursor-pointer border-2 transition-colors ${
                activeRow === 'hr' 
                  ? `bg-white shadow-xl rounded-[2rem] p-6 cursor-default ${errors.heartRate ? 'border-red-400' : 'border-white'}` 
                  : `${errors.heartRate ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'bg-white/50 border-transparent hover:bg-white/80'} rounded-2xl p-4`
              }`}
            >
              <motion.div layout className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'hr' ? 'w-14 h-14 bg-red-500 text-white shadow-lg shadow-red-500/30' : 'w-10 h-10 bg-red-100 text-red-500'}`}>
                    <HeartPulse size={activeRow === 'hr' ? 28 : 20} className={activeRow === 'hr' ? 'animate-pulse' : ''} />
                  </motion.div>
                  <motion.span layout className={`font-bold ${activeRow === 'hr' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Heart Rate</motion.span>
                </div>
                {activeRow !== 'hr' && (
                  <div className="flex items-center gap-2">
                    {errors.heartRate && <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md"><AlertCircle size={12}/> Required</span>}
                    {!errors.heartRate && <span className="font-black text-gray-800 text-lg">{watch("heartRate") || '--'} <span className="text-xs font-semibold text-gray-400">BPM</span></span>}
                  </div>
                )}
              </motion.div>
              
              <AnimatePresence>
                {activeRow === 'hr' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <input 
                        type="text" inputMode="numeric" placeholder="00" autoFocus
                        value={watch("heartRate")} onChange={(e) => handleNumericInput(e, "heartRate")}
                        className="w-32 bg-transparent text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
                      />
                      <span className="text-xl font-bold text-red-500">BPM</span>
                    </div>
                    {errors.heartRate && <span className="text-xs font-bold text-red-500 mt-2">Please enter your heart rate.</span>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 2. BLOOD PRESSURE */}
            <motion.div 
              layout transition={springConfig}
              onClick={() => setActiveRow('bp')}
              className={`overflow-hidden cursor-pointer border-2 transition-colors ${
                activeRow === 'bp' 
                  ? `bg-white shadow-xl rounded-[2rem] p-6 cursor-default ${errors.bpSys || errors.bpDia ? 'border-red-400' : 'border-white'}` 
                  : `${errors.bpSys || errors.bpDia ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'bg-white/50 border-transparent hover:bg-white/80'} rounded-2xl p-4`
              }`}
            >
              <motion.div layout className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'bp' ? 'w-14 h-14 bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'w-10 h-10 bg-blue-100 text-blue-500'}`}>
                    <Droplet size={activeRow === 'bp' ? 28 : 20} />
                  </motion.div>
                  <motion.span layout className={`font-bold ${activeRow === 'bp' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Blood Pressure</motion.span>
                </div>
                {activeRow !== 'bp' && (
                  <div className="flex items-center gap-2">
                    {(errors.bpSys || errors.bpDia) && <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md"><AlertCircle size={12}/> Required</span>}
                    {!(errors.bpSys || errors.bpDia) && <span className="font-black text-gray-800 text-lg">{(watch("bpSys") || '--')} / {(watch("bpDia") || '--')}</span>}
                  </div>
                )}
              </motion.div>
              
              <AnimatePresence>
                {activeRow === 'bp' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <input 
                          type="text" inputMode="numeric" placeholder="120" autoFocus
                          value={watch("bpSys")} onChange={(e) => handleNumericInput(e, "bpSys")}
                          className="w-24 sm:w-28 bg-transparent text-center text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
                        />
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2">SYS</span>
                      </div>
                      <span className="text-4xl font-light text-gray-300 pb-6">/</span>
                      <div className="flex flex-col items-center">
                        <input 
                          type="text" inputMode="numeric" placeholder="80" 
                          value={watch("bpDia")} onChange={(e) => handleNumericInput(e, "bpDia")}
                          className="w-24 sm:w-28 bg-transparent text-center text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
                        />
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2">DIA</span>
                      </div>
                    </div>
                    {(errors.bpSys || errors.bpDia) && <span className="text-xs font-bold text-red-500 mt-4">Both Sys and Dia values are required.</span>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 3. WEIGHT */}
            <motion.div 
              layout transition={springConfig}
              onClick={() => setActiveRow('wt')}
              className={`overflow-hidden cursor-pointer border-2 transition-colors ${
                activeRow === 'wt' 
                  ? `bg-white shadow-xl rounded-[2rem] p-6 cursor-default ${errors.weight ? 'border-red-400' : 'border-white'}` 
                  : `${errors.weight ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'bg-white/50 border-transparent hover:bg-white/80'} rounded-2xl p-4`
              }`}
            >
              <motion.div layout className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'wt' ? 'w-14 h-14 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'w-10 h-10 bg-emerald-100 text-emerald-500'}`}>
                    <Activity size={activeRow === 'wt' ? 28 : 20} />
                  </motion.div>
                  <motion.span layout className={`font-bold ${activeRow === 'wt' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Body Weight</motion.span>
                </div>
                {activeRow !== 'wt' && (
                  <div className="flex items-center gap-2">
                    {errors.weight && <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md"><AlertCircle size={12}/> Required</span>}
                    {!errors.weight && <span className="font-black text-gray-800 text-lg">{watch("weight") || '--'} <span className="text-xs font-semibold text-gray-400">KG</span></span>}
                  </div>
                )}
              </motion.div>
              
              <AnimatePresence>
                {activeRow === 'wt' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <input 
                        type="text" inputMode="numeric" placeholder="00" autoFocus
                        value={watch("weight")} onChange={(e) => handleNumericInput(e, "weight")}
                        className="w-32 bg-transparent text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
                      />
                      <span className="text-xl font-bold text-emerald-500">KG</span>
                    </div>
                    {errors.weight && <span className="text-xs font-bold text-red-500 mt-2">Please enter your weight.</span>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Action Button */}
            <motion.div layout className="pt-4">
              <button 
                type="submit" disabled={loading}
                className="w-full h-16 rounded-2xl font-black tracking-wide uppercase text-white text-lg bg-[#0F766E] hover:bg-[#053b32] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(15,118,110,0.3)]"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Save Metrics'}
              </button>
            </motion.div>

          </form>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default UpdateVitalsModal;