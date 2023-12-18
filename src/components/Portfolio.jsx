import React from "react";
import moviedb from "../assets/portfolio/moviedb.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import contactApp from "../assets/portfolio/contact-app.png";
import signup from "../assets/portfolio/signup.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

import { motion } from "framer-motion";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: moviedb,
      github: "https://github.com/afzal631/",
      website: "https://afzal-moviedb.vercel.app/",
      desc: "Developed a movie listing web application using Next.js, Tailwind CSS, and the Fetch API. Leveraged the powerful features of Next.js, including server-side rendering and built-in routing with Next.js's App Router, to create a fast and seamless user experience.",
    },
    {
      id: 2,
      src: ecommerce,
      github: "https://github.com/afzal631/",
      website: "https://afzal-ecommmerce.vercel.app/",
      desc: "Designed and developed a responsive ecommerce website using React.js, Tailwind CSS, and Redux. Leveraged APIs to fetch product data, implement shopping cart functionality, and facilitate seamless payment processing. ",
    },
    {
      id: 3,
      src: signup,
      github: "https://github.com/afzal631/",
      website: "https://afzal-registerapp.vercel.app/",
      desc: "The project is a registration app with sign-in and login functionality, built using React, Tailwind CSS, Material-UI, Firebase, and the Context API. It ensures secure authentication through Firebase. The Context API enables efficient state management for a seamless user experience.",
    },
    {
      id: 4,
      src: contactApp,
      github: "https://github.com/afzal631/Personalportfolio",
      desc: "Simplify contact management with our MERN stack app. React, Tailwind CSS, MongoDB, and Express.js power a secure, intuitive experience. JWT verification and encrypted passwords ensure data safety. Efficient state management via React's Context API enhances usability. Streamline your contacts effortlessly!.",
      website: "https://contact-app-frontend-lfgdyexb3-afzal631.vercel.app/",
    },
    // {
    //   id: 4,
    //   src: reactParallax,
    //   github: "github",
    //   website: "https://github.com",
    // },
    // {
    //   id: 5,
    //   src: reactSmooth,
    //   github: "github",
    //   website: "https://github.com",
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    //   github: "github",
    //   website: "https://github.com",
    // },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full py-32 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, desc, website, github }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "tween" }}
              whileTap={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
            >
              <a href={website} target="#" className=" cursor-pointer">
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
                    {desc}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  {/* <a href={website} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                    Demo
                  </a> */}
                  {/* <a href={github} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100 flex justify-center">
                    Code
                  </a> */}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
