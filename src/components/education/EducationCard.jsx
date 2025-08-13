import { FaCalendarAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";

const EducationCard = ({ item, "data-aos": aos, "data-aos-delay": delay }) => {
  const {
    title,
    institute,
    years,
    description,
    gpa,
    subjectType,
    iconColor,
    subjects,
  } = item;

  return (
    <div
      data-aos={aos}
      data-aos-deley={delay}
      className=" border-2 rounded-2xl p-6 w-full md:w-[47%] shadow-md transition- duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <FaUserGraduate className={`text-2xl text-[#30e88d]`} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex items-center text-gray-400 gap-2 mb-1">
        <PiStudent className="text-lg" />
        <span>{institute}</span>
      </div>

      <div className="flex items-center text-gray-400 gap-2 mb-3">
        <FaCalendarAlt className="text-sm" />
        <span>{years}</span>
      </div>

      <p className="text-gray-400 italic mb-4">{description}</p>

      <h4 className="font-semibold text-white mb-2">🎖️ Key Achievements</h4>
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-[#0f2f24] text-[#30e88d] px-3 py-1 rounded-full text-sm font-medium">
          👨‍🎓 GPA: {gpa}
        </span>
        <span className="bg-[#152741] text-[#30e88d] px-3 py-1 rounded-full text-sm font-medium">
          {subjectType}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {subjects.map((sub, idx) => (
          <span
            key={idx}
            className="bg-[#1c2941] text-[#30e88d] px-3 py-1 rounded-full text-sm"
          >
            {sub}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
