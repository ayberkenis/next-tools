import React from "react";

export function Card({ title, children, className = "", actions }) {
  return (
    <div
      className={`
        bg-white dark:bg-neutral-900 
        border border-neutral-200 dark:border-neutral-800 
        rounded-xl shadow-sm 
        p-5
        transition-all duration-200
        ${className}
      `}
    >
      {(title || actions) && (
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
          {title && (
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight">
              {title}
            </h3>
          )}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}
      <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
