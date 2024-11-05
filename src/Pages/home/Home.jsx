import React, { lazy, Suspense } from "react";
const Cards = lazy(() => import("../../Components/Cards")); // Lazy load Cards component
const Picturesection = lazy(() => import("./Picturesection"));
import logo from "../../assets/logo.webp";
import Loader from "../../Components/loader/Loader";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Picturesection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Cards />
      </Suspense>

      <div className="flex flex-col md:flex-row items-center h-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center bg-teal-700 text-white p-10 h-96">
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold mb-4">Learn New Skills</h2>
            <p className="mb-8">
              Accelerate your knowledge on in-demand business topics with our
              affordable courses
            </p>
            {/* <button className="bg-white text-teal-700 font-semibold px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition duration-300">
              View all courses
            </button> */}
          </div>
        </div>

        {/* Divider with OR */}
        <div className="relative w-full md:w-auto  md:h-auto flex items-center justify-center">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-12 h-12 font-bold text-gray-500 border-4 border-white -top-4 md:top-auto md:left-1/2 transform md:-translate-x-1/2">
            OR
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-center bg-yellow-600 text-white p-10 h-96">
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold mb-4">Earn Recognition</h2>
            <p className="mb-8">
              Advance your career by achieving certifications and showcasing
              industry-recognized badges on your LinkedIn profile.
            </p>
            {/* <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300">
              View all certifications
            </button> */}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------- */}
      <div className=" bg-white text-center md:py-20 max-sm:p-5">
        <h2 className="text-3xl font-bold mb-4">
          Our students earned 500,000+ USD in the year 2024.
        </h2>
        <p className="text-gray-600 mb-8">
          Join the 12,000+ professionals who’ve grown their careers by getting
          certified with WebPro School.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
          {/* Inbound */}
          <div className="flex flex-col items-center">
            <img
              src="https://academy.hubspot.com/hubfs/assets/hubspot.com/academy/icons/certs/inbound.svg"
              alt="Inbound"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Accountants
            </h3>
            <p className="text-gray-600 text-sm">
              At WebPro School, accountants master skills in Taxes, Excel,
              QuickBooks, and financial analytics, with hands-on support to
              boost their careers.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/social-media.svg"
              alt="Social Media"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Entrepreneurs
            </h3>
            <p className="text-gray-600 text-sm">
              Entrepreneurs gain essential skills in digital marketing, finance,
              and business strategy, with hands-on support to
              drive their success.
            </p>
          </div>

          {/* Email Marketing */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/email-marketing.svg"
              alt="Email Marketing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Bachelors
            </h3>
            <p className="text-gray-600 text-sm">
              Bachelor’s students acquire practical skills in digital tools,
              finance, and career development, with hands-on support to
              kickstart their futures.
            </p>
          </div>

          {/* Content Marketing */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/content-marketing.svg"
              alt="Content Marketing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Marketers
            </h3>
            <p className="text-gray-600 text-sm">
              At WebPro School, Marketers enhance their skills in digital
              strategy, social media, and analytics, with hands-on support to
              elevate their impact.
            </p>
          </div>

          {/* Inbound Sales */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/seo.svg"
              alt="Inbound Sales"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Engineers
            </h3>
            <p className="text-gray-600 text-sm">
              At WebPro School, Engineers develop key skills in data analysis,
              project management, and technical tools, with hands-on support to
              advance their careers
            </p>
          </div>
        </div>

        {/* <button className="mt-8 px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-300">
          View all certifications
        </button> */}
      </div>

      {/* ----------------------------------------------------------------------------------------- */}
      <div className="bg-gray-50 py-12 text-center">
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="HubSpot Icon" className="w-52  mb-2" />
          <h2 className="text-3xl font-bold">
            Why Choose Us for Your Learning Journey?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-lg px-4">
          {/* Advance your career */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Enhance Your Career
            </h3>
            <p className="text-gray-600">
              Master the latest developments in digital marketing, accounting,
              sales, customer relations, and more. Take proactive steps to
              invest in your skills and future.
            </p>
          </div>

          {/* Show off your skills */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Showcase Your Expertise
            </h3>
            <p className="text-gray-600">
              Add a respected certification to your LinkedIn profile to
              demonstrate your expertise and commitment to prospective employers
              or clients.
            </p>
          </div>

          {/* Grow Your Business */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Expand Your Business Potential
            </h3>
            <p className="text-gray-600">
              Develop a powerful business strategy that leverages effective
              methodologies to attract more leads, boost conversions, and foster
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
