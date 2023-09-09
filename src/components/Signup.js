import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MainContent from "./components/MainContent";
import LoginButton from "./components/main/Login";
import LogoutButton from "./components/main/Logout";

const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <MainContent logoutButton={<LogoutButton />} />
    </div>
  ) : (
    <div>
      <LoginButton />
    </div>
  );
};

export default Profile;






import React from "react";
import Navbar from "./Navbar";

const MainContent = ({ logoutButton }) => {
  return (
    <div>
      <Navbar logoutButton={logoutButton} />
      {/* Your main content here */}
      <p>Welcome to the main content.</p>
    </div>
  );
};

export default MainContent;







import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ logoutButton }) => {
  // ... (your existing Navbar code)

  return (
    <div className="flex justify-between bg-blue-600 h-20 items-center fixed w-full">
      {/* ... (your existing Navbar code) */}
      <ul className="hidden sm:flex">
        {/* ... (your existing Navbar code) */}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 sm:hidden"
      >
        {/* ... (your existing Navbar code) */}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center bg-blue-600 items-center absolute top-0 left-0 w-full h-screen">
          {/* ... (your existing Navbar code) */}
          <li
            className="px-2 py-2 cursor-pointer duration-100 hover:scale-105 capitalize"
            key={6}
          >
            {logoutButton}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;





