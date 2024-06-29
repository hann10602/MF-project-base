import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { LandingPage, Policy, Profile, TermOfService } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <LandingPage />
            </MainLayout>
        )
    },
    {
        path: "/policy",
        element: (
            <MainLayout>
                <Policy />
            </MainLayout>
        )
    },
    {
        path: "/term-of-service",
        element: (
            <MainLayout>
                <TermOfService />
            </MainLayout>
        )
    },
    {
        path: "/profile",
        element: (
            <MainLayout>
                <Profile />
            </MainLayout>
        )
    }
]);
