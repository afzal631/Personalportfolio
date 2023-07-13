import React, { useEffect, useState } from "react";
import "./about.css";
import { BiDownload } from "react-icons/bi";
import profile from "../assets/0003.svg";
import profile2 from "../assets/0006.svg";
import resume from "../assets/resume.pdf";

export default function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 978);
    };
    window.addEventListener("resize", handleResize);

    setIsSmallScreen(window.innerWidth <= 978);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      name="about"
      className="w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="about__container container grid mt-32">
          <div className="about__image border-2 flex justify-center  border-gray-300 rounded-lg  ">
            {isSmallScreen ? (
              <img src={profile2} alt="memobilescreen" className="about__img" />
            ) : (
              <img src={profile} alt="melaptopscreen" className="about__img" />
            )}
          </div>

          <div className="about__data ">
            <div className="about__info grid">
              <div className="about__box ">
                <i class="fa fa-briefcase"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">
                  1.5 years <br />{" "}
                </span>
                <div className="overlay"></div>
              </div>
              <div className="about__box">
                <i class="fa fa-star" aria-hidden="true"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">3 + Projects </span>
                <div className="overlay"></div>
              </div>
              <div className="about__box ">
                <i class="fa fa-headphones"></i>
                <h3 className="about__title">Certifications</h3>
                <span className="about__subtitle  ">4 </span>
                <div className="overlay"></div>
              </div>
            </div>

            <p className="about__description text-gray-300 ">
              As a Frontend Developer, I specialize in creating captivating web
              UI/UX interfaces. With extensive knowledge of various
              technologies, I consistently upskill my skills. Download my resume
              below to learn more about my expertise.
            </p>
            <div className="flex items-center justify-center sm:justify-start ">
              <a
                download="resume.pdf"
                href={resume}
                className="mt-4 border-white border-2 rounded-md p-3 flex justify-center items-center gap-2 hover:bg-green-400 hover:text-black hover:scale-105  "
              >
                Download CV <BiDownload /> <i class="fa fa-file-pdf-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
