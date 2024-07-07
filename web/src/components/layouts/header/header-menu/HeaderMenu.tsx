import { Icon } from "@iconify-icon/react";
import React, { useContext, useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks";
import { ThemeContext } from "../../../provider/ThemeProvider";

type Props = {};

export const HeaderMenu = ({}: Props) => {
    const { handleChangeToDarkMode, handleChangeToLightMode, isDarkMode } = useContext(ThemeContext);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const headerMenuRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        console.log("logout");
    };

    const handleClickOutsideMenu = () => {
        setIsOpenMenu(false);
    };

    const handleClickMenu = () => {
        setIsOpenMenu(prev => !prev);
    };

    useClickOutside(headerMenuRef, handleClickOutsideMenu);

    return (
        <div className="flex items-center space-x-10 text-4xl">
            <div className="relative" ref={headerMenuRef} onClick={handleClickMenu}>
                <Icon icon="mdi:menu" />
                {isOpenMenu && (
                    <div className="absolute bg-white -bottom-22 left-0 w-40 border border-neutral-400 rounded-md overflow-hidden">
                        <a
                            href="/profile"
                            className="flex justify-start items-center p-4 space-x-2 hover:bg-neutral-100 cursor-pointer"
                        >
                            <Icon className="text-2xl" icon="mdi:user-circle-outline" />
                            <p className="text-lg font-semibold">Profile</p>
                        </a>
                        <a
                            href="/settings"
                            className="flex justify-start items-center p-4 space-x-2 hover:bg-neutral-100 cursor-pointer"
                        >
                            <Icon className="text-2xl" icon="material-symbols:settings-outline" />
                            <p className="text-lg font-semibold">Settings</p>
                        </a>
                        <div
                            onClick={handleLogout}
                            className="flex justify-start items-center p-4 space-x-2 hover:bg-neutral-100 cursor-pointer"
                        >
                            <Icon className="text-2xl" icon="material-symbols:logout-sharp" />
                            <p className="text-lg font-semibold">Logout</p>
                        </div>
                    </div>
                )}
            </div>
            <a href="/cart">
                <Icon icon="mdi:cart-variant" className="cursor-pointer" />
            </a>
            <div>
                {isDarkMode ? (
                    <Icon
                        icon="material-symbols-light:sunny-outline"
                        className="cursor-pointer"
                        onClick={handleChangeToLightMode}
                    />
                ) : (
                    <Icon
                        icon="material-symbols-light:sunny"
                        className="cursor-pointer"
                        onClick={handleChangeToDarkMode}
                    />
                )}
            </div>
        </div>
    );
};
