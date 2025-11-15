import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", className }) => {
  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
