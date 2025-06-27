import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Hero from "../components/Hero";
import ProjectDemo from "../components/projectDemo/ProjectDemo";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      { index: true, Component: Hero },
      // {
      //   path: "/projects",
      //   loader: async () => {
      //     const res = await fetch("http://localhost:5000/projects");
      //     const data = await res.json();
      //     return data;
      //   },
      //   Component: ProjectDemo,
      // },
    ],
  },
]);

export default Router;
