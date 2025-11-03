"use client";

import { useState } from "react";
import type { WindowType } from "../lib/window.types";

export const useWindows = () => {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const openWindow = (
    id: string,
    title: string,
    icon: string,
    content: React.ReactNode
  ) => {
    const existingWindow = windows.find((w) => w.id === id);

    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(
          windows.map((w) =>
            w.id === id
              ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 }
              : w
          )
        );
        setHighestZIndex(highestZIndex + 1);
      } else {
        focusWindow(id);
      }
      return;
    }

    const newWindow: WindowType = {
      id,
      title,
      icon,
      content,
      isMinimized: false,
      isMaximized: false,
      position: { x: 100 + windows.length * 30, y: 80 + windows.length * 30 },
      size: { width: 600, height: 400 },
      zIndex: highestZIndex + 1,
    };

    setWindows([...windows, newWindow]);
    setHighestZIndex(highestZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id));
  }

  const minimizeWindow = (id: string) => {
    setWindows(windows.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
  }

  const maximizeWindow = (id: string) => {
    setWindows(windows.map((w) => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  }

  const focusWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w
      )
    );
    setHighestZIndex(highestZIndex + 1);
  };

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindows(windows.map((w) => w.id === id ? { ...w, position } : w));
  }

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setWindows(windows.map((w) => w.id === id ? { ...w, size } : w));
  }

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
    setWindows,
    setHighestZIndex,
    highestZIndex,
  };
};
