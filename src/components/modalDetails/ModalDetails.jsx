import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Button } from "../lib/AnimatedBorder.jsx/AnimatedBorder";

const ModalDetails = ({ project }) => {
  const { title, description, liveLink, clientLink, thumbnail, toolsUsed } =
    project;

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-3xl bg-gray-900 text-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-2xl text-[#ff014f] mb-4">{title}</h3>

        <img src={thumbnail} alt={title} className="w-full  rounded-lg mb-4" />

        <p className="mb-4">{description}</p>

        <div className="flex gap-4 mb-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff014f] px-4 py-2 rounded-full hover:bg-[#e6003f] transition"
          >
            <FaGlobe /> Live Site
          </a>
          <a
            href={clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff014f] px-4 py-2 rounded-full hover:bg-[#e6003f] transition"
          >
            <FaGithub /> Client Code
          </a>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Tools Used:</h4>
          <ul className="list-disc  pl-6">
            {toolsUsed?.map((tool, index) => (
              <Button className="text-[#ff014f]" key={index}>
                {tool}
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
};

export default ModalDetails;
