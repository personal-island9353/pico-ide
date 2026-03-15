import React, { ButtonHTMLAttributes } from "react";
import styles from "./ButtonIcon.module.css";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  text?: string;
};

function ButtonIcon({ icon, text, className, ...props }: IconButtonProps) {
  const combinedClassName = `${styles.iconButton} ${className || ""}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      <span className={styles.iconWrapper}>{icon}</span>
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
}

export default ButtonIcon;
