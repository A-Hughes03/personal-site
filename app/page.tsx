"use client";

import Dekstop from "@/components/desktop/desktop";
import Window from "@/components/window/window";
import { desktopIcons } from "@/components/desktop/lib/desktopIconsData";
import { useWindows } from "@/components/window/hooks/useWindows";

export default function Home() {
  const { windows, openWindow } = useWindows();

  return (
    <div>
      <Dekstop
        icons={desktopIcons}
        onIconDoubleClick={(icon) => openWindow(icon.id, icon.title, icon.icon, icon.content)}
      />
  
      {windows.map((window) => (
        <Window key={window.id} windowData={window} />
      ))}
    </div>
  );
}
