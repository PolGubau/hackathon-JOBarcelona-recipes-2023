import ReactDOM from "react-dom/client";
import "./index.css";

import { lightTheme } from "./design/themes/lightTheme";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipes",
    element: <Home />,
  },
  {
    path: "/recipes/:id",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
