import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const TypeingEffect = () => {
  return (
    <>
      <h2 className="text-5xl ">
        {/* if i  want an animation for it  */}
        {/* <motion.span
          animate={{
            color: ["#ff014f", "#ebc034"],
            transition: { duration: 4, repeat: Infinity },
          }}
        >
          <Typewriter
            words={["Developer", "Professional Coader"]}
            loop={true}
            cursor
            cursorColor="|"
            delaySpeed={1000}
            deleteSpeed={50}
          ></Typewriter>
        </motion.span> */}
        A{" "}
        <span>
          <Typewriter
            words={[
              " Front-End Developer",
              " React Developer",
              " Pixel Perfect Coder",
              " Web App Builder",
            ]}
            loop={true}
            cursor
            cursorColor="|"
            delaySpeed={1000}
            deleteSpeed={50}
          ></Typewriter>
        </span>
      </h2>
    </>
  );
};

export default TypeingEffect;
