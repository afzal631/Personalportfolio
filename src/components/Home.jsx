import React from "react";
import logo from "../Hero.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="h-full pt-40 pb-32 md:pt-16 md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 md:px-4  gap-6">
        <div className="text-white">
          <h2 className="text-3xl sm:text-2xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500">
            As a Full Stack Developer with 2 years of experience,<br/> I specialize
            in building and designing software solutions.<br/> My focus lies in web
            application development using a range of technologies such as <br/> React,
            Redux, Node.js, Express.js, and MongoDB.
          </p>
          <div className="flex mt-4">
            <Link to="projects" className="group flex gap-1 px-4 items-center border-2 cursor-pointer border-white p-2 rounded-md duration-200 hover:border-black hover:bg-white hover:text-black">
              Explore{" "}
              <span className="group-hover:rotate-90 duration-300">
                <FaLocationArrow />
              </span>
            </Link>
          </div>
          <div className="text-gray-500 justify-center pt-16 text-sm font-bold flex md:hidden">
            <ul className="flex justify-center items-center gap-3 cursor-pointer">
              <li className="flex items-center gap-1 hover:text-white">
                <a className="flex items-center gap-1" href="https://github.com/afzal631/">
                  <FaGithub />
                  github
                </a>
              </li>
              <li className="flex items-center gap-1 hover:text-white">
                <a className="flex items-center gap-1" href="/">
                  <FaLinkedin />
                  linkedIn
                </a>
              </li>
              <li className="flex items-center gap-1 hover:text-white">
                <a className="flex items-center gap-1" href="/">
                  <HiOutlineMail />
                  Gmail
                </a>
              </li>
              {/* <li className="flex items-center gap-1 hover:text-white"><a href="/"><BsFillPersonLinesFill/>Resume</a></li> */}
            </ul>
          </div>
        </div>

        <div>
          <img
            src={logo}
            alt="logo"
            width={370}
            height={470}
            className="rounded-2xl mx-auto w-2/3 md:w-[73%]"
          />
        </div>
      </div>
    </div>
  );
}
