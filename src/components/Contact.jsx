import React from "react";
import { FaWalkieTalkie } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="/" className="flex flex-col w-full md:w-1/2 gap-2">
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name "
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="emai"
              name="email"
              placeholder="Enter your emal "
            />
            <textarea
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              rows="10"
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <button className="group flex gap-1 my-8 py-3 mx-auto px-6 items-center justify-center border-2 cursor-pointer border-white p-2 rounded-md duration-200 hover:border-black hover:bg-white hover:text-black">
              Let's Talk{" "}
              <span className="group-hover:rotate-90 duration-300 flex items-center">
                <FaWalkieTalkie />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
