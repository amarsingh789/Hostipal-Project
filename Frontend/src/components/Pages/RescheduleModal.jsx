import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const TIME_SLOTS = [
  { id: "t1", time: "09:00 AM", available: true },
  { id: "t2", time: "10:30 AM", available: true },
  { id: "t3", time: "12:00 PM", available: true },
  { id: "t4", time: "02:00 PM", available: true },
  { id: "t5", time: "04:30 PM", available: true },
  { id: "t6", time: "06:00 PM", available: true },
];

const RescheduleModal = ({ isOpen, onClose, appointment, onSuccess }) => {
  const [date, setDate] = useState(undefined);
  const [dateOpen, setDateOpen] = useState(false);
  const [timeSlot, setTimeSlot] = useState("");
  const [loading, setLoading] = useState(false);

  // Jab bhi modal open ho, current appointment ki details pre-fill kar do
  useEffect(() => {
    if (appointment && isOpen) {
      setDate(new Date(appointment.appointmentDate));
      setTimeSlot(appointment.timeSlot);
      setDateOpen(false); // Reset popover state
    }
  }, [appointment, isOpen]);

  const handleReschedule = async () => {
    if (!date || !timeSlot) {
      return toast.error("Please select both a new date and time.");
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("ziva_token");
      await axios.put(
        `http://localhost:5000/zivacare/reschedule/${appointment._id}`,
        {
          newDate: date,
          newTimeSlot: timeSlot,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Appointment rescheduled successfully! 🎉");
      onSuccess(); // Dashboard refresh karne ke liye
      onClose(); // Modal band karne ke liye
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reschedule.");
    } finally {
      setLoading(false);
    }
  };

  if (!appointment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-[2rem] p-8 border-none shadow-2xl">
        
        {/* Custom CSS specifically for DayPicker inside this modal to match Ziva Theme */}
        <style>{`
          .rm-popover { z-index: 9999 !important; width: auto !important; max-width: none !important; padding: 14px !important; border-radius: 20px !important; border: 1.5px solid #e2e8f0 !important; box-shadow: 0 10px 40px rgba(0,0,0,0.1) !important; background: white !important;}
          .rdp { --rdp-accent-color: #0F766E; --rdp-background-color: #E6F4F1; margin: 0 !important; font-family: 'Inter', sans-serif !important; }
          .rdp-months { justify-content: center; }
          .rdp-month { width: 100% !important; }
          .rdp-table { width: 100% !important; max-width: 100% !important; }
          .rdp-head_cell { font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.1em !important; text-transform: uppercase !important; color: #94a3b8 !important; padding-bottom: 8px !important;}
          .rdp-day { border-radius: 10px !important; font-size: 14px !important; color: #1e293b !important; height: 36px !important; width: 36px !important; transition: all 0.2s ease !important; margin: 1px !important;}
          .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected) { background: #f1f5f9 !important; }
          .rdp-day_selected, .rdp-day_selected:hover { background: #0F766E !important; color: #ffffff !important; font-weight: 700 !important; }
          .rdp-day_today:not(.rdp-day_selected) { border: 1.5px solid #0F766E !important; color: #0F766E !important; font-weight: 700 !important; }
          .rdp-nav_button { border-radius: 8px !important; color: #0F766E !important; }
          .rdp-nav_button:hover { background: #f1f5f9 !important; }
          .rdp-caption_label { font-family: 'Poppins', sans-serif !important; font-size: 16px !important; font-weight: 700 !important; color: #021814 !important; }
        `}</style>

        <DialogHeader className="mb-6">
          <DialogTitle className="font-poppins text-2xl text-[#021814]">
            Reschedule Appointment
          </DialogTitle>
          <DialogDescription className="text-gray-500 font-inter mt-2">
            Choose a new date and time for your consultation with <strong className="text-[#0F766E]">{appointment.doctorName}</strong>.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 font-inter">
          {/* DATE PICKER */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">New Date</label>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`w-full h-12 px-4 rounded-xl border flex items-center gap-3 transition-colors ${
                    date ? "border-[#0F766E] text-[#021814]" : "border-gray-200 text-gray-400"
                  }`}
                >
                  <CalendarIcon size={18} className="text-[#0F766E]" />
                  {date ? format(date, "PPP") : <span>Select a date</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="rm-popover" align="center" sideOffset={8}>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setDateOpen(false); // Close popover automatically after selection
                  }}
                  disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }} // Disable past dates properly
                  showOutsideDays
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* TIME SLOTS */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">New Time Slot</label>
            <div className="grid grid-cols-3 gap-3">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setTimeSlot(slot.time)}
                  className={`py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                    timeSlot === slot.time
                      ? "bg-[#0F766E] text-white border-[#0F766E] shadow-md"
                      : "bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 py-3.5 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleReschedule}
              disabled={loading}
              className="flex-1 py-3.5 rounded-xl font-bold text-[#dfff4f] bg-[#053b32] hover:bg-[#0F766E] transition-all flex items-center justify-center shadow-lg"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : "Confirm Change"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleModal;