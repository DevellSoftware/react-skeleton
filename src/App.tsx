import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./pages/Index/Index";
import { Browse } from "./pages/Browse/Browse";
import initializeTranslations from "./i18n";

initializeTranslations();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      ;
    </>
  );
}

export default App;
