import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import Body from "./Components/Body/Body.tsx";
import AddCart from "./Components/AddCart.tsx";
import { CreateCartProvider } from "./Context/Cart.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Body />} />
      <Route path="cart/" element={<AddCart />}>
        <Route path=":productId" element={<AddCart />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CreateCartProvider>
      <RouterProvider router={router} />
    </CreateCartProvider>
  </React.StrictMode>
);
