import React, { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

export type LayoutProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

function Layout({ header, footer, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
}

export default Layout;
