import React from 'react'
import { Phone, Mail, MapPin, ArrowRight, Instagram, Twitter, Linkedin, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-[#021814] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#032b24] to-[#021814] text-white pt-24 pb-8 px-6 lg:px-12 font-inter border-t border-white/5 overflow-hidden'>
        <div className='max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10'>
            {/* top section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-24'>
                {/* col-01 */}
                <div className='lg:col-span-3 flex flex-col gap-6'>
                    <div className='flex items-center gap-2 text-clinic-yellow mb-2'>
                        <Activity size={24}/>
                        <span className="text-xl font-black font-poppins tracking-tight text-white">ZIVA.</span>
                    </div>
                    <h4 className='text-sm font-bold font-poppins text-white/40 uppercase tracking-[0.2em]'>Explore</h4>
                    <div className='flex flex-col gap-3'>
                        {['Find a Doctor', 'Book Appointment', 'Our Services', 'Patient Portal', 'Ziva Blog'].map((link) => (
                            <a href="" key={link} className='text-white/70 hover:text-clinic-yellow hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group'>
                                <span className='w-0 h-[1px] bg-clinic-yellow transition-all duration-300 group-hover:w-3'></span>
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
                {/* col-02 */}
                <div className='lg:col-span-3 flex flex-col gap-6'>
                    <h4 className='text-sm font-bold font-poppins text-white/40 uppercase tracking-[0.2em] mt-10 md:mt-0'>Departments</h4>
                    <div className='flex flex-col gap-3'>
                        {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Emergency Care'].map((dept) => (
                            <a href="#" key={dept} className='text-white/70 hover:text-clinic-yellow hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group'>
                                <span className='w-0 h-[1px] bg-clinic-yellow transition-all duration-300 group-hover:w-3'></span>
                                {dept}
                            </a>
                        ))}
                    </div>
                </div>
                {/* col-03 */}
                <div className='lg:col-span-3 flex flex-col gap-6'>
                    <h4 className='text-sm font-bold font-poppins text-white/40 uppercase tracking-[0.2em]'>Connect</h4>
                    <div className='flex flex-col gap-5 mt-2'>
                        <a href="#" className='flex items-start gap-4 text-white/70 hover: text-white transition-colors group'>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-clinic-yellow group-hover:text-[#021814] transition-all duration-300">
                                <MapPin size={18}/>
                            </div>
                            <p className='text-sm leading-relaxed pt-1'>123 Healing Boulevard, <br/> Medical District, City 40001</p>
                        </a>
                        <a href="tel:+918009482223" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-clinic-yellow group-hover:text-[#021814] transition-all duration-300">
                                <Phone size={18}/>
                            </div>
                            <p className="text-sm font-medium">+91 800-ZIVA-CARE</p>
                        </a>
                        <a href="mailto:support@zivahealth.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-clinic-yellow group-hover:text-[#021814] transition-all duration-300">
                                <Mail size={18}/>
                            </div>
                            <p className="text-sm font-medium">support@ziva.com</p>
                        </a>
                        
                    </div>
                </div>
                {/* col-04 */}
                <div className='lg:col-span-3 flex flex-col gap-6'>
                    <h4 className='text-sm font-bold font-poppins text-white/40 uppercase tracking-[0.2em]'>Newsletter</h4>
                    <p className='text-white/60 text-sm leading-relaxed'>Subscribe for the latest health tips and exclusive wellness offers.
            </p>
            <form className='flex flex-col gap-3 mt-2' onSubmit={(e) => e.preventDefault()}>
                <div className='relative'>
                    <input type="email" placeholder="Email address" className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-clinic-yellow transition-colors w-full peer'/>
                    <button type='sumbit' className='absolute right-2 top-2 bottom-2 bg-clinic-yellow text-[#021814] px-4 rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center'><ArrowRight size={18}/></button>
                </div>
            </form>
            {/* social media */}
            <div className='flex items-center gap-3 mt-4'>
                {[Instagram, Twitter, Linkedin].map((Icon, idx)=> (
                    <a href="#" key={idx} className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-clinic-yellow hover:text-[#021814] hover:border-clinic-yellow hover:-translate-y-1 transition-all duration-300'>
                        <Icon/>
                    </a>
                ))}
            </div>
                </div>
            </div>
            {/* Bottom section */}
            <div className='w-full flex flex-col items-center justify-center border-t border-white/10 pt-16 relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-clinic-yellow/5 blur-[100px]  rounded-full pointer-events-none'></div>
                {/* <h1 className='text-[28vw] md:text-[22vw] lg:text-[20vw] leading-none font-black font-poppins uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/5 select-none hover:from-white transition-all duration-700'>
                    ZIVA CARE
                </h1> */}
                <h1 className='text-[18vw] md:text-[14vw] lg:text-[11vw] leading-none font-black font-poppins uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/5 select-none hover:from-white transition-all duration-700 whitespace-nowrap'>
                    ZIVA CARE
                </h1>
            </div>
            {/* copyright col */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-white/10 text-white/40 text-xs w-full">
          <p>© {new Date().getFullYear()} Ziva Healthcare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="#" className="hover:text-clinic-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clinic-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
