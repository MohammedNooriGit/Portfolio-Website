import React from "react";
import Avatar from "./Avatar";
import { TopCurve } from "./Blob";
import odu from "../assets/ODU.png";
import pvcc from "../assets/pvcc.png";
import udemy from "../assets/udemy.png";
import { motion } from "framer-motion";

export default function Education() {
  const textAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.7 },
    },
  };

  const cardAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.7 },
    },
  };

  return (
    <motion.div
      className="relative min-h-[800px] w-full bg-first dark:bg-dfirst"
      transition={{ staggerChildren: 0.1 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <TopCurve />
      <div className="container mx-auto relative px-4">
        <motion.h1
          className="text-center sm:text-right font-Poppins py-16 text-5xl uppercase font-bold relative text-swhite"
          variants={textAnimate}
        >
          education
        </motion.h1>
      </div>
      <div className="text-center relative px-4 flex flex-row place-content-evenly container mx-auto flex-wrap gap-4 pt-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={cardAnimate}
          className="flex flex-col flex-nowrap gap-6 items-center w-[300px] bg-swhite p-6 rounded-3xl text-[#000] h-fit"
        >
          <Avatar url={odu} />
          <h1 className="text-xl sm:text-2xl font-Poppins">
            Old Dominion University
          </h1>
          <p className="font-Raleway text-lg sm:text-xl">
            Currently Attending Old Dominion University and will complete my
            bachelor in the spring of 2024
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={cardAnimate}
          className="flex flex-col flex-nowrap gap-6 items-center w-[300px] bg-swhite p-6 rounded-3xl text-[#000] h-fit"
        >
          <Avatar url={pvcc} />
          <h1 className="text-xl sm:text-2xl font-Poppins">
            Piedmont Virginia Community College
          </h1>
          <p className="font-Raleway text-lg sm:text-xl">
            Associate of Science in Computer Science
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={cardAnimate}
          className="flex flex-col flex-nowrap gap-6 items-center w-[300px] bg-swhite p-6 rounded-3xl text-[#000] h-fit"
        >
          <Avatar url={udemy} />
          <h1 className="text-xl sm:text-2xl font-Poppins">Udemy</h1>
          <p className="font-Raleway text-lg sm:text-xl">
            The Complete 2022 Web Development Bootcamp by Angela Yu
          </p>
          <p className="font-Raleway text-xl">React The Complete Guide</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
