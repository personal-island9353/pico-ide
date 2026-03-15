import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function Content() {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const isResizing = useRef(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (sidebarRef.current) {
      setHeight(sidebarRef.current.offsetHeight);
    }
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing.current) {
      const newHeight = window.innerHeight - e.clientY;
      setHeight(Math.max(100, Math.min(newHeight, window.innerHeight / 2)));
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
    <div className="flex flex-1 flex-col justify-between bg-white overflow-hidden">
      <div className="w-full p-4">Center Column</div>
      <div className="w-full">
        <div
          className="h-1 cursor-row-resize hover:bg-blue-400 active:bg-blue-600 transition-colors"
          onMouseDown={startResizing}
        />
        <div
          ref={sidebarRef}
          style={{ height: height !== undefined ? `${height}px` : "auto" }}
          className=" bg-gray-50 border-t p-4"
        >
          Bottom panel
        </div>
      </div>
    </div>
  );
}

export default Content;
