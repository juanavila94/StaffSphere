import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/redux/store/store";
import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-a5lp6h1utxb70h27.us.auth0.com";
const clientId = "KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj";

//--------FOR LOCAL USE UNCOMMENT THIS LINK----------------
axios.defaults.baseURL = "http://localhost:3001";

//-------FOR DEPLOYMENT VERSION UNCOMMENT THIS LINK--------
// axios.defaults.baseURL = "https://pfbackend-production-f5f5.up.railway.app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            //----FOR LOCAL--->
            redirect_uri: "http://localhost:3000/authorization",

            //----FOR DEPLOYMENT--->
            // redirect_uri: "https://pf-front-end.vercel.app/authorization",            

            //set this route in callback at Auth0
            audience: "staffsphere identifier",
            scope: "openid profile email",
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

// domain
//dev-a5lp6h1utxb70h27.us.auth0.com

//clientID
//KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj
