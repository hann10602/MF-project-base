import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { LandingPage, routesHome } from "../pages";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [...routesHome]
    }
]);
