import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Propose2Page = () => {
  return (
    <div className="bg-pink-300 min-h-screen flex flex-col items-center justify-center">
      {/* Emoji Section */}
      <div className="flex flex-wrap justify-around text-6xl w-full px-4 mt-4">
        <span>💗</span>
        <span>&#128525;</span>
        <span>&#128536;</span>
        <span>&#129392;</span>
        <span>💖</span>
      </div>

      {/* Textbox Section */}
      <div className="bg-[rgb(246,207,214)] h-36 w-96 rounded-3xl flex items-center justify-center mt-12">
        <h1 className="text-center text-2xl font-semibold">
          <span className="text-3xl">&#128149;</span>
          <p className="text-2xl mt-2 text-[rgba(183,0,119,0.711)]">
            {" "}
            ✨ You are special to me.......
          </p>
        </h1>
      </div>

      {/* Button Section */}
      <Link
        to="/propose3"
      >
      <button className="mt-6 relative inline-flex items-center justify-center p-4 rounded-full text-gray-800 font-semibold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-400 hover:opacity-70 hover:cursor-pointer">
        Get in touch
      </button>
      </Link>

      {/* Video Section */}
      <video className="mt-6 mx-auto" width="320" height="240" autoPlay loop muted>
        <source src="/assets/teddy.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Propose2Page;
