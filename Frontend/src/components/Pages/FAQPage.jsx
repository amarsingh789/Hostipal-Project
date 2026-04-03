// import React from 'react'
// import {ChevronUp} from 'lucide-react'

// const FAQPage = () => {
//   return (
//     <div className='relative  flex items-center justify-between py-24 px-8 w-full overflow-hidden font-inter'>
//       <div>
//         {/* Header */}
//         <h1>Frequently Ask Questions</h1>
//         <p>Find Answers to Common Questions About Our Services.</p>
//       </div>
//       <div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <p>How do I create an account on Ziva</p>
//                 <ChevronUp />
//             </div>
//             <div className='hidden '>
//                 <p>Add any additional information like your medical history or preferences for a personallized healthcare experience.</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FAQPage


// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FAQPage = () => {
//   // 1. Data Store: Saare FAQs yahan hain
//   const faqs = [
//     {
//       question: "How do I create an account on Ziva?",
//       answer: "Add any additional information like your medical history or preferences for a personalized healthcare experience."
//     },
//     {
//       question: "What types of health services are available?",
//       answer: "We offer a wide range of services including general checkups, specialized consultations, diagnostic imaging, and 24/7 emergency trauma care."
//     },
//     {
//       question: "Can I book appointments online?",
//       answer: "Yes! You can book, reschedule, or cancel your appointments directly through our patient portal or mobile application."
//     },
//     {
//       question: "Do you accept international insurance?",
//       answer: "We accept most major international insurance providers. Please contact our billing desk with your policy details for verification."
//     },
//     {
//       question: "How do I access my lab reports?",
//       answer: "Once ready, your lab reports will be automatically uploaded to your secure Ziva patient dashboard. You will also receive an SMS notification."
//     }
//   ];

//   // 2. React State: Kaunsa FAQ abhi open hai? (Initially 'null' yani sab band)
//   const [openIndex, setOpenIndex] = useState(null);

//   // 3. Toggle Function
//   const handleToggle = (index) => {
//     // Agar wahi clicked hai jo already open hai, toh band kardo (null). Warna naya index set karo.
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     // Main Container: Soft grey background
//     <div className='relative w-full py-32 px-6 lg:px-12 bg-[#f8fafc] font-inter overflow-hidden'>
      
//       {/* 2-Column Layout for Desktop, Stacked for Mobile */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
//         {/* ============================== */}
//         {/* LEFT COLUMN: Header & Text     */}
//         {/* ============================== */}
//         <div className="lg:w-1/3 flex flex-col pt-4">
//           <h1 className="text-5xl md:text-6xl font-black font-poppins text-gray-900 mb-6 leading-[1.1] tracking-tighter">
//             Frequently <br/>
//             <span className="text-clinic-green">Asked Questions</span>
//           </h1>
//           <p className="text-gray-500 text-lg">
//             Find Answers to Common Questions About Our Services. Need more help? Contact our support team.
//           </p>
//         </div>

//         {/* ============================== */}
//         {/* RIGHT COLUMN: The Accordion    */}
//         {/* ============================== */}
//         <div className="lg:w-2/3 flex flex-col gap-4">
          
//           {faqs.map((faq, index) => {
//             // Check if THIS specific FAQ is currently open
//             const isActive = openIndex === index;

//             return (
//               <div 
//                 key={index} 
//                 // Container styles: Border radius and smooth background transition
//                 className={`w-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 ease-in-out border border-transparent
//                   ${isActive 
//                     ? 'bg-clinic-green text-white shadow-xl' // Active Style (Dark Green)
//                     : 'bg-white/60 hover:bg-white text-gray-900 shadow-sm border-gray-200' // Inactive Style (Light Grey)
//                   }
//                 `}
//               >
                
//                 {/* The Clickable Header Area */}
//                 <button 
//                   onClick={() => handleToggle(index)}
//                   className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
//                 >
//                   <p className="font-bold font-poppins text-lg md:text-xl pr-8">
//                     {faq.question}
//                   </p>
                  
//                   {/* The Icon: Rotates based on isActive state */}
//                   <div className={`shrink-0 transition-transform duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
//                     <ChevronDown size={24} className={isActive ? 'text-clinic-yellow' : 'text-gray-400'} />
//                   </div>
//                 </button>

//                 {/* The Answer Area (Smooth Expansion Hack) */}
//                 <div 
//                   className={`grid transition-all duration-500 ease-in-out
//                     ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
//                   `}
//                 >
//                   {/* Overflow hidden zaroori hai grid-rows hack ke liye */}
//                   <div className="overflow-hidden">
//                     <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
//                       <p className={`text-base leading-relaxed ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;


import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I create an account on Ziva?",
      answer: "Add any additional information like your medical history or preferences for a personalized healthcare experience."
    },
    {
      question: "What types of health services are available?",
      answer: "We offer a wide range of services including general checkups, specialized consultations, diagnostic imaging, and 24/7 emergency trauma care."
    },
    {
      question: "Can I book appointments online?",
      answer: "Yes! You can book, reschedule, or cancel your appointments directly through our patient portal or mobile application."
    },
    {
      question: "Do you accept international insurance?",
      answer: "We accept most major international insurance providers. Please contact our billing desk with your policy details for verification."
    },
    {
      question: "Can I book same-day appointments",
      answer: "Yes! Our instant video consultation connects you with a certified doctor within 60 seconds, 24/7."
    },
    {
      question: "How do I access my lab reports?",
      answer: "Once ready, your lab reports will be automatically uploaded to your secure Ziva patient dashboard. You will also receive an SMS notification."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='relative w-full py-32 px-6 lg:px-12 bg-[#f8fafc] font-inter overflow-hidden' id='faq'>
      
      {/* 2-Column Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* ============================== */}
        {/* LEFT COLUMN: Header & Support Card */}
        {/* ============================== */}
        <div className="lg:w-1/3 flex flex-col pt-4">
          
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinic-green/5 border border-clinic-green/10 mb-6 w-fit">
            <span className="text-xs font-bold text-clinic-green uppercase tracking-widest">Support & FAQs</span>
          </div>

          {/* Fixed Typography (Color Contrast) */}
          <h1 className="text-5xl md:text-6xl font-black font-poppins text-gray-900 mb-6 leading-[1.1] tracking-tighter">
            Got Questions? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-green to-[#03231e]">
              We've Got Answers
            </span>
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            Find everything you need to know about our medical services, billing, and patient portals.
          </p>

          {/* =========================================
              THE FIX: "Still have questions?" Card
              Ye us khali space ko beautifully bhar dega!
              ========================================= */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group">
            {/* Soft decorative glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex -space-x-4 mb-6 relative z-10">
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Support" />
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Support" />
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Support" />
            </div>
            
            <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 relative z-10">Still have questions?</h3>
            <p className="text-gray-500 text-sm mb-8 relative z-10">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            
            <button className="w-full py-4 rounded-2xl bg-clinic-green text-white font-bold hover:bg-clinic-yellow hover:text-clinic-green transition-all duration-300 flex items-center justify-center gap-2 relative z-10 shadow-lg shadow-clinic-green/20">
              <MessageCircle size={20} /> Get in touch
            </button>
          </div>

        </div>

        {/* ============================== */}
        {/* RIGHT COLUMN: The Accordion    */}
        {/* ============================== */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;

            return (
              <div 
                key={index} 
                className={`w-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 ease-in-out border border-transparent
                  ${isActive 
                    ? 'bg-clinic-green text-white shadow-xl scale-[1.02]' // Active par thoda sa pop hoga (scale)
                    : 'bg-white/60 hover:bg-white text-gray-900 shadow-sm border-gray-200 hover:shadow-md'
                  }
                `}
              >
                
                <button 
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <p className="font-bold font-poppins text-lg md:text-xl pr-8">
                    {faq.question}
                  </p>
                  
                  <div className={`shrink-0 transition-transform duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={24} className={isActive ? 'text-clinic-yellow' : 'text-gray-400'} />
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-500 ease-in-out
                    ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <p className={`text-base leading-relaxed ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default FAQPage;