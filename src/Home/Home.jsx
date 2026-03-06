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
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${leaf1})` }}
      ></div>

     
      <div className="absolute inset-0 bg-opacity-50"></div>

      
      <div className="relative z-10 flex items-center justify-end mr-5 h-full">
        <h1 className="text-green-800 text-4xl font-bold text- drop-shadow-lg">
          "Connecting Communities, <br /> Empowering Change"
        </h1> 
      </div>
      <h1 className="text-green-800 m-7 text-4xl font-bold text- drop-shadow-lg">Our Features</h1>
      <div>
        <div className='flex justify-around items-center mt-5'>
            <div><img className='h-[300px] w-[700px] object-cover transform hover:scale-105 transition duration-300' src={creation} alt="" /></div>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Event Creation & Management</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
        </div>
        <div className='flex justify-around items-center mt-5'>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Discussion & Collaboration</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
            <div><img className='h-[300px] w-[700px] object-cover transform hover:scale-105 transition duration-300' src={discation} alt="" /></div>
            
        </div>
        <div className='flex justify-around items-center mt-5'>
            <div><img className='h-[300px] w-[700px] object-cover transform hover:scale-105 transition duration-300' src={discovary} alt="" /></div>
            <div> <h1 className="text-green-800 text-2xl font-bold text- drop-shadow-lg">Event Discovery & Search</h1>
            <p>"Easily set up your social <br /> development events with all the <br /> details – date, time, location, <br /> and description. Track registrations, manage attendees, <br /> and keep your community engaged, all from a simple and intuitive dashboard."</p></div>
        </div>
      </div>
      <div className='mt-5'><Gallery></Gallery></div>
      <div className='flex justify-between items-center p-2.5 mt-2 border rounded-xl '>
            <div>
                <h2 className='flex justitfy-start text-green-800 text-xl'>Subscribe to our Newsletter</h2>
                <p>Get latest event updates and other directly in your inbox.</p>
            </div>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
           <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Subscribe</button>
          <dialog id="my_modal_1" className="modal">
           <div className="modal-box">
              <form>
            <input className="input" type="email" placeholder="Enter your email" />
              <button className='btn'>Subscribe</button>
             </form>
             <div className="modal-action">
             <form method="dialog">
           {/* if there is a button in form, it will close the modal */}
             <button className="btn">Close</button>
             </form>
         </div>
         </div>
         </dialog>
            </div>
           </div>
    </div>
    );
};

export default Home;