import React from "react";
import TextCarousel from "./Components/TextCarousel ";
import FeaturedEvent from "./Components/Featuredevent";
import Carousal from "./Components/Carousal";
import HeaderSection from "./Components/Headersection";

const App = () => {
  const textStyle = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "2px",
    // Direct gradient strokes are not supported in CSS text properties, so you might need to use a solid color for the stroke or explore other solutions for gradient strokes.
    WebkitTextStrokeColor: "white", // Placeholder: Change to a solid color as gradient strokes are tricky
    fontSize: "5rem",
    fontWeight: "bold",
  };

  const stats = [
    { number: '600+', label: 'Start-ups' },
    { number: '1,000+', label: 'Expert speakers' },
    { number: '1,800+', label: 'Global tech exhibitors' },
    { number: '172,000+', label: 'Attendance over 4 days' },
  ];

  return (
    <>
    <section className="">
      <HeaderSection/>
    <div className="bg-[#20142d] absolute top-[368px] left-[150px] w-[1200px] text-white py-4 px-8 flex items-center justify-around rounded-xl ">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold">{stat.number}</div>
          <div className="uppercase text-[#73fafd]">{stat.label}</div>
        </div>
      ))}
    </div>
    </section>
      <section className="flex">
        <span className="bg-[#73fafd] w-full text-center text-xl tracking-widest font-bold text-black">
          INVESTOR REGISTRATION
        </span>
      </section>
      <section className="bg-gradient-to-r from-[#2e1946] via-[#171a3b] to-[#111315] h-96 w-full">
        <div className="flex justify-between">
          <span className="text-[#472aaf] text-6xl mt-7">•</span>
          <h1 className="text-white  font-bold mx-4" style={textStyle}>
            FEATURED IN
          </h1>
          <span className="text-purple-500  text-6xl mt-7">•</span>
          <h1 className="text-white text-[5rem] font-bold mx-4">FEATURED IN</h1>
          <span className="text-purple-500  text-6xl mt-7">•</span>
          <h1 style={textStyle}>FEATURE</h1>
          {/* <!-- Repeat this pattern for each 'FEATURED IN' section you need --> */}
        </div>

        <div className="flex justify-center items-center mt-10">
          <h1 className="text-white">
            <TextCarousel />
          </h1>
        </div>

        <div className="flex justify-between mt-10">
          <span className="text-[#472aaf] text-6xl mt-7">•</span>
          <h1 className="text-white  font-bold mx-4" style={textStyle}>
            ABOUT US
          </h1>
          <span className="text-purple-500  text-6xl mt-7">•</span>
          <h1 className="text-white text-[5rem] font-bold mx-4">ABOUT US</h1>
          <span className="text-purple-500  text-6xl mt-7">•</span>
          <h1 style={textStyle}>ABOUT US</h1>
          <span className="text-purple-500  text-6xl mt-7">•</span>
          <h1 className="text-white text-[5rem] font-bold mx-4">AB</h1>
          {/* <!-- Repeat this pattern for each 'FEATURED IN' section you need --> */}
        </div>
      </section>

      <section className="h-auto bg-gradient-to-r from-[#2e1946] via-[#171a3b] to-[#111315] p-3">
        <div className="flex justify-center text-center items-center space-x-10">
          <span className="bg-gradient-to-r from-[#cf39e9] via-[#4e2bb2] to-[#4c6ec6] w-52 rounded-lg h-1 mt-10"></span>
          <span className="bg-gray-400 w-52 rounded-lg h-1 mt-10"></span>
          <span className="bg-gray-400 w-52 rounded-lg h-1 mt-10"></span>
        </div>


        <div className="flex justify-center items-center bg-[#4b347b]    shadow-lg overflow-hidden mx-8 my-4 mt-20 neon-light-box">
      <img src='https://files.onegiantleap.com/files/2023-08/LEAPFWD.PNG?VersionId=NBQLWF7UUParpmHKjpxDDAoQhEBg3Mzt' alt="Event" className="w-52 h-auto" />
      <div className="text-white p-8 w-1/2">
        <h2 className="text-2xl font-bold mb-2">
          The second edition of LEAP was the most attended tech event in the world.
        </h2>
        <p className="mb-4">
          The event welcomed 172,000+ attendees from 183 countries. In 2024, LEAP will be back for the third year to bring together the global technology ecosystem.
        </p>
        <p className="mb-6">
          If you want to discover what's next for technology, meet with the key change-makers and broaden your horizons, you need to be there. LEAP in – and tap into the limitless potential of tech to build a positive future.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          REGISTER FOR 2024
        </button>
      </div>
    </div>
      </section>
    </>
  );
  }

export default App;
