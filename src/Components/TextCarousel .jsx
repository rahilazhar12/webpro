import React, { useEffect, useState } from 'react';

const TextCarousel = () => {
    const texts = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6", "Text 7" , "Text 7", "Text 7", "Text 7", "Text 7", "Text 7", "Text 7", "Text 7", "Text 7", "Text 7"]; // Add more texts as needed
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => (prevOffset === texts.length - 5 ? 0 : prevOffset + 1));
        }, 2000); // Change animation speed here

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className={`transition-transform ease-in duration-700 -translate-x-${offset * 20}`}>
                {texts.map((text, index) => (
                    <span key={index} className="inline-block px-5 py-2 text-white">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextCarousel;
