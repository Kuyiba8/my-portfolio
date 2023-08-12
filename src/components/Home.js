import React from "react";
import tony from "./Images/tony.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-full pt-20 w-full bg-slate-200 ">
      <div className="w-full mx-auto flex flex-col items-center justify-evenly h-full px-2 sm:flex-row">
        <div className="flex flex-col justify-center ">
          <h2 className="md:ml-20 text-3xl sm:text-5xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-xl py-4 md:ml-20 ">
            I have one year of experience building and designing software.
            Currently, i love to work on web applcation using technologies like
            React, Tailwindcss and Next JS.
          </p>
          <div className="ml-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group p-2 w-2/5 md:ml-20 border rounded-2xl bg-green-400 cursor-pointer flex items-center"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <GoArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="sm:mt-20 py-4 h-auto sm:w-3/4 lg:w-3/6">
          <img
            className=" w-2/4 sm:w-full md:w-3/4 rounded-full hover:scale-110 mx-auto"
            src={tony}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
