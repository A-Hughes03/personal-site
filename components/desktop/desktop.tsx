"use client"

import { desktopIcons } from "@/components/desktop/lib/desktopIconsData";
import type { DesktopIcon } from "@/components/desktop/lib/desktopIcons.types";
import { useState } from "react";

type DesktopProps = {
    icons: DesktopIcon[];
    onIconDoubleClick: (icon: DesktopIcon) => void;
};

export default function Dekstop({ icons, onIconDoubleClick }: DesktopProps) {
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    return (
        <div
          className="flex-1 p-4 reactive"
          onClick={() => setSelectedIcon(null)}
          style={{
            backgroundColor: "#008080",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <div className="grid grid-cols-1 gap-4 w-24">
                {desktopIcons.map((icon) => (
                    <div
                        key={icon.id}
                        className={`desktop-icon ${selectedIcon === icon.id ? "selected" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIcon(icon.id);
                        }}
                        onDoubleClick={() => onIconDoubleClick(icon)}
                    >
                        <div className="text-4xl">{icon.icon}</div>
                        <div className="text-xs text-white text-center font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
                            {icon.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}