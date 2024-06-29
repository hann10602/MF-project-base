import React from "react";
import { Navigation } from "./navigation";

type Props = {};

export const Header = (props: Props) => {
    return (
        <div className="flex justify-between">
            <div>
                <img src="" alt="" />
                <Navigation />
            </div>
            <div></div>
        </div>
    );
};
