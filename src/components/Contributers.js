import React from "react";
import john from "./Images/john.png";

const Contributers = () => {
  return (
    <div className="w-full h-full pt-4 pb-10">
      <div>
        <div className="pb-4">
          <p className="text-4xl font-bold flex flex-wrap justify-center border-b-4 border-gray-500">
            Contributers
          </p>
          <p className="text-xl p-4 text-center">
            get in touch with Contributers to experience more
          </p>
        </div>
        <div className="sm:flex">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="px-6 md:pl-20 mx-auto w-full text-center">
              It is impossible to build a website like this one from scratch
              without the help of “foundational-level” people. Special thanks
              to: Mr Darkwa John ( "currently studying computer science at Kwame
              Nkruma Uinversity of Science and Technology" ), a passionate full
              stack developer, who always offers a timely word of encouragement
              especially during the moments when I felt overwhelmed by the
              subject matter, which motivated me to persevere and embrace the
              learning process. I look forward to the possibility of future
              collaborations and hope to learn from his expertise in the years
              to come. you can check out his works right here:{" "}
              <a
                href="https://www.youtube.com/channel/UCzU6QYLkI7WJi-KGMJcevGw"
                className="text-lg text-blue-500 underline rounded-3xl m-2"
                target="_blunk"
              >
                CodeWithDarkwa
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={john}
              alt=""
              className="rounded-full duration-200 m-3 hover:scale-105 w-2/5 sm:w-3/5"
            />
            <p className="m-2 p-2 hover:scale-105 text-2xl">Darkwa John</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributers;
