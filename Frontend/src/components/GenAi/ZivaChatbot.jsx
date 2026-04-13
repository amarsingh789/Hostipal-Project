import React, { useEffect, useRef, useState } from "react";

import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import axios from "axios";
import { AnimatePresence, motion } from "motion/react";
import { animate } from "motion";

const ZivaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState([
    {
      id: 1,
      text: "Hello! I am Ziva, your AI health companion. How can I assist you today?",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newUserMsg = { id: Date.now(), text: userText, sender: "user" };
    setMessage((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ai/ask",
        {
          message: userText,
        },
        { withCredentials: true },
      );

      setIsTyping(false);
      const aiReplyText = response.data.message;
      setMessage((prev) => [
        ...prev,
        { id: Date.now(), text: aiReplyText, sender: "ai" },
      ]);
    } catch (error) {
      (console.log("Chatbot API Error:", error), setIsTyping(false));
      setMessage((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Oops! Mere server mein thoda issue hai. Please thodi der mein try karein.",
          sender: "ai",
        },
      ]);
    }
  };
  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-gradient-to-tr from-[#053b32] to-[#0F766E] rounded-full shadow-[0_10px_40px_rgba(15,118,110,0.4)] flex items-center justify-center z-50 group border border-white/10"
          >
            <Sparkles className="absolute top-4 right-4 text-[#dfff4f] w-3 h-3 animate-ping" />
            <MessageSquare
              size={28}
              className="text-[#dfff4f] group-hover:scale-110 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-[calc(100vw-3rem)] md:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(2,24,20,0.15)] flex flex-col overflow-hidden z-50 border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#021814] px-6 py-5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-[-50%] left-[-20%] w-[150px] h-[150px] bg-[#0F766E] rounded-full blur-[50px] opacity-50 pointer-events-none"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Bot size={20} className="text-[#dfff4f]" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-poppins leading-tight flex items-center gap-2">
                    Ziva AI
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfff4f] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfff4f]"></span>
                    </span>
                  </h3>
                  <p className="text-[#a8cfc3] text-[10px] font-medium uppercase tracking-wider pt-1">
                    Health Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors relative z-10"
              >
                <X size={18} />
              </button>
            </div>
            {/* Chat message */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]">
              {message.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-[#053b32] shrink-0 flex items-center justify-center mb-1">
                      <Bot size={12} className="text-[#dfff4f]" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 max-w-[80%] text-sm shadow-sm ${msg.sender === "user" ? "bg-[#0F766E] text-white rounded-2xl rounded-br-sm" : "bg-white text-gray-800 rounded-2xl rounded-bl-sm border border-gray-100"}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-[#053b32] shrink-0 flex items-center justify-center mb-1">
                    <Bot size={12} className="text-[#dfff4f]" />
                  </div>
                  <div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.2,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.6,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messageEndRef} />
            </div>
            {/* Input form */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form
                onSubmit={handleSendMessage}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tell Ziva how you feel..."
                  className="w-full bg-gray-50 border border-gray-200 text-sm text-gray-800 rounded-full pl-4 pr-12 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className={`absolute right-1.5 w-10 h-10 rounded-full flex items-center justify-center transition-all ${inputValue.trim() && !isTyping ? "bg-[#dfff4f] text-[#021814] hover:scale-105 shadow-md" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                >
                  <Send
                    size={16}
                    className={inputValue.trim() ? "ml-0.5" : ""}
                  />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-1">
                  <Sparkles size={10} /> Powered by Ziva AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZivaChatbot;
