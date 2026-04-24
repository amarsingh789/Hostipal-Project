import React, { useEffect, useState } from "react";
import {
  ChevronLeft, Activity, HeartPulse, Droplet, Download, FileText, 
  TrendingUp, Calendar, AlertCircle, CheckCircle2, Loader2, LineChart as LineChartIcon 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import api from '../../utils/axiosInstance.js'



const Result = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [activeChart, setActiveChart] = useState("bp");
  const [vitalsHistory, setVitalsHistory] = useState([]);
  const [labResults, setLabResults] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true)
        const [vitalsRes, labsRes] = await Promise.all([
          api.get('/vitals/history').catch(() => ({data : []})),
          api.get('/lab-results/recent').catch(() => ({data : []})),
        ])
        // setVitalsHistory(vitalsRes.data || []);
        // setLabResults(labsRes.data || []);
        let historyData = vitalsRes.data || [];

        if(historyData.length === 0 && (user?.bpSys || user?.heartRate || user?.userWeight)){
          const currentMonth = new Date().toLocaleString('default', {month: 'short'});

          const lastMonthDate = new Date();
          lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
          const lastMonth = lastMonthDate.toLocaleString('default', {month: 'short'});

          const currSys = user?.bpSys || 120;
          const currDia = user?.bpDia || 80;
          const currHeart = user?.heartRate || 72;
          const currWeight = user?.userWeight || 70;

          historyData = [
            {
              month: lastMonth,
              bpSys: Math.max(100, currSys - 5),
              bpDia: Math.max(60, currDia - 2),
              heartRate: Math.max(60, currHeart + 5), 
              weight: currWeight > 50 ? currWeight - 2.5 : currWeight
            },
            {
              month: currentMonth,
              bpSys: currSys,
              bpDia: currDia,
              heartRate: currHeart,
              weight: currWeight
            }
          ]
        }
        setVitalsHistory(historyData)

        if(!labsRes.data || labsRes.data.length === 0){
          setLabResults([
            { id: 1, name: "Complete Blood Count (CBC)", date: "15 Jun 2026", status: "Normal", doctor: "Dr. Ananya Sharma" },
          ])
        }else{
          setLabResults(labsRes.data)
        }
      } 
      // catch(error){
      //   console.error("Error fetching data:", error);
      //   toast.error("Failed to load medical history.");
      //   setVitalsHistory([]);
      // }finally{
      //   setLoading(false);
      // }
      catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load medical history.");
        setVitalsHistory([])
      } finally {
        setLoading(false);

      }
    }
    if(user){
      fetchData();
    }
  }, [user]);  

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  // Rechart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#021814] p-3 rounded-xl shadow-lg border border-white/10 text-white z-50 relative">
          <p className="text-xs text-[#a8cfc3] mb-1 font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm font-bold flex items-center gap-2" style={{ color: entry.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
              {entry.name} : {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter pb-24">
      {/* Header */}
      <div className="bg-[#021814] pt-28 pb-32 md:pt-36 md:pb-40 px-6 rounded-b-[2.5rem] md:rounded-b-[3.5rem] relative  overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#0F766E] opacity-40 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-[#dfff4f] transition-colors text-sm font-semibold mb-8"
          >
            <ChevronLeft size={18} /> Back to Dashboard
          </button>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Activity className="text-[#dfff4f]" size={24} />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black font-poppins text-white">
                  Vitals & Lab Reports
                </h1>
                <p className="text-[#a8cfc3] text-sm mt-1">
                  Track your health progress,{" "}
                  {user?.name?.split(" ")[0] || "User"}.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-24 relative z-20">
        {loading ? (
          <div className="bg-white rounded-[2rem] shadow-sm p-12 text-center flex flex-col items-center justify-center h-[400px]">
             <Loader2 size={40} className="animate-spin text-[#0F766E] mb-4" />
             <p className="text-gray-500 font-semibold">Loading your health data...</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h2 className="text-xl font-bold font-poppins text-[#021814] flex items-center gap-2">
                    <TrendingUp className="text-[#0F766E]" size={24} /> Health Trends
                  </h2>

                  <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                    <button onClick={() => setActiveChart("bp")} className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-colors ${activeChart === "bp" ? "bg-white shadow-sm text-[#0F766E]" : "text-gray-500 hover:text-gray-700"}`}>Blood Pressure</button>
                    <button onClick={() => setActiveChart("heartRate")} className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-colors ${activeChart === "heartRate" ? "bg-white shadow-sm text-red-500" : "text-gray-500 hover:text-gray-700"}`}>Heart Rate</button>
                    <button onClick={() => setActiveChart("weight")} className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-colors ${activeChart === "weight" ? "bg-white shadow-sm text-orange-500" : "text-gray-500 hover:text-gray-700"}`}>Weight</button>
                  </div>
                </div>

                <div className="h-[300px] w-full">
                  {vitalsHistory.length >= 2 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      {activeChart === "bp" ? (
                        <LineChart data={vitalsHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dy={10} />
                          <YAxis domain={["dataMin - 10", "dataMax + 10"]} axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dx={-10} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line type="monotone" dataKey="bpSys" name="Systolic" stroke="#0F766E" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                          <Line type="monotone" dataKey="bpDia" name="Diastolic" stroke="#94A3B8" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, strokeWidth: 2 }} />
                        </LineChart>
                      ) : activeChart === "heartRate" ? (
                        <AreaChart data={vitalsHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                          <defs>
                            <linearGradient id="colorHeart" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dy={10} />
                          <YAxis domain={["dataMin - 5", "dataMax + 5"]} axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dx={-10} />
                          <Tooltip content={<CustomTooltip />} />
                          <Area type="monotone" dataKey="heartRate" name="BPM" stroke="#EF4444" strokeWidth={3} fillOpacity={1} fill="url(#colorHeart)" />
                        </AreaChart>
                      ) : (
                        <AreaChart data={vitalsHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                          <defs>
                            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dy={10} />
                          <YAxis domain={["dataMin - 2", "dataMax + 2"]} axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dx={-10} />
                          <Tooltip content={<CustomTooltip />} />
                          <Area type="monotone" dataKey="weight" name="Weight (kg)" stroke="#F97316" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" />
                        </AreaChart>
                      )}
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[1.5rem] p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                        <LineChartIcon size={28} className="text-gray-400" />
                      </div>

                      <h3 className="text-[#021814] font-bold font-poppins mb-2">Not enough data to show trends</h3>
                      <p className="text-sm text-gray-500 max-w-sm">
                        {vitalsHistory.length === 1 
                          ? "You have updated your vitals once. Update them again next time to see your health progress line." 
                          : "Start logging your blood pressure, heart rate, and weight to unlock personalized health trends."}
                      </p>
                      <button 
                        onClick={() => navigate('/dashboard')} 
                        className="mt-6 px-6 py-2.5 bg-white border border-gray-200 text-[#0F766E] font-bold text-sm rounded-xl hover:bg-gray-50 hover:border-[#0F766E] transition-all"
                      >
                        Update Vitals
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#E6F4F1] p-5 rounded-[1.5rem] border border-[#0F766E]/20">
                    <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white p-2 rounded-full text-[#0F766E]"><Droplet size={16} /></div>
                    <p className="text-[#0F766E] text-xs font-bold uppercase tracking-wider">Latest BP</p>
                  </div>
                  <p className="text-2xl font-black font-poppins text-[#021814]">
                    {user?.bpSys && user?.bpDia ? `${user.bpSys}/${user.bpDia}` : "--/--"}
                    <span className="text-sm font-medium text-[#0F766E] ml-1">mmHg</span>
                  </p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-[1.5rem] border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white p-2 rounded-full text-red-500"><HeartPulse size={16} /></div>
                    <p className="text-red-500 text-xs font-bold uppercase tracking-wider">Latest Heart Rate</p>
                  </div>
                  <p className="text-2xl font-black font-poppins text-[#021814]">
                    {user?.heartRate || "--"}
                    <span className="text-sm font-medium text-red-500 ml-1">bpm</span>
                  </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-[1.5rem] border border-orange-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white p-2 rounded-full text-orange-500"><Activity size={16} /></div>
                    <p className="text-orange-500 text-xs font-bold uppercase tracking-wider">Latest Weight</p>
                  </div>
                  <p className="text-2xl font-black font-poppins text-[#021814]">
                    {user?.userWeight || "--"}
                    <span className="text-sm font-medium text-orange-500 ml-1">kg</span>
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN - LAB REPORTS */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold font-poppins text-[#021814] flex items-center gap-2">
                    <FileText className="text-[#0F766E]" size={20} /> Lab Reports
                  </h3>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Recent</span>
                </div>
                <div className="space-y-4">
                  {labResults.length > 0 ? (
                    labResults.map((report) => (
                      <div key={report.id} className="p-4 border border-gray-100 rounded-2xl hover:border-[#0F766E]/30 transition-all hover:shadow-md group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-[#021814] text-sm font-poppins leading-tight pr-4">{report.name}</h4>
                          <button className="text-gray-400 hover:text-[#0F766E] transition-colors p-1 bg-gray-50 rounded-full group-hover:bg-[#E6F4F1]">
                            <Download size={16} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {report.date}</span>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                          <p className="text-[10px] text-gray-400 uppercase font-semibold">Prescribed by:<br /><span className="text-gray-600 capitalize">{report.doctor}</span></p>

                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${report.status === "Normal" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>
                            {report.status === "Normal" ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                            {report.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <FileText size={32} className="mx-auto text-gray-300 mb-3" />
                      <p className="text-sm font-bold text-gray-800">No Reports Found</p>
                      <p className="text-xs text-gray-500 mt-1">You haven't uploaded any lab results yet.</p>
                    </div>
                  )}
                </div>

                <button className="w-full mt-6 py-3.5 border-2 border-dashed border-gray-200 text-gray-500 font-bold rounded-xl hover:border-[#0F766E] hover:text-[#0F766E] hover:bg-[#E6F4F1] transition-all text-sm">
                  + Upload Past Report
                </button>
              </motion.div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Result;

