import React from "react";
import { Navigation } from "./navigation";
import { Icon } from "@iconify-icon/react";
import { HeaderMenu } from "./header-menu";

type Props = {};

export const Header = (props: Props) => {
    return (
        <div className="flex items-center justify-between w-full p-4">
            <div className="flex items-center">
                <img
                    className="rounded-full border border-gray-500 w-16 h-16 mr-16"
                    src="https://png.pngtree.com/template/20200627/ourmid/pngtree-cloth-handcraft-logo-design-vector-image_386721.jpg"
                    alt=""
                />
                <Navigation />
            </div>
            <div className="flex items-center justify-between border border-neutral-400 rounded-full px-4 py-2 space-x-2">
                <Icon icon="material-symbols-light:search-rounded" className="text-2xl cursor-pointer" />
                <input type="text" className="outline-none border-none px-2" />
            </div>
            <HeaderMenu />
        </div>
    );
};
