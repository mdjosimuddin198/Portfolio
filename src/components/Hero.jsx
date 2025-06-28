import React from "react";
import TypeingEffect from "./typeingEffect/TypeingEffect";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router";
import WhatIDo from "./WhatIDo/WhatIDo";
import ProjectDemo from "./projectDemo/ProjectDemo";
import { Element } from "react-scroll";
import AboutMeSection from "./aboutMe/AboutMeSection";
import Skills from "./skilll/Skills";
import Contact from "./contact/Contact";

const Hero = () => {
  return (
    <>
      <Element name="home" className="hero py-4">
        <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
          <div className=" md:w-1/2 flex items-center md:justify-end justify-center w-full">
            <img
              src="/Hero.png"
              className="md:w-[400px] border-2 border-red-400 p-4   rounded-full shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 w-full space-y-2 ">
            <h1 className="text-2xl ">Welcome To My World</h1>
            <h2 className="text-5xl pb-3">
              Hi, I’m <span className="text-[#ff014f]">JOSIM UDDIN</span>
            </h2>
            <TypeingEffect></TypeingEffect>
            <p className="py-6">
              I'm a professional Front End Developer with a passion for learning
              and solving problems. I love exploring new technologies and making
              the web more accessible. My core skill is JavaScript, and I'm open
              to any opportunity that matching my skills and interests.
            </p>
            <div className="flex items-center  justify-between gap-4">
              <div>
                <h2 className="text-xl font-thin mb-2">Find With Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/mdjosimuddin198"
                    className="btn"
                  >
                    <FaFacebookF size={25} />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/mdjosimuddin198"
                    className="btn"
                  >
                    <FaGithub size={25} />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/mdjosimuddin198/"
                    className="btn "
                  >
                    <FaLinkedinIn size={25} />
                  </Link>
                </div>
              </div>
              <div>{""}</div>

              <div>
                <h2 className="text-xl font-thin mb-2">Best Skill On</h2>
                <div className="flex items-center flex-col md:flex-row gap-4 justify-between">
                  <button className="btn">
                    <IoLogoJavascript size={25} />
                  </button>
                  <button className="btn">
                    <FaReact size={25} />
                  </button>
                  <button className="btn">
                    <FaNode size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <AboutMeSection></AboutMeSection>
      <Skills></Skills>
      <ProjectDemo></ProjectDemo>
      <WhatIDo></WhatIDo>
      <Contact></Contact>
    </>
  );
};

export default Hero;
