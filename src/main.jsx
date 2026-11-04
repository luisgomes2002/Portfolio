import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "./i18n";
import { Analytics } from "@vercel/analytics/react";
import Portfolio from "./components/Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
    <Analytics />
  </React.StrictMode>,
);
