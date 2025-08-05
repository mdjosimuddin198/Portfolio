import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
// import { Link } from "react-router";
import { Link, Element } from "react-scroll";
import { DemoBorder } from "./lib/AnimatedBorder.jsx/DemoBorder";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match animation time
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const links = (
    <>
      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="home"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="about"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="skill"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          SKILL
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="education"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          EDUCATION
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="projects"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          PROJECTS
        </Link>
      </li>

      <li>
        <Link
          onClick={() => setIsOpen(false)}
          to="contacts"
          spy={true}
          activeClass="text-[#34D399] font-bold"
          smooth={true}
          duration={500}
        >
          CONTACTS
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar border-2 rounded-2xl mt-5 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div>
            {/* Hamburger Menu Button */}
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <MdMenu size={24} />
            </button>

            {/* Full Screen Drawer Overlay */}
            {isOpen && (
              <div
                className="fixed inset-0 z-50  bg-black bg-opacity-50"
                onClick={handleClose}
              >
                {/* Drawer content */}
                <div
                  className={`bg-black w-full h-screen p-6 shadow-xl 
              ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <div className="m-4 text-right mt-6">
                    <button onClick={handleClose}>
                      <MdClose size={24} />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <ul className="menu text-center mx-auto text-lg text-white space-y-2">
                    {links}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center ">
            <img
              className="w-18  object-cover"
              src="https://i.ibb.co/ZpvXZY4y/image-removebg-preview-2.png"
              alt=""
            />
            <p className="text-md hidden md:block">JOSIM UDDIN</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* <a
            href="https://www.linkedin.com/in/mdjosimuddin198/"
            target="_blank"
            className="btn text-[#34D399] font-bold "
          >
            Hire Me
          </a> */}
          <DemoBorder></DemoBorder>
        </div>
      </div>
    </>
  );
};

export default Navbar;
