import React from 'react'
import {Building2} from 'lucide-react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between px-6 py-4 bg-[#1a3d2f] text-white">
        <div className="logo flex items-center gap-3 hover:cursor-pointer">
            <Building2 size={32} strokeWidth={1.5} />
            <h1 className='font-bold text-xl'>Ziva</h1>
        </div>
        <div className="container-box flex items-center justify-center">
          <ul className="flex gap-8 text-lg font-medium">
            <li className='hover:scale-105'><a href="#home">About</a></li>
            <li className='hover:scale-105'><a href="#about">Our Services</a></li>
            <li className='hover:scale-105'><a href="#services">Doctor</a></li>
            <li className='hover:scale-105'><a  href="#contact">FAQ</a></li>
          </ul>
        </div>
        <div className="btn-box">
            {/* <button className='bg-white text-[#1c5951] px-4 py-2 rounded-xl font-medium hover:cursor-pointer active:scale-95'>Contact Us</button> */}
            <button className="bg-clinic-yellow hover:bg-white text-clinic-green font-poppins font-bold px-4 py-2 rounded-xl transition-all duration-300 shadow-lg active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
