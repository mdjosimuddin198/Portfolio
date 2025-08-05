import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCheckCircle,
  FaRocket,
  FaSearch,
  FaPencilRuler,
  FaArrowRight,
  FaLaptopCode,
  FaServer,
  FaPlug,
} from "react-icons/fa";
import { Link } from "react-router";

const whatIDoData = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using React, Tailwind CSS, and modern JavaScript.",
    icon: <FaLaptopCode className="text-4xl text-[#34D399] mb-4" />,
  },
  {
    title: "Backend Development",
    description:
      "Creating robust server-side applications and APIs with Node.js, Express.js, and MongoDB.",
    icon: <FaServer className="text-4xl text-[#34D399] mb-4" />,
  },
  {
    title: "API Integration",
    description:
      "Integrating RESTful APIs and third-party services for seamless frontend-backend communication.",
    icon: <FaPlug className="text-4xl text-[#34D399] mb-4" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensuring websites look great and function well on all devices through responsive design techniques.",
    icon: <FaMobileAlt className="text-4xl text-[#34D399] mb-4" />,
  },
  {
    title: "Code Quality & Maintenance",
    description:
      "Writing clean, maintainable, and scalable code for long-term project success.",
    icon: <FaCheckCircle className="text-4xl text-[#34D399] mb-4" />,
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying applications on platforms like Vercel, Netlify, and Render for reliable production hosting.",
    icon: <FaRocket className="text-4xl text-[#34D399] mb-4" />,
  },
];

const WhatIDo = () => {
  return (
    <section className=" my-12">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        What I Do
      </p>
      <h2 className="text-xl font-bold  mb-12 text-center text-white">
        Designing, developing, and delivering quality web experiences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {whatIDoData.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-default group"
          >
            <div className="flex justify-center mb-4 text-5xl text-[#34D399]">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 mb-6">{item.description}</p>

            {/* View Button */}
            <Link className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#34D399] text-white px-4 py-2 rounded-full absolute left-1/2 transform -translate-x-1/2 bottom-4">
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
