import React from "react";

export function Table({ headers, data, renderRow, className = "" }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
          {data.map((row, i) => renderRow(row, i))}
        </tbody>
      </table>
    </div>
  );
}
