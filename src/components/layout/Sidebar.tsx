import { PropsWithChildren } from "react";
import useResizable from "@hooks/layout/useResizable";

export type SidebarProps = {
  side: "left" | "right";
  resizable?: boolean;
};

function Sidebar({ children, side, resizable = true }: PropsWithChildren<SidebarProps>) {
  const {
    dimension: width,
    elementRef: sidebarRef,
    startResizing,
  } = useResizable({
    orientation: "horizontal",
    side,
  });

  return (
    <div
      ref={sidebarRef}
      style={{ width: width !== undefined ? `${width}px` : "auto" }}
      className={`flex-none bg-gray-50 ${side === "left" ? "border-r" : "border-l"} overflow-auto p-4 relative`}
    >
      {side === "left" && resizable && (
        <div
          className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors z-10"
          onMouseDown={startResizing}
        />
      )}
      {side === "right" && resizable && (
        <div
          className="absolute top-0 left-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-600 transition-colors z-10"
          onMouseDown={startResizing}
        />
      )}
      {children}
    </div>
  );
}

export default Sidebar;
