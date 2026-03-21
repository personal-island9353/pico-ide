import useResizable from "@/hooks/layout/useResizable";
import { useAppSelector } from "@/store/hooks";
import React, { PropsWithChildren } from "react";
import styles from "./Content.module.css";

export type ContentProps = {
  bottomPanel: React.ReactNode;
};

function Content({ bottomPanel, children }: PropsWithChildren<ContentProps>) {
  const {
    dimension: height,
    elementRef: bottomPanelRef,
    startResizing,
  } = useResizable({
    orientation: "vertical",
    side: "bottom",
  });

  const {
    leftSidebar: { maximized: leftSidebarMaximized },
    rightSidebar: { maximized: rightSidebarMaximized },
  } = useAppSelector((state) => state.layout);

  const contentClasses = `${styles.contentWrapper} ${leftSidebarMaximized || rightSidebarMaximized ? styles.sidebarMaximized : ""}`;

  return (
    <div className={contentClasses}>
      <div className={styles.mainContent}>{children}</div>
      <div
        ref={bottomPanelRef}
        style={{ height: height !== undefined ? `${height}px` : "auto" }}
        className={styles.bottomPanel}
      >
        <div className={styles.resizer} onMouseDown={startResizing} />
        {bottomPanel}
      </div>
    </div>
  );
}

export default Content;
