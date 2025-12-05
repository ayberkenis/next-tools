import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 ring-neutral-500/10",
    success:
      "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 ring-green-600/20",
    warning:
      "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 ring-yellow-600/20",
    error:
      "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 ring-red-600/10",
    info: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 ring-blue-700/10",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ring-1 ring-inset
        ${variants[variant] || variants.default} 
        ${className}
      `}
    >
      {children}
    </span>
  );
}
