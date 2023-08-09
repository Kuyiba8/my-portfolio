import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex border p-2 w-2/5">
        <form className="">
          <h2 className="text-center">Signup</h2>
          <div className="">
            <label htmlFor="name">Fullname: </label>
            <br />
            <input
              className="border p-2 rounded-2xl border-green-300"
              type="text"
              name="name"
              placeholder="Your Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="email">Email: </label>
            <br />
            <input
              className="border p-2 rounded-2xl border-green-300"
              type="text"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="m-1">
            <label htmlFor="password">Password: </label>
            <br />
            <input
              className="border p-2 rounded-2xl border-green-300"
              type="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Already have an account. <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="border p-3 w-2/5">
        <p>my profile picture</p>
      </div>
    </div>
  );
};

export default Signup;
