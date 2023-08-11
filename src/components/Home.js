import React from "react";
import myProfile from "./Images/profile.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-full pt-20 w-full bg-teal-600 ">
      <div className="w-screen mx-auto flex flex-col items-center justify-evenly h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center ">
          <h2 className="text-3xl sm:text-5xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-xl py-4 w-96">
            I have one year of experience building and designing software.
            Currently, i love to work on web applcation using technologies like
            React, Tailwindcss and Next JS.
          </p>
          <div className="ml-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group p-2 border rounded-2xl bg-green-400 cursor-pointer flex items-center"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <GoArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="sm:mt-20 py-4 h-auto sm:w-2/5 lg:w-2/6">
          <img
            className=" w-2/4 sm:w-full md:w-2/4 rounded-full mx-auto"
            src={myProfile}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
