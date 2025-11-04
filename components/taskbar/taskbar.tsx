import { DesktopIcon } from "../desktop/lib/desktopIcons.types";
import { WindowType } from "../window/lib/window.types"

type TaskbarProps = {
    windows: WindowType[];
    onWindowClick: (id: string) => void;
    startMenuOpen: boolean;
    onStartMenuToggle: () => void;
    onStartMenuItemClick: (itemId: DesktopIcon) => void;
    desktopIcons: DesktopIcon[];
}

export default function Taskbar({
    windows,
    onWindowClick,
    startMenuOpen,
    onStartMenuToggle,
    onStartMenuItemClick,
    desktopIcons,
}: TaskbarProps) {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return (
        <div className="h-10 bg-[#c0c0c0] win95-border flex items-center px-1 gap-1 relative z-[9999]">
        <button className="win95-button flex items-center gap-2 h-8 font-bold" onClick={onStartMenuToggle}>
          <span className="text-base">🪟</span>
          <span>Start</span>
        </button>
  
        {startMenuOpen && (
          <div className="absolute bottom-10 left-0 bg-[#c0c0c0] win95-border w-48">
            <div className="bg-gradient-to-b from-[#000080] to-[#1084d0] text-white font-bold text-2xl p-2 writing-mode-vertical">
            Adam Hughes
            </div>
            <div className="p-1">
              {desktopIcons.map((icon) => (
                <button
                  key={icon.id}
                  className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-sm"
                  onClick={() => onStartMenuItemClick(icon)}
                >
                  <span className="text-lg">{icon.icon}</span>
                  <span>{icon.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
  
        <div className="flex-1 flex gap-1 overflow-x-auto">
          {windows.map((window) => (
            <button
              key={window.id}
              className={`win95-button h-8 px-3 flex items-center gap-2 min-w-[120px] max-w-[200px] ${
                window.isMinimized ? "" : "win95-button-pressed"
              }`}
              onClick={() => onWindowClick(window.id)}
            >
              <span>{window.icon}</span>
              <span className="truncate text-xs">{window.title}</span>
            </button>
          ))}
        </div>
  
        <div className="win95-border-inset px-3 py-1 text-xs font-mono">{timeString}</div>
      </div>
    )
}