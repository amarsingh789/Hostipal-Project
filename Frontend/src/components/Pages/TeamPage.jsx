import React from "react";
import { Award, Star, ArrowUpRight, Calendar } from "lucide-react";
import doctorImg from '../../assets/project.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination} from "swiper/modules"

// swiper css
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination'
import { Link } from "react-router-dom";

const TeamPage = () => {
  const doctors = [
    {
      name: "Dr. Ananya Singh",
      role: "Chief Cardiologist",
      exp: "12+ Years",
      rating: "4.9",
      image: doctorImg
    },
    {
      name: "Dr. Rahul Verma",
      role: "Orthopedic Surgeon",
      exp: "10+ Years",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Dermatologist",
      exp: "8+ Years",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Dr. Arjun Mehta",
      role: "Neurologist",
      exp: "15+ Years",
      rating: "4.9",
      image:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Neha Kapoor",
      role: "Pediatrician",
      exp: "9+ Years",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Dr. Vikram Joshi",
      role: "General Physician",
      exp: "11+ Years",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Akash Kumar",
      role: "Gastroenterology",
      exp: "8+ Years",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1645066928295-2506defde470?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  return (
    <div className="w-full py-28 bg-white overflow-hidden">
      {/* header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinic-green/5 border border-clinic-green/10 mb-6">
            <Award size={18} className="text-clinic-green" />
            <span className="text-xs font-bold text-clinic-green uppercase tracking-widest">
              Medical Experts
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-poppins text-gray-900 leading-tight">
            Meet our <br />
            <span className="text-clinic-green">Specialists</span>
          </h2>
        </div>
        <p className="text-gray-500 text-lg font-inter max-w-md md:text-right">
          Our team of globally recognized doctors is dedicated to providing you
          with the highest standard of personalized care.
        </p>
      </div>
      {/* slider section */}
      <div className="w-full pl-6 md:pl-10 lg:pl-[calc((100vw-1280px)/2+24px)]">
        <Swiper 
          slidesPerView={1.2}
          spaceBetween={24}
          freeMode= {true}
          modules={[FreeMode, Autoplay]}
          grabCursor={true}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          breakpoints={{
            640: {slidesPerView: 2.2},
            1024: {slidesPerView: 3.5},
            1280: {slidesPerView: 4.2}
          }}
          className="pb-12 pr-6"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[480px] w-full rounded-[2.5rem] overflow-hidden group">
                <img src={doctor.image} alt={doctor.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03231e] via-[#03231e]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Calendar size={14} className="text-clinic-yellow"/>
                  {doctor.exp}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transition-transform duration-500 translate-y-16 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 mb-3 opacity-100 transition-all duration-500">
                    <span className="bg-clinic-yellow text-clinic-green text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">{doctor.role}</span>
                    <div className="flex items-center gap-1 text-white text-sm font-medium">
                      <Star size={14} className="fill-clinic-yellow text-clinic-yellow"/>
                      {doctor.rating}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 font-poppins">{doctor.name}</h3>

                  <Link to='appointment' className="flex items-center justify-between w-full bg-clinic-green text-white border border-white/20 px-6 py-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-clinic-yellow hover:text-clinic-green font-bold">
                    <span>Book Session</span>
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamPage;
