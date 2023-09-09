import React from "react";
import html from "../web logos/html.png";
import css from "../web logos/css.png";
import javascript from "../web logos/javascript.png";
import react from "../web logos/react.png";
import github from "../web logos/github.png";
import tailwindcss from "../web logos/tailwindcss.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-300",
      href: "https://react.dev/learn",
    },
    {
      id: 5,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
      href: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
    },
    {
      id: 6,
      src: tailwindcss,
      title: "Tailwindcss",
      style: "shadow-blue-600",
      href: "https://tailwindcss.com/docs/installation",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-green-300 to-green-900 w-full h-full"
    >
      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 flex justify-center">
            Experience
          </p>
          <p className="py-6 text-xl text-center">
            These are the technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 items-center sm:px-0">
          {techs.map(({ id, src, title, style, href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <a href={href} alt="" target="_blank" rel="noreferrer">
                <img src={src} alt="" className="w-20 mx-auto" />
              </a>
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
