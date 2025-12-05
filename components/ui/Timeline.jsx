"use client";

import React from "react";

export function Timeline({ items }) {
  // items: [{ label, start, duration, color }]
  // We need to normalize to 0-100% based on total time window
  if (!items || items.length === 0)
    return (
      <div className="text-sm text-neutral-500 italic">
        No timeline data available
      </div>
    );

  const minStart = Math.min(...items.map((i) => i.start));
  const maxEnd = Math.max(...items.map((i) => i.start + i.duration));
  const totalDuration = maxEnd - minStart || 1;

  return (
    <div className="w-full space-y-3 font-mono text-xs">
      {items.map((item, idx) => {
        const left = ((item.start - minStart) / totalDuration) * 100;
        const width = Math.max((item.duration / totalDuration) * 100, 0.5); // Min 0.5% width

        return (
          <div key={idx} className="relative flex items-center h-7 group">
            <div
              className="w-36 truncate text-neutral-500 pr-4 text-right flex-shrink-0 font-medium"
              title={item.label}
            >
              {item.label}
            </div>
            <div className="flex-grow relative h-full bg-neutral-100 rounded-sm overflow-hidden">
              <div
                className={`absolute h-4 top-1.5 rounded-sm ${
                  item.color || "bg-neutral-900"
                } opacity-80 group-hover:opacity-100 transition-opacity`}
                style={{ left: `${left}%`, width: `${width}%` }}
              ></div>
            </div>
            <div className="w-20 text-neutral-500 text-xs pl-4 flex-shrink-0 tabular-nums">
              {Math.round(item.duration)}ms
            </div>
          </div>
        );
      })}
      <div className="flex justify-between w-full pl-36 pr-20 text-[10px] text-neutral-400 pt-2 border-t border-neutral-100 mt-2">
        <span>0ms</span>
        <span>{Math.round(totalDuration)}ms</span>
      </div>
    </div>
  );
}
