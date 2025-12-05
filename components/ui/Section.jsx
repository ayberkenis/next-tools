import React from "react";

export function Section({ title, description, children, className = "" }) {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-neutral-500 mt-1.5 text-base">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
