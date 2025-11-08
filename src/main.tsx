import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a div with id='root' in your HTML.");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Error rendering app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Error Loading Application</h1>
      <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload()">Reload Page</button>
    </div>
  `;
}
