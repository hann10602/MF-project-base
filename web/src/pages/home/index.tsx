import React from "react";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "../../components";
import { TermOfService } from "./term-of-service";

export const routesHome: RouteObject[] = [
    {
        path: "/asd/policy",
        element: <MainLayout>divadasd</MainLayout>
    },
    {
        path: "term-of-service",
        element: (
            <MainLayout>
                <TermOfService />
            </MainLayout>
        )
    }
];

export * from "./landing-page";
export * from "./policy";
export * from "./term-of-service";
export * from "./profile";
