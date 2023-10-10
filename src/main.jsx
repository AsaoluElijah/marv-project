import React from "react";

import "./index.css";
import "./main.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Map from "./routes/Map";
import Faq from "./routes/Faq";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./routes/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/navigate",
    element: <Navigation />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
