import React, { useEffect, useState } from "react";
// import projects from "../../demoProject.json";
import { Link, useLoaderData } from "react-router";
import { FaGlobe, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Element } from "react-scroll";
import { CiViewList } from "react-icons/ci";

const ProjectDemo = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://portfolio-of-josim-uddin.vercel.app/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.dir(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      </>
    );
  }

  return (
    <Element name="projects" className=" my-12">
      <p className="text-xl text-[#ff014f]">
        Visit my Projects and Give your feedback
      </p>
      <h2 className="text-5xl font-bold  mb-12 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-default group overflow-hidden"
          >
            <div className="overflow-hidden h-[200px] rounded-lg mb-4">
              <img
                src={project.demoImg}
                alt=""
                className=" transform group-hover:translate-y-[-30%] transition-transform duration-[5000ms] ease-linear"
              />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* View Button */}
            <div className="flex items-center justify-center gap-4">
              {/* Repo Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#ff014f] text-white px-4 py-2 rounded-full"
              >
                <FaGlobe></FaGlobe>
              </a>

              {/* Live Button */}
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#ff014f] text-white px-4 py-2 rounded-full"
              >
                <FaCode></FaCode>
              </a>
              {/* Live Button server */}
              {project?.serverLink ? (
                <>
                  <a
                    href={project?.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#ff014f] text-white px-4 py-2 rounded-full"
                  >
                    <FaServer></FaServer>
                  </a>
                </>
              ) : undefined}
              <a
                href={`/details/${project._id}`}
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#ff014f] text-white px-4 py-2 rounded-full"
              >
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ProjectDemo;
