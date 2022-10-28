import React from "react";
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
  return (
    <div className="relative min-h-fit bg-second py-20">
      <TopWave />
      <div className="container mx-auto relative px-4">
        <h1 className="text-center sm:text-left font-Poppins py-16 text-5xl uppercase font-bold relative text-swhite">
          Skills
        </h1>
      </div>
      <div className="container mx-auto relative px-4 pt-20">
        <div className="gap-x-4 gap-y-4 text-2xl flex flex-row sm:gap-x-12 sm:gap-y-20 sm:text-[2.5rem] flex-wrap justify-center text-swhite font-Poppins">
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <IoLogoJavascript /> Javascript
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <AiFillHtml5 />
              <DiCss3 /> HTML / CSS
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <SiCplusplus /> C++
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <FaJava /> Java
            </h3>
          </div>
          <h3 className="flex flex-row items-center gap-3">
            <FaReact /> React
          </h3>

          <div>
            <h3 className="flex flex-row items-center gap-3">
              <FaBootstrap /> Bootstrap
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <SiTailwindcss /> Tailwindcss
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <SiMongodb /> MongoDB
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <SiFramer /> Framer Motion
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <FaNodeJs /> Node.js / Express
            </h3>
          </div>
          <div>
            <h3 className="flex flex-row items-center gap-3">
              <FaGitAlt /> Git
            </h3>
          </div>
        </div>
      </div>
      <BottomWave />
    </div>
  );
}
