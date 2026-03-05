import React from 'react';
import { ReactTyped } from 'react-typed';
import leaf1 from '../assets/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg'
import creation from '../assets/creation.jpg'
import discation from '../assets/discation.jpg'
import discovary from '../assets/discovary.jpg'
import Gallery from '../assets/Gallary/Gallery';

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
      <h1 className="text-green-800 m-7 text-4xl font-bold text- drop-shadow-lg">Our Features</h1>
      <div>
        <div className='flex justify-around items-center mt-5'>
            <div><img className='h-[300px] w-[700px]' src={creation} alt="" /></div>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Event Creation & Management</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
        </div>
        <div className='flex justify-around items-center mt-5'>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Discussion & Collaboration</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
            <div><img className='h-[300px] w-[700px]' src={discation} alt="" /></div>
            
        </div>
        <div className='flex justify-around items-center mt-5'>
            <div><img className='h-[300px] w-[700px]' src={discovary} alt="" /></div>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Event Discovery & Search</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
        </div>
      </div>
      <Gallery></Gallery>
    </div>
    );
};

export default Home;