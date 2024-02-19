import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Homepage from "./components/page/Homepage";
import ProductPage from "./components/page/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route index Component={Homepage} />
      <Route path="/ProductPage" Component={ProductPage} />
      <Route path="*" element={<span>Sidan finns inte...</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
