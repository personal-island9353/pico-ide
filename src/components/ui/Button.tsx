import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

function Button({ text, className, ...props }: ButtonProps) {
  const combinedClassName = `${styles.button} ${className || ""}`.trim();

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
