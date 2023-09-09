import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kuyiba-anthony-04b65a1a9/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Kuyiba8",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:akuyiba8@gmail.com",
    },
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
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      dowmload: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[40%] left-8 fixed">
      <ul className="">
        {links.map(({ id, child, href, dowmload }) => (
          <li
            key={id}
            className="flex justify-center items-center w-40 h-14 px-2 ml-[-120px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-500"
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

export default SocialLinks;
