import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "achievements" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-black fixed z-[1000]">
      <div>
        <h1 className="text-3xl ml-2 font-bold hover:text-red-400 duration-200">
          Mohammed Afzal
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-red-400 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 hover:text-red-400 hover:scale-105 duration-200 md:hidden text-gray-500"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-red-400 duration-200"
              >
                <Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
