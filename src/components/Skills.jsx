import React from "react";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import nextjs from "../assets/skills/nextjs.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import { motion } from "framer-motion";

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
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full py-32 text-white md:h-full"
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
            <motion.div
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              initial={{ scale: 0.8 ,}}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, type: "tween" }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              key={id}
              className={`shadow-md  py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="skills" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
