import { Element } from "react-scroll";
import EducationCard from "./EducationCard";
import { motion } from "motion/react";

const EducationSection = () => {
  const educationData = [
    {
      title: "Secondary School Certificate (SSC)",
      institute: "Rokonpur High School",
      years: "2021–2022",
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
      gpa: "4.64",
      subjectType: "Science",
      iconColor: "text-blue-400",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institute: "Rohanpur Yusuf Ali Govt. College",
      years: "2023–2024",
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
      gpa: "5.00",
      subjectType: "Humanities",
      iconColor: "text-green-400",
      subjects: ["Literature", "Sociology", "Economics", "History"],
    },
  ];

  return (
    <Element name="education" className=" rounded-2xl py-16 px-4 md:px-20">
      {/* <motion.h2
        style={{
          background: "linear-gradient(270deg, #60A5FA, #34D399, #60A5FA)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        Educational Journey
      </motion.h2> */}
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent mb-6 text-center">
        Educational Journey
      </h2>
      <p className="text-xl font-bold  mb-12 text-center text-white">
        Discover how academic excellence shapes innovative thinking and
        professional growth.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item}></EducationCard>
        ))}
      </div>
    </Element>
  );
};

export default EducationSection;
