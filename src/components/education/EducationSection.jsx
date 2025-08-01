import { Element } from "react-scroll";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  const educationData = [
    {
      title: "Secondary School Certificate (SSC)",
      institute: "Rokonpur High School",
      years: "2019–2020",
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
      years: "2021–2022",
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
      gpa: "5.00",
      subjectType: "Arts",
      iconColor: "text-green-400",
      subjects: ["Literature", "Sociology", "Economics", "History"],
    },
  ];

  return (
    <Element
      name="education"
      className="bg-[#0c1120] rounded-2xl py-16 px-4 md:px-20"
    >
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
        Educational Journey
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
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
