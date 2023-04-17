import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./pages/Index/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
