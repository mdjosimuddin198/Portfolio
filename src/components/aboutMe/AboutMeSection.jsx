import React from "react";
import AboutMe from "./AboutMe";
import AboutMeImgae from "./AboutMeImgae";
import { Element } from "react-scroll";

const AboutMeSection = () => {
  return (
    <Element name="about" className="my-4">
      <p className="text-xl text-[#ff014f]">About Me</p>
      <h2 className="text-5xl font-bold  mb-12 text-white">
        A little more about me...
      </h2>
      <div className="flex items-center justify-around gap-2 flex-col-reverse md:flex-row">
        <AboutMe></AboutMe>
        <AboutMeImgae></AboutMeImgae>
      </div>
    </Element>
  );
};

export default AboutMeSection;
