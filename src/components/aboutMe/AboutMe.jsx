import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const AboutMe = () => {
  const [copied, setCopied] = useState(false);

  const codeToCopy = `const josim = {
  name: "Md Josim Uddin",
  technologies: {
    frontEnd: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backEnd: ["Express.js", "Node.js"],
    databases: ["MongoDB", "Firebase"],
    tools: ["VS Code", "Figma", "GitHub" "vercel" , "Netlify"],
  },
  currentFocus: "Mastering Full Stack Web Development with MERN Stack.",
  funFact: "I love solving problems and making websites look beautiful!"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-[#0d1117] md:w-1/2 w-full  text-gray-100 font-mono text-sm p-4 rounded-xl shadow-xl max-w-4xl mx-auto  relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-[#161b22] px-2 py-1 rounded text-xs text-gray-400 hover:text-white transition"
      >
        {copied ? "✅ Copied!" : <FaRegCopy />}
      </button>

      <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-pink-400">Profile</span> = {"{\n"}
          <span className="">name</span>:{" "}
          <span className="text-amber-300">"Md Josim Uddin"</span>,{"\n  "}
          <span className="">technologies</span>: {"{\n    "}
          <span className="">frontEnd</span>: [
          <span className="text-amber-300">
            "React.js", "JavaScript" ,"Tailwind CSS", "HTML", "CSS"
          </span>
          ],{"\n    "}
          <span className="">backEnd</span>: [
          <span className="text-amber-300">"Express.js", "Node.js"</span>],
          {"\n    "}
          <span className="">databases</span>: [
          <span className="text-amber-300">"MongoDB", "Firebase"</span>],
          {"\n    "}
          <span className="">tools</span>: [
          <span className="text-amber-300">"VS Code", "Figma", "GitHub"</span>]
          {"\n  "}
          {"},\n  "}
          <span className="">currentFocus</span>:{" "}
          <span className="text-amber-300">
            "Mastering Full Stack Web Development with MERN Stack."
          </span>
          ,{"\n  "}
          <span className="">funFact</span>:{" "}
          <span className="text-amber-300">
            "I love solving problems and making websites look beautiful!"
          </span>
          {"\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
};

export default AboutMe;
