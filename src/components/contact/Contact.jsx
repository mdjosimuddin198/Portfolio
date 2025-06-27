import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Button } from "../lib/AnimatedBorder.jsx/AnimatedBorder";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contacts " className=" rounded-2xl">
      <p className="text-5xl p-4 text-[#ff014f]">Contact With Me</p>
      <section className=" text-white py-8 md:flex gap-8  items-center justify-center">
        {/* Left Section - Contact Info */}
        <div className="p-6 rounded-xl w-full md:w-1/3 space-y-4 shadow-lg">
          <img
            src="https://i.ibb.co/62XYJZB/image.png"
            alt="Contact"
            className="rounded-xl w-full"
          />
          <h2 className="text-2xl font-bold">Md Josim Uddin </h2>
          <p className="text-gray-400">Front End Developr</p>
          <p className="text-gray-300">
            I am available for freelance work. Feel free to connect with me via
            phone or email
          </p>
          <p>
            <span className="text-gray-400">Phone: </span>
            <span className="text-[#ff014f]">+8801725508545</span>
          </p>
          <p>
            <span className="text-gray-400">Email: </span>
            <span className="text-[#ff014f]">josimweb0504@gmail.com</span>
          </p>
          <div>
            <p className="text-gray-400 mb-2">FIND WITH ME</p>
            <div className="flex items-center gap-4 justify-between">
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
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                PHONE NUMBER
              </label>
              <input
                type="text"
                className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Enter your phone"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">EMAIL</label>
            <input
              type="email"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#ff014f]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">SUBJECT</label>
            <input
              type="text"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#ff014f]"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              YOUR MESSAGE
            </label>
            <textarea
              rows="6"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#ff014f]"
              placeholder="Type your message"
            ></textarea>
          </div>
          <Button className="text-[#ff014f]">SEND MESSAGE</Button>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
