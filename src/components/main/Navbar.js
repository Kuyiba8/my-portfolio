import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ logoutButton }) => {
  const [nav, setNav] = useState("false");

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between  bg-blue-600 h-20 items-center fixed w-full ">
      <div className="text-5xl mx-3">KUYIBA</div>
      <ul className="hidden sm:flex">
        {links.map(({ id, link }) => (
          <li
            className="px-2 cursor-pointer border m-2 bg-slate-100 p-2 rounded-2xl duration-100 hover:scale-105 capitalize"
            key={id}
          >
            <Link className="text-blue-600" to={link} duration={500}>
              {" "}
              {link}
            </Link>
          </li>
        ))}
        <li
          className="px-8 mx-4 border flex justify-center items-center text-white py-2 cursor-pointer duration-100 hover:scale-105 capitalize"
          key={6}
        >
          {logoutButton}
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center bg-blue-600 items-center absolute top-0 left-0 w-full h-screen ">
          {links.map(({ id, link }) => (
            <li
              className="px-2 py-2 cursor-pointer duration-100 hover:scale-105 capitalize"
              key={id}
            >
              <Link onClick={() => setNav(!nav)} to={link} duration={500}>
                {" "}
                {link}
              </Link>
            </li>
          ))}
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

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { useAuth0 } from "@auth0/auth0-react"; // Import the useAuth0 hook
// // import LoginButton from "./components/main/Login";
// // import LogoutButton from "./components/main/Logout";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Destructure the authentication methods

//   const links = [
//     // Your links array
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//     },
//     {
//       id: 4,
//       link: "experience",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];

//   return (
//     <div className="flex justify-between  bg-blue-600 h-20 items-center fixed w-full">
//       <div className="text-5xl mx-3">KUYIBA</div>
//       <ul className="hidden sm:flex">
//         {links.map(({ id, link }) => (
//           // Your navigation links
//           <li
//             className="px-2 cursor-pointer border m-2 bg-slate-100 p-2 rounded-2xl duration-100 hover:scale-105 capitalize"
//             key={id}
//           >
//             <Link className="text-blue-600" to={link} duration={500}>
//               {" "}
//               {link}{" "}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 sm:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//       {nav && (
//         <ul className="flex flex-col justify-center bg-blue-600 items-center absolute top-0 left-0 w-full h-screen">
//           {links.map(({ id, link }) => (
//             // Your navigation links for mobile
//             <li
//               className="px-2 py-2 cursor-pointer duration-100 hover:scale-105 capitalize"
//               key={id}
//             >
//               <Link onClick={() => setNav(!nav)} to={link} duration={500}>
//                 {" "}
//                 {link}{" "}
//               </Link>
//             </li>
//           ))}
//           {/* Conditional rendering of login/logout button */}
//           {isAuthenticated ? (
//             <li className="px-2 py-2 cursor-pointer duration-100 hover:scale-105 capitalize">
//               <button onClick={() => logout()}>Logout</button>
//             </li>
//           ) : (
//             <li className="px-2 py-2 cursor-pointer duration-100 hover:scale-105 capitalize">
//               <button onClick={() => loginWithRedirect()}>Login</button>
//             </li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
