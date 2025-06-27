import React, { useState } from "react";

const AboutMe = () => {
  const [copied, setCopied] = useState(false);

  const codeToCopy = `const josim = {
  name: "Md Josim Uddin",
  pronouns: "He/Him",
  role: "Frontend Developer",
  country: "Bangladesh",
  skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"],
  learning: ["Full Stack Development", "React.js", "Express.js", "MongoDB", "UI/UX Basics"],
  askMeAbout: ["Frontend Development", "Backend with Express.js", "Database with MongoDB & Firebase"],
  technologies: {
    frontEnd: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backEnd: ["Express.js", "Node.js"],
    databases: ["MongoDB", "Firebase"],
    tools: ["VS Code", "Figma", "GitHub"],
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
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>

      <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-pink-400">josim</span> = {"{\n"}
          {"  "}
          <span className="text-blue-400">name</span>:{" "}
          <span className="text-green-400">"Md Josim Uddin"</span>,{"\n  "}
          <span className="text-blue-400">pronouns</span>:{" "}
          <span className="text-green-400">"He/Him"</span>,{"\n  "}
          <span className="text-blue-400">role</span>:{" "}
          <span className="text-green-400">"Frontend Developer"</span>,{"\n  "}
          <span className="text-blue-400">country</span>:{" "}
          <span className="text-green-400">"Bangladesh"</span>,{"\n  "}
          <span className="text-blue-400">skills</span>: [
          <span className="text-green-400">
            "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
            "Express.js", "MongoDB", "Firebase"
          </span>
          ],{"\n  "}
          <span className="text-blue-400">learning</span>: [
          <span className="text-green-400">
            "Full Stack Development", "React.js", "Express.js", "MongoDB",
            "UI/UX Basics"
          </span>
          ],{"\n  "}
          <span className="text-blue-400">askMeAbout</span>: [
          <span className="text-green-400">
            "Frontend Development", "Backend with Express.js", "Database with
            MongoDB & Firebase"
          </span>
          ],{"\n  "}
          <span className="text-blue-400">technologies</span>: {"{\n    "}
          <span className="text-blue-400">frontEnd</span>: [
          <span className="text-green-400">
            "React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"
          </span>
          ],{"\n    "}
          <span className="text-blue-400">backEnd</span>: [
          <span className="text-green-400">"Express.js", "Node.js"</span>],
          {"\n    "}
          <span className="text-blue-400">databases</span>: [
          <span className="text-green-400">"MongoDB", "Firebase"</span>],
          {"\n    "}
          <span className="text-blue-400">tools</span>: [
          <span className="text-green-400">"VS Code", "Figma", "GitHub"</span>]
          {"\n  "}
          {"},\n  "}
          <span className="text-blue-400">currentFocus</span>:{" "}
          <span className="text-green-400">
            "Mastering Full Stack Web Development with MERN Stack."
          </span>
          ,{"\n  "}
          <span className="text-blue-400">funFact</span>:{" "}
          <span className="text-green-400">
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
