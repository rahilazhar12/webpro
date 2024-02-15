import React from 'react';
// import YourImage from './path-to-your-image.jpg'; // Replace with the path to your image

const FeaturedEvent = () => {
  return (
    <section className='bg-gradient-to-r from-[#2e1946] via-[#171a3b] to-[#111315] ... flex'> 
    <div className="relative bg-gradient-to-t from-slate-400 to bg-pink-200 text-white p-6 max-w-6xl mx-auto rounded-lg overflow-hidden">
      <div className="border-4 border-blue-500/50 absolute top-0 bottom-0 left-0 right-0 rounded-lg border-opacity-50 animate-pulse"></div>
      <div className="flex items-center">
        <div className="flex-none w-1/2">
          <img src='https://files.onegiantleap.com/files/2023-08/LEAPFWD.PNG?VersionId=NBQLWF7UUParpmHKjpxDDAoQhEBg3Mzt' alt="Event" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex-grow p-6">
          <p className="text-lg">
            LEAP is colocated with DeepFest - the event's dedicated AI stream. DeepFest is the premier meeting place for the global Artificial Intelligence ecosystem of thought-leaders, change-makers, big tech, data scientists, innovators, enterprises, academia, start-ups, and entrepreneurs leading innovation across businesses. DeepFest is back in 2024 for the second edition. Visit the website to find out more.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-purple-900">
            DISCOVER DEEPFEST
          </button>
        </div>
      </div>
    </div>


    {/* 2 */}
    <div className="relative bg-gradient-to-t from-slate-400 to bg-pink-200 text-white p-6 max-w-6xl mx-auto rounded-lg overflow-hidden">
      <div className="border-4 border-blue-500/50 absolute top-0 bottom-0 left-0 right-0 rounded-lg border-opacity-50 animate-pulse"></div>
      <div className="flex items-center">
        <div className="flex-none w-1/2">
          <img src='https://files.onegiantleap.com/files/2023-08/LEAPFWD.PNG?VersionId=NBQLWF7UUParpmHKjpxDDAoQhEBg3Mzt' alt="Event" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex-grow p-6">
          <p className="text-lg">
            LEAP is colocated with DeepFest - the event's dedicated AI stream. DeepFest is the premier meeting place for the global Artificial Intelligence ecosystem of thought-leaders, change-makers, big tech, data scientists, innovators, enterprises, academia, start-ups, and entrepreneurs leading innovation across businesses. DeepFest is back in 2024 for the second edition. Visit the website to find out more.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-purple-900">
            DISCOVER DEEPFEST
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FeaturedEvent;
