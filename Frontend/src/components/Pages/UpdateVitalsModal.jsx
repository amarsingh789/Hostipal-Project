// // import React, { useState } from 'react';
// // import { X, HeartPulse, Droplet, Thermometer, Activity, Loader2 } from 'lucide-react';
// // import toast from 'react-hot-toast';

// // const UpdateVitalsModal = ({ isOpen, onClose, onSave }) => {
// //   const [loading, setLoading] = useState(false);
// //   const [vitals, setVitals] = useState({
// //     heartRate: '',
// //     bpSys: '',
// //     bpDia: '',
// //     weight: '',
// //     temperature: ''
// //   });

// //   if (!isOpen) return null;

// //   const handleChange = (e) => {
// //     setVitals({ ...vitals, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     // Mock API Call Delay (Backend banne ke baad yahan axios aayega)
// //     setTimeout(() => {
// //       setLoading(false);
// //       onSave(vitals); // Dashboard ko naya data bhejega
// //       toast.success('Health Vitals updated successfully!');
// //       onClose();
// //     }, 1500);
// //   };

// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
// //       {/* Blurred Backdrop */}
// //       <div 
// //         className="absolute inset-0 bg-[#021814]/40 backdrop-blur-sm transition-opacity"
// //         onClick={onClose}
// //       ></div>

// //       {/* Modal Content */}
// //       <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
// //         {/* Header Banner */}
// //         <div className="bg-gradient-to-r from-[#053b32] to-[#0F766E] p-6 text-white flex justify-between items-center">
// //           <div>
// //             <h2 className="text-2xl font-bold font-poppins">Update Vitals</h2>
// //             <p className="text-[#E6F4F1] text-sm mt-1 opacity-90">Keep your health record up to date.</p>
// //           </div>
// //           <button 
// //             onClick={onClose}
// //             className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* Form Body */}
// //         <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
// //           <div className="grid grid-cols-2 gap-5">
// //             {/* Heart Rate */}
// //             <div className="col-span-2 sm:col-span-1 space-y-2">
// //               <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
// //                 <HeartPulse size={16} className="text-red-500" /> Heart Rate
// //               </label>
// //               <div className="relative">
// //                 <input 
// //                   type="number" name="heartRate" value={vitals.heartRate} onChange={handleChange}
// //                   placeholder="e.g. 72" required
// //                   className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] focus:border-transparent outline-none transition-all font-medium"
// //                 />
// //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">bpm</span>
// //               </div>
// //             </div>

// //             {/* Blood Pressure (Sys/Dia) */}
// //             <div className="col-span-2 sm:col-span-1 space-y-2">
// //               <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
// //                 <Droplet size={16} className="text-blue-500" /> Blood Pressure
// //               </label>
// //               <div className="flex items-center gap-2">
// //                 <input 
// //                   type="number" name="bpSys" value={vitals.bpSys} onChange={handleChange}
// //                   placeholder="120" required
// //                   className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-center focus:ring-2 focus:ring-[#0F766E] outline-none font-medium"
// //                 />
// //                 <span className="text-slate-400 font-bold">/</span>
// //                 <input 
// //                   type="number" name="bpDia" value={vitals.bpDia} onChange={handleChange}
// //                   placeholder="80" required
// //                   className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-center focus:ring-2 focus:ring-[#0F766E] outline-none font-medium"
// //                 />
// //               </div>
// //             </div>

// //             {/* Weight */}
// //             <div className="col-span-2 sm:col-span-1 space-y-2">
// //               <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
// //                 <Activity size={16} className="text-emerald-500" /> Weight
// //               </label>
// //               <div className="relative">
// //                 <input 
// //                   type="number" name="weight" value={vitals.weight} onChange={handleChange}
// //                   placeholder="e.g. 68" required
// //                   className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] outline-none transition-all font-medium"
// //                 />
// //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">kg</span>
// //               </div>
// //             </div>

// //             {/* Temperature */}
// //             <div className="col-span-2 sm:col-span-1 space-y-2">
// //               <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
// //                 <Thermometer size={16} className="text-orange-500" /> Temperature
// //               </label>
// //               <div className="relative">
// //                 <input 
// //                   type="number" step="0.1" name="temperature" value={vitals.temperature} onChange={handleChange}
// //                   placeholder="e.g. 98.6" required
// //                   className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] outline-none transition-all font-medium"
// //                 />
// //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">°F</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="pt-4 flex gap-3">
// //             <button 
// //               type="button" onClick={onClose}
// //               className="flex-1 py-3.5 rounded-xl font-bold text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
// //             >
// //               Cancel
// //             </button>
// //             <button 
// //               type="submit" disabled={loading}
// //               className="flex-1 py-3.5 rounded-xl font-bold text-[#dfff4f] bg-[#053b32] hover:bg-[#0F766E] transition-colors shadow-lg flex items-center justify-center"
// //             >
// //               {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Vitals'}
// //             </button>
// //           </div>
// //         </form>

// //       </div>
// //     </div>
// //   );
// // };

// // export default UpdateVitalsModal;

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, HeartPulse, Droplet, Thermometer, Activity, Loader2 } from 'lucide-react';
// import toast from 'react-hot-toast';

// // 1. Zod Validation Schema
// const vitalsSchema = z.object({
//   heartRate: z.coerce.number().min(30, "Too low").max(250, "Too high"),
//   bpSys: z.coerce.number().min(70, "Too low").max(200, "Too high"),
//   bpDia: z.coerce.number().min(40, "Too low").max(130, "Too high"),
//   weight: z.coerce.number().min(2, "Invalid").max(300, "Invalid"),
//   temperature: z.coerce.number().min(90, "Invalid").max(110, "Invalid").optional()
// });

// const UpdateVitalsModal = ({ isOpen, onClose, onSave, initialData }) => {
//   const [loading, setLoading] = useState(false);

//   // 2. React Hook Form Setup
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: zodResolver(vitalsSchema),
//     defaultValues: {
//       heartRate: initialData?.heartRate || '',
//       bpSys: initialData?.bpSys || '',
//       bpDia: initialData?.bpDia || '',
//       weight: initialData?.weight || '',
//       temperature: '' // Temperature database me nahi hai, toh blank rakha
//     }
//   });

//   const onSubmit = (data) => {
//     setLoading(true);

//     // Mock API Call Delay for UI feel
//     setTimeout(() => {
//       setLoading(false);
//       onSave(data); // Dashboard ko validated data bhejega
//       reset(); // Form clear
//     }, 1200);
//   };

//   const handleClose = () => {
//     reset(); // Reset on close
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
//           {/* Backdrop Animation */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 bg-[#021814]/60 backdrop-blur-sm"
//             onClick={handleClose}
//           />

//           {/* Modal Scale Animation */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
//             className="relative bg-white w-full max-w-md rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden"
//           >
            
//             {/* Header Banner */}
//             <div className="bg-gradient-to-r from-[#053b32] to-[#0F766E] p-6 text-white flex justify-between items-center relative overflow-hidden">
//               {/* Decorative circle */}
//               <div className="absolute top-[-30px] right-[-20px] w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              
//               <div className="relative z-10">
//                 <h2 className="text-2xl font-bold font-poppins text-[#dfff4f] tracking-tight">Update Vitals</h2>
//                 <p className="text-[#E6F4F1] text-xs md:text-sm mt-1 opacity-90 font-inter">Keep your health record up to date.</p>
//               </div>
//               <button 
//                 onClick={handleClose}
//                 className="w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors relative z-10"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* Form Body */}
//             <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 font-inter">
//               <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                
//                 {/* Heart Rate */}
//                 <div className="col-span-2 sm:col-span-1">
//                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
//                     <HeartPulse size={14} className="text-red-500" /> Heart Rate
//                   </label>
//                   <div className="relative group">
//                     <input 
//                       type="number" 
//                       {...register("heartRate")}
//                       placeholder="72" 
//                       className={`w-full pl-4 pr-12 py-3 bg-slate-50 border ${errors.heartRate ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#0F766E]'} rounded-xl focus:ring-2 focus:bg-white outline-none transition-all font-semibold text-slate-800`}
//                     />
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">bpm</span>
//                   </div>
//                   {errors.heartRate && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.heartRate.message}</p>}
//                 </div>

//                 {/* Weight */}
//                 <div className="col-span-2 sm:col-span-1">
//                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
//                     <Activity size={14} className="text-emerald-500" /> Weight
//                   </label>
//                   <div className="relative group">
//                     <input 
//                       type="number" 
//                       {...register("weight")}
//                       placeholder="68" 
//                       className={`w-full pl-4 pr-10 py-3 bg-slate-50 border ${errors.weight ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#0F766E]'} rounded-xl focus:ring-2 focus:bg-white outline-none transition-all font-semibold text-slate-800`}
//                     />
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">kg</span>
//                   </div>
//                   {errors.weight && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.weight.message}</p>}
//                 </div>

//                 {/* Blood Pressure (Sys/Dia) */}
//                 <div className="col-span-2">
//                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
//                     <Droplet size={14} className="text-blue-500" /> Blood Pressure <span className="text-[10px] font-normal normal-case text-slate-400">(Sys/Dia)</span>
//                   </label>
//                   <div className="flex items-center gap-3">
//                     <div className="w-full relative">
//                       <input 
//                         type="number" 
//                         {...register("bpSys")}
//                         placeholder="120" 
//                         className={`w-full px-4 py-3 bg-slate-50 border ${errors.bpSys ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#0F766E]'} rounded-xl text-center focus:ring-2 focus:bg-white outline-none transition-all font-semibold text-slate-800`}
//                       />
//                     </div>
//                     <span className="text-slate-300 font-light text-2xl">/</span>
//                     <div className="w-full relative">
//                       <input 
//                         type="number" 
//                         {...register("bpDia")}
//                         placeholder="80" 
//                         className={`w-full px-4 py-3 bg-slate-50 border ${errors.bpDia ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#0F766E]'} rounded-xl text-center focus:ring-2 focus:bg-white outline-none transition-all font-semibold text-slate-800`}
//                       />
//                     </div>
//                   </div>
//                   {(errors.bpSys || errors.bpDia) && <p className="text-[10px] text-red-500 mt-1 font-semibold">Enter valid BP values (e.g. 120/80)</p>}
//                 </div>

//                 {/* Temperature */}
//                 <div className="col-span-2">
//                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
//                     <Thermometer size={14} className="text-orange-500" /> Temperature <span className="text-[10px] font-normal normal-case text-slate-400">(Optional)</span>
//                   </label>
//                   <div className="relative group">
//                     <input 
//                       type="number" step="0.1" 
//                       {...register("temperature")}
//                       placeholder="98.6" 
//                       className={`w-full pl-4 pr-10 py-3 bg-slate-50 border ${errors.temperature ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#0F766E]'} rounded-xl focus:ring-2 focus:bg-white outline-none transition-all font-semibold text-slate-800`}
//                     />
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">°F</span>
//                   </div>
//                   {errors.temperature && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.temperature.message}</p>}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="pt-8 flex gap-3">
//                 <button 
//                   type="button" onClick={handleClose} disabled={loading}
//                   className="flex-[0.4] py-3.5 rounded-xl font-bold text-slate-500 bg-white border-2 border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit" disabled={loading}
//                   className="flex-[0.6] py-3.5 rounded-xl font-bold text-[#dfff4f] bg-[#053b32] hover:bg-[#0F766E] transition-all shadow-[0_8px_20px_rgba(5,59,50,0.2)] hover:shadow-[0_8px_25px_rgba(15,118,110,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
//                 >
//                   {loading ? <Loader2 className="w-5 h-5 animate-spin text-[#dfff4f]" /> : 'Save Vitals'}
//                 </button>
//               </div>
//             </form>

//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default UpdateVitalsModal;

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, HeartPulse, Droplet, Activity, CheckCircle2, Loader2 } from 'lucide-react';

// // 1. Zod Schema
// const vitalsSchema = z.object({
//   heartRate: z.string().max(4).optional(),
//   bpSys: z.string().max(4).optional(),
//   bpDia: z.string().max(4).optional(),
//   weight: z.string().max(4).optional()
// });

// const UpdateVitalsModal = ({ isOpen, onClose, onSave, initialData }) => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
  
//   // "hr", "bp", ya "wt" me se koi ek active rahega
//   const [activeRow, setActiveRow] = useState('hr'); 

//   const { register, handleSubmit, setValue, watch, reset } = useForm({
//     resolver: zodResolver(vitalsSchema),
//     defaultValues: {
//       heartRate: initialData?.heartRate ? String(initialData.heartRate) : '',
//       bpSys: initialData?.bpSys ? String(initialData.bpSys) : '',
//       bpDia: initialData?.bpDia ? String(initialData.bpDia) : '',
//       weight: initialData?.weight ? String(initialData.weight) : ''
//     }
//   });

//   const onSubmit = (data) => {
//     setLoading(true);
//     setActiveRow(null); // Save karte time sab collapse kar do
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setTimeout(() => {
//         setSuccess(false);
//         onSave({
//           heartRate: data.heartRate ? Number(data.heartRate) : null,
//           bpSys: data.bpSys ? Number(data.bpSys) : null,
//           bpDia: data.bpDia ? Number(data.bpDia) : null,
//           weight: data.weight ? Number(data.weight) : null,
//         });
//         reset();
//         setActiveRow('hr'); // Reset for next time
//       }, 1500); 
//     }, 1000);
//   };

//   const handleClose = () => {
//     reset();
//     setActiveRow('hr');
//     onClose();
//   };

//   // 🚀 Strict 4-Digit Logic
//   const handleNumericInput = (e, fieldName) => {
//     let val = e.target.value.replace(/[^0-9.]/g, ''); 
//     if (val.length > 4) val = val.slice(0, 4); // Strict limit to 4 chars
//     setValue(fieldName, val);
//   };

//   const springConfig = { type: "spring", stiffness: 300, damping: 25 };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-0">
        
//         {/* CSS Trick to kill browser spinners */}
//         <style>{`
//           input[type=number]::-webkit-inner-spin-button, 
//           input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
//           input[type=text] { -moz-appearance: textfield; caret-color: #0F766E; }
//         `}</style>

//         {/* Blur Backdrop */}
//         <motion.div 
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           className="absolute inset-0 bg-[#021814]/30 backdrop-blur-md"
//           onClick={handleClose}
//         />

//         {/* Modal Container */}
//         <motion.div 
//           layout
//           initial={{ opacity: 0, y: 100, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.95 }}
//           transition={springConfig}
//           className="relative bg-[#f8fafc] w-full max-w-[440px] rounded-[2.5rem] shadow-2xl overflow-hidden"
//         >
//           {/* Header */}
//           <motion.div layout className="bg-white px-8 pt-8 pb-6 rounded-b-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative z-20 flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-black font-poppins text-[#021814] tracking-tight">Health Metrics</h2>
//               <p className="text-gray-500 text-sm font-medium mt-1">Tap a section to log values</p>
//             </div>
//             <button onClick={handleClose} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center transition-colors">
//               <X size={20} strokeWidth={2.5} />
//             </button>
//           </motion.div>

//           {/* Success Overlay */}
//           <AnimatePresence>
//             {success && (
//               <motion.div 
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 className="absolute inset-0 z-50 bg-[#0F766E] flex flex-col items-center justify-center text-white rounded-[2.5rem]"
//               >
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}>
//                   <CheckCircle2 size={72} strokeWidth={2} className="text-[#dfff4f] mb-4" />
//                 </motion.div>
//                 <h3 className="text-3xl font-black font-poppins tracking-tight">Logged!</h3>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* 🚀 LIQUID ACCORDION FORM 🚀 */}
//           <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6 space-y-3 relative z-10">
            
//             {/* 1. HEART RATE */}
//             <motion.div 
//               layout transition={springConfig}
//               onClick={() => setActiveRow('hr')}
//               className={`overflow-hidden cursor-pointer border-2 transition-colors ${activeRow === 'hr' ? 'bg-white border-white shadow-xl rounded-[2rem] p-6 cursor-default' : 'bg-white/50 border-transparent hover:bg-white/80 rounded-2xl p-4'}`}
//             >
//               <motion.div layout className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'hr' ? 'w-14 h-14 bg-red-500 text-white shadow-lg shadow-red-500/30' : 'w-10 h-10 bg-red-100 text-red-500'}`}>
//                     <HeartPulse size={activeRow === 'hr' ? 28 : 20} className={activeRow === 'hr' ? 'animate-pulse' : ''} />
//                   </motion.div>
//                   <motion.span layout className={`font-bold ${activeRow === 'hr' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Heart Rate</motion.span>
//                 </div>
//                 {/* Collapsed Value Preview */}
//                 {activeRow !== 'hr' && (
//                   <span className="font-black text-gray-800 text-lg">{watch("heartRate") || '--'} <span className="text-xs font-semibold text-gray-400">BPM</span></span>
//                 )}
//               </motion.div>
              
//               <AnimatePresence>
//                 {activeRow === 'hr' && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex items-baseline gap-2">
//                     <input 
//                       type="text" inputMode="numeric" placeholder="00" autoFocus
//                       value={watch("heartRate")} onChange={(e) => handleNumericInput(e, "heartRate")}
//                       className="w-32 bg-transparent text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
//                     />
//                     <span className="text-xl font-bold text-red-500">BPM</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* 2. BLOOD PRESSURE */}
//             <motion.div 
//               layout transition={springConfig}
//               onClick={() => setActiveRow('bp')}
//               className={`overflow-hidden cursor-pointer border-2 transition-colors ${activeRow === 'bp' ? 'bg-white border-white shadow-xl rounded-[2rem] p-6 cursor-default' : 'bg-white/50 border-transparent hover:bg-white/80 rounded-2xl p-4'}`}
//             >
//               <motion.div layout className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'bp' ? 'w-14 h-14 bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'w-10 h-10 bg-blue-100 text-blue-500'}`}>
//                     <Droplet size={activeRow === 'bp' ? 28 : 20} />
//                   </motion.div>
//                   <motion.span layout className={`font-bold ${activeRow === 'bp' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Blood Pressure</motion.span>
//                 </div>
//                 {activeRow !== 'bp' && (
//                   <span className="font-black text-gray-800 text-lg">{(watch("bpSys") || '--')} / {(watch("bpDia") || '--')}</span>
//                 )}
//               </motion.div>
              
//               <AnimatePresence>
//                 {activeRow === 'bp' && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex items-center gap-2">
//                     <div className="flex flex-col items-center">
//                       <input 
//                         type="text" inputMode="numeric" placeholder="120" autoFocus
//                         value={watch("bpSys")} onChange={(e) => handleNumericInput(e, "bpSys")}
//                         className="w-24 sm:w-28 bg-transparent text-center text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
//                       />
//                       <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2">SYS</span>
//                     </div>
//                     <span className="text-4xl font-light text-gray-300 pb-6">/</span>
//                     <div className="flex flex-col items-center">
//                       <input 
//                         type="text" inputMode="numeric" placeholder="80" 
//                         value={watch("bpDia")} onChange={(e) => handleNumericInput(e, "bpDia")}
//                         className="w-24 sm:w-28 bg-transparent text-center text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
//                       />
//                       <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2">DIA</span>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* 3. WEIGHT */}
//             <motion.div 
//               layout transition={springConfig}
//               onClick={() => setActiveRow('wt')}
//               className={`overflow-hidden cursor-pointer border-2 transition-colors ${activeRow === 'wt' ? 'bg-white border-white shadow-xl rounded-[2rem] p-6 cursor-default' : 'bg-white/50 border-transparent hover:bg-white/80 rounded-2xl p-4'}`}
//             >
//               <motion.div layout className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <motion.div layout className={`flex items-center justify-center rounded-2xl ${activeRow === 'wt' ? 'w-14 h-14 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'w-10 h-10 bg-emerald-100 text-emerald-500'}`}>
//                     <Activity size={activeRow === 'wt' ? 28 : 20} />
//                   </motion.div>
//                   <motion.span layout className={`font-bold ${activeRow === 'wt' ? 'text-xl text-gray-800' : 'text-sm text-gray-600'}`}>Body Weight</motion.span>
//                 </div>
//                 {activeRow !== 'wt' && (
//                   <span className="font-black text-gray-800 text-lg">{watch("weight") || '--'} <span className="text-xs font-semibold text-gray-400">KG</span></span>
//                 )}
//               </motion.div>
              
//               <AnimatePresence>
//                 {activeRow === 'wt' && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-6 flex items-baseline gap-2">
//                     <input 
//                       type="text" inputMode="numeric" placeholder="00" autoFocus
//                       value={watch("weight")} onChange={(e) => handleNumericInput(e, "weight")}
//                       className="w-32 bg-transparent text-[4rem] sm:text-[5rem] leading-none font-black text-[#021814] placeholder:text-gray-200 outline-none p-0" 
//                     />
//                     <span className="text-xl font-bold text-emerald-500">KG</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Action Button */}
//             <motion.div layout className="pt-4">
//               <button 
//                 type="submit" disabled={loading}
//                 className="w-full h-16 rounded-2xl font-black tracking-wide uppercase text-white text-lg bg-[#0F766E] hover:bg-[#053b32] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(15,118,110,0.3)]"
//               >
//                 {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Save Metrics'}
//               </button>
//             </motion.div>

//           </form>
//         </motion.div>

//       </div>
//     </AnimatePresence>
//   );
// };

// export default UpdateVitalsModal;

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