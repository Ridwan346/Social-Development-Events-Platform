import React from 'react';
import { ReactTyped } from 'react-typed';
import leaf1 from '../assets/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg'

const Home = () => {
    return (
        <div className="relative h-screen w-full">
      {/* ব্যাকগ্রাউন্ড ইমেজ */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${leaf1})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* লেখা */}
      <div className="relative z-10 flex items-center justify-end mr-5 h-full">
        <h1 className="text-green-800 text-4xl font-bold text- drop-shadow-lg">
          "Connecting Communities, <br /> Empowering Change"
        </h1>
        
      </div>
      
    </div>
    );
};

export default Home;