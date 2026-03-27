import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils"; 
import { Calendar } from "../ui/calendar"; 
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useNavigate } from "react-router-dom"; // 🔥 Navbar/Home par jaane ke liye

// ── Mock Data ──────────────────────────────────────────────────────────────────
const SPECIALTIES = [
  { id: "cardiology",    label: "Cardiology",        icon: "🫀", desc: "Heart & Blood" },
  { id: "neurology",     label: "Neurology",          icon: "🧠", desc: "Brain & Nerves" },
  { id: "orthopedics",   label: "Orthopedics",        icon: "🦴", desc: "Bones & Joints" },
  { id: "general",       label: "General Med",        icon: "🩺", desc: "Primary Care" },
  { id: "pediatrics",    label: "Pediatrics",         icon: "👶", desc: "Child Health" },
  { id: "gastroenterology",    label: "Gastroenterology",         icon: "🩺", desc: "Digestive System Care" },
];

const DOCTORS = [
  { id: "d1", name: "Dr. Ananya Sharma",  specialty: "cardiology",  exp: "15 Yrs", rating: 4.9, slots: 3, img: "👩‍⚕️" },
  { id: "d2", name: "Dr. Rahul Verma",  specialty: "gastroenterology",  exp: "10+ Yrs", rating: 4.7, slots: 5, img: "👩‍⚕️" },
  { id: "d3", name: "Dr. Neha Kapoor",  specialty: "pediatrics",  exp: "9+ Yrs", rating: 4.6, slots: 7, img: "👩‍⚕️" },
  { id: "d4", name: "Dr. Vikram Joshi",  specialty: "general",  exp: "11 Yrs", rating: 4.7, slots: 5, img: "👩‍⚕️" },
  { id: "d5", name: "Dr. Akash Kumar",  specialty: "gastroenterology",  exp: "8 Yrs", rating: 4.8, slots: 4, img: "👩‍⚕️" },
  { id: "d6", name: "Dr. Rohan Gupta",    specialty: "cardiology",  exp: "10 Yrs", rating: 4.7, slots: 5, img: "👨‍⚕️" },
  { id: "d7", name: "Dr. Priya Verma",    specialty: "neurology",   exp: "12 Yrs", rating: 4.8, slots: 2, img: "👩‍⚕️" },
  { id: "d8", name: "Dr. Arjun Singh",    specialty: "orthopedics", exp: "8 Yrs",  rating: 4.6, slots: 4, img: "👨‍⚕️" },
  { id: "d9", name: "Dr. Meera Patel",    specialty: "general",     exp: "20 Yrs", rating: 5.0, slots: 6, img: "👩‍⚕️" },
];

const TIME_SLOTS = [
  { id: "t1", time: "09:00 AM", period: "Morning",   available: true  },
  { id: "t2", time: "10:30 AM", period: "Morning",   available: true  },
  { id: "t3", time: "12:00 PM", period: "Afternoon", available: false },
  { id: "t4", time: "02:00 PM", period: "Afternoon", available: true  },
  { id: "t5", time: "04:30 PM", period: "Evening",   available: true  },
  { id: "t6", time: "06:00 PM", period: "Evening",   available: false },
];

// ── Components ────────────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "#fef9c3", padding: "4px 8px", borderRadius: "8px" }}>
      <span style={{ color: "#eab308", fontSize: "14px" }}>★</span>
      <span style={{ fontSize: "12px", fontWeight: 600, color: "#854d0e", fontFamily: "'Inter', sans-serif" }}>{rating}</span>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function BookDoctor() {
  const [step, setStep] = useState(0); 
  const [form, setForm] = useState({
    patientName: "", age: "", specialty: null, doctor: null, date: null, timeSlot: null, symptoms: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // 🔥 Navigation hook

  const filteredDoctors = DOCTORS.filter(d => d.specialty === form.specialty?.id);

  function update(key, val) {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: null }));
  }

  function validateStep(s) {
    const errs = {};
    if (s === 0) {
      if (!form.patientName.trim()) errs.patientName = "Name is required";
      if (!form.age || isNaN(form.age) || form.age < 1 || form.age > 120) errs.age = "Valid age required";
    }
    if (s === 1) {
      if (!form.specialty) errs.specialty = "Select specialty";
      if (!form.doctor) errs.doctor = "Select doctor";
    }
    if (s === 2) {
      if (!form.date) errs.date = "Select date";
      if (!form.timeSlot) errs.timeSlot = "Select time";
    }
    return errs;
  }

  function nextStep() {
    const errs = validateStep(step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStep(s => s + 1);
  }

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  }

  const STEPS = [
    { title: "Basic Info", desc: "Patient details" },
    { title: "Specialist", desc: "Choose doctor" },
    { title: "Schedule", desc: "Date & Time" },
    { title: "Confirm", desc: "Review booking" }
  ];

  // 🚀 NEW SUCCESS SCREEN (Matching your screenshot vibe)
  if (submitted) {
    return (
      <div style={styles.page}>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
        
        <div style={{ ...styles.card, maxWidth: "580px", textAlign: "center", padding: "64px 48px", margin: "0 auto", animation: "fadeIn 0.5s ease" }}>
          
          {/* Party Icon Container */}
          <div style={{ 
            width: "90px", height: "90px", background: "#E6F4F1", 
            borderRadius: "50%", display: "flex", alignItems: "center", 
            justifyContent: "center", margin: "0 auto 32px" 
          }}>
            <span style={{ fontSize: "44px" }}>🎉</span>
          </div>

          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", color: "#053b32", marginBottom: "16px" }}>
            Booking Confirmed!
          </h2>
          
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#64748b", marginBottom: "40px", lineHeight: "1.7", fontSize: "16px" }}>
            Your appointment with <strong style={{color: "#0F766E"}}>{form.doctor?.name}</strong> is scheduled for <br/>
            <strong style={{color: "#0F766E"}}>{form.date && format(form.date, "PPP")}</strong> at <strong style={{color: "#0F766E"}}>{form.timeSlot?.time}</strong>.
          </p>

          {/* Action Buttons Row */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button 
              style={{...styles.secondaryBtn, flex: 1, height: "50px", fontSize: "15px"}} 
              onClick={() => { 
                setSubmitted(false); 
                setForm({ patientName: "", age: "", specialty: null, doctor: null, date: null, timeSlot: null, symptoms: "" }); 
                setStep(0); 
              }}
            >
              Book Another
            </button>
            
            <button 
              style={{...styles.primaryBtn, flex: 1, height: "50px", fontSize: "15px", borderRadius: "12px"}} 
              onClick={() => navigate("/")} // 🔥 Redirects to Home
            >
              Done
            </button>
          </div>

        </div>

        <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />

      <div style={styles.container}>
        
        {/* ── LEFT PANEL (Ziva Green Theme) ── */}
        <div style={styles.leftPanel}>
           {/* Subtle Pattern */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 L50,100 L60,80 L70,120 L80,100 L130,100" stroke="#dfff4f" fill="none" strokeWidth="2" transform="scale(2)"/>
            </svg>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "12px", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.15em", color: "#dfff4f", marginBottom: "12px", textTransform: "uppercase" }}>
              Ziva Healthcare
            </div>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", color: "#fff", lineHeight: "1.2", marginBottom: "12px" }}>
              Book an <br/><span style={{ color: "#dfff4f" }}>Appointment</span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#E6F4F1", fontSize: "14px", opacity: 0.9 }}>
              Fill out the form to schedule your visit with our top specialists.
            </p>
          </div>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 1 }}>
            {/* Timeline Line */}
            <div style={{ position: "absolute", left: "15px", top: "20px", bottom: "20px", width: "2px", background: "rgba(255,255,255,0.1)", zIndex: 0 }}></div>
            
            {STEPS.map((s, i) => (
              <div key={s.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: step >= i ? "#dfff4f" : "#053b32",
                  border: step >= i ? "none" : "2px solid rgba(255,255,255,0.3)",
                  color: step >= i ? "#053b32" : "rgba(255,255,255,0.5)",
                  fontFamily: "'Inter', sans-serif", fontWeight: "700", fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: step === i ? "0 0 15px rgba(223, 255, 79, 0.3)" : "none"
                }}>
                  {step > i ? "✓" : i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: step >= i ? "#fff" : "rgba(255,255,255,0.5)", margin: 0 }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: step >= i ? "#E6F4F1" : "rgba(255,255,255,0.4)", margin: "4px 0 0 0" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL (Form Area) ── */}
        <div style={styles.rightPanel}>
          <div style={styles.formContainer}>
            
            {/* STEP 0 */}
            {step === 0 && (
              <div style={styles.fadeAnim}>
                <h2 style={styles.stepTitle}>Patient Information</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label style={styles.label}>Full Name</label>
                    <input 
                      style={{...styles.input, borderColor: errors.patientName ? "#ef4444" : "#e2e8f0"}} 
                      placeholder="e.g. Amar Singh" 
                      value={form.patientName} 
                      onChange={e => update("patientName", e.target.value)} 
                    />
                    {errors.patientName && <span style={styles.error}>{errors.patientName}</span>}
                  </div>
                  <div>
                    <label style={styles.label}>Age</label>
                    <input 
                      type="number" 
                      style={{...styles.input, width: "150px", borderColor: errors.age ? "#ef4444" : "#e2e8f0"}} 
                      placeholder="Years" 
                      value={form.age} 
                      onChange={e => update("age", e.target.value)} 
                    />
                    {errors.age && <span style={styles.error}>{errors.age}</span>}
                  </div>
                  <div>
                    <label style={styles.label}>Symptoms (Optional)</label>
                    <textarea 
                      style={styles.textarea} 
                      placeholder="Describe your issue..." 
                      rows="3" 
                      value={form.symptoms} 
                      onChange={e => update("symptoms", e.target.value)} 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <div style={styles.fadeAnim}>
                <h2 style={styles.stepTitle}>Select Department & Doctor</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label style={styles.label}>Department</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {SPECIALTIES.map(spec => (
                        <button
                          key={spec.id}
                          onClick={() => { update("specialty", spec); update("doctor", null); }}
                          style={{
                            ...styles.chipButton,
                            background: form.specialty?.id === spec.id ? "#E6F4F1" : "#fff",
                            borderColor: form.specialty?.id === spec.id ? "#0F766E" : "#e2e8f0",
                            color: form.specialty?.id === spec.id ? "#0F766E" : "#64748b"
                          }}
                        >
                          <span style={{ fontSize: "18px" }}>{spec.icon}</span>
                          {spec.label}
                        </button>
                      ))}
                    </div>
                    {errors.specialty && <span style={styles.error}>{errors.specialty}</span>}
                  </div>

                  {form.specialty && (
                    <div style={{ animation: "fadeIn 0.3s ease" }}>
                      <label style={styles.label}>Available Doctors</label>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {filteredDoctors.map(doc => (
                          <div 
                            key={doc.id} 
                            onClick={() => update("doctor", doc)}
                            style={{
                              ...styles.doctorCard,
                              borderColor: form.doctor?.id === doc.id ? "#0F766E" : "#f1f5f9",
                              background: form.doctor?.id === doc.id ? "#FAFAFA" : "#fff",
                            }}
                          >
                            <div style={{ fontSize: "32px", background: "#f1f5f9", borderRadius: "12px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {doc.img}
                            </div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#053b32", margin: 0 }}>{doc.name}</h4>
                              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#94a3b8", margin: "2px 0 0 0" }}>{doc.exp} Experience</p>
                            </div>
                            <StarRating rating={doc.rating} />
                          </div>
                        ))}
                      </div>
                      {errors.doctor && <span style={styles.error}>{errors.doctor}</span>}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div style={styles.fadeAnim}>
                <h2 style={styles.stepTitle}>Pick Date & Time</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  
                  {/* 🚀 PREMIUM DATE PICKER INTEGRATION */}
                  <div>
                    <label style={styles.label}>Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          style={{
                            ...styles.input,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            borderColor: errors.date ? "#ef4444" : "#e2e8f0",
                            color: form.date ? "#1e293b" : "#94a3b8",
                            cursor: "pointer"
                          }}
                        >
                          <CalendarIcon style={{ marginRight: "8px", width: "18px", height: "18px", color: "#0F766E" }} />
                          {form.date ? format(form.date, "PPP") : <span>Pick a date</span>}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent style={{ padding: 0, borderRadius: "12px", border: "1px solid #e2e8f0", zIndex: 50 }} align="start">
                        <Calendar
                          mode="single"
                          selected={form.date}
                          onSelect={(d) => { update("date", d); document.dispatchEvent(new Event("mousedown")); }} // close popover hack
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} // Disable past dates
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.date && <span style={styles.error}>{errors.date}</span>}
                  </div>

                  <div>
                    <label style={styles.label}>Time Slot</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
                      {TIME_SLOTS.map(slot => (
                        <button
                          key={slot.id}
                          disabled={!slot.available}
                          onClick={() => update("timeSlot", slot)}
                          style={{
                            ...styles.timeSlot,
                            background: form.timeSlot?.id === slot.id ? "#0F766E" : slot.available ? "#fff" : "#f1f5f9",
                            color: form.timeSlot?.id === slot.id ? "#fff" : slot.available ? "#334155" : "#cbd5e1",
                            borderColor: form.timeSlot?.id === slot.id ? "#0F766E" : "#e2e8f0",
                            cursor: slot.available ? "pointer" : "not-allowed",
                            textDecoration: slot.available ? "none" : "line-through"
                          }}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                    {errors.timeSlot && <span style={styles.error}>{errors.timeSlot}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div style={styles.fadeAnim}>
                <h2 style={styles.stepTitle}>Review & Confirm</h2>
                <div style={{ background: "#FAFAFA", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px" }}>
                  
                  <div style={styles.reviewRow}>
                    <span style={styles.reviewLabel}>Patient</span>
                    <span style={styles.reviewValue}>{form.patientName} ({form.age} Yrs)</span>
                  </div>
                  <div style={styles.reviewRow}>
                    <span style={styles.reviewLabel}>Consultation</span>
                    <span style={styles.reviewValue}>{form.specialty?.label} with {form.doctor?.name}</span>
                  </div>
                  <div style={styles.reviewRow}>
                    <span style={styles.reviewLabel}>Schedule</span>
                    <span style={styles.reviewValue}>{form.date && format(form.date, "PPP")} at {form.timeSlot?.time}</span>
                  </div>
                  {form.symptoms && (
                    <div style={{...styles.reviewRow, borderBottom: "none", paddingBottom: 0}}>
                      <span style={styles.reviewLabel}>Symptoms</span>
                      <span style={styles.reviewValue}>{form.symptoms}</span>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div style={{ display: "flex", gap: "16px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #f1f5f9" }}>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} style={styles.secondaryBtn}>Back</button>
              )}
              {step < 3 ? (
                <button onClick={nextStep} style={{...styles.primaryBtn, flex: 1}}>Next Step</button>
              ) : (
                <button onClick={handleSubmit} disabled={loading} style={{...styles.primaryBtn, flex: 1, opacity: loading ? 0.7 : 1}}>
                  {loading ? "Processing..." : "Confirm Appointment"}
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        input:focus, textarea:focus { outline: none; border-color: #0F766E !important; }
      `}</style>
    </div>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    background: "#F4F7F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px 40px 20px",
  },
  container: {
    display: "flex",
    width: "100%",
    maxWidth: "1000px",
    background: "#fff",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(5,59,50,0.08)",
    overflow: "hidden",
    minHeight: "600px"
  },
  leftPanel: {
    width: "35%",
    background: "linear-gradient(160deg, #053b32 0%, #0F766E 100%)", // 🔥 Green is back!
    padding: "48px 40px",
    position: "relative",
    overflow: "hidden"
  },
  rightPanel: {
    width: "65%",
    padding: "48px 56px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  formContainer: {
    maxWidth: "480px",
    width: "100%"
  },
  stepTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "24px",
    color: "#053b32",
    marginBottom: "32px",
    fontWeight: 600
  },
  label: {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: "#334155",
    marginBottom: "8px"
  },
  input: {
    width: "100%",
    height: "52px",
    padding: "0 16px",
    borderRadius: "12px",
    border: "1.5px solid #e2e8f0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "15px",
    color: "#1e293b",
    background: "#fff",
    transition: "all 0.2s ease"
  },
  textarea: {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "1.5px solid #e2e8f0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "15px",
    color: "#1e293b",
    background: "#fff",
    resize: "none",
  },
  error: {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "13px",
    color: "#ef4444",
    marginTop: "6px"
  },
  chipButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 20px",
    borderRadius: "100px",
    border: "1.5px solid",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  doctorCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    borderRadius: "16px",
    border: "1.5px solid",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  timeSlot: {
    padding: "14px 0",
    borderRadius: "12px",
    border: "1.5px solid",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "center",
    transition: "all 0.2s ease"
  },
  reviewRow: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "16px",
    marginBottom: "16px",
    borderBottom: "1px dashed #cbd5e1"
  },
  reviewLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    color: "#64748b"
  },
  reviewValue: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "#053b32",
    textAlign: "right"
  },
  primaryBtn: {
    height: "56px",
    borderRadius: "12px",
    background: "#0F766E",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s ease"
  },
  secondaryBtn: {
    height: "56px",
    padding: "0 32px",
    borderRadius: "12px",
    background: "#fff",
    color: "#475569",
    fontFamily: "'Inter', sans-serif",
    fontSize: "15px",
    fontWeight: 600,
    border: "1.5px solid #cbd5e1",
    cursor: "pointer"
  },
  fadeAnim: {
    animation: "fadeIn 0.4s ease forwards"
  },
  card: {
    background: "#fff",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(5,59,50,0.08)",
  }
};