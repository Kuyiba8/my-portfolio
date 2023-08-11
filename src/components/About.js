import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-cyan-300 to-emerald-500"
    >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold flex justify-center border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <div className="m-5">
          <p className="text-xl text-center">
            If the world is building, I also want to contribute a nail... <br />
            I'm all about turning ideas into reality. I thrive on challenges
            that push my creative boundaries and lead to innovative solutions.
            My work is a reflection of my commitment to my dreams. I'm in a
            person of Kuyiba Anthony, a passionate Pharmacy Technician and in
            addition a computer programer with a knack for dispensing of
            medicines. My dream is to become a full stack developer targeting
            the field of pharmacy and health at large. My journey in computer
            programming began during my tertiary school days, where I discovered
            my fascination for web and mobile app development. Balancing work
            with coding actually keeps me inspired and energized.
          </p>
          <br />
          <p className="text-xl text-center">
            My philosophy centers around user-centric design and meticulous
            attention to detail. I'm excited to connect with fellow enthusiasts,
            computer programers and software engineers to collaborate on new
            ventures, and continue pushing the boundaries of what's possible.
            Feel free to reach out to me at akuyiba8@gmail.com or connect
            through the Social Media Links provided and let's discuss how we can
            work together to make digital magic happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
