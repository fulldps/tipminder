import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FormPage from "./pages/FormPage.jsx";
import CardsPage from "./pages/CardsPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

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
