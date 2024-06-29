import { RouteObject } from "react-router-dom";
import { Policy } from "./policy";
import { MainLayout } from "../../components";
import React from "react";
import { TermOfService } from "./term-of-service";

export const routesHome: RouteObject[] = [
    {
        path: "policy",
        element: (
            <MainLayout>
                <Policy />
            </MainLayout>
        )
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
