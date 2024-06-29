import React from "react";
import { NAV_ITEMS } from "./const";

type Props = {};

export const Navigation = (props: Props) => {
    return (
        <div className="flex items-center">
            {NAV_ITEMS.map(item => (
                <a key={item.title} href={item.to}>
                    {item.title}
                </a>
            ))}
        </div>
    );
};
