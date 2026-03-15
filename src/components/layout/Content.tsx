import useResizable from "@hooks/layout/useResizable";
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

  return (
    <div className={styles.contentWrapper}>
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
