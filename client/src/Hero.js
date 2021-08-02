import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaArrowDown } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";
const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <ReactTypingEffect
        text={["Hey, How are you?", "Check out my Newsletter!"]}
        typingDelay={"1000ms"}
        eraseDelay={"2500ms"}
        className="text-gray-700 font-sans pt-40 md:text-7xl text-5xl"
      />
      <NavHashLink smooth to="/#newsletter">
        <button className="animate-bounce pt-80 ">
          <FaArrowDown />
        </button>
      </NavHashLink>
    </div>
  );
};

export default Home;
