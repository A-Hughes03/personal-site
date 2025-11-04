import { useState } from "react";

export function useStartMenu() {
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    const toggleStartMenu = () => setStartMenuOpen((prev) => !prev);
    const closeStartMenu = () => setStartMenuOpen(false);
    const openStartMenu = () => setStartMenuOpen(true);

    return {
        startMenuOpen,
        toggleStartMenu,
        closeStartMenu,
        openStartMenu,
    };
}