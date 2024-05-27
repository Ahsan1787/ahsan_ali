import React from "react";
import aboutDay from "../assets/aboutday.png";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
import { FaTowerBroadcast } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <div className="p-4">
      <div className="h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-110 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img src={aboutDay} alt="" className="w-full lg:h-48 h-[200px] object-cover object-center " />
        </a>

        <div className="flex flex-col lg:gap-3 p-4">
          <div>
            <h2 className="tracking-widest text-2xl text-white">About Day</h2>
          </div>
          <div>
            <h1 className="text-lg lg:text-xl font-bold text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, laboriosam vel dolore cupiditate quidem quisquam eos quo
              voluptatibus quae aut.
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <a href="">
              <AiFillGithub className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-500"/>
            </a>
            <a href="">
              <FaTowerBroadcast className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-500"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
