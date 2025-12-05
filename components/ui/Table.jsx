import React from "react";

export function Table({ headers, data, renderRow, className = "" }) {
  return (
    <div className={`w-full overflow-auto ${className}`}>
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100">
            {headers.map((h, i) => (
              <th
                key={i}
                className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {data.map((row, i) => renderRow(row, i))}
        </tbody>
      </table>
    </div>
  );
}
