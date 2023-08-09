import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginControl = (props) => {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <Login />;
  }
  return <Signup />;
};

export default LoginControl;
