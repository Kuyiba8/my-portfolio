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
