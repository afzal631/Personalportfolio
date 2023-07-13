import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Contact() {
  
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b to-black from-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Get in touch
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7b740eae-e62a-418b-a090-afbdbdd0284a" method="POST" className="flex flex-col w-full md:w-1/2 gap-2">
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name "
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your email "
              required
            />
            <textarea
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              rows="10"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
            <button className="group flex gap-1 my-8 py-3 mx-auto px-6 items-center justify-center border-2 cursor-pointer border-white p-2 rounded-md duration-200 hover:border-black hover:bg-white hover:text-black">
              Let's Talk{" "}
              <span className="group-hover:rotate-45 duration-300 flex items-center  ">
                <RiSendPlaneFill />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
