// import React from 'react'
// import {Building2} from 'lucide-react'

// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar flex items-center justify-between px-6 py-4 bg-[#1a3d2f] text-white">
//         <div className="logo flex items-center gap-3 hover:cursor-pointer">
//             <Building2 size={32} strokeWidth={1.5} />
//             <h1 className='font-bold text-xl'>Ziva</h1>
//         </div>
//         <div className="container-box flex items-center justify-center">
//           <ul className="flex gap-8 text-lg font-medium">
//             <li className='hover:scale-105'><a href="#home">About</a></li>
//             <li className='hover:scale-105'><a href="#about">Our Services</a></li>
//             <li className='hover:scale-105'><a href="#services">Doctor</a></li>
//             <li className='hover:scale-105'><a  href="#contact">FAQ</a></li>
//           </ul>
//         </div>
//         <div className="btn-box">
//             {/* <button className='bg-white text-[#1c5951] px-4 py-2 rounded-xl font-medium hover:cursor-pointer active:scale-95'>Contact Us</button> */}
//             <button className="bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-4 py-2 rounded-xl transition-all duration-300 shadow-lg active:scale-95">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// import React, { useState, useEffect } from 'react';
// import { Activity, Menu, X, ArrowRight } from 'lucide-react';

// const Navbar = () => {
//   // State for Scroll Effect & Mobile Menu
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Scroll Event Listener
//   useEffect(() => {
//     const handleScroll = () => {
//       // Agar 20px se zyada scroll hua, toh state true kar do
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Our Services', href: '#services' },
//     { name: 'Doctors', href: '#doctors' },
//     { name: 'FAQ', href: '#faq' },
//   ];

//   return (
//     // Navbar Wrapper - Fixed at top, z-index 50 so it stays above everything
//     <nav 
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-inter
//         ${isScrolled 
//           ? 'bg-[#021814]/80 backdrop-blur-lg py-4 shadow-lg border-b border-white/10' 
//           : 'bg-transparent py-6'
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
//         {/* ============================== */}
//         {/* 1. BRAND LOGO                  */}
//         {/* ============================== */}
//         <div className="flex items-center gap-2 text-clinic-yellow hover:cursor-pointer hover:scale-105 transition-transform duration-300">
//           <Activity size={32} strokeWidth={2} />
//           <h1 className="font-black font-poppins text-2xl tracking-tight text-white">ZIVA.</h1>
//         </div>

//         {/* ============================== */}
//         {/* 2. DESKTOP NAV LINKS           */}
//         {/* ============================== */}
//         <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">
//           {navLinks.map((link, index) => (
//             <li key={index} className="group relative">
//               <a href={link.href} className="hover:text-white transition-colors duration-300">
//                 {link.name}
//               </a>
//               {/* The Magic Hover Underline */}
//               <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-clinic-yellow transition-all duration-300 group-hover:w-full rounded-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* ============================== */}
//         {/* 3. CTA BUTTON & MOBILE TOGGLE  */}
//         {/* ============================== */}
//         <div className="flex items-center gap-4">
          
//           {/* Desktop Button */}
//           <button className="hidden md:flex items-center gap-2 bg-clinic-yellow text-[#021814] px-6 py-2.5 rounded-xl font-bold font-poppins hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,255,79,0.4)] active:scale-95 group">
//             Contact Us 
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </button>

//           {/* Mobile Menu Toggle Button */}
//           <button 
//             className="md:hidden text-white hover:text-clinic-yellow transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>
//       </div>

//       {/* ============================== */}
//       {/* 4. MOBILE MENU DROPDOWN        */}
//       {/* ============================== */}
//       <div 
//         className={`md:hidden absolute top-full left-0 w-full bg-[#021814]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden
//           ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}
//         `}
//       >
//         <ul className="flex flex-col items-center gap-6 text-white font-medium">
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <a 
//                 href={link.href} 
//                 onClick={() => setIsMobileMenuOpen(false)} // Click karne par menu band ho jaye
//                 className="hover:text-clinic-yellow text-lg transition-colors"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <li>
//             <button className="mt-2 bg-clinic-yellow text-[#021814] px-8 py-3 rounded-xl font-bold font-poppins hover:bg-white transition-colors">
//               Contact Us
//             </button>
//           </li>
//         </ul>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ArrowRight, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-inter
        ${isScrolled 
          ? 'bg-[#021814]/80 backdrop-blur-lg py-4 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* ============================== */}
        {/* 1. BRAND LOGO                  */}
        {/* ============================== */}
        <div className="flex items-center gap-2 text-clinic-yellow hover:cursor-pointer hover:scale-105 transition-transform duration-300">
          <Activity size={32} strokeWidth={2} />
          <h1 className="font-black font-poppins text-2xl tracking-tight text-white">ZIVA.</h1>
        </div>

        {/* ============================== */}
        {/* 2. DESKTOP NAV LINKS           */}
        {/* ============================== */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/80">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative">
              <a href={link.href} className="hover:text-white transition-colors duration-300">
                {link.name}
              </a>
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-clinic-yellow transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* ============================== */}
        {/* 3. AUTH BUTTONS (Desktop)      */}
        {/* ============================== */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Log In Link */}
          <button className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow font-medium transition-colors duration-300">
            <User size={18} />
            Log In
          </button>

          {/* Sign Up / Register Button */}
          <button className="flex items-center gap-2 bg-clinic-yellow text-[#021814] px-6 py-2.5 rounded-xl font-bold font-poppins hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,255,79,0.4)] active:scale-95 group">
            Sign Up 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ============================== */}
        {/* 4. MOBILE TOGGLE BUTTON        */}
        {/* ============================== */}
        <button 
          className="lg:hidden text-white hover:text-clinic-yellow transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ============================== */}
      {/* 5. MOBILE MENU DROPDOWN        */}
      {/* ============================== */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#021814]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-clinic-yellow text-lg transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Mobile Auth Buttons Divider */}
          <div className="w-16 h-[1px] bg-white/20 my-2"></div>

          <li>
            <button className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow text-lg transition-colors">
              <User size={20} /> Log In
            </button>
          </li>
          <li>
            <button className="bg-clinic-yellow text-[#021814] px-8 py-3 rounded-xl font-bold font-poppins hover:bg-white transition-colors w-full flex items-center justify-center gap-2">
              Create Account <ArrowRight size={18} />
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;