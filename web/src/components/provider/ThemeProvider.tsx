import { ConfigProvider } from "antd";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
    children: ReactNode;
};

export const ThemeContext = createContext<{
    handleChangeToDarkMode: () => void;
    handleChangeToLightMode: () => void;
    isDarkMode: boolean;
}>({
    handleChangeToDarkMode: () => {},
    handleChangeToLightMode: () => {},
    isDarkMode: false
});

export const ThemeProvider = ({ children }: Props) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const handleChangeToDarkMode = () => {
        setIsDarkMode(true);
    };

    const handleChangeToLightMode = () => {
        setIsDarkMode(false);
    };

    const lightTheme = {
        colorPrimary: "white",
        colorTextBase: "black",
        colorTextLightSolid: "black",
        colorBgBase: "white"
    };
    const darkTheme = {
        colorPrimary: "white",
        colorTextBase: "white",
        colorTextLightSolid: "white",
        colorBgBase: "black"
    };

    return (
        <ThemeContext.Provider value={{ handleChangeToDarkMode, handleChangeToLightMode, isDarkMode }}>
            <ConfigProvider theme={{ token: isDarkMode ? darkTheme : lightTheme }}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};
