import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-neutral-100 text-neutral-900 ring-neutral-500/10",
    success: "bg-green-50 text-green-700 ring-green-600/20",
    warning: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
    error: "bg-red-50 text-red-700 ring-red-600/10",
    info: "bg-blue-50 text-blue-700 ring-blue-700/10",
    outline: "bg-white text-neutral-950 ring-neutral-200",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset
        ${variants[variant] || variants.default} 
        ${className}
      `}
    >
      {children}
    </span>
  );
}
