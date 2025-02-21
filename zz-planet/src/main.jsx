import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App1"; // Ensure filename matches App1.jsx
import "./style.css";

console.log("✅ main.jsx is running! Checking for #root...");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ ERROR: Root element #root is missing in index.html!");
} else {
  console.log("✅ Root element found, rendering React...");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

