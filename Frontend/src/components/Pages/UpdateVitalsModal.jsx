import React, { useState } from 'react';
import { X, HeartPulse, Droplet, Thermometer, Activity, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const UpdateVitalsModal = ({ isOpen, onClose, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [vitals, setVitals] = useState({
    heartRate: '',
    bpSys: '',
    bpDia: '',
    weight: '',
    temperature: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock API Call Delay (Backend banne ke baad yahan axios aayega)
    setTimeout(() => {
      setLoading(false);
      onSave(vitals); // Dashboard ko naya data bhejega
      toast.success('Health Vitals updated successfully!');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-[#021814]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#053b32] to-[#0F766E] p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold font-poppins">Update Vitals</h2>
            <p className="text-[#E6F4F1] text-sm mt-1 opacity-90">Keep your health record up to date.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          <div className="grid grid-cols-2 gap-5">
            {/* Heart Rate */}
            <div className="col-span-2 sm:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <HeartPulse size={16} className="text-red-500" /> Heart Rate
              </label>
              <div className="relative">
                <input 
                  type="number" name="heartRate" value={vitals.heartRate} onChange={handleChange}
                  placeholder="e.g. 72" required
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] focus:border-transparent outline-none transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">bpm</span>
              </div>
            </div>

            {/* Blood Pressure (Sys/Dia) */}
            <div className="col-span-2 sm:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Droplet size={16} className="text-blue-500" /> Blood Pressure
              </label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" name="bpSys" value={vitals.bpSys} onChange={handleChange}
                  placeholder="120" required
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-center focus:ring-2 focus:ring-[#0F766E] outline-none font-medium"
                />
                <span className="text-slate-400 font-bold">/</span>
                <input 
                  type="number" name="bpDia" value={vitals.bpDia} onChange={handleChange}
                  placeholder="80" required
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-center focus:ring-2 focus:ring-[#0F766E] outline-none font-medium"
                />
              </div>
            </div>

            {/* Weight */}
            <div className="col-span-2 sm:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Activity size={16} className="text-emerald-500" /> Weight
              </label>
              <div className="relative">
                <input 
                  type="number" name="weight" value={vitals.weight} onChange={handleChange}
                  placeholder="e.g. 68" required
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] outline-none transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">kg</span>
              </div>
            </div>

            {/* Temperature */}
            <div className="col-span-2 sm:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Thermometer size={16} className="text-orange-500" /> Temperature
              </label>
              <div className="relative">
                <input 
                  type="number" step="0.1" name="temperature" value={vitals.temperature} onChange={handleChange}
                  placeholder="e.g. 98.6" required
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F766E] outline-none transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">°F</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button 
              type="button" onClick={onClose}
              className="flex-1 py-3.5 rounded-xl font-bold text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" disabled={loading}
              className="flex-1 py-3.5 rounded-xl font-bold text-[#dfff4f] bg-[#053b32] hover:bg-[#0F766E] transition-colors shadow-lg flex items-center justify-center"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Vitals'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default UpdateVitalsModal;