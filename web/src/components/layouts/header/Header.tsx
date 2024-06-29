import React from "react";
import { Navigation } from "./navigation";

type Props = {};

export const Header = (props: Props) => {
    return (
        <div className="flex items-center justify-between w-full p-4 bg-green-300">
            <div className="flex items-center">
                <img className="rounded-full border border-gray-500 w-12 h-12 mr-4" src="" alt="" />
                <Navigation />
            </div>
            <div className="flex items-center space-x-4">
                <a className="" href="/profile">
                    Profile
                </a>
                <a className="" href="/profile">
                    Cart
                </a>
            </div>
        </div>
    );
};
