import React, { useState, useEffect } from "react";
import { Activity, Menu, X, ArrowRight, User, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../Redux/Features/authentication/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("ziva_token");
      await axios.get("http://localhost:5000/api/logout-all", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      localStorage.removeItem("ziva_token");
      dispatch(logout());
      setIsMobileMenuOpen(false);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Logout Error:", err);
      localStorage.removeItem("ziva_token");
      dispatch(logout());
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Doctors", href: "/doctor" },
    { name: "FAQ", href: "/#faq" },
  ];
  const authLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Doctors", href: "/doctor" },
  ];

  const navContainerVarients = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      variants={navContainerVarients}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 font-inter
        ${
          !isHomePage || isScrolled
            ? "bg-[#021814]/95 backdrop-blur-lg py-4 shadow-md" // 🚀 REMOVED: border-b border-white/10
            : "bg-transparent py-6"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* BRAND LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[#dfff4f] hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Activity
              size={32}
              strokeWidth={2}
              className="group-hover:drop-shadow-[0_0_10px_rgba(223,255,79,0.8)]"
            />
          </motion.div>
          <h1 className="font-black font-poppins text-2xl tracking-tight text-white group-hover:text-[#dfff4f] transition-colors duration-300">
            ZIVA.
          </h1>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/80">
          {isAuthenticated ? (
            <div className="flex items-center gap-8">
              {authLinks.map((link, index) => (
                <motion.li
                  variants={navItemVariants}
                  key={index}
                  className="group relative"
                >
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                  {/* <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#dfff4f] transition-all duration-300 group-hover:w-full rounded-full"></span> */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#dfff4f] to-transparent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </motion.li>
              ))}
            </div>
          ) : (
            <>
              {navLinks.map((link, index) => (
                <motion.li
                  variants={navItemVariants}
                  key={index}
                  className="group relative"
                >
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                  {/* <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#dfff4f] transition-all duration-300 group-hover:w-full rounded-full"></span> */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#dfff4f] to-transparent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </motion.li>
              ))}
            </>
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          {isAuthenticated ? (
            <motion.div
              variants={navItemVariants}
              className="flex items-center gap-4"
            >
              <Link
                to="/profile"
                className="block transition-transform hover:scale-105"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white/10 pr-4 pl-1 py-1 rounded-full border border-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-[#dfff4f] text-[#053b32] flex items-center justify-center font-bold font-poppins text-sm uppercase">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                  <span className="text-white font-medium text-sm">
                    Hi, {user?.name ? user.name.split(" ")[0] : "User"}
                  </span>
                </motion.div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
                className="text-white/60 hover:text-red-400 transition-colors bg-white/5 p-2 rounded-full hover:bg-red-400/10"
                title="Logout"
              >
                <LogOut size={20} />
              </motion.button>
            </motion.div>
          ) : (
            <>
              <motion.div variants={navItemVariants}>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-white/80 hover:text-[#dfff4f] font-medium transition-colors duration-300"
                >
                  <User size={18} /> Log In
                </Link>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 bg-[#dfff4f] text-[#021814] px-6 py-2.5 rounded-xl font-bold font-poppins hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,255,79,0.4)] active:scale-95 group"
                >
                  Sign Up
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </>
          )}
        </div>

        
        {/* MOBILE TOGGLE BUTTON */}
        <motion.button
          variants={navItemVariants}
          whileTap={{ scale: 0.8 }}
          className="lg:hidden text-white hover:text-[#dfff4f] transition-colors relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Animated Hamburger Icon */}
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      
      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-full left-0 w-full bg-[#021814]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden origin-top"
          >
            <div className="flex flex-col items-center gap-6 text-white font-medium px-6 py-8">
              
              {/* Links */}
              {(isAuthenticated ? authLinks : navLinks).map((link, index) => (
                <motion.div variants={mobileItemVariants} key={index} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-poppins font-bold text-white/80 hover:text-[#dfff4f] transition-colors w-full py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div variants={mobileItemVariants} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"></motion.div>

              {/* Auth Sections */}
              {isAuthenticated ? (
                <>
                  <motion.div variants={mobileItemVariants} className="w-full">
                    <Link 
                      to="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-3 w-full bg-white/5 py-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
                    >
                      <span className="w-10 h-10 rounded-full bg-[#dfff4f] text-[#053b32] flex items-center justify-center font-bold font-poppins text-lg uppercase shadow-inner">
                        {user?.name?.charAt(0) || "U"}
                      </span>
                      <span className="text-white font-bold text-xl">
                        {user?.name || "User"}
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div variants={mobileItemVariants} className="w-full">
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 text-red-400 bg-red-400/10 hover:bg-red-400/20 py-4 w-full rounded-2xl transition-colors font-bold text-lg"
                    >
                      <LogOut size={22} /> Logout
                    </button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div variants={mobileItemVariants} className="w-full">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 text-white/80 hover:text-[#dfff4f] text-xl font-bold transition-colors py-3"
                    >
                      <User size={24} /> Log In
                    </Link>
                  </motion.div>
                  <motion.div variants={mobileItemVariants} className="w-full">
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-[#dfff4f] text-[#021814] px-8 py-4 rounded-2xl font-bold font-poppins hover:bg-white transition-all duration-300 w-full flex items-center justify-center gap-2 text-lg shadow-[0_10px_20px_rgba(223,255,79,0.2)]"
                    >
                      Create Account <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
