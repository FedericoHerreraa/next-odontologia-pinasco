'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

const MobileViewContext = createContext({
    isMobile: false
})

export const MobileViewProvider = ({ children } : { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <MobileViewContext.Provider value={{ isMobile }}>
            {children}
        </MobileViewContext.Provider>
    )
}

export const useMobileView = () => {
    return useContext(MobileViewContext)
}