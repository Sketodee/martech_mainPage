import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n.tsx";  //Import here
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <React.Suspense fallback="">
      <App />
    </React.Suspense>
    </BrowserRouter>
  </StrictMode>
);