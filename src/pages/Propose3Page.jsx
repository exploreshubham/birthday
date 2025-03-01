import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [`<i>Do You Love me </i><br />Madam Ji`], // Use <br /> to create a line break
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,  // Adds a delay before backspacing
      startDelay: 1000, // Delay before starting the typing effect
      loop: true,       // Infinite loop
      onComplete: () => {
        // Show the button after typing is complete (3 seconds)
        setShowButton(true);
      },
      
    };

    // Initialize Typed.js
    const typed = new Typed("#element", options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden h-screen">
      {/* Video background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
        autoPlay 
        loop 
        muted
      >
        <source src="/assets/movie.mp4" type="video/mp4" />
      </video>

      {/* Text Box */}
      <div className="absolute top-[30%] left-0 right-0 text-center text-pink-600 text-6xl font-bold">
        <span id="element"></span>
      </div>

      {/* Conditionally render Yes button after 3 seconds */}
      <Link
        to="/propose4"
      >
      {showButton && (
        <div className="absolute top-[50%] left-0 right-0 flex justify-center">
        <button className="mt-6 px-8 py-3 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 rounded-full text-xl font-semibold focus:outline-none hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl hover:cursor-pointer">
          Yes
        </button>
      </div>
      )}
      </Link>
    </div>
  );
};

export default App;
