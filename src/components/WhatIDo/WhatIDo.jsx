import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCheckCircle,
  FaRocket,
  FaSearch,
  FaPencilRuler,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router";

const whatIDoData = [
  {
    title: "Frontend Development",
    description:
      "Building interactive and dynamic user interfaces using modern technologies.",
    icon: <FaCode className="text-4xl text-[#ff014f] mb-4" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating websites that are fully responsive and look great on all devices.",
    icon: <FaMobileAlt className="text-4xl text-[#ff014f] mb-4" />,
  },
  {
    title: "Clean and Maintainable Code",
    description:
      "Writing clean, readable, and well-structured code for easy maintenance and scalability.",
    icon: <FaCheckCircle className="text-4xl text-[#ff014f] mb-4" />,
  },
  {
    title: "Fast Delivery",
    description:
      "Ensuring timely delivery of high-quality projects to meet deadlines efficiently.",
    icon: <FaRocket className="text-4xl text-[#ff014f] mb-4" />,
  },
  {
    title: "SEO Friendly Design",
    description:
      "Designing websites optimized for search engines to improve online visibility.",
    icon: <FaSearch className="text-4xl text-[#ff014f] mb-4" />,
  },
  {
    title: "Pixel Perfect UI",
    description:
      "Delivering designs with precise alignment and perfect visual accuracy.",
    icon: <FaPencilRuler className="text-4xl text-[#ff014f] mb-4" />,
  },
];

const WhatIDo = () => {
  return (
    <section className=" my-12">
      <p className="text-xl text-[#ff014f]">Features</p>
      <h2 className="text-5xl font-bold  mb-12 text-white">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {whatIDoData.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-default group"
          >
            <div className="flex justify-center mb-4 text-5xl text-[#ff014f]">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 mb-6">{item.description}</p>

            {/* View Button */}
            <Link className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#ff014f] text-white px-4 py-2 rounded-full absolute left-1/2 transform -translate-x-1/2 bottom-4">
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
