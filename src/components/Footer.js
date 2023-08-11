import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 4,
      child: (
        <>
          facebook <BsFacebook size={30} />
        </>
      ),
      href: "https://web.facebook.com/kuyiba.anthony.5",
    },
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "http://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "http://github.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tony@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/kuyiba-resume-1.pdf",
      dowmload: true,
    },
  ];
  return (
    <div className="lg:hidden bg-gray-600">
      <div className="border-none p-3">
        <p className="text-green-400 text-center capitalize">
          You can also reach me <br />
          through the following links:
        </p>
      </div>
      <ul className="flex justify-center flex-wrap items-center">
        {links.map(({ id, child, href, dowmload }) => (
          <li
            key={id}
            className="flex justify-center items-center w-40 h-14 p-2 m-2 rounded-md hover:rounded-md duration-300 bg-green-300 hover:bg-green-600"
          >
            <a
              className="flex justify-center items-center w-full"
              href={href}
              download={dowmload}
              target="_blunk"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
