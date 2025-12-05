import React from "react";

export function Card({ title, children, className = "", actions }) {
  return (
    <div
      className={`
        bg-white border border-neutral-200 rounded-xl shadow-sm p-6
        transition-all duration-200
        ${className}
      `}
    >
      {(title || actions) && (
        <div className="flex justify-between items-center mb-5">
          {title && (
            <h3 className="font-semibold text-lg text-neutral-900 tracking-tight leading-none">
              {title}
            </h3>
          )}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}
      <div className="text-neutral-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
