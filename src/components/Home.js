import React from "react";
import myProfile from "./Images/profile.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-full w-full ">
      <div className="w-screen mx-auto flex flex-col items-center justify-evenly h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-5xl font-bold">my name is kuyiba</h2>
          <p className="py-4 w-96">
            i am a pharmacy technician at ashanti mampong government hospital i
            enjoy faming very much i am also interestedd in programing i have
            learn more than four programing languages
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
        <div className="sm:mt-20 py-4 h-full sm:w-2/5 lg:w-2/6">
          <img
            className=" w-2/3 sm:w-full rounded-2xl mx-auto"
            src={myProfile}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
