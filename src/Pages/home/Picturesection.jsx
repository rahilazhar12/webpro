import React from "react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import six from "../../assets/6.png";

const Picturesection = () => {
  return (
    <div className="mt-20">
      <section className="academy-typing-hero" id="academy-container"></section>
      <div className="academy-typing-hero__container">
        {/* Left Section Images */}
        <div className="academy-typing-hero__persona-left hidden md:block">
          <img
            className="academy-typing-hero__persona--image academy-hero-image-1 bg-contain"
            alt="Persona left image 1"
            src={one}
            width="200"
            height="200"
            loading="lazy"
          />
          <img
            className="academy-typing-hero__persona--image academy-hero-image-3"
            alt="Persona left image 2"
            src={two}
            width="200"
            height="200"
            loading="lazy"
          />
        </div>

        {/* Main Content Section */}
        <div className="academy-typing-hero__content">
          <div className="academy-typing-hero__content--typing-effect">
            <h1
              className="academy-typing-hero__content--title"
              aria-label="Web Pro School"
            >
              Web <span>Pro School</span>
            </h1>
          </div>
          <p className="">
            WebPro School of Freelancing equips you with essential business
            skills through hands-on courses and certifications. In 2024, we’ve
            proudly trained over 12,000+ students, helping them earn a combined
            $500,000. Join us to turn your skills into real success.
          </p>
          <div className="academy-typing-hero__ctas mt-7">
            <a
              tabIndex={0}
              className="px-5 py-4 hover:text-white text-white bg-[#0568A3]"
              href="#"
              data-hs-event-96027165={1}
            >
              Course Login
            </a>
          </div>
          <ul className="academy-typing-hero__content--features">
            <li>100% Practical Course</li>
            <li>WhatsApp Mentorship</li>
            <li>Life Time Course Access</li>
          </ul>
        </div>

        {/* Right Section Images */}
        <div className="academy-typing-hero__persona-right hidden md:block">
          <img
            className="academy-typing-hero__persona--image academy-hero-image-2"
            alt="Persona right image 1"
            src={three}
            width="200"
            height="200"
            loading="lazy"
          />
          <img
            className="academy-typing-hero__persona--image academy-hero-image-4"
            alt="Persona right image 2"
            src={four}
            width="200"
            height="200"
            loading="lazy"
          />
        </div>

        {/* Bottom Section Images */}
        <div className="academy-typing-hero__persona-bottom hidden md:block">
          <img
            className="academy-typing-hero__persona--image academy-hero-image-5"
            alt="Persona bottom image 1"
            src={five}
            width="200"
            height="200"
            loading="lazy"
          />
          <img
            className="academy-typing-hero__persona--image academy-hero-image-6"
            alt="Persona bottom image 2"
            src={six}
            width="200"
            height="200"
            loading="lazy"
          />
        </div>
      </div>
      <div className="academy-typing-hero__boxshadow" />
    </div>
  );
};

export default Picturesection;
