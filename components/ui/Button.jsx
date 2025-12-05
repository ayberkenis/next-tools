import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white";

  const variants = {
    primary: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 shadow",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
    outline:
      "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900",
    ghost: "hover:bg-neutral-100 hover:text-neutral-900 text-neutral-600",
    danger: "bg-red-500 text-neutral-50 hover:bg-red-500/90",
    link: "text-neutral-900 underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${
        sizes[size] || sizes.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
