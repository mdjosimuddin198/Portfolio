import React from "react";
import programmer from "../../lottiefiles/Animation - 1751050176065.json";
import Lottie from "lottie-react";
const AboutMeImgae = () => {
  return (
    <Lottie
      className=" md:w-1/2 w-full"
      animationData={programmer}
      loop={true}
    ></Lottie>
  );
};

export default AboutMeImgae;
