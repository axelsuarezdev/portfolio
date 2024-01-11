import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import React from "react";
import { RecoilRoot } from "recoil";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ThankYou } from "./pages/ThankYou";
import path from "path";

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "thankyou",
          element: <ThankYou />,
        },
      ],
    },
  ]);
  console.log("Router");
  const container = document.getElementById("hello-example");
  const root = createRoot(container);
  root.render(
    <RecoilRoot>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}
