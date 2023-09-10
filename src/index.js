import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-0qvsiimwi6z7pwdv.us.auth0.com"
    clientId="zJVZ80gR4OR6yLYQgPQJl2p59yzaNlDP"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
