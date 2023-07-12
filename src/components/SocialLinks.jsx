import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      visit: "https://github.com/afzal631/",
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      visit: "https://linkedin.com/in/mohammed-afzal/",
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      // style: "rounded-tr-md",
    },
    {
      id: 3,
      visit: "/",
      child: (
        <>
          6362983220 <BiSolidContact size={30} />
        </>
      ),
      // style: "rounded-tr-md",
    },
    // {
    //   id: 4,
    //   visit: { resume },
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   style: "rounded-br-md",
    // },
  ];
  return (
    <>
      <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, visit, child, style }) => {
            return (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${style}`}
              >
                <a
                  href={visit}
                  target="#"
                  className="flex justify-between items-center w-full text-white"
                >
                  <>{child}</>
                </a>
              </li>
            );
          })}
          <li
            className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 rounded-br-md"
          >
            <a
              download="resume.pdf"
              href={resume}
              className="flex justify-between items-center w-full text-white"
            >
              <>
                Resume <BsFillPersonLinesFill size={30} />
              </>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
