import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { motion } from "framer-motion";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      github: "github",
      website: "https://github.com",
    },
    {
      id: 2,
      src: installNode,
      github: "github",
      website: "https://github.com",
    },
    {
      id: 3,
      src: navbar,
      github: "github",
      website: "https://github.com",
    },
    {
      id: 4,
      src: reactParallax,
      github: "github",
      website: "https://github.com",
    },
    {
      id: 5,
      src: reactSmooth,
      github: "github",
      website: "https://github.com",
    },
    {
      id: 6,
      src: reactWeather,
      github: "github",
      website: "https://github.com",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, type: "tween" }}
              whileTap={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
            >
              <div className=" cursor-pointer">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105 group shadow-md cursor-pointer shadow-gray-600"
                />
                <div className="flex flex-col justify-start items-start p-3 ">
                  <p className="text-md pt-3  font-bold inline border-b-4 border-gray-500 ">
                    Description
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-white pt-3">
                    Sit do commodo cupidatat consequat eu qui sit nostrud
                    eiusmod aliquip sint mollit dolor enim.{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
