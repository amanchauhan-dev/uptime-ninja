"use client"
import React, { createContext, useEffect } from 'react'

type SideBarContextType = {
    closeSideBar: () => void
    openSideBar: () => void
}

export const SideBarContext = createContext<SideBarContextType | null>(null)

function SideBarProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const eventListener = () => {
            if (window.innerWidth < 768) {

            }
        }
        window.addEventListener("resize", eventListener)
        return () =>
            window.removeEventListener("resize", eventListener)
    }, [])
    return (
        <SideBarContext.Provider value={null}>{children}</SideBarContext.Provider>
    )
}

export default SideBarProvider