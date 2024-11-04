import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/923264789330"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappButton;
