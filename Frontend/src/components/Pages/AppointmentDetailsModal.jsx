import React from "react";
import { format } from "date-fns";
import { User, Calendar as CalendarIcon, Clock, FileText, Stethoscope, Activity, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const AppointmentDetailsModal = ({ isOpen, onClose, appointment }) => {
  if (!appointment) return null;

  const isCancelled = appointment.status === "Cancelled";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-[2rem] p-0 overflow-hidden bg-white border-none shadow-2xl">
        
        {/* HEADER SECTION (Gradient) */}
        <div className={`p-8 pb-10 ${isCancelled ? 'bg-red-50' : 'bg-gradient-to-br from-[#053b32] to-[#0F766E]'}`}>
          <DialogHeader>
            <DialogTitle className={`font-poppins text-2xl mb-2 ${isCancelled ? 'text-red-900' : 'text-white'}`}>
              Appointment Details
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-3 mt-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-inner ${isCancelled ? 'bg-red-100 grayscale' : 'bg-white/10'}`}>
              👩‍⚕️
            </div>
            <div>
              <h3 className={`text-xl font-bold font-poppins ${isCancelled ? 'text-red-900' : 'text-white'}`}>
                {appointment.doctorName}
              </h3>
              <p className={`text-sm font-medium capitalize ${isCancelled ? 'text-red-700' : 'text-[#a8cfc3]'}`}>
                {appointment.department} Specialist
              </p>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="p-8 -mt-6 bg-white rounded-t-[2rem] relative z-10 flex flex-col gap-6 font-inter">
          
          {/* Status & ID Row */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              ID: #{appointment._id.slice(-6).toUpperCase()}
            </span>
            <Badge className={`${
              isCancelled ? 'bg-red-100 text-red-600' : 
              appointment.status === 'Confirmed' ? 'bg-[#E6F4F1] text-[#0F766E]' : 
              'bg-yellow-100 text-yellow-700'
            } border-none font-bold px-3 py-1 shadow-none`}>
              {appointment.status}
            </Badge>
          </div>

          {/* Time & Location */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 text-[#0F766E] mb-2">
                <CalendarIcon size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Date & Time</span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">{format(new Date(appointment.appointmentDate), "PPP")}</p>
              <p className="text-gray-500 text-sm mt-1">{appointment.timeSlot}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 text-[#0F766E] mb-2">
                <MapPin size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Location</span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">Ziva Main Clinic</p>
              <p className="text-gray-500 text-sm mt-1">Room 402, 4th Floor</p>
            </div>
          </div>

          {/* Patient Info */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <User size={14}/> Patient Information
            </h4>
            <div className="bg-white border border-gray-200 p-4 rounded-2xl flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Name</span>
                <span className="font-semibold text-gray-800 text-sm">{appointment.patient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Age</span>
                <span className="font-semibold text-gray-800 text-sm">{appointment.age} Years</span>
              </div>
              {appointment.symptoms && (
                <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-sm flex items-center gap-1"><Activity size={14}/> Symptoms</span>
                  <span className="font-medium text-gray-800 text-sm bg-gray-50 p-3 rounded-xl mt-1 border border-gray-100">
                    {appointment.symptoms}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-full mt-2 py-3.5 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDetailsModal;