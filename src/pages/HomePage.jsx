import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProposePage = () => {
  return (
    <div className="bg-pink-300 min-h-screen flex flex-col items-center">
      {/* Emoji Section */}
      <div className="flex flex-wrap justify-around text-6xl mb-20 w-full px-4 mt-4">
        <span className="mr-4">💗</span>
        <span className="mr-4">&#128525;</span>
        <span className="mr-4">&#128536;</span>
        <span className="mr-4">&#129392;</span>
        <span>💖</span>
      </div>

      {/* Propose Section */}
      <Link
        to="/propose2"
      >
      <div className="bg-[rgb(246,207,214)] h-36 w-96 rounded-3xl flex items-center justify-center mt-12">
        <h1 className="text-center text-2xl font-semibold">
          <span className="text-3xl">&#128149;</span>
          <p className="text-2xl mt-2 text-[rgba(183,0,119,0.711)]">
            ✨ I have something for you.......
          </p>
        </h1>
      </div>
      </Link>
    </div>
  );
};

export default ProposePage;
