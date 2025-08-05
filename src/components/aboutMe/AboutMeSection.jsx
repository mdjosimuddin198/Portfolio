import React from "react";
import AboutMe from "./AboutMe";
import AboutMeImgae from "./AboutMeImgae";
import { Element } from "react-scroll";

const AboutMeSection = () => {
  return (
    <Element name="about" className="my-4">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        About Me
      </p>
      <h2 className="text-xl font-bold  mb-12 text-center text-white">
        Full-Stack Web Developer | React, Node.js, MongoDB
      </h2>
      <div className="flex items-center justify-around gap-2 flex-col-reverse md:flex-row">
        <AboutMe></AboutMe>
        <AboutMeImgae></AboutMeImgae>
      </div>
    </Element>
  );
};

export default AboutMeSection;
