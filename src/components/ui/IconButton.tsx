import React, { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  text?: string;
};

function IconButton({ icon, text, className, ...props }: IconButtonProps) {
  const combinedClassName = `${styles.iconButton} ${className || ""}`.trim();

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      <span className={styles.iconWrapper}>{icon}</span>
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
}

export default IconButton;
