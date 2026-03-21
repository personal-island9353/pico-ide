import useResizable from "@/hooks/layout/useResizable";
import { PropsWithChildren } from "react";
import styles from "./Sidebar.module.css";

export type SidebarProps = {
  side: "left" | "right";
  resizable?: boolean;
  maximized?: boolean;
};

function Sidebar({
  children,
  side,
  resizable = true,
  maximized = false,
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
      style={
        maximized
          ? { flex: 1, minWidth: 0 }
          : { width: width !== undefined ? `${width}px` : "auto" }
      }
      className={`${sidebarClasses}`}
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
