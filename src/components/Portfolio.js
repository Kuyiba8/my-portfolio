import React from "react";
import html from "./Sololearn/html.png";
import css from "./Sololearn/css.png";
import game from "./Sololearn/JavaScript.jpg";
import web from "./Sololearn/Web-Design.jpg";
import marketers from "./Sololearn/coding-marketers.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: html,
      href: "https://www.sololearn.com/profile/20793231",
    },
    {
      id: 2,
      src: css,
      href: "https://www.sololearn.com/profile/20793231",
    },
    {
      id: 3,
      src: game,
      href: "https://www.sololearn.com/profile/20793231",
    },
    {
      id: 4,
      src: web,
      href: "https://www.sololearn.com/profile/20793231",
    },
    {
      id: 5,
      src: marketers,
      href: "https://www.sololearn.com/profile/20793231",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-blue-300 to-cyan-500 w-full md:h-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold flex justify-center border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-center text-xl py-6">
            Track my progress and Check out some of my achievements
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  className="rounded-md duration-200 hover:scale-105"
                  alt=""
                />
              </a>
              <div className="flex justify-center items-center">
                <button className="w-full px-2 py-3 m-2 duration-200 hover:scale-105">
                  CERTIFICATE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
