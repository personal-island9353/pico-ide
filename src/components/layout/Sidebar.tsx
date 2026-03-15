import React, { PropsWithChildren } from "react";
import useResizable from "@hooks/layout/useResizable";
import styles from "./Sidebar.module.css";

export type SidebarProps = {
  side: "left" | "right";
  resizable?: boolean;
};

function Sidebar({
  children,
  side,
  resizable = true,
}: PropsWithChildren<SidebarProps>) {
  const {
    dimension: width,
    elementRef: sidebarRef,
    startResizing,
  } = useResizable({
    orientation: "horizontal",
    side,
  });

  const sidebarClasses = `${styles.sidebar} ${side === "left" ? styles.borderRight : styles.borderLeft}`;

  return (
    <div
      ref={sidebarRef}
      style={{ width: width !== undefined ? `${width}px` : "auto" }}
      className={sidebarClasses}
    >
      {resizable && (
        <div
          className={`${styles.resizer} ${side === "left" ? styles.resizerRight : styles.resizerLeft}`}
          onMouseDown={startResizing}
        />
      )}
      {children}
    </div>
  );
}

export default Sidebar;
