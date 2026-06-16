import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { store } from "./app/store.js";
import App from "./App.jsx";
import "./index.css";

const FormPage = lazy(() => import("./pages/FormPage.jsx"));
const CardsPage = lazy(() => import("./pages/CardsPage.jsx"));
const DetailsPage = lazy(() => import("./pages/DetailsPage.jsx"));

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Navigate to="/cards" replace />} />
          <Route path="agreement" element={<FormPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="cards/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
