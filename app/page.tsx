"use client";

import Dekstop from "@/components/desktop/desktop";
import Window from "@/components/window/window";
import { desktopIcons } from "@/components/desktop/lib/desktopIconsData";
import { useWindows } from "@/components/window/hooks/useWindows";

export default function Home() {
  const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindows();

  const handleIconDoubleClick = (icon: typeof desktopIcons[0]) => {
    openWindow(icon.id, icon.title, icon.icon, icon.content);
  };

  return (
    <div>
      <Dekstop
        icons={desktopIcons}
        onIconDoubleClick={(icon) => handleIconDoubleClick(icon)}
      />
  
      {windows.map((window) => (
        <Window 
          key={window.id}
          windowData={window}
          closeWindow={() => closeWindow(window.id)}
          minimizeWindow={() => minimizeWindow(window.id)}
          maximizeWindow={() => maximizeWindow(window.id)}
          focusWindow={() => focusWindow(window.id)}
          updateWindowPosition={(position) => updateWindowPosition(window.id, position)}
          updateWindowSize={(size) => updateWindowSize(window.id, size)}
        />
      ))}
    </div>
  );
}
