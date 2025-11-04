"use client";

import Dekstop from "@/components/desktop/desktop";
import Window from "@/components/window/window";
import { desktopIcons } from "@/components/desktop/lib/desktopIconsData";
import { useWindows } from "@/components/window/hooks/useWindows";
import { useStartMenu } from "@/components/taskbar/hooks/useStartMenu";
import Taskbar from "@/components/taskbar/taskbar";

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
    highestZIndex,
  } = useWindows();

  const {
    startMenuOpen,
    toggleStartMenu,
    closeStartMenu,
  } = useStartMenu();

  const handleIconDoubleClick = (icon: typeof desktopIcons[0]) => {
    openWindow(icon.id, icon.title, icon.icon, icon.content);
  };

  const handleWindowClick = (id: string) => {
    const window = windows.find((w) => w.id === id);
    if (window?.isMinimized) {
      openWindow(window.id, window.title, window.icon, window.content);
    } else {
      focusWindow(id);
    }
  };

  const handleStartMenuItemClick = (icon: typeof desktopIcons[0]) => {
    openWindow(icon.id, icon.title, icon.icon, icon.content);
    closeStartMenu();
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Dekstop
        icons={desktopIcons}
        onIconDoubleClick={handleIconDoubleClick}
      />

      {windows.map((window) => (
        <Window
          key={window.id}
          windowData={window}
          closeWindow={() => closeWindow(window.id)}
          minimizeWindow={() => minimizeWindow(window.id)}
          maximizeWindow={() => maximizeWindow(window.id)}
          focusWindow={() => focusWindow(window.id)}
          updateWindowPosition={(position) =>
            updateWindowPosition(window.id, position)
          }
          updateWindowSize={(size) => updateWindowSize(window.id, size)}
        />
      ))}

      <Taskbar
        windows={windows}
        onWindowClick={handleWindowClick}
        startMenuOpen={startMenuOpen}
        onStartMenuToggle={toggleStartMenu}
        onStartMenuItemClick={handleStartMenuItemClick}
        desktopIcons={desktopIcons}
      />
    </div>
  );
}
