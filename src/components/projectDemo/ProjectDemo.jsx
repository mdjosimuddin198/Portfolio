import React, { useEffect, useState } from "react";
// import projects from "../../demoProject.json";
import { Link, useLoaderData } from "react-router";
import { FaGlobe, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Element } from "react-scroll";
import { CiViewList } from "react-icons/ci";
import ModalDetails from "../modalDetails/ModalDetails";
import { Button } from "../lib/AnimatedBorder.jsx/AnimatedBorder";

const ProjectDemo = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [project, setporoject] = useState({});

  const handleDetails = async (id) => {
    const responce = await axios.get(
      `https://portfolio-of-josim-uddin.vercel.app/projects/${id}`
    );
    setporoject(responce.data);
    document.getElementById("my_modal_3").showModal();
  };

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
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        My Projects
      </p>
      <h2 className="text-xl font-bold text-center  mb-12 text-white">
        Showcasing real-world applications built using modern web technologies.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 300}
            key={index}
            className="relative bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-default group overflow-hidden"
          >
            <div className="overflow-hidden h-[180px] rounded-lg mb-4">
              <img
                src={project.demoImg}
                alt={project.title}
                className=" transform group-hover:translate-y-[-30%] transition-transform duration-[5000ms] ease-linear"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-400 h-20 overflow-hidden mb-6">
              {project.description}
            </p>

            {/* View Button */}
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              {/* Repo Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#34D399] text-white px-4 py-2 rounded-full"
              >
                {/* <FaGlobe></FaGlobe> */}
                Live Preview
              </a>

              {/* Live Button */}
              {/* <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#34D399] text-white px-4 py-2 rounded-full"
              >
                <FaCode></FaCode>
                Frontend Repo
              </a> */}
              {/* Live Button server */}
              {/* {project?.serverLink ? (
                <>
                  <a
                    href={project?.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#34D399] text-white px-4 py-2 rounded-full"
                  >
                    <FaServer></FaServer>
                    Backend Repo
                  </a>
                </>
              ) : undefined} */}
              <button
                onClick={() => handleDetails(project._id)}
                // onClick={() => {
                //   setSelectedProjectId(project._id);
                //   document.getElementById("my_modal_3").showModal();
                // }}
                // href={`/details/${project._id}`}
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 hover:cursor-pointer group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-[#34D399] text-white px-4 py-2 rounded-full"
              >
                View More
                {/* <FaArrowRight></FaArrowRight> */}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-6">
        <Button>
          <a
            href="https://github.com/mdjosimuddin198"
            className="text-[#34D399]"
            target="_blank"
          >
            View More On Github
          </a>
        </Button>
      </div>
      <ModalDetails project={project}></ModalDetails>
    </Element>
  );
};

export default ProjectDemo;
