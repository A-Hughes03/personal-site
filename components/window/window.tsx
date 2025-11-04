"use client";

import { useState, useRef, useEffect } from "react";
import type { WindowType } from "./lib/window.types";

type WindowProps = {
    windowData: WindowType;
    closeWindow: () => void;
    minimizeWindow: () => void;
    maximizeWindow: () => void;
    focusWindow: () => void;
    updateWindowPosition: (pos: { x: number; y: number }) => void;
    updateWindowSize: (size: { width: number; height: number }) => void;
};

export default function Window({
    windowData,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      
    if (windowData.isMaximized) return;

    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({ x: clientX - rect.left, y: clientY - rect.top });
      setIsDragging(true);
    }
    focusWindow();
  };

  // Drag handling
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging && !windowData.isMaximized) {
        updateWindowPosition({
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && !windowData.isMaximized) {
          const touch = e.touches[0];
          updateWindowPosition({
              x: touch.clientX - dragOffset.x,
              y: touch.clientY - dragOffset.y,
          });
        }
    }

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragOffset, windowData.isMaximized, updateWindowPosition, windowData]);


  if (windowData.isMinimized) return null;

  // Window style for maximized vs normal
  const style = windowData.isMaximized
    ? {
        position: "fixed" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "calc(100% - 40px)",
        zIndex: windowData.zIndex,
      }
    : {
        position: "fixed" as const,
        left: windowData.position.x,
        top: windowData.position.y,
        width: windowData.size.width,
        height: windowData.size.height,
        zIndex: windowData.zIndex,
      };

  return (
    <div ref={windowRef} className="win95-window win95-border flex flex-col" style={style} onMouseDown={focusWindow}>
    <div
      className="win95-title-bar flex items-center justify-between cursor-move select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <div className="flex items-center gap-2 text-sm">
        <span>{windowData.icon}</span>
        <span>{windowData.title}</span>
      </div>
      <div className="flex gap-1">
        <button
          className="w-5 h-5 bg-[#c0c0c0] win95-border flex items-center justify-center text-xs font-bold hover:bg-[#d0d0d0]"
          onClick={minimizeWindow}
        >
          _
        </button>
        <button
          className="w-5 h-5 bg-[#c0c0c0] win95-border flex items-center justify-center text-xs font-bold hover:bg-[#d0d0d0]"
          onClick={maximizeWindow}
        >
          □
        </button>
        <button
          className="w-5 h-5 bg-[#c0c0c0] win95-border flex items-center justify-center text-xs font-bold hover:bg-[#d0d0d0]"
          onClick={closeWindow}
        >
          ✕
        </button>
      </div>
    </div>

    <div className="flex-1 bg-[#c0c0c0] overflow-auto p-4 text-sm">
      <div className="p-2">{windowData.content}</div>
    </div>
  </div>
  );
}
