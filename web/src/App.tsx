import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/provider/ThemeProvider";
import "./index.scss";
import { router } from "./routes";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);
