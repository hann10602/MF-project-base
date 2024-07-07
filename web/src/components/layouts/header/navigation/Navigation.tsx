import React from "react";
import { NAV_ITEMS } from "./const";

type Props = {};

export const Navigation = (props: Props) => {
    return (
        <div className="flex items-center space-x-5 ">
            {NAV_ITEMS.map(item => (
                <a
                    className="w-32 rounded-full py-2 text-center font-semibold hover:bg-neutral-100"
                    key={item.title}
                    href={item.to}
                >
                    {item.title}
                </a>
            ))}
        </div>
    );
};
