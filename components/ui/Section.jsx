import React from 'react';

export function Section({ title, description, children, className = "" }) {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{title}</h2>
        {description && <p className="text-neutral-500 dark:text-neutral-400 mt-1">{description}</p>}
      </div>
      {children}
    </section>
  );
}

