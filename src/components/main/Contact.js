import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full flex justify-center items-center bg-gradient-to-b from-teal-300 to-cyan-800"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold flex justify-center border-b-4 border-gray-500">
            Contact
          </p>
          <p className="text-xl py-6 text-center">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/5f00f48f-abbc-4907-aa93-49252e8d4288"
            method="POST"
            className="flex flex-col w-full md:w-11/12"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 m-1 border-2 rounded-md focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 m-1 border-2 rounded-md focus:outline-none "
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Please write something here"
              className="p-2 m-1 border-2 rounded-md focus:outline-none "
            ></textarea>
            <button className=" bg-gradient-to-b from-cyan-500 to-green-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
