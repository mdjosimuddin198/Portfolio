import React from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "motion/react";
const ScrollTop = () => {
  return (
    <div>
      <div>
        <ScrollToTop
          smooth
          component={
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6, // একবার bounce এর সময়
                repeatType: "loop", // লুপ টাইপ
                ease: "easeInOut", // মুভমেন্ট স্মুথ হব
              }}
              className="flex items-center justify-center rounded-full text-xl"
            >
              {<FaArrowUp />}
            </motion.div>
          }
          style={{
            background: "linear-gradient(to bottom right, #60A5FA, #34D399)",
            borderRadius: "50%", // এই লাইনটাই রাউন্ড করবে
            color: "#ffffff",
            width: "48px",
            height: "48px",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollTop;
