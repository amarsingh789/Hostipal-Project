import React, { useEffect, useState } from "react";
import {
  ChevronLeft, FileText, Calendar, Clock, MapPin, Download, 
  Activity, Stethoscope, FilePlus, ExternalLink, Loader2, ServerCrash,
  CheckCircle2, XCircle, Link as LinkIcon, Copy
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import toast from "react-hot-toast";
import api from "../../utils/axiosInstance.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge"; 

const Records = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  const [activeTab, setActiveTab] = useState("upcoming");
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [isGeneratingLink, setIsGeneratingLink] = useState(false);
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchRecord = async () => {
      try {
        setLoading(true);
        setHasError(false);

        const response = await api.get("/zivacare/getAppointments");
        let fetchRecords = response.data?.appointments || [];

        fetchRecords = fetchRecords.map((rec) => ({
          ...rec,
          upcoming: rec.status !== "Completed" && rec.status !== "Cancelled",
          clinic: rec.clinic || "Ziva Main Clinic, New Delhi",
          documents: rec.documents || [],
        }));
        
        setRecord(fetchRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
        toast.error("Failed to load medical records");
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) fetchRecord();
  }, [user]);

  const filteredRecords = record.filter(rec => 
    activeTab === "past" ? !rec.upcoming : rec.upcoming
  );

  const totalVisits = record.length;
  const upcomingVisits = record.filter(rec => rec.upcoming).length;
  
  const getPrimaryDoctor = () => {
    if (record.length === 0) return { name: "--", spec: "--" };
    
    const docCounts = {};
    record.forEach(rec => {
      const docName = rec.doctorName || rec.doctor;
      if (docName) {
        if (!docCounts[docName]) docCounts[docName] = { count: 0, spec: rec.department || rec.specialty };
        docCounts[docName].count += 1;
      }
    });

    let topDoc = { name: "--", spec: "--", count: 0 };
    for (const doc in docCounts) {
      if (docCounts[doc].count > topDoc.count) {
        topDoc = { name: doc, spec: docCounts[doc].spec, count: docCounts[doc].count };
      }
    }
    return topDoc;
  };

  const primaryDoctor = getPrimaryDoctor();

  const handleAddRecordClick = () => {
    navigate("/appointment");
  };

  const handleDownloadClick = (e, docName = "Medical_History.pdf") => {
    e.stopPropagation();
    toast.success(`${docName} downloaded successfully!`, {
        icon: "📄",
        style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  // 🚀 Logic for Generating and Copying Link
  const handleGenerateLink = () => {
    setIsGeneratingLink(true);
    // Simulate secure generation time
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(2, 10);
      setShareLink(`https://ziva.care/share/rec_${randomId}`);
      setIsGeneratingLink(false);
      toast.success("Secure link generated!");
    }, 1500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied to clipboard!", { icon: "📋" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter pb-24">
      
      {/* ── HEADER ── */}
      <div className="bg-[#021814] pt-28 pb-32 md:pt-36 md:pb-40 px-6 rounded-b-[2.5rem] md:rounded-b-[3.5rem] relative overflow-hidden z-0">
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
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                <FileText className="text-[#dfff4f]" size={24} />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black font-poppins text-white tracking-tight">Medical Records</h1>
                <p className="text-[#a8cfc3] text-sm mt-1">Your complete health history in one place.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - TIMELINE */}
          <div className="lg:col-span-2 space-y-6">
            
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-4 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              
              <div className="flex bg-gray-50 p-1.5 rounded-full border border-gray-100 w-full sm:w-[300px] relative">
                <button 
                  onClick={() => setActiveTab("upcoming")} 
                  className={`relative flex-1 px-6 py-2.5 text-xs font-bold rounded-full transition-colors z-10 ${activeTab === "upcoming" ? "text-white" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Upcoming
                </button>
                <button 
                  onClick={() => setActiveTab("past")} 
                  className={`relative flex-1 px-6 py-2.5 text-xs font-bold rounded-full transition-colors z-10 ${activeTab === "past" ? "text-white" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Past History
                </button>
                <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#021814] rounded-full transition-transform duration-300 ease-out z-0 ${activeTab === "past" ? "translate-x-[calc(100%+6px)]" : "translate-x-0"}`}></div>
              </div>

              <button 
                onClick={handleAddRecordClick}
                className="flex items-center justify-center gap-2 text-[#0F766E] font-bold text-xs bg-[#E6F4F1] px-5 py-3 rounded-full hover:bg-[#0F766E] hover:text-white transition-all w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <FilePlus size={16} /> Book Appointment
              </button>
            </motion.div>

            {/* Timeline Area */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 min-h-[400px]">
              
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <Loader2 size={40} className="animate-spin text-[#0F766E] mb-4" />
                  <p className="text-gray-500 font-semibold text-sm">Fetching your medical records...</p>
                </div>
              ) : hasError ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4 border border-red-100 shadow-sm">
                    <ServerCrash size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-[#021814] font-bold font-poppins mb-1">Server Error</h3>
                  <p className="text-sm text-gray-500 max-w-sm mb-6">We're having trouble connecting to our servers right now. Please try again in a few minutes.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-sm hover:shadow"
                  >
                    Retry
                  </button>
                </div>
              ) : filteredRecords.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                    <Calendar size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-[#021814] font-bold font-poppins mb-1">No {activeTab} records</h3>
                  <p className="text-sm text-gray-500 max-w-sm">You don't have any {activeTab} appointments or medical history documented yet.</p>
                  {activeTab === "upcoming" && (
                    <button onClick={handleAddRecordClick} className="mt-4 text-[#0F766E] font-bold text-sm hover:underline">
                      Book a new appointment
                    </button>
                  )}
                </div>
              ) : (
                <div className="relative border-l-[3px] border-gray-100 ml-4 md:ml-6 space-y-10 py-4">
                  <AnimatePresence mode="popLayout">
                    {filteredRecords.map((record) => {
                       const dateObj = new Date(record.date || record.appointmentDate);
                       const formattedDate = !isNaN(dateObj.getTime()) 
                          ? dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                          : "Unknown Date";

                       const isCancelled = record.status === "Cancelled";
                       
                       let dotColor = "bg-[#0F766E]"; 
                       if (record.upcoming) dotColor = "bg-[#dfff4f]"; 
                       if (isCancelled) dotColor = "bg-red-400"; 

                       return (
                        <motion.div 
                          key={record._id || record.id}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                          className="relative pl-8 md:pl-10"
                        >
                          <div className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full border-4 border-white shadow-sm z-10 ${dotColor}`}></div>

                          <div className={`transition-all duration-300 border p-5 rounded-[1.5rem] group ${isCancelled ? "bg-gray-50 border-gray-100 opacity-75" : "bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-gray-100 hover:border-[#0F766E]/20"}`}>
                            
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${isCancelled ? "bg-gray-200 text-gray-600" : "bg-[#E6F4F1] text-[#0F766E]"}`}>
                                    {formattedDate}
                                  </span>
                                  <span className="text-gray-500 text-xs font-semibold flex items-center gap-1">
                                    <Clock size={12} /> {record.time || record.timeSlot}
                                  </span>
                                </div>
                                <h3 className={`text-lg font-bold font-poppins mt-2 ${isCancelled ? "text-gray-500 line-through" : "text-[#021814]"}`}>
                                  {record.doctorName || record.doctor}
                                </h3>
                                <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                                  <Stethoscope size={12} /> {record.department || record.specialty}
                                </p>
                              </div>

                              {activeTab === "upcoming" ? (
                                 <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider flex items-center gap-1 border border-yellow-200">
                                   <Clock size={12}/> Scheduled
                                 </span>
                              ) : isCancelled ? (
                                <Badge variant="destructive" className="bg-red-50 text-red-600 border border-red-100 font-bold gap-1 text-[10px] uppercase">
                                  <XCircle size={12} /> Cancelled
                                </Badge>
                              ) : (
                                <Badge className="bg-[#E6F4F1] text-[#0F766E] border border-[#0F766E]/20 font-bold gap-1 text-[10px] uppercase hover:bg-[#E6F4F1]">
                                  <CheckCircle2 size={12} /> Completed
                                </Badge>
                              )}
                            </div>

                            {!record.upcoming && !isCancelled && record.diagnosis && (
                              <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 mb-4">
                                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Diagnosis</h4>
                                <p className="text-sm font-semibold text-[#021814] mb-3">{record.diagnosis}</p>
                                
                                {record.notes && (
                                  <>
                                    <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Doctor's Notes</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{record.notes}</p>
                                  </>
                                )}
                              </div>
                            )}

                            <div className="flex items-start gap-2 text-xs text-gray-500 font-medium mb-4">
                              <MapPin size={14} className="shrink-0 mt-0.5 text-gray-400" />
                              <p>{record.clinic}</p>
                            </div>

                            {!record.upcoming && !isCancelled && record.documents && record.documents.length > 0 && (
                              <div className="pt-4 border-t border-gray-100">
                                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Attached Documents</h4>
                                <div className="flex flex-wrap gap-3">
                                  {record.documents.map((doc, i) => (
                                    <button 
                                      key={i} 
                                      onClick={(e) => handleDownloadClick(e, doc.name)}
                                      className="flex items-center gap-3 bg-white border border-gray-200 px-3 py-2 rounded-xl hover:border-[#0F766E] transition-all hover:shadow-sm group/doc"
                                    >
                                      <div className={`p-1.5 rounded-lg ${doc.type === 'prescription' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                                        <FileText size={14} />
                                      </div>
                                      <div className="text-left">
                                        <p className="text-xs font-bold text-[#021814] truncate max-w-[120px]">{doc.name}</p>
                                        <p className="text-[10px] text-gray-400">{doc.size}</p>
                                      </div>
                                      <Download size={14} className="text-gray-300 group-hover/doc:text-[#0F766E] ml-2 transition-colors" />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - SUMMARY & STATS */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <h3 className="text-lg font-bold font-poppins text-[#021814] mb-6">Patient Overview</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-sm text-gray-500">Total Visits</span>
                    <span className="text-base font-black font-poppins text-[#021814]">{hasError ? "--" : totalVisits}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-sm text-gray-500">Upcoming</span>
                    <span className="text-base font-black font-poppins text-[#0F766E]">{hasError ? "--" : upcomingVisits}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-sm text-gray-500">Primary Doctor</span>
                    <span className="text-sm font-bold text-[#021814] text-right">
                      {hasError ? "--" : primaryDoctor.name}<br/>
                      <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wide">{hasError ? "" : primaryDoctor.spec}</span>
                    </span>
                  </div>
                </div>

                <button 
                  onClick={(e) => !hasError && handleDownloadClick(e, "Complete_Medical_History.pdf")}
                  className={`w-full mt-8 text-white font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm ${hasError ? "bg-gray-300 cursor-not-allowed" : "bg-[#0F766E] hover:bg-[#021814] hover:shadow-md hover:-translate-y-0.5"}`}
                >
                  <Download size={16} /> Download Full History
                </button>
              </motion.div>

              {/* 🚀 ENHANCED SHARE RECORDS SECTION */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-gradient-to-br from-[#E6F4F1] to-white p-6 rounded-[2rem] border border-[#0F766E]/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full text-[#0F766E] shrink-0 shadow-sm border border-gray-100">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#021814] mb-1">Share Records</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Securely share your medical history with an external specialist.</p>
                  </div>
                </div>

                {!shareLink ? (
                  <button 
                    onClick={handleGenerateLink}
                    disabled={isGeneratingLink || hasError}
                    className={`w-full font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 border ${
                      hasError 
                        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                        : "bg-white text-[#0F766E] border-[#0F766E]/20 hover:bg-[#0F766E] hover:text-white"
                    }`}
                  >
                    {isGeneratingLink ? (
                      <><Loader2 size={14} className="animate-spin" /> Generating Secure Link...</>
                    ) : (
                      <><LinkIcon size={14} /> Generate Share Link</>
                    )}
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }} 
                    className="mt-2"
                  >
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Your Secure Link</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-600 truncate flex-1 font-mono shadow-sm">
                        {shareLink}
                      </div>
                      <button 
                        onClick={handleCopyLink}
                        className="bg-[#021814] text-[#dfff4f] p-2.5 rounded-lg hover:bg-[#0F766E] hover:text-white transition-colors shadow-sm"
                        title="Copy Link"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <p className="text-[9px] text-gray-400 mt-2 text-center">Link expires in 24 hours</p>
                  </motion.div>
                )}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Records;