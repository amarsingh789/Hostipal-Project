// import React from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Activity,
//   Shield,
//   Camera,
//   Edit2,
//   Save,
//   X,
//   Droplet,
//   Ruler,
// } from "lucide-react";

// const UserPage = () => {
//   return (
//     <div className="min-h-screen bg-[#F4F7F6] font-inter pt-28 pb-20 px-4 sm:px-8">
//       <div className="absolute top-0 left-0 w-full h-72 bg-[#021814] rounded-b-[3rem] z-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0F766E] rounded-full blur-[120px] opacity-40"></div>
//       </div>
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-black font-poppins text-white tracking-tight">
//             My Profile
//           </h1>
//           <p className="text-[#E6F4F1] mt-1 opacity-80">
//             Manage your personal details and medical data.
//           </p>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left side */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-32">
//               {/* Avtar section */}
//               <div className="flex flex-col items-center text-center">
//                 <div className="relative w-32 h-32 mb-4 group">
//                   <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E6F4F1] to-[#0F766E]/20 border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold text-[#053b32] uppercase overflow-hidden">
//                     <p>A</p>
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold font-poppins text-[#021814] mt-4">
//                   Amar
//                 </h2>
//                 <p className="text-[#0F766E] font-medium text-sm mt-1 flex items-center gap-1 justify-center">
//                   <Shield size={14} />
//                   Verified Patient
//                 </p>
//               </div>
//               {/* Profile */}
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="font-semibold text-gray-600">
//                     Profile Completion
//                   </span>
//                   <span className="font-bold text-[#0F766E]">80%</span>
//                 </div>
//                 <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
//                   <div className="h-full bg-[#0F766E] w-[80%] rounded-full"></div>
//                 </div>
//                 <p className="text-xs text-gray-400 mt-2">
//                   Add your medical details to reach 100%
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* right box */}
//           <div className="lg:w-2/3 space-y-6">
//             <form action="">
//               <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-6">
//                 <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
//                   <h3 className="text-xl font-bold font-poppins text-[#053b32] flex items-center gap-2">
//                     <User className="text-[#0F766E]" size={20} /> Personal
//                     Information
//                   </h3>
//                 </div>
//                 {/* <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <InputField label="Full Name" icon={<User size={16}/>} name="name"  />
//                     </div> */}
//               </div>
//               <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
//                 <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/30">
//                   <h3 className="text-xl font-bold font-poppins text-[#053b32] flex items-center gap-2">
//                     <Activity className="text-[#0F766E]" size={20} /> Medical
//                     Profile
//                   </h3>
//                 </div>
//                 <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <Droplet size={14} className="text-red-400" /> Blood Group
//                     </label>
//                     <select name="bloodGroup" id="">
//                       <option value="A+">A+</option>
//                       <option value="A-">A-</option>
//                       <option value="B+">B+</option>
//                       <option value="B-">B-</option>
//                       <option value="O+">O+</option>
//                       <option value="O-">O-</option>
//                       <option value="AB+">AB+</option>
//                       <option value="AB-">AB-</option>
//                     </select>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <Ruler size={14} className="text-blue-400" /> Height (cm)
//                     </label>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <Activity size={14} className="text-emerald-400" /> Weight (kg)
//                     </label>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <Activity size={14} className="text-emerald-400" /> Gender
//                     </label>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <Activity size={14} className="text-emerald-400" /> DOB
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;



// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { format } from "date-fns";
// import {
//   User, Mail, Phone, MapPin, Calendar as CalendarIcon, 
//   Activity, Shield, Camera, Edit2, Save, Droplet, Ruler, Users, Loader2
// } from "lucide-react";
// import toast from "react-hot-toast";

// // Shadcn UI Imports (Adjust paths if your setup is different)
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { cn } from "@/lib/utils";

// const UserPage = () => {
//   // Redux state
//   const { user } = useSelector((state) => state.auth) || { user: null };
  
//   // Component States
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Form State
//   const [formData, setFormData] = useState({
//     name: user?.name || "Amar Singh",
//     email: user?.email || "amar@example.com",
//     mobileNumber: user?.mobileNumber || "+91 9876543210",
//     address: "New Delhi, India",
//     bloodGroup: "O+",
//     height: "175",
//     weight: "68",
//     gender: "Male",
//   });

//   // Separate state for Date object (needed for Shadcn Calendar)
//   const [dob, setDob] = useState(new Date(1998, 4, 15)); // May 15, 1998

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Yahan Backend API Call aayegi
//     setTimeout(() => {
//       setLoading(false);
//       setIsEditing(false);
//       toast.success("Profile updated successfully! 🎉");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-inter pt-28 pb-20 px-4 sm:px-8 relative">
      
//       {/* --- BACKGROUND ACCENT --- */}
//       <div className="absolute top-0 left-0 w-full h-72 bg-[#021814] rounded-b-[3rem] z-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0F766E] rounded-full blur-[120px] opacity-40"></div>
//         <div className="absolute top-20 -left-20 w-72 h-72 bg-[#dfff4f] rounded-full blur-[100px] opacity-10"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
        
//         {/* --- PAGE HEADER --- */}
//         <div className="mb-8 flex justify-between items-end">
//           <div>
//             <h1 className="text-3xl sm:text-4xl font-black font-poppins text-white tracking-tight">
//               My Profile
//             </h1>
//             <p className="text-[#E6F4F1] mt-1 opacity-80">
//               Manage your personal details and medical data.
//             </p>
//           </div>
//           {!isEditing && (
//             <button 
//               onClick={() => setIsEditing(true)}
//               className="hidden sm:flex text-[#021814] bg-[#dfff4f] hover:bg-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
//             >
//               <Edit2 size={16} /> Edit Profile
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* ========================================== */}
//           {/* LEFT: STICKY PROFILE CARD                  */}
//           {/* ========================================== */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 lg:sticky lg:top-32">
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="relative w-32 h-32 mb-4 group cursor-pointer">
//                   <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E6F4F1] to-[#0F766E]/20 border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold text-[#053b32] uppercase overflow-hidden">
//                     <p>{formData.name.charAt(0)}</p>
//                   </div>
//                   {isEditing && (
//                     <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
//                       <Camera size={24} />
//                     </div>
//                   )}
//                   <div className="absolute bottom-1 right-1 w-8 h-8 bg-[#dfff4f] border-4 border-white rounded-full"></div>
//                 </div>
                
//                 <h2 className="text-2xl font-bold font-poppins text-[#021814] mt-2">
//                   {formData.name}
//                 </h2>
//                 <p className="text-[#0F766E] font-medium text-sm mt-2 flex items-center gap-1 justify-center bg-[#E6F4F1] px-3 py-1 rounded-full w-max mx-auto">
//                   <Shield size={14} /> Verified Patient
//                 </p>
//               </div>

//               {/* Profile Progress */}
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="font-semibold text-gray-600">Profile Completion</span>
//                   <span className="font-bold text-[#0F766E]">80%</span>
//                 </div>
//                 <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
//                   <div className="h-full bg-[#0F766E] w-[80%] rounded-full relative">
//                     <div className="absolute inset-0 bg-white/20 w-full h-full animate-[pulse_2s_ease-in-out_infinite]"></div>
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-400 mt-3 text-center">
//                   Add your medical details to reach 100%
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* ========================================== */}
//           {/* RIGHT: FORMS AREA                          */}
//           {/* ========================================== */}
//           <div className="lg:w-2/3 space-y-6">
//             <form onSubmit={handleSave}>
              
//               {/* --- SECTION 1: PERSONAL INFORMATION --- */}
//               <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-6 transition-all">
//                 <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
//                   <h3 className="text-xl font-bold font-poppins text-[#053b32] flex items-center gap-2">
//                     <User className="text-[#0F766E]" size={20} /> Personal Information
//                   </h3>
                  
//                   {/* Mobile Edit Button */}
//                   {!isEditing && (
//                     <button type="button" onClick={() => setIsEditing(true)} className="sm:hidden text-[#0F766E] font-bold text-sm">
//                       Edit
//                     </button>
//                   )}
//                 </div>
                
//                 <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <InputField label="Full Name" icon={<User size={16}/>} name="name" value={formData.name} onChange={handleChange} disabled={!isEditing} />
//                   <InputField label="Email Address" icon={<Mail size={16}/>} name="email" type="email" value={formData.email} onChange={handleChange} disabled={!isEditing} />
//                   <InputField label="Mobile Number" icon={<Phone size={16}/>} name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} disabled={!isEditing} />
//                   <InputField label="Address" icon={<MapPin size={16}/>} name="address" value={formData.address} onChange={handleChange} disabled={!isEditing} />
                  
//                   {/* 🚀 SHADCN DATE PICKER INTEGRATION */}
//                   <div className="space-y-2 md:col-span-2 lg:col-span-1">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//                       <CalendarIcon size={16} className="text-orange-400" /> Date of Birth
//                     </label>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <button
//                           disabled={!isEditing}
//                           type="button"
//                           className={cn(
//                             "w-full flex items-center pl-4 pr-4 py-3.5 rounded-xl border outline-none transition-all text-left font-medium",
//                             isEditing 
//                               ? "border-gray-200 bg-gray-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] text-[#021814]" 
//                               : "border-transparent bg-gray-50 text-gray-500 cursor-not-allowed opacity-80"
//                           )}
//                         >
//                           <CalendarIcon className="mr-3 h-5 w-5 text-gray-400" />
//                           {dob ? format(dob, "PPP") : <span>Pick a date</span>}
//                         </button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0 rounded-2xl border-gray-100 shadow-xl z-50" align="start">
//                         <Calendar
//                           mode="single"
//                           selected={dob}
//                           onSelect={setDob}
//                           disabled={(date) => date > new Date()} // Prevent future dates
//                           initialFocus
//                           classNames={{
//                             day_selected: "bg-[#053b32] text-[#dfff4f] hover:bg-[#0F766E] hover:text-white",
//                             day_today: "bg-gray-100 text-gray-900",
//                           }}
//                         />
//                       </PopoverContent>
//                     </Popover>
//                   </div>

//                 </div>
//               </div>

//               {/* --- SECTION 2: MEDICAL PROFILE --- */}
//               <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
//                 <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/50">
//                   <h3 className="text-xl font-bold font-poppins text-[#053b32] flex items-center gap-2">
//                     <Activity className="text-[#0F766E]" size={20} /> Medical Profile
//                   </h3>
//                 </div>
                
//                 <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <SelectField label="Blood Group" icon={<Droplet size={14} className="text-red-400"/>} name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} disabled={!isEditing} options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} />
//                   <InputField label="Height (cm)" icon={<Ruler size={14} className="text-blue-400"/>} name="height" type="number" value={formData.height} onChange={handleChange} disabled={!isEditing} />
//                   <InputField label="Weight (kg)" icon={<Activity size={14} className="text-emerald-400"/>} name="weight" type="number" value={formData.weight} onChange={handleChange} disabled={!isEditing} />
//                   <SelectField label="Gender" icon={<Users size={14} className="text-purple-400"/>} name="gender" value={formData.gender} onChange={handleChange} disabled={!isEditing} options={['Male', 'Female', 'Other', 'Prefer not to say']} />
//                 </div>
//               </div>
              
//               {/* --- SAVE / CANCEL BUTTONS --- */}
//               {isEditing && (
//                 <div className="mt-8 flex items-center justify-end gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
//                   <button 
//                     type="button" 
//                     onClick={() => setIsEditing(false)} 
//                     className="text-gray-500 hover:text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 px-6 py-3.5 rounded-xl font-bold transition-all"
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     type="submit" 
//                     disabled={loading}
//                     className="bg-[#053b32] hover:bg-[#0F766E] text-[#dfff4f] px-8 py-3.5 rounded-xl font-bold font-poppins transition-all shadow-[0_8px_20px_rgba(5,59,50,0.2)] hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
//                     {loading ? 'Saving...' : 'Save Changes'}
//                   </button>
//                 </div>
//               )}

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // REUSABLE COMPONENTS FOR CLEAN CODE
// // ==========================================

// const InputField = ({ label, icon, name, type = "text", value, onChange, disabled, className = "" }) => (
//   <div className={`space-y-2 ${className}`}>
//     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//       {icon && <span className="text-gray-400">{icon}</span>} {label}
//     </label>
//     <div className="relative">
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         disabled={disabled}
//         className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all font-medium
//           ${disabled 
//             ? 'bg-gray-50 border-transparent text-gray-500 cursor-not-allowed opacity-80' 
//             : 'bg-gray-50 hover:bg-white focus:bg-white border-gray-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#021814]'
//           }`}
//       />
//     </div>
//   </div>
// );

// const SelectField = ({ label, icon, name, value, onChange, disabled, options }) => (
//   <div className="space-y-2">
//     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
//       {icon} {label}
//     </label>
//     <select 
//       name={name} 
//       value={value} 
//       onChange={onChange} 
//       disabled={disabled}
//       className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all font-medium appearance-none
//         ${disabled 
//           ? 'bg-gray-50 border-transparent text-gray-500 cursor-not-allowed opacity-80' 
//           : 'bg-gray-50 hover:bg-white focus:bg-white border-gray-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#021814] cursor-pointer'
//         }`}
//     >
//       <option value="" disabled>Select</option>
//       {options.map((opt) => (
//         <option key={opt} value={opt}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// export default UserPage;


// v-03

// import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// import {
//   User, Mail, Phone, MapPin, Calendar, Activity,
//   Shield, Camera, Save, X, Droplet, Ruler, Edit2,
//   ChevronDown, Check,
// } from "lucide-react";

// // shadcn components
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Progress } from "@/components/ui/progress";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   Card,
//   CardContent,
//   CardHeader,
// } from "@/components/ui/card";

// // ─── Helpers ────────────────────────────────────────────────────────────────
// const fmt = (d) =>
//   d
//     ? d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
//     : null;

// // ─── Reusable styled field wrapper ──────────────────────────────────────────
// function Field({ label, icon: Icon, iconColor = "#b0a899", children }) {
//   return (
//     <div className="space-y-2">
//       <Label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-[#9a8f85]">
//         {Icon && <Icon size={11} style={{ color: iconColor }} />}
//         {label}
//       </Label>
//       {children}
//     </div>
//   );
// }

// // ─── Main ───────────────────────────────────────────────────────────────────
// const UserPage = () => {
//   const [dob, setDob] = useState(undefined);
//   const [dobOpen, setDobOpen] = useState(false);
//   const [dobMed, setDobMed] = useState(undefined);
//   const [dobMedOpen, setDobMedOpen] = useState(false);
//   const [editing, setEditing] = useState(false);

//   return (
//     <TooltipProvider>
//       <div
//         className="min-h-screen pt-28 pb-24 px-4 sm:px-8"
//         style={{ background: "#f7f3ee", fontFamily: "'DM Sans', sans-serif" }}
//       >
//         {/* ── Google Fonts ── */}
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

//           .serif { font-family: 'Cormorant Garamond', serif; }

//           /* ── Hero arch ── */
//           .hero-arch {
//             position: absolute; top: 0; left: 0; right: 0; height: 290px;
//             background: linear-gradient(155deg, #0d2b22 0%, #0f3d30 55%, #1a5c47 100%);
//             border-radius: 0 0 40% 40% / 0 0 58px 58px;
//             overflow: hidden; z-index: 0;
//           }
//           .hero-orb1 {
//             position: absolute; top: -90px; right: -90px;
//             width: 360px; height: 360px; border-radius: 50%;
//             background: #0f766e; filter: blur(110px); opacity: .35;
//           }
//           .hero-dots {
//             position: absolute; inset: 0; opacity: .025;
//             background-image: radial-gradient(#fff 1px, transparent 1px);
//             background-size: 28px 28px;
//           }

//           /* ── Avatar ring ── */
//           .avatar-ring {
//             width: 112px; height: 112px; border-radius: 50%;
//             background: linear-gradient(135deg, #1a8f6e, #0d2b22);
//             padding: 3px;
//             box-shadow: 0 6px 24px rgba(15,61,48,.3);
//           }

//           /* ── Stat pill (sidebar) ── */
//           .stat-pill {
//             display: flex; align-items: center; gap: 10px;
//             padding: 11px 14px; border-radius: 14px;
//             background: #f7f3ee; border: 1px solid #ece8e2;
//             transition: all .18s;
//           }
//           .stat-pill:hover { background: #efe9e1; border-color: #ddd5c8; }

//           /* ── Section divider ── */
//           .sec-sep {
//             display: flex; align-items: center; gap: 10px; margin: 4px 0 20px;
//           }
//           .sec-sep span {
//             font-size: 10px; font-weight: 700; letter-spacing: .14em;
//             text-transform: uppercase; color: #b0a899; white-space: nowrap;
//           }
//           .sec-sep::before, .sec-sep::after {
//             content: ''; flex: 1; height: 1px; background: #ece8e2;
//           }

//           /* ── shadcn overrides (warm theme) ── */
//           /* Inputs */
//           .warm-input input,
//           .warm-input textarea,
//           .warm-input {
//             background: #faf7f4 !important;
//             border-color: #ece8e2 !important;
//             border-radius: 14px !important;
//             font-family: 'DM Sans', sans-serif !important;
//             color: #1a1410 !important;
//             transition: border-color .18s, box-shadow .18s, background .18s !important;
//           }
//           .warm-input input:focus,
//           .warm-input textarea:focus,
//           .warm-input:focus-within {
//             background: #fff !important;
//             border-color: #0f3d30 !important;
//             box-shadow: 0 0 0 3px rgba(15,61,48,.09) !important;
//           }
//           /* Shadcn Input direct */
//           input[class*="flex h-"]:not([type="date"]),
//           textarea[class*="flex"] {
//             background: #faf7f4;
//             border-color: #ece8e2;
//             border-radius: 14px;
//             font-family: 'DM Sans', sans-serif;
//           }
//           input[class*="flex h-"]:focus,
//           textarea[class*="flex"]:focus {
//             border-color: #0f3d30;
//             box-shadow: 0 0 0 3px rgba(15,61,48,.09);
//             background: #fff;
//           }

//           /* Select trigger override */
//           button[role="combobox"] {
//             background: #faf7f4 !important;
//             border-color: #ece8e2 !important;
//             border-radius: 14px !important;
//             font-family: 'DM Sans', sans-serif !important;
//             color: #1a1410 !important;
//             height: 42px !important;
//           }
//           button[role="combobox"]:focus {
//             border-color: #0f3d30 !important;
//             box-shadow: 0 0 0 3px rgba(15,61,48,.09) !important;
//           }
//           /* Select dropdown */
//           [role="listbox"] {
//             background: #fff !important;
//             border-color: #ece8e2 !important;
//             border-radius: 16px !important;
//             font-family: 'DM Sans', sans-serif !important;
//           }
//           [role="option"] { border-radius: 10px !important; }
//           [role="option"]:hover,
//           [role="option"]:focus { background: #f0ece6 !important; }
//           [role="option"][data-highlighted] { background: #e6f0ec !important; color: #0f3d30 !important; }

//           /* ── DayPicker warm override ── */
//           .rdp {
//             --rdp-accent-color: #0f3d30;
//             --rdp-background-color: #e6f0ec;
//             --rdp-accent-color-dark: #0f3d30;
//             --rdp-background-color-dark: #e6f0ec;
//             margin: 0 !important;
//             font-family: 'DM Sans', sans-serif !important;
//           }
//           .rdp-months { gap: 0 !important; }
//           .rdp-month { width: 100% !important; }
//           .rdp-table { width: 100% !important; }
//           .rdp-head_cell {
//             font-size: 10px !important;
//             font-weight: 700 !important;
//             letter-spacing: .1em !important;
//             text-transform: uppercase !important;
//             color: #b0a899 !important;
//           }
//           .rdp-day {
//             border-radius: 10px !important;
//             font-size: 13px !important;
//             color: #1a1410 !important;
//             font-family: 'DM Sans', sans-serif !important;
//             transition: background .12s !important;
//           }
//           .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected) {
//             background: #ece8e2 !important;
//           }
//           .rdp-day_selected, .rdp-day_selected:hover {
//             background: #0f3d30 !important;
//             color: #dfff4f !important;
//             font-weight: 700 !important;
//           }
//           .rdp-day_today:not(.rdp-day_selected) {
//             border: 1.5px solid #0f3d30 !important;
//             color: #0f3d30 !important;
//             font-weight: 700 !important;
//           }
//           .rdp-nav_button {
//             border-radius: 10px !important;
//             color: #0f3d30 !important;
//           }
//           .rdp-nav_button:hover { background: #ece8e2 !important; }
//           .rdp-caption_label {
//             font-family: 'Cormorant Garamond', serif !important;
//             font-size: 17px !important;
//             font-weight: 700 !important;
//             color: #0d2b22 !important;
//           }

//           /* ── Date popover trigger ── */
//           .date-trigger {
//             width: 100%; height: 42px;
//             display: flex; align-items: center; justify-content: space-between;
//             padding: 0 14px;
//             background: #faf7f4;
//             border: 1.5px solid #ece8e2;
//             border-radius: 14px;
//             font-family: 'DM Sans', sans-serif;
//             font-size: 14px; cursor: pointer;
//             transition: border-color .18s, box-shadow .18s, background .18s;
//             color: #1a1410;
//           }
//           .date-trigger:hover { background: #f3efe9; border-color: #d9d0c4; }
//           .date-trigger.open, .date-trigger:focus {
//             background: #fff;
//             border-color: #0f3d30;
//             box-shadow: 0 0 0 3px rgba(15,61,48,.09);
//           }
//           .date-trigger .placeholder { color: #c4bdb5; }

//           /* Popover content */
//           [data-radix-popper-content-wrapper] > div {
//             background: #fff !important;
//             border: 1.5px solid #ece8e2 !important;
//             border-radius: 20px !important;
//             box-shadow: 0 8px 32px rgba(0,0,0,.1) !important;
//             padding: 16px !important;
//           }

//           /* Card overrides */
//           .profile-card {
//             background: #fff;
//             border: 1px solid #f0ece6;
//             border-radius: 28px;
//             box-shadow: 0 2px 8px rgba(0,0,0,.04), 0 12px 36px rgba(0,0,0,.06);
//             overflow: hidden;
//           }

//           /* Textarea resize none */
//           textarea { resize: none; }

//           /* Stagger anim */
//           @keyframes riseUp { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
//           .ri{animation:riseUp .45s ease both;}
//           .d1{animation-delay:.04s} .d2{animation-delay:.1s}
//           .d3{animation-delay:.16s} .d4{animation-delay:.22s}

//           /* Input with icon */
//           .icon-input { position: relative; }
//           .icon-input .i-icon {
//             position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
//             color: #b0a899; pointer-events: none; z-index: 1;
//           }
//           .icon-input input,
//           .icon-input textarea {
//             padding-left: 40px !important;
//           }
//           .icon-input .textarea-icon {
//             position: absolute; left: 13px; top: 14px;
//             color: #b0a899; pointer-events: none; z-index: 1;
//           }
//         `}</style>

//         {/* ── HERO BG ── */}
//         <div className="hero-arch">
//           <div className="hero-orb1" />
//           <div className="hero-dots" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto">

//           {/* Page heading */}
//           <div className="mb-10 ri d1">
//             <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(223,255,79,.8)", fontWeight: 700, marginBottom: 6 }}>
//               Account
//             </p>
//             <h1 className="serif" style={{ fontSize: "clamp(32px,5vw,50px)", color: "#fff", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
//               My Profile
//             </h1>
//             <p style={{ color: "rgba(255,255,255,.5)", marginTop: 8, fontSize: 14 }}>
//               Manage your personal details and medical data.
//             </p>
//           </div>

//           <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>

//             {/* ── LEFT SIDEBAR ── */}
//             <div className="ri d2" style={{ width: 272, flexShrink: 0 }}>
//               <div className="profile-card" style={{ padding: "32px 22px", position: "sticky", top: 120 }}>

//                 {/* Avatar */}
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
//                   <div style={{ position: "relative", marginBottom: 6 }}>
//                     <div className="avatar-ring">
//                       <Avatar style={{ width: "100%", height: "100%" }}>
//                         <AvatarFallback className="serif" style={{ fontSize: 44, fontWeight: 700, background: "linear-gradient(135deg,#e8f4f0,#c4e0d8)", color: "#0d2b22" }}>
//                           A
//                         </AvatarFallback>
//                       </Avatar>
//                     </div>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <button style={{ position: "absolute", bottom: 4, right: 4, width: 30, height: 30, borderRadius: "50%", background: "#0f3d30", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//                           <Camera size={13} color="white" />
//                         </button>
//                       </TooltipTrigger>
//                       <TooltipContent style={{ background: "#0f3d30", border: "none", color: "white", fontSize: 11 }}>
//                         Change photo
//                       </TooltipContent>
//                     </Tooltip>
//                   </div>

//                   <h2 className="serif" style={{ fontSize: 24, fontWeight: 700, color: "#0d2b22", marginTop: 14, marginBottom: 6 }}>
//                     Amar Singh
//                   </h2>

//                   <Badge style={{ background: "#e8f4f0", color: "#0f3d30", fontSize: 11, fontWeight: 600, border: "none", display: "flex", alignItems: "center", gap: 5, padding: "4px 10px" }}>
//                     <Shield size={11} /> Verified Patient
//                   </Badge>
//                 </div>

//                 <Separator style={{ background: "#f0ece6", margin: "22px 0" }} />

//                 {/* Profile completion */}
//                 <div>
//                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
//                     <span style={{ fontSize: 12, fontWeight: 600, color: "#7a7068" }}>Profile Completion</span>
//                     <span style={{ fontSize: 13, fontWeight: 800, color: "#0f3d30" }}>80%</span>
//                   </div>
//                   <Progress value={80} style={{ height: 6, background: "#f0ece6" }} className="[&>div]:bg-gradient-to-r [&>div]:from-[#0f3d30] [&>div]:to-[#1a8f6e]" />
//                   <p style={{ fontSize: 11, color: "#b0a899", marginTop: 8 }}>Add medical details to reach 100%</p>
//                 </div>

//                 <Separator style={{ background: "#f0ece6", margin: "20px 0" }} />

//                 {/* Quick stats */}
//                 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                   {[
//                     { icon: <Droplet size={14} color="#e05d7a" />, bg: "#fde8ef", label: "Blood Group", value: "B+" },
//                     { icon: <Ruler size={14} color="#4f8ef7" />,   bg: "#e8f0fe", label: "Height",      value: "175 cm" },
//                     { icon: <Activity size={14} color="#29c48e" />, bg: "#e6f9f2", label: "Weight",     value: "68 kg" },
//                   ].map(s => (
//                     <div key={s.label} className="stat-pill">
//                       <div style={{ width: 34, height: 34, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                         {s.icon}
//                       </div>
//                       <div>
//                         <p style={{ fontSize: 10, fontWeight: 700, color: "#b0a899", letterSpacing: ".06em", textTransform: "uppercase", margin: 0 }}>{s.label}</p>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d2b22", margin: 0 }}>{s.value}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//             {/* ── RIGHT FORMS ── */}
//             <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>

//               {/* ── PERSONAL INFO ── */}
//               <div className="profile-card ri d3">
//                 {/* Card header */}
//                 <div style={{ padding: "18px 28px", borderBottom: "1px solid #f5f0ea", background: "#faf7f4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                     <div style={{ width: 34, height: 34, borderRadius: 11, background: "#e8f4f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <User size={17} color="#0f3d30" />
//                     </div>
//                     <span className="serif" style={{ fontSize: 20, fontWeight: 700, color: "#0d2b22" }}>Personal Information</span>
//                   </div>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => setEditing(e => !e)}
//                     style={{ borderColor: "#ece8e2", color: editing ? "#0f3d30" : "#7a7068", fontSize: 12, borderRadius: 12, height: 34, gap: 6, background: editing ? "#e8f4f0" : "transparent" }}
//                   >
//                     {editing ? <><Check size={13} /> Done</> : <><Edit2 size={13} /> Edit</>}
//                   </Button>
//                 </div>

//                 <div style={{ padding: 28 }}>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>

//                     {/* Full Name — spans 2 */}
//                     <div style={{ gridColumn: "span 2" }}>
//                       <Field label="Full Name" icon={User}>
//                         <div className="icon-input">
//                           <User size={15} className="i-icon" />
//                           <Input placeholder="Amar Singh" name="name" disabled={!editing}
//                             style={{ paddingLeft: 40, height: 42, borderRadius: 14, background: editing ? "#faf7f4" : "#f7f3ee", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }} />
//                         </div>
//                       </Field>
//                     </div>

//                     {/* Email */}
//                     <Field label="Email Address" icon={Mail}>
//                       <div className="icon-input">
//                         <Mail size={15} className="i-icon" />
//                         <Input type="email" placeholder="amar@email.com" name="email" disabled={!editing}
//                           style={{ paddingLeft: 40, height: 42, borderRadius: 14, background: editing ? "#faf7f4" : "#f7f3ee", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }} />
//                       </div>
//                     </Field>

//                     {/* Phone */}
//                     <Field label="Phone Number" icon={Phone}>
//                       <div className="icon-input">
//                         <Phone size={15} className="i-icon" />
//                         <Input type="tel" placeholder="+91 98765 43210" name="phone" disabled={!editing}
//                           style={{ paddingLeft: 40, height: 42, borderRadius: 14, background: editing ? "#faf7f4" : "#f7f3ee", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }} />
//                       </div>
//                     </Field>

//                     {/* DOB — DayPicker */}
//                     <Field label="Date of Birth" icon={Calendar}>
//                       <Popover open={dobOpen} onOpenChange={setDobOpen}>
//                         <PopoverTrigger asChild>
//                           <button
//                             type="button"
//                             disabled={!editing}
//                             className={`date-trigger ${dobOpen ? "open" : ""}`}
//                             style={{ opacity: editing ? 1 : 0.7 }}
//                           >
//                             <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                               <Calendar size={15} style={{ color: "#b0a899", flexShrink: 0 }} />
//                               {dob
//                                 ? <span>{fmt(dob)}</span>
//                                 : <span className="placeholder">Pick your date of birth</span>
//                               }
//                             </span>
//                             <ChevronDown size={14} style={{ color: "#b0a899" }} />
//                           </button>
//                         </PopoverTrigger>
//                         <PopoverContent align="start" style={{ padding: 16, borderRadius: 20, border: "1.5px solid #ece8e2", background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,.1)", width: "auto" }}>
//                           <DayPicker
//                             mode="single"
//                             selected={dob}
//                             onSelect={(d) => { setDob(d); setDobOpen(false); }}
//                             disabled={{ after: new Date() }}
//                             captionLayout="dropdown-buttons"
//                             fromYear={1940}
//                             toYear={new Date().getFullYear()}
//                             showOutsideDays
//                           />
//                         </PopoverContent>
//                       </Popover>
//                     </Field>

//                     {/* Gender */}
//                     <Field label="Gender" icon={User}>
//                       <Select disabled={!editing} name="gender">
//                         <SelectTrigger style={{ height: 42, borderRadius: 14, background: editing ? "#faf7f4" : "#f7f3ee", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif", opacity: editing ? 1 : 0.7 }}>
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                         <SelectContent style={{ borderRadius: 16, border: "1.5px solid #ece8e2", background: "#fff", fontFamily: "'DM Sans',sans-serif" }}>
//                           {["Male", "Female", "Other", "Prefer not to say"].map(g => (
//                             <SelectItem key={g} value={g.toLowerCase()} style={{ borderRadius: 10, fontFamily: "'DM Sans',sans-serif" }}>{g}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </Field>

//                     {/* Address — spans 2 */}
//                     <div style={{ gridColumn: "span 2" }}>
//                       <Field label="Address" icon={MapPin}>
//                         <div className="icon-input">
//                           <MapPin size={15} className="textarea-icon" />
//                           <Textarea
//                             placeholder="123 Main Street, New Delhi, India"
//                             name="address"
//                             rows={2}
//                             disabled={!editing}
//                             style={{ paddingLeft: 40, borderRadius: 14, background: editing ? "#faf7f4" : "#f7f3ee", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }}
//                           />
//                         </div>
//                       </Field>
//                     </div>

//                   </div>

//                   {/* Action buttons */}
//                   {editing && (
//                     <div style={{ display: "flex", gap: 10, marginTop: 22, justifyContent: "flex-end" }}>
//                       <Button variant="outline" onClick={() => setEditing(false)}
//                         style={{ borderRadius: 13, borderColor: "#ece8e2", color: "#7a7068", fontSize: 13, height: 40, gap: 6 }}>
//                         <X size={14} /> Discard
//                       </Button>
//                       <Button style={{ borderRadius: 13, background: "#0f3d30", color: "#dfff4f", fontSize: 13, fontWeight: 700, height: 40, gap: 6, boxShadow: "0 4px 14px rgba(15,61,48,.22)" }}>
//                         <Save size={14} /> Save Changes
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* ── MEDICAL PROFILE ── */}
//               <div className="profile-card ri d4">
//                 <div style={{ padding: "18px 28px", borderBottom: "1px solid #f5f0ea", background: "#faf7f4", display: "flex", alignItems: "center", gap: 10 }}>
//                   <div style={{ width: 34, height: 34, borderRadius: 11, background: "#fde8ef", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <Activity size={17} color="#e05d7a" />
//                   </div>
//                   <span className="serif" style={{ fontSize: 20, fontWeight: 700, color: "#0d2b22" }}>Medical Profile</span>
//                 </div>

//                 <div style={{ padding: 28 }}>
//                   <div className="sec-sep"><span>Biometrics</span></div>

//                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 18 }}>

//                     {/* Blood Group */}
//                     <Field label="Blood Group" icon={Droplet} iconColor="#e05d7a">
//                       <Select name="bloodGroup">
//                         <SelectTrigger style={{ height: 42, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }}>
//                           <SelectValue placeholder="Select type" />
//                         </SelectTrigger>
//                         <SelectContent style={{ borderRadius: 16, border: "1.5px solid #ece8e2", background: "#fff", fontFamily: "'DM Sans',sans-serif" }}>
//                           {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(b => (
//                             <SelectItem key={b} value={b} style={{ borderRadius: 10 }}>{b}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </Field>

//                     {/* Height */}
//                     <Field label="Height (cm)" icon={Ruler} iconColor="#4f8ef7">
//                       <div className="icon-input">
//                         <Ruler size={15} className="i-icon" style={{ color: "#4f8ef7" }} />
//                         <Input type="number" placeholder="175" name="height"
//                           style={{ paddingLeft: 40, height: 42, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }} />
//                       </div>
//                     </Field>

//                     {/* Weight */}
//                     <Field label="Weight (kg)" icon={Activity} iconColor="#29c48e">
//                       <div className="icon-input">
//                         <Activity size={15} className="i-icon" style={{ color: "#29c48e" }} />
//                         <Input type="number" placeholder="68" name="weight"
//                           style={{ paddingLeft: 40, height: 42, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }} />
//                       </div>
//                     </Field>

//                     {/* Gender */}
//                     <Field label="Gender" icon={User}>
//                       <Select name="genderMed">
//                         <SelectTrigger style={{ height: 42, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif" }}>
//                           <SelectValue placeholder="Select" />
//                         </SelectTrigger>
//                         <SelectContent style={{ borderRadius: 16, border: "1.5px solid #ece8e2", background: "#fff", fontFamily: "'DM Sans',sans-serif" }}>
//                           {["Male","Female","Other"].map(g => (
//                             <SelectItem key={g} value={g.toLowerCase()} style={{ borderRadius: 10 }}>{g}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </Field>

//                     {/* DOB medical — DayPicker */}
//                     <Field label="Date of Birth" icon={Calendar}>
//                       <Popover open={dobMedOpen} onOpenChange={setDobMedOpen}>
//                         <PopoverTrigger asChild>
//                           <button
//                             type="button"
//                             className={`date-trigger ${dobMedOpen ? "open" : ""}`}
//                           >
//                             <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                               <Calendar size={15} style={{ color: "#b0a899", flexShrink: 0 }} />
//                               {dobMed
//                                 ? <span style={{ fontSize: 13 }}>{fmt(dobMed)}</span>
//                                 : <span className="placeholder">Pick date</span>
//                               }
//                             </span>
//                             <ChevronDown size={14} style={{ color: "#b0a899" }} />
//                           </button>
//                         </PopoverTrigger>
//                         <PopoverContent align="start" style={{ padding: 16, borderRadius: 20, border: "1.5px solid #ece8e2", background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,.1)", width: "auto" }}>
//                           <DayPicker
//                             mode="single"
//                             selected={dobMed}
//                             onSelect={(d) => { setDobMed(d); setDobMedOpen(false); }}
//                             disabled={{ after: new Date() }}
//                             captionLayout="dropdown-buttons"
//                             fromYear={1940}
//                             toYear={new Date().getFullYear()}
//                             showOutsideDays
//                           />
//                         </PopoverContent>
//                       </Popover>
//                     </Field>

//                   </div>

//                   <Separator style={{ background: "#f0ece6", margin: "24px 0 20px" }} />
//                   <div className="sec-sep"><span>Additional Info</span></div>

//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
//                     <Field label="Known Allergies" icon={Activity} iconColor="#e05d7a">
//                       <div className="icon-input">
//                         <Activity size={15} className="textarea-icon" style={{ color: "#e05d7a" }} />
//                         <Textarea placeholder="e.g. Penicillin, Dust, Pollen…" name="allergies" rows={3}
//                           style={{ paddingLeft: 40, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} />
//                       </div>
//                     </Field>
//                     <Field label="Chronic Conditions" icon={Shield} iconColor="#4f8ef7">
//                       <div className="icon-input">
//                         <Shield size={15} className="textarea-icon" style={{ color: "#4f8ef7" }} />
//                         <Textarea placeholder="e.g. Diabetes, Hypertension…" name="conditions" rows={3}
//                           style={{ paddingLeft: 40, borderRadius: 14, background: "#faf7f4", borderColor: "#ece8e2", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} />
//                       </div>
//                     </Field>
//                   </div>

//                   {/* Action buttons */}
//                   <div style={{ display: "flex", gap: 10, marginTop: 24, justifyContent: "flex-end" }}>
//                     <Button variant="outline"
//                       style={{ borderRadius: 13, borderColor: "#ece8e2", color: "#7a7068", fontSize: 13, height: 40, gap: 6 }}>
//                       <X size={14} /> Discard
//                     </Button>
//                     <Button
//                       style={{ borderRadius: 13, background: "#0f3d30", color: "#dfff4f", fontSize: 13, fontWeight: 700, height: 40, gap: 6, boxShadow: "0 4px 14px rgba(15,61,48,.22)" }}>
//                       <Save size={14} /> Save Medical Data
//                     </Button>
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// };

// export default UserPage;


// import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// import {
//   User, Mail, Phone, MapPin, Calendar, Activity,
//   Shield, Camera, Save, X, Droplet, Ruler, Edit2,
//   ChevronDown, Check, Lock, AlertCircle, Info
// } from "lucide-react";

// // shadcn components (Ensure these are correctly mapped in your project)
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Progress } from "@/components/ui/progress";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover, PopoverContent, PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
// } from "@/components/ui/tooltip";

// // ─── Helpers ────────────────────────────────────────────────────────────────
// const fmt = (d) =>
//   d ? d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : null;

// // ─── Reusable Field Wrapper ──────────────────────────────────────────
// function Field({ label, icon: Icon, iconColor = "#8c8273", locked = false, children }) {
//   return (
//     <div className="space-y-2 relative">
//       <Label className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.15em] text-[#8c8273]">
//         <span className="flex items-center gap-1.5">
//           {Icon && <Icon size={12} style={{ color: iconColor }} />}
//           {label}
//         </span>
//         {locked && (
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <div className="flex items-center gap-1 text-[#d97706] bg-[#fef3c7] px-2 py-0.5 rounded-md cursor-help">
//                 <Lock size={10} /> <span className="text-[9px]">Verified</span>
//               </div>
//             </TooltipTrigger>
//             <TooltipContent className="bg-[#021814] text-white text-xs border-none">
//               Verified credential. Contact support to update.
//             </TooltipContent>
//           </Tooltip>
//         )}
//       </Label>
//       {children}
//     </div>
//   );
// }

// // ─── Main Component ─────────────────────────────────────────────────────────
// const UserPage = () => {
//   const [dob, setDob] = useState(undefined);
//   const [dobOpen, setDobOpen] = useState(false);
//   const [editing, setEditing] = useState(false);

//   // Mock User Data
//   const userData = {
//     name: "Amar Singh",
//     email: "amar.singh@example.com",
//     mobile: "+91 98765 43210"
//   };

//   return (
//     <TooltipProvider>
//       <div
//         className="min-h-screen pt-32 pb-24 px-4 sm:px-8 relative selection:bg-[#0f3d30] selection:text-[#dfff4f]"
//         style={{ background: "#fbf9f6", fontFamily: "'DM Sans', sans-serif" }}
//       >
//         {/* ── Custom CSS for Classic & Premium UX ── */}
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

//           .serif { font-family: 'Cormorant Garamond', serif; }

//           /* Sleek Background Gradient */
//           .premium-bg {
//             position: absolute; top: 0; left: 0; right: 0; height: 35vh;
//             background: linear-gradient(to bottom, #eae4d9 0%, #fbf9f6 100%);
//             z-index: 0;
//           }

//           /* Soft Minimalist Cards */
//           .classic-card {
//             background: #ffffff;
//             border: 1px solid rgba(0,0,0,0.03);
//             border-radius: 24px;
//             box-shadow: 0 10px 40px -10px rgba(0,0,0,0.03);
//             transition: all 0.3s ease;
//           }
          
//           /* Read-Only Input Styling (The specific request) */
//           .locked-input input {
//             background: #f4f4f5 !important;
//             border-color: transparent !important;
//             color: #71717a !important;
//             cursor: not-allowed !important;
//             box-shadow: none !important;
//             font-weight: 500;
//           }
//           .locked-input .i-icon { color: #a1a1aa !important; }

//           /* Normal Input Styling */
//           .icon-input { position: relative; }
//           .icon-input .i-icon {
//             position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
//             color: #a1a1aa; pointer-events: none; z-index: 1; transition: color 0.2s;
//           }
//           .icon-input input, .icon-input textarea {
//             padding-left: 44px !important;
//             background: #fbf9f6;
//             border: 1.5px solid #eae4d9;
//             border-radius: 16px;
//             font-family: 'DM Sans', sans-serif;
//             color: #1a1410;
//             transition: all 0.2s ease;
//             height: 48px;
//           }
//           .icon-input input:focus, .icon-input textarea:focus {
//             background: #fff;
//             border-color: #0f3d30;
//             box-shadow: 0 0 0 4px rgba(15,61,48,0.08);
//           }
//           .icon-input:focus-within .i-icon { color: #0f3d30; }

//           /* DatePicker overrides */
//           .date-trigger {
//             width: 100%; height: 48px; display: flex; align-items: center; justify-content: space-between;
//             padding: 0 16px; background: #fbf9f6; border: 1.5px solid #eae4d9; border-radius: 16px;
//             font-family: 'DM Sans', sans-serif; font-size: 14px; cursor: pointer; transition: all 0.2s;
//             color: #1a1410;
//           }
//           .date-trigger.open, .date-trigger:focus {
//             background: #fff; border-color: #0f3d30; box-shadow: 0 0 0 4px rgba(15,61,48,0.08);
//           }
          
//           /* Select overrides */
//           button[role="combobox"] {
//             background: #fbf9f6 !important; border: 1.5px solid #eae4d9 !important; border-radius: 16px !important;
//             height: 48px !important; font-family: 'DM Sans', sans-serif !important;
//           }
//           button[role="combobox"]:focus { border-color: #0f3d30 !important; box-shadow: 0 0 0 4px rgba(15,61,48,0.08) !important; }

//           /* Animations */
//           .fade-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(20px); }
//           @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
//           .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; }
//         `}</style>

//         <div className="premium-bg" />

//         <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          
//           {/* ── LEFT SIDEBAR (Classic Profile View) ── */}
//           <div className="lg:w-[320px] flex-shrink-0 fade-up">
//             <div className="classic-card p-8 sticky top-32 text-center flex flex-col items-center">
              
//               <div className="relative w-32 h-32 mb-6 group">
//                 <div className="w-full h-full rounded-full bg-[#fbf9f6] border border-[#eae4d9] flex items-center justify-center overflow-hidden">
//                   <span className="serif text-5xl text-[#0f3d30]">{userData.name.charAt(0)}</span>
//                 </div>
//                 <button className="absolute inset-0 bg-[#0f3d30]/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
//                   <Camera size={22} />
//                 </button>
//                 <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#10b981] border-2 border-white rounded-full flex items-center justify-center">
//                   <Check size={12} color="white" strokeWidth={3} />
//                 </div>
//               </div>

//               <h2 className="serif text-3xl font-bold text-[#0d2b22] leading-none mb-2">{userData.name}</h2>
//               <p className="text-sm text-[#8c8273] mb-6">Patient ID: ZV-9842A</p>

//               <Badge className="bg-[#f0fdf4] hover:bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
//                 <Shield size={12} className="mr-1.5 inline -mt-0.5" /> Verified Account
//               </Badge>

//               <div className="w-full mt-10 text-left">
//                 <div className="flex justify-between items-end mb-2">
//                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c8273]">Profile Status</span>
//                   <span className="serif text-lg font-bold text-[#0f3d30]">80%</span>
//                 </div>
//                 <Progress value={80} className="h-1.5 bg-[#eae4d9] [&>div]:bg-[#0f3d30]" />
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT CONTENT (Forms & Details) ── */}
//           <div className="flex-1 flex flex-col gap-8 fade-up delay-1">
            
//             {/* Header Area */}
//             <div className="flex justify-between items-end pb-4 border-b border-[#eae4d9]">
//               <div>
//                 <h1 className="serif text-4xl sm:text-5xl font-bold text-[#0d2b22] mb-2">Settings</h1>
//                 <p className="text-[#8c8273] font-medium text-sm">Update your personal and medical information.</p>
//               </div>
//               <Button 
//                 onClick={() => setEditing(!editing)}
//                 className={`rounded-xl px-6 h-11 text-sm font-bold transition-all shadow-sm ${editing ? 'bg-[#f4f4f5] text-[#3f3f46] hover:bg-[#e4e4e7]' : 'bg-[#0f3d30] text-[#dfff4f] hover:bg-[#0a2e24]'}`}
//               >
//                 {editing ? 'Cancel Editing' : <><Edit2 size={16} className="mr-2" /> Edit Profile</>}
//               </Button>
//             </div>

//             <form className="space-y-8">
              
//               {/* ── SECTION 1: ACCOUNT CREDENTIALS (READ-ONLY) ── */}
//               <div className="classic-card p-8 sm:p-10 fade-up delay-2">
//                 <div className="mb-6">
//                   <h3 className="serif text-2xl font-bold text-[#0d2b22]">Account Credentials</h3>
//                   <p className="text-xs text-[#8c8273] mt-1 flex items-center gap-1.5">
//                     <Info size={14}/> These fields are verified and cannot be changed here.
//                   </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <Field label="Email Address" icon={Mail} locked={true}>
//                     <div className="icon-input locked-input">
//                       <Mail size={16} className="i-icon" />
//                       <Input type="email" value={userData.email} readOnly />
//                     </div>
//                   </Field>
//                   <Field label="Mobile Number" icon={Phone} locked={true}>
//                     <div className="icon-input locked-input">
//                       <Phone size={16} className="i-icon" />
//                       <Input type="text" value={userData.mobile} readOnly />
//                     </div>
//                   </Field>
//                 </div>
//               </div>

//               {/* ── SECTION 2: PERSONAL DETAILS (EDITABLE) ── */}
//               <div className="classic-card p-8 sm:p-10 fade-up delay-2">
//                 <h3 className="serif text-2xl font-bold text-[#0d2b22] mb-6">Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
//                   <div className="md:col-span-2">
//                     <Field label="Full Legal Name" icon={User}>
//                       <div className="icon-input">
//                         <User size={16} className="i-icon" />
//                         <Input type="text" defaultValue={userData.name} disabled={!editing} style={{ opacity: editing ? 1 : 0.7 }} />
//                       </div>
//                     </Field>
//                   </div>

//                   <Field label="Date of Birth" icon={Calendar}>
//                     <Popover open={dobOpen} onOpenChange={setDobOpen}>
//                       <PopoverTrigger asChild>
//                         <button type="button" disabled={!editing} className={`date-trigger ${dobOpen ? "open" : ""}`} style={{ opacity: editing ? 1 : 0.7 }}>
//                           <span className="flex items-center gap-2">
//                             <Calendar size={16} className="text-[#a1a1aa]" />
//                             {dob ? <span className="font-medium text-[#1a1410]">{fmt(dob)}</span> : <span className="text-[#a1a1aa]">Select Date</span>}
//                           </span>
//                           <ChevronDown size={16} className="text-[#a1a1aa]" />
//                         </button>
//                       </PopoverTrigger>
//                       <PopoverContent align="start" className="p-4 rounded-[20px] border-[#eae4d9] shadow-xl w-auto">
//                         <DayPicker
//                           mode="single" selected={dob} onSelect={(d) => { setDob(d); setDobOpen(false); }}
//                           disabled={{ after: new Date() }} captionLayout="dropdown-buttons" fromYear={1940} toYear={new Date().getFullYear()}
//                         />
//                       </PopoverContent>
//                     </Popover>
//                   </Field>

//                   <Field label="Gender" icon={User}>
//                     <Select disabled={!editing}>
//                       <SelectTrigger style={{ opacity: editing ? 1 : 0.7 }}>
//                         <SelectValue placeholder="Select Gender" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-[16px] border-[#eae4d9]">
//                         {["Male", "Female", "Other"].map(g => <SelectItem key={g} value={g.toLowerCase()} className="rounded-[8px]">{g}</SelectItem>)}
//                       </SelectContent>
//                     </Select>
//                   </Field>

//                   <div className="md:col-span-2">
//                     <Field label="Residential Address" icon={MapPin}>
//                       <div className="icon-input">
//                         <MapPin size={16} className="i-icon" style={{ top: '24px', transform: 'none' }} />
//                         <Textarea placeholder="Enter your full address..." disabled={!editing} rows={3} style={{ paddingTop: '14px', opacity: editing ? 1 : 0.7 }} />
//                       </div>
//                     </Field>
//                   </div>
//                 </div>
//               </div>

//               {/* ── SECTION 3: MEDICAL BIOMETRICS (EDITABLE) ── */}
//               <div className="classic-card p-8 sm:p-10 fade-up delay-2">
//                 <h3 className="serif text-2xl font-bold text-[#0d2b22] mb-6">Medical Biometrics</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
//                   <Field label="Blood Group" icon={Droplet} iconColor="#ef4444">
//                     <Select disabled={!editing}>
//                       <SelectTrigger style={{ opacity: editing ? 1 : 0.7 }}>
//                         <SelectValue placeholder="Type" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-[16px] border-[#eae4d9]">
//                         {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(b => <SelectItem key={b} value={b} className="rounded-[8px]">{b}</SelectItem>)}
//                       </SelectContent>
//                     </Select>
//                   </Field>

//                   <Field label="Height (cm)" icon={Ruler} iconColor="#3b82f6">
//                     <div className="icon-input">
//                       <Ruler size={16} className="i-icon" style={{ color: "#3b82f6" }} />
//                       <Input type="number" placeholder="175" disabled={!editing} style={{ opacity: editing ? 1 : 0.7 }} />
//                     </div>
//                   </Field>

//                   <Field label="Weight (kg)" icon={Activity} iconColor="#10b981">
//                     <div className="icon-input">
//                       <Activity size={16} className="i-icon" style={{ color: "#10b981" }} />
//                       <Input type="number" placeholder="68" disabled={!editing} style={{ opacity: editing ? 1 : 0.7 }} />
//                     </div>
//                   </Field>
//                 </div>
//               </div>

//               {/* Save Actions */}
//               {editing && (
//                 <div className="flex justify-end pt-4 pb-10 fade-up">
//                   <Button className="bg-[#0f3d30] hover:bg-[#0a2e24] text-[#dfff4f] rounded-2xl h-14 px-10 text-base font-bold shadow-[0_10px_30px_rgba(15,61,48,0.2)] hover:-translate-y-1 transition-all">
//                     <Save size={18} className="mr-2" /> Save All Changes
//                   </Button>
//                 </div>
//               )}

//             </form>
//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// };

// export default UserPage;



// v-05

// import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// import {
//   User, Mail, Phone, MapPin, Calendar, Activity,
//   Shield, Camera, Save, X, Droplet, Ruler, Edit2,
//   ChevronDown, Check, Lock, AlertCircle, Heart, Weight,
// } from "lucide-react";

// import { Button }                          from "@/components/ui/button";
// import { Input }                           from "@/components/ui/input";
// import { Label }                           from "@/components/ui/label";
// import { Separator }                       from "@/components/ui/separator";
// import { Badge }                           from "@/components/ui/badge";
// import { Avatar, AvatarFallback }          from "@/components/ui/avatar";
// import { Progress }                        from "@/components/ui/progress";
// import { Textarea }                        from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Popover, PopoverContent, PopoverTrigger }                       from "@/components/ui/popover";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }      from "@/components/ui/tooltip";

// // ─── Format date ─────────────────────────────────────────────────────────────
// const fmt = (d) =>
//   d ? d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : null;

// // ─── Field wrapper ────────────────────────────────────────────────────────────
// function Field({ label, icon: Icon, iconColor = "#9a8f85", required, children }) {
//   return (
//     <div className="zf-field">
//       <Label className="zf-label">
//         {Icon && <Icon size={11} style={{ color: iconColor }} />}
//         {label}
//         {required && <span style={{ color: "#e05d7a", marginLeft: 2 }}>*</span>}
//       </Label>
//       {children}
//     </div>
//   );
// }

// // ─── Read-only display row ────────────────────────────────────────────────────
// function ReadOnlyRow({ icon: Icon, iconColor, label, value, locked }) {
//   return (
//     <div className="zf-readonly">
//       <div className="zf-readonly-icon" style={{ background: iconColor + "18" }}>
//         <Icon size={15} style={{ color: iconColor }} />
//       </div>
//       <div className="zf-readonly-body">
//         <span className="zf-readonly-label">{label}</span>
//         <span className="zf-readonly-value">{value}</span>
//       </div>
//       {locked && (
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <div className="zf-lock-badge">
//               <Lock size={10} />
//               <span>Locked</span>
//             </div>
//           </TooltipTrigger>
//           <TooltipContent className="zf-tooltip">
//             Contact support to update this field
//           </TooltipContent>
//         </Tooltip>
//       )}
//     </div>
//   );
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────
// const UserPage = () => {
//   const [dob,        setDob]        = useState(undefined);
//   const [dobOpen,    setDobOpen]    = useState(false);
//   const [dobMed,     setDobMed]     = useState(undefined);
//   const [dobMedOpen, setDobMedOpen] = useState(false);
//   const [editing,    setEditing]    = useState(false);
//   const [saved,      setSaved]      = useState(false);

//   function handleSave() {
//     setSaved(true);
//     setEditing(false);
//     setTimeout(() => setSaved(false), 3000);
//   }

//   return (
//     <TooltipProvider>
//       <div className="ziva-page">

//         {/* ── Fonts + all CSS ── */}
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

//           /* ── Root vars ── */
//           :root {
//             --green-deep: #0a2a1e;
//             --green-mid:  #0f3d30;
//             --green-soft: #1a5c47;
//             --green-pale: #e6f2ee;
//             --green-glow: rgba(15,61,48,.1);
//             --cream:      #f6f2ec;
//             --cream-dark: #ede8e0;
//             --cream-mid:  #f0ebe3;
//             --sand:       #b8ae9f;
//             --ink:        #1a1208;
//             --ink-soft:   #5a5248;
//             --ink-muted:  #8a8078;
//             --white:      #ffffff;
//             --border:     #e4ddd4;
//             --border-light: #ede9e2;
//             --shadow-sm:  0 1px 4px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.05);
//             --shadow-md:  0 2px 8px rgba(0,0,0,.06), 0 12px 32px rgba(0,0,0,.08);
//             --shadow-hero: 0 4px 24px rgba(10,42,30,.18);
//             --radius-card: 26px;
//             --radius-input: 12px;
//             --font-body: 'DM Sans', sans-serif;
//             --font-display: 'Fraunces', serif;
//           }

//           /* ── Page ── */
//           .ziva-page {
//             min-height: 100vh;
//             background: var(--cream);
//             font-family: var(--font-body);
//             padding: 112px 24px 80px;
//           }

//           /* ── Hero arch ── */
//           .ziva-hero {
//             position: absolute; top: 0; left: 0; right: 0; height: 300px;
//             background: linear-gradient(150deg, var(--green-deep) 0%, var(--green-mid) 60%, var(--green-soft) 100%);
//             border-radius: 0 0 50% 50% / 0 0 64px 64px;
//             overflow: hidden; z-index: 0;
//           }
//           .ziva-hero::after {
//             content: '';
//             position: absolute; inset: 0;
//             background: radial-gradient(ellipse at 80% -20%, rgba(223,255,79,.07), transparent 55%),
//                         radial-gradient(ellipse at -10% 100%, rgba(255,255,255,.04), transparent 50%);
//           }
//           .hero-grid {
//             position: absolute; inset: 0; opacity: .03;
//             background-image: repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 32px),
//                               repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 32px);
//           }

//           /* ── Layout ── */
//           .ziva-wrap { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }
//           .ziva-header { margin-bottom: 36px; }
//           .ziva-eyebrow {
//             font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
//             color: rgba(223,255,79,.75); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;
//           }
//           .ziva-eyebrow::before {
//             content: ''; width: 20px; height: 1px; background: rgba(223,255,79,.5);
//           }
//           .ziva-title {
//             font-family: var(--font-display);
//             font-size: clamp(34px, 5vw, 52px); font-weight: 700;
//             color: #fff; line-height: 1.05; margin: 0;
//             font-style: italic;
//           }
//           .ziva-subtitle { color: rgba(255,255,255,.45); font-size: 14px; margin-top: 8px; }

//           .ziva-body { display: flex; gap: 22px; align-items: flex-start; }

//           /* ── Sidebar ── */
//           .ziva-sidebar { width: 264px; flex-shrink: 0; }
//           .sidebar-card {
//             background: var(--white);
//             border: 1px solid var(--border-light);
//             border-radius: var(--radius-card);
//             box-shadow: var(--shadow-md);
//             padding: 28px 20px;
//             position: sticky; top: 110px;
//           }

//           /* Avatar */
//           .avatar-shell {
//             width: 100px; height: 100px; border-radius: 50%;
//             background: linear-gradient(135deg, #1a8a60, var(--green-deep));
//             padding: 3px;
//             box-shadow: var(--shadow-hero);
//             margin: 0 auto 4px;
//             position: relative;
//           }
//           .avatar-inner-wrap {
//             width: 100%; height: 100%; border-radius: 50%; overflow: hidden;
//           }
//           .avatar-cam {
//             position: absolute; bottom: 2px; right: 2px;
//             width: 28px; height: 28px; border-radius: 50%;
//             background: var(--green-mid); border: 2px solid #fff;
//             display: flex; align-items: center; justify-content: center;
//             cursor: pointer; transition: background .2s;
//           }
//           .avatar-cam:hover { background: var(--green-soft); }
//           .avatar-name {
//             font-family: var(--font-display); font-size: 22px; font-weight: 700;
//             color: var(--ink); text-align: center; margin-top: 14px; margin-bottom: 4px;
//           }
//           .verified-badge {
//             display: inline-flex; align-items: center; gap: 5px;
//             background: var(--green-pale); color: var(--green-mid);
//             font-size: 11px; font-weight: 600; padding: 4px 10px;
//             border-radius: 99px; margin: 0 auto; width: fit-content;
//           }

//           /* Progress */
//           .prog-wrap { margin-top: 22px; }
//           .prog-label { display: flex; justify-content: space-between; margin-bottom: 7px; }
//           .prog-label span:first-child { font-size: 12px; font-weight: 500; color: var(--ink-soft); }
//           .prog-label span:last-child  { font-size: 12px; font-weight: 800; color: var(--green-mid); }
//           .prog-hint { font-size: 11px; color: var(--ink-muted); margin-top: 6px; }

//           /* Stat pills */
//           .stat-list { display: flex; flex-direction: column; gap: 8px; margin-top: 18px; }
//           .stat-item {
//             display: flex; align-items: center; gap: 10px;
//             padding: 10px 12px; border-radius: 13px;
//             background: var(--cream); border: 1px solid var(--border-light);
//             transition: all .18s; cursor: default;
//           }
//           .stat-item:hover { background: var(--cream-dark); border-color: var(--border); }
//           .stat-icon { width: 32px; height: 32px; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//           .stat-label { font-size: 9px; font-weight: 700; color: var(--ink-muted); letter-spacing: .08em; text-transform: uppercase; margin: 0; }
//           .stat-value { font-size: 13px; font-weight: 700; color: var(--ink); margin: 0; }

//           /* ── Form area ── */
//           .ziva-forms { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 18px; }

//           /* Card */
//           .form-card {
//             background: var(--white);
//             border: 1px solid var(--border-light);
//             border-radius: var(--radius-card);
//             box-shadow: var(--shadow-md);
//             overflow: hidden;
//           }
//           .card-head {
//             padding: 18px 26px;
//             border-bottom: 1px solid var(--border-light);
//             background: var(--cream-mid);
//             display: flex; align-items: center; justify-content: space-between;
//           }
//           .card-head-left { display: flex; align-items: center; gap: 10px; }
//           .card-head-icon {
//             width: 32px; height: 32px; border-radius: 10px;
//             display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//           }
//           .card-head-title {
//             font-family: var(--font-display); font-size: 19px; font-weight: 700;
//             color: var(--ink); letter-spacing: -.01em;
//           }
//           .card-body { padding: 26px; }

//           /* Section separator */
//           .sec-div {
//             display: flex; align-items: center; gap: 10px;
//             margin: 0 0 20px;
//           }
//           .sec-div::before, .sec-div::after {
//             content: ''; flex: 1; height: 1px; background: var(--border-light);
//           }
//           .sec-div span {
//             font-size: 10px; font-weight: 700; letter-spacing: .14em;
//             text-transform: uppercase; color: var(--sand); white-space: nowrap;
//           }

//           /* ── Fields ── */
//           .zf-field { display: flex; flex-direction: column; gap: 6px; }
//           .zf-label {
//             display: flex; align-items: center; gap: 5px;
//             font-size: 10px; font-weight: 700;
//             letter-spacing: .12em; text-transform: uppercase; color: var(--ink-muted);
//           }

//           /* Input wrapper with icon */
//           .zf-input-wrap { position: relative; }
//           .zf-input-icon {
//             position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
//             pointer-events: none; z-index: 1;
//           }
//           .zf-textarea-icon {
//             position: absolute; left: 13px; top: 13px;
//             pointer-events: none; z-index: 1;
//           }

//           /* Styled input */
//           .zf-input {
//             width: 100%; height: 42px; padding: 0 14px 0 40px;
//             border: 1.5px solid var(--border); border-radius: var(--radius-input);
//             background: var(--cream); font-family: var(--font-body);
//             font-size: 14px; color: var(--ink);
//             outline: none; transition: border-color .18s, box-shadow .18s, background .18s;
//           }
//           .zf-input:focus {
//             background: var(--white); border-color: var(--green-mid);
//             box-shadow: 0 0 0 3px var(--green-glow);
//           }
//           .zf-input:disabled { opacity: .6; cursor: not-allowed; }
//           .zf-input::placeholder { color: #c8c0b4; }
//           input[type=number].zf-input { -moz-appearance: textfield; }
//           input[type=number].zf-input::-webkit-inner-spin-button { display: none; }

//           /* Styled textarea */
//           .zf-textarea {
//             width: 100%; padding: 12px 14px 12px 40px;
//             border: 1.5px solid var(--border); border-radius: var(--radius-input);
//             background: var(--cream); font-family: var(--font-body);
//             font-size: 14px; color: var(--ink); resize: none; line-height: 1.6;
//             outline: none; transition: border-color .18s, box-shadow .18s, background .18s;
//           }
//           .zf-textarea:focus {
//             background: var(--white); border-color: var(--green-mid);
//             box-shadow: 0 0 0 3px var(--green-glow);
//           }
//           .zf-textarea::placeholder { color: #c8c0b4; }

//           /* Date trigger */
//           .zf-date-btn {
//             width: 100%; height: 42px; padding: 0 12px 0 14px;
//             display: flex; align-items: center; justify-content: space-between;
//             border: 1.5px solid var(--border); border-radius: var(--radius-input);
//             background: var(--cream); font-family: var(--font-body);
//             font-size: 14px; cursor: pointer;
//             transition: border-color .18s, box-shadow .18s, background .18s;
//             color: var(--ink);
//           }
//           .zf-date-btn:hover:not(:disabled) { background: #ede8e0; border-color: #cac3b8; }
//           .zf-date-btn:focus, .zf-date-btn[data-open="true"] {
//             background: var(--white); border-color: var(--green-mid);
//             box-shadow: 0 0 0 3px var(--green-glow); outline: none;
//           }
//           .zf-date-btn:disabled { opacity: .6; cursor: not-allowed; }
//           .zf-date-placeholder { color: #c8c0b4; }

//           /* Select override */
//           button[role="combobox"] {
//             height: 42px !important; border-radius: var(--radius-input) !important;
//             background: var(--cream) !important; border: 1.5px solid var(--border) !important;
//             font-family: var(--font-body) !important; font-size: 14px !important; color: var(--ink) !important;
//           }
//           button[role="combobox"]:focus {
//             border-color: var(--green-mid) !important;
//             box-shadow: 0 0 0 3px var(--green-glow) !important;
//             background: var(--white) !important;
//           }
//           [role="listbox"] {
//             background: var(--white) !important; border: 1.5px solid var(--border) !important;
//             border-radius: 16px !important; font-family: var(--font-body) !important;
//             box-shadow: 0 8px 28px rgba(0,0,0,.1) !important;
//           }
//           [role="option"] { border-radius: 8px !important; font-size: 14px !important; }
//           [role="option"][data-highlighted] { background: var(--green-pale) !important; color: var(--green-mid) !important; }

//           /* ── Read-only row ── */
//           .zf-readonly {
//             display: flex; align-items: center; gap: 12px;
//             padding: 13px 16px; border-radius: 14px;
//             background: var(--cream-mid); border: 1px solid var(--border-light);
//           }
//           .zf-readonly-icon {
//             width: 36px; height: 36px; border-radius: 10px;
//             display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//           }
//           .zf-readonly-body { flex: 1; }
//           .zf-readonly-label {
//             display: block; font-size: 10px; font-weight: 700;
//             letter-spacing: .1em; text-transform: uppercase;
//             color: var(--ink-muted); margin-bottom: 2px;
//           }
//           .zf-readonly-value { font-size: 14px; font-weight: 600; color: var(--ink); }
//           .zf-lock-badge {
//             display: inline-flex; align-items: center; gap: 4px;
//             font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: 99px;
//             background: #f0e8df; color: #8a6a50; flex-shrink: 0; cursor: default;
//           }
//           .zf-tooltip { background: var(--ink) !important; color: #fff !important; font-size: 11px !important; border: none !important; }

//           /* ── Notice banner ── */
//           .zf-notice {
//             display: flex; align-items: flex-start; gap: 10px;
//             padding: 12px 16px; border-radius: 12px;
//             background: #fef8f0; border: 1px solid #f0d9b5;
//             margin-bottom: 20px;
//           }
//           .zf-notice p { font-size: 12px; color: #7a5c30; line-height: 1.5; margin: 0; }

//           /* ── Grid helpers ── */
//           .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//           .grid-3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 16px; }
//           .col-2  { grid-column: span 2; }

//           /* ── Buttons ── */
//           .btn-primary {
//             height: 40px; padding: 0 20px; border-radius: 12px;
//             background: var(--green-mid); color: #dfff4f;
//             font-family: var(--font-body); font-size: 13px; font-weight: 700;
//             border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
//             box-shadow: 0 3px 12px rgba(15,61,48,.22);
//             transition: background .18s, transform .12s, box-shadow .18s;
//           }
//           .btn-primary:hover { background: var(--green-soft); transform: translateY(-1px); box-shadow: 0 5px 18px rgba(15,61,48,.28); }
//           .btn-ghost {
//             height: 40px; padding: 0 18px; border-radius: 12px;
//             background: transparent; color: var(--ink-soft);
//             font-family: var(--font-body); font-size: 13px; font-weight: 500;
//             border: 1.5px solid var(--border); cursor: pointer;
//             display: inline-flex; align-items: center; gap: 7px;
//             transition: all .18s;
//           }
//           .btn-ghost:hover { background: var(--cream-dark); border-color: var(--border); }
//           .btn-edit {
//             height: 32px; padding: 0 14px; border-radius: 10px;
//             background: transparent; border: 1.5px solid var(--border);
//             font-family: var(--font-body); font-size: 12px; font-weight: 600;
//             color: var(--ink-soft); cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
//             transition: all .18s;
//           }
//           .btn-edit:hover, .btn-edit.active {
//             background: var(--green-pale); border-color: var(--green-mid); color: var(--green-mid);
//           }

//           /* ── Save toast ── */
//           .save-toast {
//             position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
//             background: var(--green-mid); color: #dfff4f;
//             font-family: var(--font-body); font-size: 13px; font-weight: 600;
//             padding: 11px 22px; border-radius: 99px;
//             box-shadow: 0 6px 24px rgba(15,61,48,.35);
//             display: flex; align-items: center; gap: 8px; z-index: 100;
//             animation: toastIn .3s ease;
//           }
//           @keyframes toastIn { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

//           /* ── DayPicker ── */
//           .rdp {
//             --rdp-accent-color: var(--green-mid);
//             --rdp-background-color: var(--green-pale);
//             margin: 0 !important; font-family: var(--font-body) !important;
//           }
//           .rdp-months { gap: 0 !important; }
//           .rdp-month, .rdp-table { width: 100% !important; }
//           .rdp-head_cell { font-size: 10px !important; font-weight: 700 !important; letter-spacing: .1em !important; text-transform: uppercase !important; color: var(--sand) !important; }
//           .rdp-day { border-radius: 9px !important; font-size: 13px !important; color: var(--ink) !important; transition: background .1s !important; }
//           .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected) { background: var(--cream-dark) !important; }
//           .rdp-day_selected, .rdp-day_selected:hover { background: var(--green-mid) !important; color: #dfff4f !important; font-weight: 700 !important; }
//           .rdp-day_today:not(.rdp-day_selected) { border: 1.5px solid var(--green-mid) !important; color: var(--green-mid) !important; font-weight: 700 !important; }
//           .rdp-nav_button { border-radius: 8px !important; color: var(--green-mid) !important; }
//           .rdp-nav_button:hover { background: var(--cream-dark) !important; }
//           .rdp-caption_label { font-family: var(--font-display) !important; font-size: 16px !important; font-weight: 700 !important; color: var(--ink) !important; }
//           .rdp-dropdown { border: 1.5px solid var(--border) !important; border-radius: 9px !important; background: var(--white) !important; font-family: var(--font-body) !important; font-size: 13px !important; }

//           /* ── Page anim ── */
//           @keyframes fadeUp { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform:translateY(0); } }
//           .fa  { animation: fadeUp .4s ease both; }
//           .fa1 { animation-delay: .04s; } .fa2 { animation-delay: .1s; }
//           .fa3 { animation-delay: .16s; } .fa4 { animation-delay: .22s; }

//           /* Popover panel */
//           [data-radix-popper-content-wrapper] > div {
//             background: var(--white) !important; border: 1.5px solid var(--border) !important;
//             border-radius: 20px !important; box-shadow: 0 8px 36px rgba(0,0,0,.12) !important;
//             padding: 14px !important;
//           }
//         `}</style>

//         {/* Hero background */}
//         <div className="ziva-hero">
//           <div className="hero-grid" />
//         </div>

//         <div className="ziva-wrap">

//           {/* Header */}
//           <div className="ziva-header fa fa1">
//             <p className="ziva-eyebrow">Account</p>
//             <h1 className="ziva-title">My Profile</h1>
//             <p className="ziva-subtitle">Manage your personal details and health data.</p>
//           </div>

//           <div className="ziva-body">

//             {/* ── SIDEBAR ── */}
//             <div className="ziva-sidebar fa fa2">
//               <div className="sidebar-card">

//                 {/* Avatar */}
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   <div className="avatar-shell">
//                     <div className="avatar-inner-wrap">
//                       <Avatar style={{ width: "100%", height: "100%" }}>
//                         <AvatarFallback style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 700, background: "linear-gradient(135deg,#d4ede6,#a8cfc3)", color: "var(--green-deep)", width: "100%", height: "100%", borderRadius: "50%" }}>
//                           A
//                         </AvatarFallback>
//                       </Avatar>
//                     </div>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <button className="avatar-cam"><Camera size={12} color="white" /></button>
//                       </TooltipTrigger>
//                       <TooltipContent className="zf-tooltip">Change photo</TooltipContent>
//                     </Tooltip>
//                   </div>

//                   <p className="avatar-name">Amar Singh</p>
//                   <div className="verified-badge">
//                     <Shield size={11} /> Verified Patient
//                   </div>
//                 </div>

//                 <Separator style={{ background: "var(--border-light)", margin: "20px 0" }} />

//                 {/* Progress */}
//                 <div className="prog-wrap">
//                   <div className="prog-label">
//                     <span>Profile Completion</span>
//                     <span>80%</span>
//                   </div>
//                   <Progress value={80} style={{ height: 5, background: "var(--cream-dark)" }}
//                     className="[&>div]:bg-gradient-to-r [&>div]:from-[#0f3d30] [&>div]:to-[#2a9e72]" />
//                   <p className="prog-hint">Add medical data to complete your profile</p>
//                 </div>

//                 <Separator style={{ background: "var(--border-light)", margin: "18px 0" }} />

//                 {/* Stats */}
//                 <div className="stat-list">
//                   {[
//                     { icon: Droplet,  bg: "#fde8ef", iconColor: "#e05d7a", label: "Blood Group", value: "B+" },
//                     { icon: Ruler,    bg: "#e8f0fe", iconColor: "#4f8ef7", label: "Height",      value: "175 cm" },
//                     { icon: Activity, bg: "#e6f9f2", iconColor: "#29c48e", label: "Weight",      value: "68 kg" },
//                   ].map(s => (
//                     <div key={s.label} className="stat-item">
//                       <div className="stat-icon" style={{ background: s.bg }}>
//                         <s.icon size={15} style={{ color: s.iconColor }} />
//                       </div>
//                       <div>
//                         <p className="stat-label">{s.label}</p>
//                         <p className="stat-value">{s.value}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//             {/* ── FORMS ── */}
//             <div className="ziva-forms">

//               {/* ── PERSONAL INFO ── */}
//               <div className="form-card fa fa3">
//                 <div className="card-head">
//                   <div className="card-head-left">
//                     <div className="card-head-icon" style={{ background: "#e6f2ee" }}>
//                       <User size={16} style={{ color: "var(--green-mid)" }} />
//                     </div>
//                     <span className="card-head-title">Personal Information</span>
//                   </div>
//                   <button
//                     className={`btn-edit ${editing ? "active" : ""}`}
//                     onClick={() => setEditing(e => !e)}
//                   >
//                     {editing ? <><Check size={12} /> Done</> : <><Edit2 size={12} /> Edit</>}
//                   </button>
//                 </div>

//                 <div className="card-body">

//                   {/* Locked fields notice */}
//                   <div className="zf-notice">
//                     <AlertCircle size={15} style={{ color: "#c07a3a", flexShrink: 0, marginTop: 1 }} />
//                     <p>Mobile number and email address are linked to your account and cannot be changed here. Contact support for assistance.</p>
//                   </div>

//                   {/* Locked read-only rows */}
//                   <div className="grid-2" style={{ marginBottom: 20 }}>
//                     <ReadOnlyRow icon={Phone}  iconColor="#29c48e" label="Mobile Number" value="+91 98765 43210" locked />
//                     <ReadOnlyRow icon={Mail}   iconColor="#4f8ef7" label="Email Address" value="amar@email.com"  locked />
//                   </div>

//                   <div className="sec-div"><span>Editable Details</span></div>

//                   <div className="grid-2">

//                     {/* Full Name */}
//                     <div className="col-2">
//                       <Field label="Full Name" icon={User} required>
//                         <div className="zf-input-wrap">
//                           <User size={14} className="zf-input-icon" style={{ color: "#b0a899" }} />
//                           <input
//                             type="text" placeholder="Amar Singh" name="name"
//                             disabled={!editing} className="zf-input"
//                           />
//                         </div>
//                       </Field>
//                     </div>

//                     {/* DOB */}
//                     <Field label="Date of Birth" icon={Calendar}>
//                       <Popover open={dobOpen} onOpenChange={setDobOpen}>
//                         <PopoverTrigger asChild>
//                           <button
//                             type="button" disabled={!editing}
//                             className="zf-date-btn" data-open={dobOpen}
//                           >
//                             <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                               <Calendar size={14} style={{ color: "#b0a899" }} />
//                               {dob
//                                 ? <span style={{ fontSize: 14 }}>{fmt(dob)}</span>
//                                 : <span className="zf-date-placeholder">Select date</span>
//                               }
//                             </span>
//                             <ChevronDown size={13} style={{ color: "#b0a899" }} />
//                           </button>
//                         </PopoverTrigger>
//                         <PopoverContent align="start">
//                           <DayPicker
//                             mode="single" selected={dob}
//                             onSelect={(d) => { setDob(d); setDobOpen(false); }}
//                             disabled={{ after: new Date() }}
//                             captionLayout="dropdown-buttons"
//                             fromYear={1940} toYear={new Date().getFullYear()}
//                             showOutsideDays
//                           />
//                         </PopoverContent>
//                       </Popover>
//                     </Field>

//                     {/* Gender */}
//                     <Field label="Gender" icon={User}>
//                       <Select disabled={!editing} name="gender">
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {["Male","Female","Other","Prefer not to say"].map(g => (
//                             <SelectItem key={g} value={g.toLowerCase()}>{g}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </Field>

//                     {/* Blood Group */}
//                     <Field label="Blood Group" icon={Droplet} iconColor="#e05d7a">
//                       <Select name="bloodGroup">
//                         <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
//                         <SelectContent>
//                           {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(b => (
//                             <SelectItem key={b} value={b}>{b}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </Field>

//                     {/* Height */}
//                     <Field label="Height (cm)" icon={Ruler} iconColor="#4f8ef7">
//                       <div className="zf-input-wrap">
//                         <Ruler size={14} className="zf-input-icon" style={{ color: "#4f8ef7" }} />
//                         <input type="number" placeholder="175" name="height" className="zf-input" />
//                       </div>
//                     </Field>

//                     {/* Weight */}
//                     <Field label="Weight (kg)" icon={Activity} iconColor="#29c48e">
//                       <div className="zf-input-wrap">
//                         <Activity size={14} className="zf-input-icon" style={{ color: "#29c48e" }} />
//                         <input type="number" placeholder="68" name="weight" className="zf-input" />
//                       </div>
//                     </Field>

//                     {/* Address */}
//                     <div className="col-2">
//                       <Field label="Address" icon={MapPin}>
//                         <div className="zf-input-wrap">
//                           <MapPin size={14} className="zf-textarea-icon" style={{ color: "#b0a899" }} />
//                           <textarea
//                             rows={2} placeholder="123 Main Street, New Delhi" name="address"
//                             disabled={!editing} className="zf-textarea"
//                           />
//                         </div>
//                       </Field>
//                     </div>

//                   </div>

//                   {editing && (
//                     <div style={{ display: "flex", gap: 10, marginTop: 22, justifyContent: "flex-end" }}>
//                       <button className="btn-ghost" onClick={() => setEditing(false)}>
//                         <X size={14} /> Discard
//                       </button>
//                       <button className="btn-primary" onClick={handleSave}>
//                         <Save size={14} /> Save Changes
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>

              

//             </div>
//           </div>
//         </div>

//         {/* Toast */}
//         {saved && (
//           <div className="save-toast">
//             <Check size={15} /> Changes saved successfully
//           </div>
//         )}

//       </div>
//     </TooltipProvider>
//   );
// };

// export default UserPage;

// v-07
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  User, Mail, Phone, MapPin, Calendar, Activity,
  Shield, Camera, Save, X, Droplet, Ruler, Edit2,
  ChevronDown, Check, Lock, AlertCircle,
} from "lucide-react";

import { Label }        from "@/components/ui/label";
import { Separator }    from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress }     from "@/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const fmt = (d) =>
  d ? d.toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" }) : null;

// ─── Field ─────────────────────────────────────────────────────────────────
function Field({ label, icon: Icon, iconColor="#9a8f85", required, hint, children }) {
  return (
    <div className="zf-field">
      <Label className="zf-label">
        {Icon && <Icon size={11} style={{ color:iconColor }} />}
        {label}
        {required && <span style={{ color:"#e05d7a", marginLeft:2 }}>*</span>}
      </Label>
      {children}
      {hint && <p className="zf-hint">{hint}</p>}
    </div>
  );
}

// ─── Locked row ────────────────────────────────────────────────────────────
function LockedField({ icon: Icon, iconColor, label, value }) {
  return (
    <div className="lf-wrap">
      <div className="lf-icon" style={{ background:iconColor+"15" }}>
        <Icon size={16} style={{ color:iconColor }} />
      </div>
      <div className="lf-body">
        <span className="lf-lbl">{label}</span>
        <span className="lf-val">{value}</span>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="lf-lock"><Lock size={11} /></div>
        </TooltipTrigger>
        <TooltipContent side="top" className="zf-tip">
          Contact support to update
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
const UserPage = () => {
  const [dob,     setDob]     = useState(undefined);
  const [dobOpen, setDobOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saved,   setSaved]   = useState(false);
  const [name,    setName]    = useState("Amar Singh");
  const [gender,  setGender]  = useState("");
  const [address, setAddress] = useState("");

  function handleSave() {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  }

  const initials = name ? name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2) : "A";

  return (
    <TooltipProvider>
      <div className="zp">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

          *{box-sizing:border-box}
          :root{
            --gd:#0a2a1e; --gm:#0f3d30; --gs:#1a5c47; --gp:#e6f2ee; --gg:rgba(15,61,48,.1);
            --cr:#f6f2ec; --crd:#ede8e0; --crm:#f1ebe2; --sand:#b8ae9f;
            --ink:#1a1208; --inks:#5a5248; --inkm:#8a8078;
            --wh:#ffffff; --bd:#e4ddd4; --bdl:#ede9e2;
            --rf:'Fraunces',serif; --sf:'DM Sans',sans-serif;
            --rc:26px; --ri:13px;
          }

          /* Page */
          .zp{min-height:100vh;background:var(--cr);font-family:var(--sf);padding:112px 24px 80px}

          /* Hero */
          .zh{position:absolute;top:0;left:0;right:0;height:295px;
            background:linear-gradient(150deg,var(--gd) 0%,var(--gm) 60%,var(--gs) 100%);
            border-radius:0 0 50% 50%/0 0 64px 64px;overflow:hidden;z-index:0}
          .zh::after{content:'';position:absolute;inset:0;
            background:radial-gradient(ellipse at 80% -20%,rgba(223,255,79,.07),transparent 55%),
                        radial-gradient(ellipse at -10% 100%,rgba(255,255,255,.04),transparent 50%)}
          .zh-grid{position:absolute;inset:0;opacity:.03;
            background-image:repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 32px),
                             repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 32px)}

          /* Wrap + layout */
          .zw{position:relative;z-index:10;max-width:1100px;margin:0 auto}
          .zhdr{margin-bottom:36px}
          .zey{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;
            color:rgba(223,255,79,.75);margin-bottom:8px;display:flex;align-items:center;gap:8px}
          .zey::before{content:'';width:20px;height:1px;background:rgba(223,255,79,.5)}
          .ztitle{font-family:var(--rf);font-size:clamp(34px,5vw,52px);font-weight:700;
            color:#fff;line-height:1.05;margin:0;font-style:italic}
          .zsub{color:rgba(255,255,255,.45);font-size:14px;margin-top:8px}
          .zbody{display:flex;gap:22px;align-items:flex-start}

          /* Sidebar */
          .zsb{width:264px;flex-shrink:0}
          .sbc{background:var(--wh);border:1px solid var(--bdl);border-radius:var(--rc);
            box-shadow:0 2px 8px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.08);
            padding:28px 20px;position:sticky;top:110px}

          /* Avatar */
          .avsh{width:100px;height:100px;border-radius:50%;
            background:linear-gradient(135deg,#1a8a60,var(--gd));
            padding:3px;box-shadow:0 4px 24px rgba(10,42,30,.18);
            margin:0 auto 4px;position:relative}
          .avi{width:100%;height:100%;border-radius:50%;overflow:hidden}
          .avcam{position:absolute;bottom:2px;right:2px;width:28px;height:28px;
            border-radius:50%;background:var(--gm);border:2px solid #fff;
            display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}
          .avcam:hover{background:var(--gs)}
          .avname{font-family:var(--rf);font-size:22px;font-weight:700;color:var(--ink);
            text-align:center;margin:14px 0 4px}
          .vbadge{display:inline-flex;align-items:center;gap:5px;background:var(--gp);
            color:var(--gm);font-size:11px;font-weight:600;padding:4px 10px;
            border-radius:99px;margin:0 auto;width:fit-content}

          /* Progress */
          .pr{display:flex;justify-content:space-between;margin-bottom:7px}
          .pr span:first-child{font-size:12px;font-weight:500;color:var(--inks)}
          .pr span:last-child{font-size:12px;font-weight:800;color:var(--gm)}
          .ph{font-size:11px;color:var(--inkm);margin-top:6px}

          /* Stat pills */
          .sl{display:flex;flex-direction:column;gap:8px;margin-top:18px}
          .si{display:flex;align-items:center;gap:10px;padding:10px 12px;
            border-radius:13px;background:var(--cr);border:1px solid var(--bdl);transition:all .18s}
          .si:hover{background:var(--crd);border-color:var(--bd)}
          .sic{width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .slb{font-size:9px;font-weight:700;color:var(--inkm);letter-spacing:.08em;text-transform:uppercase;margin:0}
          .svl{font-size:13px;font-weight:700;color:var(--ink);margin:0}

          /* Main area */
          .zforms{flex:1;min-width:0}

          /* Card */
          .fc{background:var(--wh);border:1px solid var(--bdl);border-radius:var(--rc);
            box-shadow:0 2px 8px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.08);overflow:hidden}

          /* Card head */
          .fch{padding:20px 28px;border-bottom:1px solid var(--bdl);background:var(--crm);
            display:flex;align-items:center;justify-content:space-between}
          .fchl{display:flex;align-items:center;gap:10px}
          .fchi{width:36px;height:36px;border-radius:11px;
            display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .fcht{font-family:var(--rf);font-size:20px;font-weight:700;color:var(--ink);letter-spacing:-.01em}

          /* Edit btn */
          .bte{height:34px;padding:0 16px;border-radius:10px;background:transparent;
            border:1.5px solid var(--bd);font-family:var(--sf);font-size:12px;font-weight:600;
            color:var(--inks);cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all .18s}
          .bte:hover,.bte.on{background:var(--gp);border-color:var(--gm);color:var(--gm)}

          /* Card body */
          .fcb{padding:28px}

          /* ── Locked strip ── */
          .ls{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px}
          .lf-wrap{display:flex;align-items:center;gap:12px;padding:14px 16px;
            border-radius:16px;background:var(--crm);border:1px solid var(--bdl)}
          .lf-icon{width:38px;height:38px;border-radius:11px;
            display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .lf-body{flex:1;min-width:0}
          .lf-lbl{display:block;font-size:10px;font-weight:700;letter-spacing:.1em;
            text-transform:uppercase;color:var(--inkm);margin-bottom:3px}
          .lf-val{font-size:14px;font-weight:600;color:var(--ink);display:block;
            white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
          .lf-lock{width:26px;height:26px;border-radius:8px;flex-shrink:0;
            background:#f0e8df;display:flex;align-items:center;justify-content:center;
            color:#9a7a60;cursor:default}
          .zf-tip{background:var(--ink)!important;color:#fff!important;font-size:11px!important;border:none!important}

          /* Section divider */
          .sd{display:flex;align-items:center;gap:10px;margin:0 0 22px}
          .sd::before,.sd::after{content:'';flex:1;height:1px;background:var(--bdl)}
          .sd span{font-size:10px;font-weight:700;letter-spacing:.14em;
            text-transform:uppercase;color:var(--sand);white-space:nowrap}

          /* Fields grid */
          .fg{display:grid;grid-template-columns:1fr 1fr;gap:18px}
          .cf{grid-column:1/-1}

          /* Field */
          .zf-field{display:flex;flex-direction:column;gap:7px}
          .zf-label{display:flex;align-items:center;gap:5px;font-size:10px;font-weight:700;
            letter-spacing:.12em;text-transform:uppercase;color:var(--inkm)}
          .zf-hint{font-size:11px;color:var(--inkm);margin-top:2px}

          /* Input wrap */
          .iw{position:relative}
          .ii{position:absolute;left:14px;top:50%;transform:translateY(-50%);pointer-events:none;z-index:1}
          .it{position:absolute;left:14px;top:14px;pointer-events:none;z-index:1}

          /* Input */
          .zfi{width:100%;height:44px;padding:0 14px 0 42px;border:1.5px solid var(--bd);
            border-radius:var(--ri);background:var(--cr);font-family:var(--sf);
            font-size:14px;color:var(--ink);outline:none;
            transition:border-color .18s,box-shadow .18s,background .18s}
          .zfi::placeholder{color:#c8c0b4}
          .zfi:focus{background:var(--wh);border-color:var(--gm);box-shadow:0 0 0 3px var(--gg)}
          .zfi:disabled{background:var(--crm);opacity:.65;cursor:not-allowed}
          input[type=number].zfi::-webkit-inner-spin-button{display:none}

          /* Textarea */
          .zfta{width:100%;padding:13px 14px 13px 42px;border:1.5px solid var(--bd);
            border-radius:var(--ri);background:var(--cr);font-family:var(--sf);
            font-size:14px;color:var(--ink);outline:none;resize:none;line-height:1.65;
            transition:border-color .18s,box-shadow .18s,background .18s}
          .zfta::placeholder{color:#c8c0b4}
          .zfta:focus{background:var(--wh);border-color:var(--gm);box-shadow:0 0 0 3px var(--gg)}
          .zfta:disabled{background:var(--crm);opacity:.65;cursor:not-allowed}

          /* Date btn */
          .zfd{width:100%;height:44px;padding:0 14px;display:flex;align-items:center;
            justify-content:space-between;border:1.5px solid var(--bd);border-radius:var(--ri);
            background:var(--cr);font-family:var(--sf);font-size:14px;color:var(--ink);
            cursor:pointer;transition:border-color .18s,box-shadow .18s,background .18s}
          .zfd:hover:not(:disabled){background:var(--crd);border-color:#cac3b8}
          .zfd:focus,.zfd[data-open="true"]{background:var(--wh);border-color:var(--gm);
            box-shadow:0 0 0 3px var(--gg);outline:none}
          .zfd:disabled{opacity:.65;cursor:not-allowed}
          .zfph{color:#c8c0b4}

          /* ── Live name preview card ── */
          .np{display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:16px;
            background:linear-gradient(135deg,var(--gp),#d4eee6);border:1px solid #c2ddd5;
            margin-bottom:20px;animation:fadeIn .3s ease}
          @keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
          .np-av{width:46px;height:46px;border-radius:50%;
            background:linear-gradient(135deg,#1a8a60,var(--gd));
            display:flex;align-items:center;justify-content:center;
            font-family:var(--rf);font-size:18px;font-weight:700;color:#fff;flex-shrink:0}
          .np-name{font-family:var(--rf);font-size:17px;font-weight:700;color:var(--ink)}
          .np-sub{font-size:11px;color:var(--inkm);margin-top:1px}
          .np-chip{display:inline-flex;align-items:center;gap:4px;background:var(--gm);
            color:#dfff4f;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;margin-left:8px}

          /* ── Gender pills ── */
          .gpills{display:flex;gap:8px;flex-wrap:wrap}
          .gp{padding:9px 18px;border-radius:99px;font-size:13px;font-weight:500;
            border:1.5px solid var(--bd);background:var(--cr);color:var(--inks);
            cursor:pointer;transition:all .16s;font-family:var(--sf)}
          .gp:hover:not(:disabled){border-color:var(--gm);color:var(--gm);background:var(--gp)}
          .gp.sel{background:var(--gm);border-color:var(--gm);color:#dfff4f;font-weight:700}
          .gp:disabled{opacity:.5;cursor:not-allowed}

          /* ── DOB display ── */
          .dob-row{display:flex;align-items:center;gap:8px}
          .dob-chip{display:inline-flex;align-items:center;gap:5px;background:var(--gp);
            color:var(--gm);font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px}

          /* ── Address counter ── */
          .ac{display:flex;justify-content:flex-end;margin-top:4px}
          .ac span{font-size:10px;color:var(--inkm)}

          /* ── Action bar ── */
          .ab{display:flex;align-items:center;justify-content:space-between;
            padding:16px 20px;border-radius:16px;background:var(--crm);
            border:1px solid var(--bdl);margin-top:24px}
          .abl{font-size:12px;color:var(--inkm);display:flex;align-items:center;gap:6px}
          .abr{display:flex;gap:10px}

          /* Buttons */
          .btg{height:40px;padding:0 18px;border-radius:12px;background:transparent;
            color:var(--inks);font-family:var(--sf);font-size:13px;font-weight:500;
            border:1.5px solid var(--bd);cursor:pointer;
            display:inline-flex;align-items:center;gap:7px;transition:all .18s}
          .btg:hover{background:var(--crd)}
          .btp{height:40px;padding:0 22px;border-radius:12px;background:var(--gm);
            color:#dfff4f;font-family:var(--sf);font-size:13px;font-weight:700;
            border:none;cursor:pointer;display:inline-flex;align-items:center;gap:7px;
            box-shadow:0 3px 12px rgba(15,61,48,.22);transition:background .18s,transform .12s}
          .btp:hover{background:var(--gs);transform:translateY(-1px)}

          /* Toast */
          .toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%);
            background:var(--gm);color:#dfff4f;font-family:var(--sf);font-size:13px;
            font-weight:600;padding:11px 24px;border-radius:99px;
            box-shadow:0 6px 24px rgba(15,61,48,.35);
            display:flex;align-items:center;gap:8px;z-index:100;animation:toastIn .3s ease}
          @keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(10px)}
            to{opacity:1;transform:translateX(-50%) translateY(0)}}

          /* DayPicker */
          .rdp{--rdp-accent-color:var(--gm);--rdp-background-color:var(--gp);
            margin:0!important;font-family:var(--sf)!important}
          .rdp-months,.rdp-month,.rdp-table{width:100%!important}
          .rdp-months{gap:0!important}
          .rdp-head_cell{font-size:10px!important;font-weight:700!important;
            letter-spacing:.1em!important;text-transform:uppercase!important;color:var(--sand)!important}
          .rdp-day{border-radius:9px!important;font-size:13px!important;color:var(--ink)!important;transition:background .1s!important}
          .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected){background:var(--crd)!important}
          .rdp-day_selected,.rdp-day_selected:hover{background:var(--gm)!important;color:#dfff4f!important;font-weight:700!important}
          .rdp-day_today:not(.rdp-day_selected){border:1.5px solid var(--gm)!important;color:var(--gm)!important;font-weight:700!important}
          .rdp-nav_button{border-radius:8px!important;color:var(--gm)!important}
          .rdp-nav_button:hover{background:var(--crd)!important}
          .rdp-caption_label{font-family:var(--rf)!important;font-size:16px!important;font-weight:700!important;color:var(--ink)!important}
          .rdp-dropdown{border:1.5px solid var(--bd)!important;border-radius:9px!important;
            background:var(--wh)!important;font-family:var(--sf)!important;font-size:13px!important}

          /* Popover */
          [data-radix-popper-content-wrapper]>div{
            background:var(--wh)!important;border:1.5px solid var(--bd)!important;
            border-radius:20px!important;box-shadow:0 8px 36px rgba(0,0,0,.12)!important;padding:14px!important}

          /* Anim */
          @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
          .fa{animation:fadeUp .4s ease both}
          .fa1{animation-delay:.04s}.fa2{animation-delay:.1s}.fa3{animation-delay:.16s}
        `}</style>

        {/* Hero */}
        <div className="zh"><div className="zh-grid" /></div>

        <div className="zw">
          {/* Header */}
          <div className="zhdr fa fa1">
            <p className="zey">Account</p>
            <h1 className="ztitle">My Profile</h1>
            <p className="zsub">Manage your personal details and health data.</p>
          </div>

          <div className="zbody">

            {/* ── SIDEBAR ── */}
            <div className="zsb fa fa2">
              <div className="sbc">
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                  <div className="avsh">
                    <div className="avi">
                      <Avatar style={{ width:"100%", height:"100%" }}>
                        <AvatarFallback style={{ fontFamily:"var(--rf)", fontSize:34, fontWeight:700, background:"linear-gradient(135deg,#d4ede6,#a8cfc3)", color:"var(--gd)", width:"100%", height:"100%", borderRadius:"50%" }}>
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="avcam"><Camera size={12} color="white" /></button>
                      </TooltipTrigger>
                      <TooltipContent className="zf-tip">Change photo</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="avname">{name || "Your Name"}</p>
                  <div className="vbadge"><Shield size={11}/> Verified Patient</div>
                </div>

                <Separator style={{ background:"var(--bdl)", margin:"20px 0" }}/>

                <div>
                  <div className="pr">
                    <span>Profile Completion</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} style={{ height:5, background:"var(--crd)" }}
                    className="[&>div]:bg-gradient-to-r [&>div]:from-[#0f3d30] [&>div]:to-[#2a9e72]"/>
                  <p className="ph">Add medical data to complete your profile</p>
                </div>

                <Separator style={{ background:"var(--bdl)", margin:"18px 0" }}/>

                <div className="sl">
                  {[
                    { icon:Droplet,  bg:"#fde8ef", ic:"#e05d7a", label:"Blood Group", value:"B+"     },
                    { icon:Ruler,    bg:"#e8f0fe", ic:"#4f8ef7", label:"Height",      value:"175 cm" },
                    { icon:Activity, bg:"#e6f9f2", ic:"#29c48e", label:"Weight",      value:"68 kg"  },
                  ].map(s=>(
                    <div key={s.label} className="si">
                      <div className="sic" style={{ background:s.bg }}><s.icon size={15} style={{ color:s.ic }}/></div>
                      <div>
                        <p className="slb">{s.label}</p>
                        <p className="svl">{s.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── PERSONAL INFO CARD ── */}
            <div className="zforms fa fa3">
              <div className="fc">

                <div className="fch">
                  <div className="fchl">
                    <div className="fchi" style={{ background:"#e6f2ee" }}>
                      <User size={17} style={{ color:"var(--gm)" }}/>
                    </div>
                    <span className="fcht">Personal Information</span>
                  </div>
                  <button className={`bte ${editing?"on":""}`} onClick={()=>setEditing(e=>!e)}>
                    {editing ? <><Check size={12}/> Done</> : <><Edit2 size={12}/> Edit Profile</>}
                  </button>
                </div>

                <div className="fcb">

                  {/* Locked fields */}
                  <div className="ls">
                    <LockedField icon={Phone} iconColor="#29c48e" label="Mobile Number" value="+91 98765 43210"/>
                    <LockedField icon={Mail}  iconColor="#4f8ef7" label="Email Address"  value="amar@email.com"/>
                  </div>

                  <div className="sd"><span>Editable Details</span></div>

                  {/* Live name preview — shows only in edit mode */}
                  {editing && (
                    <div className="np">
                      <div className="np-av">{initials}</div>
                      <div>
                        <p className="np-name">
                          {name || <span style={{ color:"#c8c0b4" }}>Your name…</span>}
                          <span className="np-chip"><Check size={9}/> Live Preview</span>
                        </p>
                        <p className="np-sub">This is how your name appears to doctors</p>
                      </div>
                    </div>
                  )}

                  <div className="fg">

                    {/* Full name */}
                    <div className="cf">
                      <Field label="Full Name" icon={User} required hint={editing?"Use the name on your government ID":undefined}>
                        <div className="iw">
                          <User size={15} className="ii" style={{ color:"#b0a899" }}/>
                          <input
                            type="text" name="name"
                            value={name} onChange={e=>setName(e.target.value)}
                            placeholder="Amar Singh" disabled={!editing} className="zfi"
                          />
                        </div>
                      </Field>
                    </div>

                    {/* DOB */}
                    <Field label="Date of Birth" icon={Calendar}>
                      <Popover open={dobOpen && editing} onOpenChange={v=>editing && setDobOpen(v)}>
                        <PopoverTrigger asChild>
                          <button type="button" disabled={!editing}
                            className="zfd" data-open={String(dobOpen && editing)}>
                            <span style={{ display:"flex", alignItems:"center", gap:8 }}>
                              <Calendar size={14} style={{ color:"#b0a899" }}/>
                              {dob ? (
                                <span className="dob-row">
                                  {fmt(dob)}
                                  {editing && <span className="dob-chip"><Check size={10}/> Set</span>}
                                </span>
                              ) : (
                                <span className="zfph">Select your date of birth</span>
                              )}
                            </span>
                            <ChevronDown size={13} style={{ color:"#b0a899" }}/>
                          </button>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                          <DayPicker
                            mode="single" selected={dob}
                            onSelect={d=>{setDob(d);setDobOpen(false);}}
                            disabled={{ after:new Date() }}
                            captionLayout="dropdown-buttons"
                            fromYear={1940} toYear={new Date().getFullYear()}
                            showOutsideDays
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>

                    {/* Gender — pill selector (full row) */}
                    <div className="cf">
                      <Field label="Gender" icon={User}>
                        <div className="gpills">
                          {[
                            { key:"Male",   label:"♂  Male" },
                            { key:"Female", label:"♀  Female" },
                            { key:"Other",  label:"⚥  Other" },
                            { key:"Prefer not to say", label:"— Prefer not to say" },
                          ].map(g=>(
                            <button key={g.key} type="button" disabled={!editing}
                              className={`gp ${gender===g.key?"sel":""}`}
                              onClick={()=>editing && setGender(g.key)}>
                              {g.label}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </div>

                    {/* Address */}
                    <div className="cf">
                      <Field label="Address" icon={MapPin}>
                        <div className="iw">
                          <MapPin size={14} className="it" style={{ color:"#b0a899" }}/>
                          <textarea
                            rows={3} name="address"
                            value={address} onChange={e=>setAddress(e.target.value)}
                            placeholder="House / Flat no., Street, City, State — PIN code"
                            disabled={!editing} className="zfta" maxLength={200}
                          />
                        </div>
                        {editing && (
                          <div className="ac">
                            <span style={{ color: address.length > 180 ? "#e05d7a" : "var(--inkm)" }}>
                              {address.length}/200
                            </span>
                          </div>
                        )}
                      </Field>
                    </div>

                  </div>{/* /fields grid */}

                  {/* Action bar */}
                  {editing && (
                    <div className="ab">
                      <span className="abl">
                        <AlertCircle size={13} style={{ color:"#b8ae9f" }}/>
                        Changes will be saved to your account
                      </span>
                      <div className="abr">
                        <button className="btg" onClick={()=>setEditing(false)}>
                          <X size={14}/> Discard
                        </button>
                        <button className="btp" onClick={handleSave}>
                          <Save size={14}/> Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>

        {saved && (
          <div className="toast">
            <Check size={15}/> Profile updated successfully
          </div>
        )}

      </div>
    </TooltipProvider>
  );
};

export default UserPage;