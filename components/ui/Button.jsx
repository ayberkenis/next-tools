import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 shadow-sm",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
    outline:
      "border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    ghost:
      "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
    danger: "bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 text-base",
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
