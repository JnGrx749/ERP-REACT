import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7tv1clo1w04l37h3.us.auth0.com"
      clientId="A8pUZYll46tVE8wDs5C8mz2sC6cbnJCq"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
