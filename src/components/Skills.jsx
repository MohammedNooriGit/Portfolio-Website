import React from "react";
import { motion } from "framer-motion";
import { BottomWave, TopWave } from "./Blob";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const textAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.7 },
    },
  };

  const logoAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.7 },
    },
  };

  return (
    <motion.div
      className="relative min-h-fit bg-second dark:bg-dsecond py-20"
      transition={{ staggerChildren: 0.05 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <TopWave />
      <div className="container mx-auto relative px-4">
        <motion.h1
          className="text-center sm:text-left font-Poppins py-16 text-5xl uppercase font-bold relative text-swhite"
          variants={textAnimate}
        >
          Skills
        </motion.h1>
      </div>
      <div className="container mx-auto relative px-4 pt-20">
        <div className="gap-x-4 gap-y-4 text-2xl flex flex-row sm:gap-x-12 sm:gap-y-20 sm:text-[2.5rem] flex-wrap justify-center text-swhite font-Poppins">
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <IoLogoJavascript /> Javascript
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <AiFillHtml5 />
              <DiCss3 /> HTML / CSS
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <SiCplusplus /> C++
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <FaJava /> Java
            </motion.h3>
          </div>
          <motion.h3
            className="flex flex-row items-center gap-3"
            variants={logoAnimate}
          >
            <FaReact /> React
          </motion.h3>

          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <FaBootstrap /> Bootstrap
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <SiTailwindcss /> Tailwindcss
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <SiMongodb /> MongoDB
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <SiFramer /> Framer Motion
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <FaNodeJs /> Node.js / Express
            </motion.h3>
          </div>
          <div>
            <motion.h3
              className="flex flex-row items-center gap-3"
              variants={logoAnimate}
            >
              <FaGitAlt /> Git
            </motion.h3>
          </div>
        </div>
      </div>
      <BottomWave />
    </motion.div>
  );
}
