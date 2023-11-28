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
import { NewClientPage } from "./pages/NewClientPage/NewClientPage";
import { EditProduct } from "./pages/EditProduct/EditProduct";
import { EditClient } from "./pages/EditClient/EditClient";
import { EditSale } from "./pages/EditSale/EditSale";

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
  {
    path: "/new-client",
    element: <NewClientPage />,
  },
  {
    path: "/edit-product/:productId",
    element: <EditProduct />,
  },
  {
    path: "/edit-client/:clientId",
    element: <EditClient />,
  },
  {
    path: "/edit-sale/:saleId",
    element: <EditSale />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
