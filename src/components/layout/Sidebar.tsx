import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type SidebarProps = {
  side: "left" | "right";
};

function Sidebar({ children, side }: PropsWithChildren<SidebarProps>) {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const isResizing = useRef(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (sidebarRef.current) {
      setWidth(sidebarRef.current.offsetWidth);
    }
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing.current && side === "left") {
      setWidth(Math.max(100, Math.min(e.clientX, window.innerWidth / 2)));
    } else if (isResizing.current && side === "right") {
      const newWidth = window.innerWidth - e.clientX;
      setWidth(Math.max(100, Math.min(newWidth, window.innerWidth / 2)));
    }
  }, []);

  const startResizing = useCallback(() => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      {side === "right" && (
        <div
          className="w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors"
          onMouseDown={startResizing}
        />
      )}

      <div
        ref={sidebarRef}
        style={{ width: width !== undefined ? `${width}px` : "auto" }}
        className={`flex-none bg-gray-50 ${side === "left" ? "border-r" : "border-l"} overflow-auto p-4`}
      >
        {children}
      </div>

      {side === "left" && (
        <div
          className="w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors"
          onMouseDown={startResizing}
        />
      )}
    </>
  );
}

export default Sidebar;
