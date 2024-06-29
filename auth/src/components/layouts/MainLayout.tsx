import React, { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
    children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
    return (
        <div className="w-full">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
