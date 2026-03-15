import { PropsWithChildren } from "react";
import styles from "./Footer.module.css";

function Footer({ children }: PropsWithChildren) {
  return <footer className={styles.footer}>{children}</footer>;
}

export default Footer;
