import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="shadow bg-first text-swhite font-Poppins w-full">
      <div className="h-16 mx-auto pr-8 flex flex-row-reverse items-center relative z-[1] justify-between">
        <ul className="flex gap-5 sm:gap-9">
          <li>
            <a className="hover:text-third sm:text-lg" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-third sm:text-lg" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-third sm:text-lg" href="#education">
              Education
            </a>
          </li>
        </ul>
        <div className="pl-6">
          <ul className="flex gap-9">
            <li>
              <a
                href="https://github.com/MohammedNooriGit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-third"
              >
                <FaGithub size="35px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohammed-noori-270a75239/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-third"
              >
                <FaLinkedin size="35px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
