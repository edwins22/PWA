import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "bootswatch/dist/darkly/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain= "dev-3zmvhxsi7kwks3yk.us.auth0.com"
      clientId="hbepmJ9TodtMU0PK7pGTkOKGJfzYGiYu"
      redirectUri={window.location.origin}
      >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
