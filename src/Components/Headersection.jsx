import React from 'react';
import logo from '../assets/logo.png'; // Path to your logo
import backgroundVideo from '../assets/1.mp4'; // Path to your background video

const HeaderSection = () => {
  return (
    <div className="relative overflow-hidden bg-blue-900 text-white">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 flex justify-between items-center p-4">
        <img src={logo} alt="LEAP Logo" className="h-12" />
        <div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-2">
            REGISTER FOR 2024
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            START UPS
          </button>
        </div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl font-bold mb-2">"A DIGITAL DAVOS"</h1>
        <h2 className="text-3xl mb-4">WIRED</h2>
        <p className="mb-4">The world's most attended tech event</p>
        <p className="mb-1">Riyadh Exhibition and Convention Center, Malham, Saudi Arabia</p>
        <p>4-7 March 2024</p>
        <p className='mb-32'>Opening hours: 10:30am - 7:00pm</p>
        <div className="flex mt-4">
          {/* Social icons would go here */}
        </div>
        <p className="absolute bottom-4 right-4">Webpro School</p>
        {/* Organiser's logo would go here */}
      </div>
    </div>
  );
};

export default HeaderSection;
