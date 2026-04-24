import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react"; // Added Framer Motion
import {
  User, Mail, Phone, MapPin, Calendar, Activity,
  Shield, Camera, Save, X, Droplet, Ruler, Edit2,
  ChevronDown, Check, Lock, AlertCircle, ArrowLeft, LayoutDashboard, 
} from "lucide-react";

import { Label }        from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress }     from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger }                       from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }      from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess } from "@/Redux/Features/authentication/authSlice";
import toast from "react-hot-toast";

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
        <TooltipContent side="top" className="zf-tip text-black">
          Contact support to update
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
const UserPage = () => {
  const {user, token } =useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // State for all editable fields
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "", 
    mobileNumber: user?.mobileNumber || "",
    // gender: user?.gender || "Male",
    gender: user?.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : "Male",
    address: user?.userAddress || "",
    bloodGroup: user?.bloodGroup || "",
    height: user?.userHeight || "",
    weight: user?.userWeight || "",
  });
  
  const [dob,     setDob]     = useState(user?.dateOfBirth ? new Date(user.dateOfBirth) : null);
  const [dobOpen, setDobOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saved,   setSaved]   = useState(false);
  
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (val) => {
    setFormData((prev) => ({ ...prev, gender: val }));
  };
  
  const handleBloodGroupChange = (val) => {
    setFormData((prev) => ({ ...prev, bloodGroup: val }));
  };



  async function handleSave() {
    if (formData.height && (Number(formData.height) < 0 || Number(formData.height) > 300)) {
      toast.error("Height must be between 0 and 300 cm");
      return; 
    }
    if (formData.weight && (Number(formData.weight) < 0 || Number(formData.weight) > 500)) {
      toast.error("Weight must be between 0 and 500 kg");
      return;
    }
    setIsLoading(true)

    const updateData = {
      ...formData,
      name: formData.name,
      gender: formData.gender ? formData.gender.toLowerCase() : undefined,
      dateOfBirth: dob ? dob.toISOString() : null,
      bloodGroup: formData.bloodGroup,
      userHeight: formData.height ? Number(formData.height) : undefined,
      userWeight: formData.weight ? Number(formData.weight) : undefined,
      userAddress: formData.address,
    }

    try{
      const res = await axios.put(`http://localhost:5000/api/update/${user._id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch(loginSuccess({
        user: res.data.user,
        token: token
      }))

      setSaved(true)
      setEditing(false)
      setTimeout(() => setSaved(false), 3000)
    }catch(err){
      console.error("Update Error:", err);
      toast.error(err.response?.data?.message || "Failed to update profile");
    }finally{
      setIsLoading(false)
    }
  }

  function handleDiscard(){
    setFormData({
      name: user?.name || "",
      email: user?.email || "", 
      mobileNumber: user?.mobileNumber || "",
      // gender: user?.gender || "Male",
      gender: user?.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : "Male",
      address: user?.userAddress || "",
      bloodGroup: user?.bloodGroup || "",
      height: user?.userHeight || "",
      weight: user?.userWeight || "",
    });
    // setDob(user?.dob ? new Date(user.dob) : null);
    // const [dob, setDob] = useState(user?.dateOfBirth ? new Date(user.dateOfBirth) : null);
    setDob(user?.dateOfBirth ? new Date(user.dateOfBirth) : null);
    setEditing(false);
  }

  const initials = formData.name ? formData.name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2) : "A";

  // Premium Animation Variants

  const customEase = [0.22, 1, 0.36, 1];

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

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
            --rc:24px;  
            --ri:12px;  
          }

          /* Responsive Page */
          .zp { min-height:100vh; background:var(--cr); font-family:var(--sf); padding:112px 16px 80px; overflow-x: hidden; }
          @media (min-width: 640px) { .zp { padding-left:24px; padding-right:24px; } }

          /* Hero */
          .zh { position:absolute; top:0; left:0; right:0; height:260px;
            background:linear-gradient(150deg,var(--gd) 0%,var(--gm) 60%,var(--gs) 100%);
            border-radius:0 0 40px 40px; overflow:hidden; z-index:0; }
          @media (min-width: 768px) {
            .zh { height: 295px; border-radius:0 0 50% 50%/0 0 64px 64px; }
          }
          .zh::after { content:''; position:absolute; inset:0;
            background:radial-gradient(ellipse at 80% -20%,rgba(223,255,79,.07),transparent 55%),
                        radial-gradient(ellipse at -10% 100%,rgba(255,255,255,.04),transparent 50%); }
          .zh-grid { position:absolute; inset:0; opacity:.03;
            background-image:repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 32px),
                             repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 32px); }

          /* Layout */
          .zw { position:relative; z-index:10; max-width:1100px; margin:0 auto; }
          .zhdr { margin-bottom: 24px; }
          @media (min-width: 768px) { .zhdr { margin-bottom: 36px; } }
          .zey { font-size:10px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:rgba(223,255,79,.75); margin-bottom:8px; display:flex; align-items:center; gap:8px; }
          .zey::before { content:''; width:20px; height:1px; background:rgba(223,255,79,.5); }
          .ztitle { font-family:var(--rf); font-size:clamp(28px,5vw,52px); font-weight:700; color:#fff; line-height:1.05; margin:0; font-style:italic; }
          .zsub { color:rgba(255,255,255,.45); font-size:14px; margin-top:8px; }

          .top-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; width: 100%; }
          .top-nav-btn { display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(8px); }
          .nav-back { background: rgba(255,255,255,0.1); color: #fff; }
          .nav-back:hover { background: rgba(255,255,255,0.2); }
          .nav-dash { background: #dfff4f; color: var(--gm); border: none; box-shadow: 0 4px 15px rgba(223,255,79,0.2); }
          .nav-dash:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(223,255,79,0.3); background: #eaff7b; }
          
          /* Responsive Body Split */
          .zbody { display:flex; flex-direction: column; gap:22px; align-items:stretch; }
          @media (min-width: 1024px) {
            .zbody { flex-direction: row; align-items:flex-start; }
            .zsb { width: 264px; flex-shrink:0; }
          }

          /* Sidebar */
          .sbc { background:var(--wh); border:1px solid var(--bdl); border-radius:var(--rc); box-shadow:0 2px 8px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.08); padding:28px 20px; }
          @media (min-width: 1024px) { .sbc { position:sticky; top:110px; } }

          /* Avatar */
          .avsh { width:100px; height:100px; border-radius:50%; background:linear-gradient(135deg,#1a8a60,var(--gd)); padding:3px; box-shadow:0 4px 24px rgba(10,42,30,.18); margin:0 auto 4px; position:relative; }
          .avi { width:100%; height:100%; border-radius:50%; overflow:hidden; }
          .avcam { position:absolute; bottom:2px; right:2px; width:28px; height:28px; border-radius:50%; background:var(--gm); border:2px solid #fff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .2s; }
          .avcam:hover { background:var(--gs); }
          .avname { font-family:var(--rf); font-size:22px; font-weight:700; color:var(--ink); text-align:center; margin:14px 0 4px; }
          .vbadge { display:inline-flex; align-items:center; gap:5px; background:var(--gp); color:var(--gm); font-size:11px; font-weight:600; padding:4px 10px; border-radius:99px; margin:0 auto; width:fit-content; }

          /* Progress */
          .pr { display:flex; justify-content:space-between; margin-bottom:7px; }
          .pr span:first-child { font-size:12px; font-weight:500; color:var(--inks); }
          .pr span:last-child { font-size:12px; font-weight:800; color:var(--gm); }
          .ph { font-size:11px; color:var(--inkm); margin-top:6px; }

          /* Stat pills */
          .sl { display:flex; flex-direction:column; gap:8px; margin-top:18px; }
          @media (max-width: 1023px) {
            .sl { flex-direction: row; flex-wrap: wrap; }
            .si { flex: 1; min-width: calc(50% - 4px); }
          }
          @media (max-width: 400px) { .si { min-width: 100%; } }

          .si { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:12px; background:var(--cr); border:1px solid var(--bdl); transition:all .18s; }
          .si:hover { background:var(--crd); border-color:var(--bd); }
          .sic { width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
          .slb { font-size:9px; font-weight:700; color:var(--inkm); letter-spacing:.08em; text-transform:uppercase; margin:0; }
          .svl { font-size:13px; font-weight:700; color:var(--ink); margin:0; }

          /* Main area */
          .zforms { flex:1; min-width:0; }

          /* Card */
          .fc { background:var(--wh); border:1px solid var(--bdl); border-radius:var(--rc); box-shadow:0 2px 8px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.08); overflow:hidden; }

          /* Card head */
          .fch { padding:16px 20px; border-bottom:1px solid var(--bdl); background:var(--crm); display:flex; align-items:center; justify-content:space-between; }
          @media (min-width: 640px) { .fch { padding:20px 28px; } }
          .fchl { display:flex; align-items:center; gap:10px; }
          .fchi { width:36px; height:36px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
          .fcht { font-family:var(--rf); font-size:18px; font-weight:700; color:var(--ink); letter-spacing:-.01em; }
          @media (min-width: 640px) { .fcht { font-size: 20px; } }

          /* Edit btn */
          .bte { height:34px; padding:0 12px; border-radius:10px; background:transparent; border:1.5px solid var(--bd); font-family:var(--sf); font-size:12px; font-weight:600; color:var(--inks); cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all .18s; }
          @media (min-width: 640px) { .bte { padding:0 16px; } }
          .bte:hover,.bte.on { background:var(--gp); border-color:var(--gm); color:var(--gm); }

          /* Card body */
          .fcb { padding:20px; }
          @media (min-width: 640px) { .fcb { padding:28px; } }

          /* Locked strip */
          .ls { display:grid; grid-template-columns:1fr; gap:12px; margin-bottom:24px; }
          @media (min-width: 640px) { .ls { grid-template-columns:1fr 1fr; } }
          .lf-wrap { display:flex; align-items:center; gap:12px; padding:14px 16px; border-radius:14px; background:var(--crm); border:1px solid var(--bdl); }
          .lf-icon { width:38px; height:38px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
          .lf-body { flex:1; min-width:0; }
          .lf-lbl { display:block; font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--inkm); margin-bottom:3px; }
          .lf-val { font-size:14px; font-weight:600; color:var(--ink); display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
          .lf-lock { width:26px; height:26px; border-radius:8px; flex-shrink:0; background:#f0e8df; display:flex; align-items:center; justify-content:center; color:#9a7a60; cursor:default; }
          .zf-tip { background:var(--ink)!important; font-size:11px!important; border:none!important; }

          /* Section divider */
          .sd { display:flex; align-items:center; gap:10px; margin:0 0 22px; }
          .sd::before,.sd::after { content:''; flex:1; height:1px; background:var(--bdl); }
          .sd span { font-size:10px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--sand); white-space:nowrap; }

          /* Fields grid */
          .fg { display:grid; grid-template-columns:1fr; gap:16px; }
          @media (min-width: 640px) {
            .fg { grid-template-columns:1fr 1fr; gap:18px; }
            .cf { grid-column:1/-1; }
          }

          /* Field */
          .zf-field { display:flex; flex-direction:column; gap:7px; }
          .zf-label { display:flex; align-items:center; gap:5px; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--inkm); }
          .zf-hint { font-size:11px; color:var(--inkm); margin-top:2px; }

          /* Input wrap */
          .iw { position:relative; display:flex; align-items:center;}
          .ii { position:absolute; left:14px; pointer-events:none; z-index:10; }
          .it { position:absolute; left:14px; top:14px; pointer-events:none; z-index:1; }
          .ir { position:absolute; right:14px; font-size:12px; font-weight:600; color:var(--inkm); pointer-events:none; z-index:1;}

          /* Input */
          .zfi { width:100%; height:44px; padding:0 14px 0 42px; border:1.5px solid var(--bd); border-radius:var(--ri); background:var(--cr); font-family:var(--sf); font-size:14px; color:var(--ink); outline:none; transition:border-color .18s,box-shadow .18s,background .18s; }
          .zfi.w-suffix { padding-right: 40px; }
          .zfi::placeholder { color:#c8c0b4; }
          .zfi:focus { background:var(--wh); border-color:var(--gm); box-shadow:0 0 0 3px var(--gg); }
          .zfi:disabled { background:var(--crm); opacity:.65; cursor:not-allowed; border-color:transparent;}
          input[type=number].zfi::-webkit-inner-spin-button { display:none; }

          /* Select */
          button[role="combobox"] { 
            width: 100% !important; height: 44px !important; padding: 0 14px 0 42px !important; 
            border-radius: var(--ri) !important; background: var(--cr) !important; 
            border: 1.5px solid var(--bd) !important; font-family: var(--sf) !important; 
            font-size: 14px !important; color: var(--ink) !important; box-shadow: none !important; 
            transition: border-color .18s, box-shadow .18s, background .18s !important; 
          }
          button[role="combobox"]:focus { border-color: var(--gm) !important; box-shadow: 0 0 0 3px var(--gg) !important; background: var(--wh) !important; }
          button[role="combobox"]:disabled { background: var(--crm) !important; opacity: .65 !important; cursor: not-allowed !important; border-color: transparent !important; padding-left: 42px !important; }
          [role="listbox"] { background: var(--wh) !important; border: 1.5px solid var(--bd) !important; border-radius: 12px !important; font-family: var(--sf) !important; box-shadow: 0 8px 28px rgba(0,0,0,.1) !important; padding: 6px !important; }
          [role="option"] { border-radius: 6px !important; font-size: 14px !important; cursor: pointer !important; padding: 8px 12px !important; }
          [role="option"][data-highlighted] { background: var(--gp) !important; color: var(--gm) !important; font-weight: 600 !important; }

          /* Textarea */
          .zfta { width:100%; padding:13px 14px 13px 42px; border:1.5px solid var(--bd); border-radius:var(--ri); background:var(--cr); font-family:var(--sf); font-size:14px; color:var(--ink); outline:none; resize:none; line-height:1.65; transition:border-color .18s,box-shadow .18s,background .18s; }
          .zfta::placeholder { color:#c8c0b4; }
          .zfta:focus { background:var(--wh); border-color:var(--gm); box-shadow:0 0 0 3px var(--gg); }
          .zfta:disabled { background:var(--crm); opacity:.65; cursor:not-allowed; border-color:transparent;}

          /* Date btn */
          .zfd { width:100%; height:44px; padding:0 14px; display:flex; align-items:center; justify-content:space-between; border:1.5px solid var(--bd); border-radius:var(--ri); background:var(--cr); font-family:var(--sf); font-size:14px; color:var(--ink); cursor:pointer; transition:border-color .18s,box-shadow .18s,background .18s; }
          .zfd:hover:not(:disabled) { background:var(--crd); border-color:#cac3b8; }
          .zfd:focus, .zfd[data-open="true"] { background:var(--wh); border-color:var(--gm); box-shadow:0 0 0 3px var(--gg); outline:none; }
          .zfd:disabled { background:var(--crm); opacity:.65; cursor:not-allowed; border-color:transparent;}
          .zfph { color:#c8c0b4; }

          /* 🚀 NEW: DayPicker Dropdowns Enhancements */
          .rdp-caption_dropdowns { display: flex !important; gap: 8px; justify-content: center; align-items: center; }
          .rdp-dropdown { 
             padding: 6px 10px !important; 
             border: 1.5px solid var(--bd) !important; 
             border-radius: 8px !important; 
             background: var(--cr) !important; 
             font-family: var(--sf) !important; 
             font-size: 14px !important; 
             font-weight: 600 !important;
             color: var(--ink) !important; 
             cursor: pointer !important; 
             appearance: auto !important; 
          }
          .rdp-dropdown:focus { outline: none; border-color: var(--gm) !important; background: var(--wh) !important; }
          .rdp-dropdown_month, .rdp-dropdown_year { margin: 0 !important; }
          .rdp-vhidden { display: none !important; }

          /* Live name preview card */
          .np { display:flex; align-items:center; gap:14px; padding:14px 18px; border-radius:14px; background:linear-gradient(135deg,var(--gp),#d4eee6); border:1px solid #c2ddd5; margin-bottom:20px; }
          .np-av { width:46px; height:46px; border-radius:50%; background:linear-gradient(135deg,#1a8a60,var(--gd)); display:flex; align-items:center; justify-content:center; font-family:var(--rf); font-size:18px; font-weight:700; color:#fff; flex-shrink:0; }
          .np-name { font-family:var(--rf); font-size:17px; font-weight:700; color:var(--ink); }
          .np-sub { font-size:11px; color:var(--inkm); margin-top:1px; }
          .np-chip { display:inline-flex; align-items:center; gap:4px; background:var(--gm); color:#dfff4f; font-size:10px; font-weight:700; padding:2px 8px; border-radius:99px; margin-left:8px; }
          @media (max-width: 639px) { .np-chip { display: none; } }

          /* Gender Pills */
          .gpills { display:flex; gap:8px; flex-wrap:wrap; }
          .gp { 
            padding:0 16px; height:44px; border-radius: var(--ri); font-size:13px; font-weight:500; 
            border:1.5px solid var(--bd); background:var(--cr); color:var(--inks); 
            cursor:pointer; transition:all .18s ease; font-family:var(--sf);
            display: flex; align-items: center; justify-content: center;
          }
          @media (max-width: 400px) { .gp { flex: 1; min-width: 45%; } }
          .gp:hover:not(:disabled) { border-color:var(--gm); color:var(--gm); background:var(--gp); }
          .gp.sel { background: var(--gm); border-color: var(--gm); color: #dfff4f; font-weight: 700; box-shadow: 0 4px 12px rgba(15,61,48,0.15); }
          .gp:disabled { opacity:.65; cursor:not-allowed; border-color:transparent; background:var(--crm); }
          .gp.sel:disabled { background: var(--gm); opacity: 0.8; color: #dfff4f; border-color: transparent;}

          /* Address counter */
          .ac { display:flex; justify-content:flex-end; margin-top:4px; }
          .ac span { font-size:10px; color:var(--inkm); }

          /* Action bar */
          .ab { display:flex; flex-direction: column; gap:16px; padding:16px 20px; border-radius:16px; background:var(--crm); border:1px solid var(--bdl); margin-top:24px; }
          @media (min-width: 640px) { .ab { flex-direction: row; align-items:center; justify-content:space-between; } }
          .abl { font-size:12px; color:var(--inkm); display:flex; align-items:center; gap:6px; }
          .abr { display:flex; gap:10px; width: 100%; justify-content: space-between; }
          @media (min-width: 640px) { .abr { width: auto; justify-content: flex-end; } }

          /* Buttons */
          .btg { flex:1; height:40px; padding:0 14px; border-radius:var(--ri); background:transparent; color:var(--inks); font-family:var(--sf); font-size:13px; font-weight:500; border:1.5px solid var(--bd); cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:7px; transition:all .18s; }
          @media (min-width: 640px) { .btg { flex:none; padding:0 18px; } }
          .btg:hover { background:var(--crd); }
          .btp { flex:1; height:40px; padding:0 14px; border-radius:var(--ri); background:var(--gm); color:#dfff4f; font-family:var(--sf); font-size:13px; font-weight:700; border:none; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:7px; box-shadow:0 3px 12px rgba(15,61,48,.22); transition:background .18s,transform .12s; }
          @media (min-width: 640px) { .btp { flex:none; padding:0 22px; } }
          .btp:hover { background:var(--gs); transform:translateY(-1px); }

          /* Toast */
          .toast { position:fixed; bottom:20px; left:50%; width: 90%; max-width: 320px; background:var(--gm); color:#dfff4f; font-family:var(--sf); font-size:13px; font-weight:600; padding:11px 24px; border-radius:99px; box-shadow:0 6px 24px rgba(15,61,48,.35); display:flex; align-items:center; justify-content: center; gap:8px; z-index:100; }
          @media (min-width: 640px) { .toast { bottom:32px; width: auto; justify-content: flex-start; } }

          /* Popover */
          [data-radix-popper-content-wrapper] { z-index: 9999 !important; }
          [data-radix-popper-content-wrapper]>div { background:var(--wh)!important; border:1.5px solid var(--bd)!important; border-radius:20px!important; box-shadow:0 8px 36px rgba(0,0,0,.12)!important; padding:14px!important; width: auto !important; max-width: none !important;}
        `}</style>

        {/* Hero */}
        <div className="zh"><div className="zh-grid" /></div>

        <div className="zw">
          
          {/*  Animated Top Nav */}
          <motion.div 
            variants={fadeDown} initial="hidden" animate="visible"
            className="top-nav"
          >
            <button onClick={() => navigate(-1)} className="top-nav-btn nav-back">
              <ArrowLeft size={16} />
              {!isMobile && <span>Go Back</span>}
            </button>
            <button onClick={() => navigate("/dashboard")} className="top-nav-btn nav-dash">
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </button>
          </motion.div>
          
          {/*  Animated Header */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="zhdr">
            <p className="zey">Account</p>
            <h1 className="ztitle">My Profile</h1>
            <p className="zsub">Manage your personal details and health data.</p>
          </motion.div>

          {/*  Animated Body Container (Staggered) */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="zbody">

            {/* ── SIDEBAR ── */}
            <motion.div variants={fadeUp} className="zsb">
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
                      <TooltipContent className="zf-tip text-black">Change photo</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="avname !font-inter">{formData.name || "Your Name"}</p>
                  <div className="vbadge"><Shield size={11}/> Verified Patient</div>
                </div>

                <Separator style={{ background:"var(--bdl)", margin:"20px 0" }}/>

                <div>
                  <div className="pr">
                    <span>Profile Completion</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} style={{ height:5, background:"var(--crd)" }}
                    className="[&>div]:bg-gradient-to-r [&>div]:from-[#0f3d30] [&>div]:to-[#2a9e72]"/>
                  <p className="ph">Your core profile is complete.</p>
                </div>

                <Separator style={{ background:"var(--bdl)", margin:"18px 0" }}/>

                {/* Sidebar Stats - Reacting to form data */}
                <div className="sl">
                  {[
                    { icon:Droplet,  bg:"#fde8ef", ic:"#e05d7a", label:"Blood Group", value:formData.bloodGroup || "N/A" },
                    { icon:Ruler,    bg:"#e8f0fe", ic:"#4f8ef7", label:"Height",      value:formData.height ? `${formData.height} cm` : "N/A" },
                    { icon:Activity, bg:"#e6f9f2", ic:"#29c48e", label:"Weight",      value:formData.weight ? `${formData.weight} kg` : "N/A" },
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
            </motion.div>

            {/* ── FORMS ── */}
            <motion.div variants={fadeUp} className="zforms">
              <div className="fc">

                <div className="fch">
                  <div className="fchl">
                    <div className="fchi" style={{ background:"#e6f2ee" }}>
                      <User size={17} style={{ color:"var(--gm)" }}/>
                    </div>
                    <span className="fcht !font-poppins !font-semibold !text-xl">Profile Details</span>
                  </div>
                  <button className={`bte ${editing?"on":""}`} onClick={()=>setEditing(e=>!e)}>
                    {editing ? <><Check size={12}/> Editing</> : <><Edit2 size={12}/> Edit</>}
                  </button>
                </div>

                <div className="fcb">

                  {/* Locked fields */}
                  <div className="ls">
                    <LockedField icon={Phone} iconColor="#29c48e" label="Mobile Number" value={user?.mobileNumber || "N/A"}/>
                    <LockedField icon={Mail}  iconColor="#4f8ef7" label="Email Address"  value={user?.email || "N/A"}/>
                  </div>

                  <div className="sd"><span>Editable Details</span></div>

                  {/* Animated Live name preview */}
                  <AnimatePresence>
                    {editing && (
                      <motion.div 
                        initial={{ opacity: 0, y: -15, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto", marginBottom: "20px" }}
                        exit={{ opacity: 0, y: -15, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3 }}
                        className="np"
                        style={{ overflow: "hidden" }}
                      >
                        <div className="np-av">{initials}</div>
                        <div>
                          <p className="np-name">
                            {formData.name || <span style={{ color:"#c8c0b4" }}>Your name…</span>}
                            <span className="np-chip"><Check size={9}/> Live Preview</span>
                          </p>
                          <p className="np-sub">This is how your name appears to doctors</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="fg">

                    {/* Full name */}
                    <div className="cf">
                      <Field label="Full Name" icon={User} required hint={editing?"Use the name on your government ID":undefined}>
                        <div className="iw">
                          <User size={15} className="ii" style={{ color:"#b0a899" }}/>
                          <input
                            type="text" name="name"
                            value={formData.name} onChange={handleInputChange}
                            placeholder="Enter your full name" disabled={!editing} className="zfi"
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
                                <span style={{ fontSize: 14 }}>{fmt(dob)}</span>
                              ) : (
                                <span className="zfph">Select date</span>
                              )}
                            </span>
                            {editing && <ChevronDown size={13} style={{ color:"#b0a899" }}/>}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent align="start" sideOffset={8} className="w-auto border-none p-0 shadow-none">
                          <DayPicker
                            mode="single" selected={dob}
                            onSelect={d=>{setDob(d);setDobOpen(false);}}
                            disabled={{ after:new Date() }}
                            captionLayout="dropdown" // 🚀 Changed to dropdown for Year/Month selects
                            fromYear={1940} toYear={new Date().getFullYear()}
                            showOutsideDays
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>

                    {/* Gender */}
                    <Field label="Gender" icon={User}>
                      <div className="gpills">
                        {[
                          { key:"Male",   label:"♂  Male" },
                          { key:"Female", label:"♀  Female" },
                          { key:"Other",  label:"⚥  Other" }
                        ].map(g=>(
                          <button key={g.key} type="button" disabled={!editing}
                            className={`gp ${formData.gender===g.key?"sel":""}`}
                            onClick={()=>editing && handleGenderChange(g.key)}>
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </Field>

                  </div>

                  <div className="sd" style={{ marginTop: 32 }}><span>Medical Biometrics</span></div>
                  
                  <div className="fg" style={{ marginBottom: 24 }}>
                     {/* Blood Group */}
                     <Field label="Blood Group" icon={Droplet} iconColor="#e05d7a">
                        <div className="iw">
                          <Droplet size={15} className="ii" style={{ color:"#e05d7a", zIndex: 10 }}/>
                          <Select 
                            value={formData.bloodGroup} 
                            onValueChange={handleBloodGroupChange}
                            disabled={!editing}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(b => (
                                <SelectItem key={b} value={b}>{b}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </Field>

                      {/* Height */}
                      <Field label="Height (cm)" icon={Ruler} iconColor="#4f8ef7">
                        <div className="iw">
                          <Ruler size={15} className="ii" style={{ color:"#4f8ef7" }}/>
                          <input
                            type="number" name="height" min="0" max="300"
                            value={formData.height} onChange={handleInputChange}
                            placeholder="175" disabled={!editing} className="zfi w-suffix"
                          />
                          <span className="ir">cm</span>
                        </div>
                      </Field>

                      {/* Weight */}
                      <Field label="Weight (kg)" icon={Activity} iconColor="#29c48e">
                        <div className="iw">
                          <Activity size={15} className="ii" style={{ color:"#29c48e" }}/>
                          <input
                            type="number" name="weight" min="0" max="500"
                            value={formData.weight} onChange={handleInputChange}
                            placeholder="68" disabled={!editing} className="zfi w-suffix"
                          />
                          <span className="ir">kg</span>
                        </div>
                      </Field>
                  </div>

                  <div className="sd"><span>Location</span></div>

                  <div className="fg">
                    {/* Address */}
                    <div className="cf">
                      <Field label="Address" icon={MapPin}>
                        <div className="iw">
                          <MapPin size={14} className="it" style={{ color:"#b0a899" }}/>
                          <textarea
                            rows={3} name="address"
                            value={formData.address} onChange={handleInputChange}
                            placeholder="House / Flat no., Street, City, State — PIN code"
                            disabled={!editing} className="zfta" maxLength={200}
                          />
                        </div>
                        {editing && (
                          <div className="ac">
                            <span style={{ color: formData.address.length > 180 ? "#e05d7a" : "var(--inkm)" }}>
                              {formData.address.length}/200
                            </span>
                          </div>
                        )}
                      </Field>
                    </div>
                  </div>

                  {/* 🚀 Animated Action bar */}
                  <AnimatePresence>
                    {editing && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto", marginTop: "24px" }}
                        exit={{ opacity: 0, y: 20, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ab"
                        style={{ overflow: "hidden" }}
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* 🚀 Animated Toast */}
        <AnimatePresence>
          {saved && (
            <motion.div 
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              transition={{ duration: 0.3 }}
              className="toast"
            >
              <Check size={15}/> Profile updated successfully
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </TooltipProvider>
  );
};

export default UserPage;
