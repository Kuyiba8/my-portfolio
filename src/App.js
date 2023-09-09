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
