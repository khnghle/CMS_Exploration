import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";

import initStoryBlok from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/lookUp",
    element: <div>Hello World</div>,
  },
]);

initStoryBlok();
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
