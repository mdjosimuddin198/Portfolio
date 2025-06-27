import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { Element } from "react-scroll";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-2" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl text-blue-500 mx-auto mb-2" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-cyan-400 mx-auto mb-2" />,
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui className="text-5xl text-purple-400 mx-auto mb-2" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-5xl text-yellow-400 mx-auto mb-2" />,
    },
    {
      name: "React JS",
      icon: (
        <FaReact className="text-5xl text-cyan-300 mx-auto mb-2 animate-spin-slow" />
      ),
    },
    {
      name: "Express JS",
      icon: <SiExpress className="text-5xl text-gray-400 mx-auto mb-2" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-5xl text-yellow-500 mx-auto mb-2" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-500 mx-auto mb-2" />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs className="text-5xl text-green-400 mx-auto mb-2" />,
    },
  ];

  return (
    <Element name="skill" className="py-8 text-white">
      <div className="container mx-auto ">
        <p className="text-5xl text-[#ff014f]">My Skills</p>
        <h2 className="text-xl font-bold  mb-12 text-white">
          A little of My Skills
        </h2>

        {/* Marquee Section */}
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow m-4 min-w-[150px] hover:scale-105 transition text-center"
            >
              {skill.icon}
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </Element>
  );
};

export default Skills;
