"use client"

import { useWindows } from "./hooks/useWindows";
import type { WindowType } from "./lib/window.types"

type WindowProps = {
  windowData: WindowType
};

export default function Window({ windowData }: WindowProps) {
    const {
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
    } = useWindows();

    return (
        <p>yo</p>
    );
}