"use client";

import React from 'react';

export function Timeline({ items }) {
  // items: [{ label, start, duration, color }]
  // We need to normalize to 0-100% based on total time window
  if (!items || items.length === 0) return <div className="text-sm text-neutral-500">No timeline data available</div>;

  const minStart = Math.min(...items.map(i => i.start));
  const maxEnd = Math.max(...items.map(i => i.start + i.duration));
  const totalDuration = maxEnd - minStart || 1;

  return (
    <div className="w-full space-y-2 font-mono text-xs">
      {items.map((item, idx) => {
        const left = ((item.start - minStart) / totalDuration) * 100;
        const width = Math.max((item.duration / totalDuration) * 100, 0.5); // Min 0.5% width

        return (
          <div key={idx} className="relative flex items-center h-6 group">
            <div className="w-32 truncate text-neutral-500 pr-2 text-right flex-shrink-0" title={item.label}>
              {item.label}
            </div>
            <div className="flex-grow relative h-full bg-neutral-50 dark:bg-neutral-900 rounded overflow-hidden">
              <div
                className={`absolute h-4 top-1 rounded ${item.color || 'bg-blue-400'}`}
                style={{ left: `${left}%`, width: `${width}%` }}
              ></div>
              {/* Tooltip on hover could go here */}
            </div>
            <div className="w-20 text-neutral-400 text-xs pl-2 flex-shrink-0">
              {Math.round(item.duration)}ms
            </div>
          </div>
        );
      })}
      <div className="flex justify-between w-full pl-32 text-xs text-neutral-400 pt-1 border-t border-neutral-200 dark:border-neutral-800">
        <span>0ms</span>
        <span>{Math.round(totalDuration)}ms</span>
      </div>
    </div>
  );
}

