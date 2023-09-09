import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../main/login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-full text-3xl h-screen flex justify-center items-center">
      <button className="button" onClick={() => loginWithRedirect()}>
        Let's get started
      </button>
    </div>
  );
};

export default LoginButton;

//box-shadow: 0 1rem 2rem green;

//  width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="flex justify-center">
//       <div className="flex border p-2 w-2/5">
//         <form className="">
//           <h2 className="text-center">Login</h2>
//           <div className="">
//             <label htmlFor="email">Email: </label>
//             <br />
//             <input
//               className="border p-2 rounded-2xl border-green-300"
//               type="text"
//               name="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="m-1">
//             <label htmlFor="password">Password: </label>
//             <br />
//             <input
//               className="border p-2 rounded-2xl border-green-300"
//               type="password"
//               name="password"
//               placeholder="Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//       <div className="border p-3 w-2/5">
//         <p>my profile picture</p>
//       </div>
//     </div>
//   );
// };

// export default Login;
