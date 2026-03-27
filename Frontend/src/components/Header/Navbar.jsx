import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ArrowRight, User, LogOut } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { openAuthModal } from '../../Redux/Features/ui/uiSlice';
import { logout } from '../../Redux/Features/authentication/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  const {isAuthenticated, user} = useSelector((state) => state.auth)

  const isHomePage = location.pathname === '/';

  const handleLogout = async() => {
    try {
      // 1. LocalStorage se token nikalo
      const token = localStorage.getItem("ziva_token");

      // 2. Backend API ko hit karo (Header mein token ke sath)
      await axios.get('http://localhost:5000/api/logout-all', {
        headers: {
          Authorization: `Bearer ${token}` // Backend ko token bhejna zaroori hai
        },
        withCredentials: true
      });

      // 🚀 3. SABSE ZAROORI STEP: Browser se token ko hamesha ke liye delete karo
      localStorage.removeItem("ziva_token");

      // 4. Redux aur UI Updates
      dispatch(logout());
      setIsMobileMenuOpen(false);
      toast.success("Logged out successfully!");
      navigate('/login');

    } catch (err) {
      console.error('Logout Error:', err);
      
      // Agar backend server down ho ya token expire ho gaya ho, tab bhi user ko frontend se forcefully nikal do
      localStorage.removeItem("ziva_token");
      dispatch(logout());
      navigate('/login');
    }
  }

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
        ${(!isHomePage || isScrolled) 
          ? 'bg-[#021814]/95 backdrop-blur-lg py-4 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* ============================== */}
        {/* 1. BRAND LOGO                  */}
        {/* ============================== */}
        <Link to='/' className="flex items-center gap-2 text-clinic-yellow hover:cursor-pointer hover:scale-105 transition-transform duration-300">
          <Activity size={32} strokeWidth={2} />
          <h1 className="font-black font-poppins text-2xl tracking-tight text-white">ZIVA.</h1>
        </Link>

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
          {/* <button className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow font-medium transition-colors duration-300">
            <User size={18} />
            Log In
          </button> */}

          {/* Sign Up / Register Button */}
          {/* <button className="flex items-center gap-2 bg-clinic-yellow text-[#021814] px-6 py-2.5 rounded-xl font-bold font-poppins hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,255,79,0.4)] active:scale-95 group">
            Sign Up 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button> */}

          {/* LOGIC: Agar user logged in hai toh uska Name dikhao, warna buttons dikhao */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white/10 pr-4 pl-1 py-1 rounded-full border border-white/10">
                {/* User ka first letter as Avatar */}
                <span className="w-8 h-8 rounded-full bg-clinic-yellow text-[#053b32] flex items-center justify-center font-bold font-poppins text-sm uppercase">
                  {user?.name?.charAt(0) || 'U'}
                </span>
                <span className="text-white font-medium text-sm">
                  Hi, {user?.name ? user.name.split(" ")[0] : 'User'}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-white/60 hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <>
              {/* Log In Link */}
              <Link to="/login" className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow font-medium transition-colors duration-300">
                <User size={18} />
                Log In
              </Link>
              <Link to="/signup" className="flex items-center gap-2 bg-clinic-yellow text-[#021814] px-6 py-2.5 rounded-xl font-bold font-poppins hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,255,79,0.4)] active:scale-95 group">
                Sign Up 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </>
          )}
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

          {/* <li>
            <button className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow text-lg transition-colors">
              <User size={20} /> Log In
            </button>
          </li>
          <li>
            <button className="bg-clinic-yellow text-[#021814] px-8 py-3 rounded-xl font-bold font-poppins hover:bg-white transition-colors w-full flex items-center justify-center gap-2">
              Create Account <ArrowRight size={18} />
            </button>
          </li> */}

          {isAuthenticated ? (
            <>
              <li className="flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-clinic-yellow text-[#053b32] flex items-center justify-center font-bold font-poppins text-sm uppercase">
                  {user?.name?.charAt(0) || 'U'}
                </span>
                <span className="text-clinic-yellow font-bold text-lg">
                  {user?.name || 'User'}
                </span>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <LogOut size={20} /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white/80 hover:text-clinic-yellow text-lg transition-colors">
                  <User size={20} /> Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="bg-clinic-yellow text-[#021814] px-8 py-3 rounded-xl font-bold font-poppins hover:bg-white transition-colors w-full flex items-center justify-center gap-2">
                  Create Account <ArrowRight size={18} />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;