import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data";
import { FaGithub } from "react-icons/fa";

export default function Card() {
  const [isClicked, setIsClicked] = useState(false);

  const [foundIt, setFoundIt] = useState({
    title: "",
    content: "",
    image: "",
    github: "",
    liveDemo: "",
  });

  function handleClick(event) {
    const elementId = event.currentTarget.id;
    setIsClicked(!isClicked);
    data.forEach((item) => {
      if (item.id === elementId) {
        setFoundIt({
          title: item.title,
          content: item.content,
          image: item.image,
          liveDemo: item.liveDemo,
          github: item.GitHub,
        });
      }
    });
  }

  const cardAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.5 },
    },
  };

  return (
    <motion.div
      layout
      transition={{ duration: 1, type: "spring", stiffness: 600, damping: 30 }}
    >
      {isClicked && (
        <motion.div className="h-fit max-w-full bg-swhite text-[#000] rounded-[2rem] card">
          <img src={foundIt.image} alt="card-img" />
          <div className="card-body">
            <h2 className="card-title">{foundIt.title}</h2>
            <p className="text-left">{foundIt.content}</p>
            <div className="card-actions justify-end">
              <a
                class="btn btn-primary dark:btn-secondary"
                href={foundIt.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                class="btn btn-primary  dark:btn-secondary"
                href={foundIt.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="px-1">
                  <FaGithub size="20px" />
                </i>{" "}
                GitHub
              </a>
              <button
                onClick={() => setIsClicked(!isClicked)}
                class="btn text-swhite"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {!isClicked && (
        <motion.div
          className="grid grid-rows-2 justify-center gap-5"
          transition={{ staggerChildren: 0.15 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="flex flex-row gap-5">
            <motion.div
              key="1"
              id="1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleClick}
              className="h-[10.5rem] w-[10.5rem] sm:h-[11.5rem] sm:w-[11.5rem] bg-swhite rounded-[2rem]"
              variants={cardAnimate}
            >
              <h1 className="flex flex-col h-full w-full justify-center text-[#000] font-Montserrat font-bold text-lg">
                Secrets
              </h1>
            </motion.div>
            <motion.div
              key="2"
              id="2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleClick}
              className="h-[10.5rem] w-[10.5rem] sm:h-[11.5rem] sm:w-[11.5rem] bg-swhite rounded-[2rem]"
              variants={cardAnimate}
            >
              <h1 className="flex flex-col h-full w-full justify-center text-[#000] font-Montserrat font-bold text-lg">
                To Do List
              </h1>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-row gap-5">
            <motion.div
              key="3"
              id="3"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleClick}
              className="h-[10.5rem] w-[10.5rem] sm:h-[11.5rem] sm:w-[11.5rem] bg-swhite rounded-[2rem]"
              variants={cardAnimate}
            >
              <h1 className="flex flex-col h-full w-full justify-center text-[#000] font-Montserrat font-bold text-lg">
                Blog Site
              </h1>
            </motion.div>
            <motion.div
              key="4"
              id="4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleClick}
              className="h-[10.5rem] w-[10.5rem] sm:h-[11.5rem] sm:w-[11.5rem] bg-swhite rounded-[2rem]"
              variants={cardAnimate}
            >
              <h1 className="flex flex-col h-full w-full justify-center text-[#000] font-Montserrat font-bold text-lg">
                Newsletter Signup
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
