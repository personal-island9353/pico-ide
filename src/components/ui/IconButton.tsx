import React, { ButtonHTMLAttributes } from "react";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  text?: string;
};

function IconButton({ icon, text, className, ...props }: IconButtonProps) {
  const baseStyles = "flex items-center justify-center gap-2 p-1 rounded transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 active:bg-gray-300";
  const combinedClassName = `${baseStyles} ${className || ""}`.trim();

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      {text && <span className="text-sm">{text}</span>}
    </button>
  );
}

export default IconButton;
