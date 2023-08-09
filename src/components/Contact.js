import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full flex justify-center items-center bg-gradient-to-b from-blue-300 to-blue-900 text-green-500"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="">
          <form
            action="https://getform.io/f/5f00f48f-abbc-4907-aa93-49252e8d4288"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-yellow-200 border-2 rounded-md text-green-500 focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 m-2 bg-yellow-200 border-2 rounded-md text-green-500 focus:outline-none "
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-green-400 focus:outline-none "
            ></textarea>
            <button className="text-green-500 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
