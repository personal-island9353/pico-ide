import { PropsWithChildren } from "react";
import useResizable from "@hooks/layout/useResizable";

export type SidebarProps = {
  side: "left" | "right";
};

function Sidebar({ children, side }: PropsWithChildren<SidebarProps>) {
  const {
    dimension: width,
    elementRef: sidebarRef,
    startResizing,
  } = useResizable({
    orientation: "horizontal",
    side,
  });

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
