import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { InventoryPage } from "./pages/InventoryPage/InventoryPage";
import { SalesPage } from "./pages/SalesPage/SalesPage";
import { ClientsPage } from "./pages/ClientsPage/ClientsPage";
import { NewProductPage } from "./pages/NewProductPage/NewProductPage";
import { NewSalePage } from "./pages/NewSalePage/NewSalePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
  {
    path: "/sales",
    element: <SalesPage />,
  },
  {
    path: "/clients",
    element: <ClientsPage />,
  },
  {
    path: "/new-product",
    element: <NewProductPage />,
  },
  {
    path: "/new-sale",
    element: <NewSalePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
