import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Project from "./pages/project/Project.jsx";
import Skills from "./pages/skills/Skills.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import Waves from "./component/Waves.jsx";
import "./component/font.css";
import NotFound from "./pages/not_found/not_found.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Waves />
    <RouterProvider router={Router} />
  </React.StrictMode>
);
