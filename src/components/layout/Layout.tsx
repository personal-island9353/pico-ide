import { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

function Layout({ children }: PropsWithChildren) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
