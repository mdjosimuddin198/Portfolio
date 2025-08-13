import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaLinux,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiJest,
  SiWebpack,
  SiKubernetes,
  SiPostman,
  SiEslint,
  SiExpress,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { BsCloud } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { Element } from "react-scroll";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <RiToolsFill />,
      skills: [
        { name: "VS Code" },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },

    // in futute
    // {
    //   title: "UI/UX Design",
    //   icon: <MdDesignServices />,
    //   skills: [
    //     { name: "Figma" },
    //     { name: "Responsive Design" },
    //     { name: "Wireframing" },
    //     { name: "Prototyping" },
    //   ],
    // },

    // {
    //   title: "Cloud & DevOps",
    //   icon: <BsCloud />,
    //   skills: [
    //     { name: "AWS", icon: <FaAws /> },
    //     { name: "Docker", icon: <FaDocker /> },
    //     { name: "CI/CD" },
    //     { name: "Kubernetes", icon: <SiKubernetes /> },
    //     { name: "Git", icon: <FaGit /> },
    //     { name: "Linux", icon: <FaLinux /> },
    //   ],
    // },
    //    {
    //   title: "Creative Skills",
    //   icon: <TbBulb />,
    //   skills: [
    //     { name: "UI Animation" },
    //     { name: "SVG Animation" },
    //     { name: "3D Modeling" },
    //     { name: "Motion Graphics" },
    //   ],
    // },
  ];

  return (
    <Element name="skill" className="py-8  my-6 text-white">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        My Skills
      </p>
      <h2 className="text-xl font-bold  mb-12 text-center text-white">
        Skills that power my development journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white">
        {skills.map((category, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 300}
            key={index}
            className="relative bg-[#1E293B] p-6 rounded-2xl shadow-xl border border-[#334155] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4 text-xl font-semibold relative z-10">
              <span className="text-2xl text-cyan-400">{category.icon}</span>
              <span>{category.title}</span>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] border border-[#334155] rounded-full text-sm hover:bg-cyan-950 transition"
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
