import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Button } from "../lib/AnimatedBorder.jsx/AnimatedBorder";

const ModalDetails = ({ project }) => {
  const {
    title,
    description,
    challengesFaced,
    futurePlans,
    liveLink,
    clientLink,
    thumbnail,
    serverLink,
    techStack,
  } = project;

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-3xl bg-gray-900 text-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <ImCross />
          </button>
        </form>

        <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 ">
          {title}
        </h3>

        <img src={thumbnail} alt={title} className="w-full  rounded-lg mb-4" />

        <p className="mb-4 text-gray-400 ">
          <span className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 ">
            About This Project
          </span>
          <br />
          {description}
        </p>
        <p className="mb-4 text-gray-400 ">
          <span className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 ">
            Challenges I Faced in This Project
          </span>
          <br />
          {challengesFaced}
        </p>

        <p className="mb-4 text-gray-400 ">
          <span className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 ">
            Future Plans for This Project
          </span>
          <br />
          {futurePlans}
        </p>

        <div className="flex gap-4 flex-col md:flex-row items-center justify-center mb-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#34D399] px-4 py-2 rounded-full  transition"
          >
            <FaGlobe /> Live Site
          </a>
          <a
            href={clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#34D399] px-4 py-2 rounded-full  transition"
          >
            <FaGithub /> Client Code
          </a>
          {serverLink ? (
            <>
              <a
                href={serverLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#34D399] px-4 py-2 rounded-full  transition"
              >
                {/* <FaServer></FaServer> */}
                Backend Code
              </a>
            </>
          ) : undefined}
        </div>

        <div>
          <h4 className="text-xl  font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 ">
            Tech Stack
          </h4>
          <div className="grid grid-cols-2 items-center justify-between gap-4">
            {techStack?.map((tool, index) => (
              <Button className="text-[#34D399] " key={index}>
                {tool}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalDetails;
