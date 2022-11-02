import React from "react";
import myPic from "../assets/myPic.png";
import RightSideDivider from "./RightSideDivider";
import Blob from "./Blob";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <div className="bg-first dark:bg-dfirst h-[800px] w-full">
      <RightSideDivider />
      <Blob />
      <div className="container mx-auto">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="sm:grid sm:justify-center sm:items-center">
            <div className="pt-40 text-center relative sm:text-left px-4 text-swhite sm:w-2/4">
              <h1 className="text-[3.25rem] leading-[4.5rem]  font-Montserrat sm:font-bold sm:text-9xl">
                Hello I'm Mohammed
              </h1>
              <p className="text-3xl font-Poppins sm:text-6xl">
                A{" "}
                <span className="text-primary dark:text-dfirst bg-swhite rounded-lg leading-[2] px-4">
                  Software Engineer
                </span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div>
          <motion.div
            drag={true}
            whileDrag={{ scale: 1.3 }}
            dragSnapToOrigin
            className="absolute right-1/3 -bottom-[25%]"
          >
            {/* <img className="relative" src={myPic} alt="avatar" /> */}
            <div className="flex flex-col flex-nowrap gap-6 items-center max-w-[300px] bg-swhite p-6 rounded-3xl text-[#000] min-h-fit">
              <Avatar url={myPic} />
              <h1 className="text-xl sm:text-2xl font-Poppins">About Me</h1>
              <p className="font-Raleway text-sm sm:text-base text-center">
                I'm a computer science student, and a tech enthusiast. I am
                passionate about creating quality software and web applications.
                I’m always eager to expand my knowledge and learn new
                information.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
