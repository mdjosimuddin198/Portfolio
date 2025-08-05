import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Button } from "../lib/AnimatedBorder.jsx/AnimatedBorder";
import { Element } from "react-scroll";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSendMsg = (e) => {
    e.preventDefault();
    toast.warn("Thanks for reaching out! Currently unavailable.");
  };
  return (
    <Element name="contacts" className=" rounded-2xl">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        Contact With Me
      </p>
      <p className="text-xl font-bold  mb-12 text-center text-white">
        Feel free to reach out — I'm just a message away
      </p>
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
            <span className="text-[#34D399]">+8801725508545</span>
          </p>
          <p>
            <span className="text-gray-400">Email: </span>
            <span className="text-[#34D399]">josimweb0504@gmail.com</span>
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
        <form
          onSubmit={handleSendMsg}
          className="w-full md:w-2/3 mt-8 md:mt-0 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#34D399]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                PHONE NUMBER
              </label>
              <input
                type="number"
                className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#34D399]"
                placeholder="Enter your phone"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">EMAIL</label>
            <input
              type="email"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#34D399]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">SUBJECT</label>
            <input
              type="text"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#34D399]"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              YOUR MESSAGE
            </label>
            <textarea
              rows="6"
              className="w-full bg-[#1a1c22] p-3 rounded-md outline-none focus:ring-2 focus:ring-[#34D399]"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <Button className="text-[#34D399] hover:cursor-pointer">
            <input
              type="submit"
              className="hover:cursor-pointer"
              value={"SEND MESSAGE"}
            />
          </Button>
        </form>
      </section>
    </Element>
  );
};

export default Contact;
