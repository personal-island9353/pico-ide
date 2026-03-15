import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

function Button({ text, className, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed";
  const combinedClassName = `${baseStyles} ${className || ""}`.trim();

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
