import React from "react";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import nextjs from "../assets/skills/nextjs.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";

export default function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: node,
      title: "NODEJS",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: react,
      title: "REACTJS",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TAILWIND CSS",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-black from-gray-800 w-full h-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6 ">These are technologies I have worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="skills" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
