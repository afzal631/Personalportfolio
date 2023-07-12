import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      visit: "https://github.com/",
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      visit: "https://linkedin.com/",
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
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      // style: "rounded-tr-md",
    },
    {
      id: 4,
      visit: "/",
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
    },
  ];
  return (
    <>
      <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, visit, child, style }) => {
            return (
              <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${style}`}>
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
        </ul>
      </div>
    </>
  );
}
