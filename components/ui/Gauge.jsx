"use client";

import React from "react";

export function Gauge({ value, max = 100, label, color = "blue", size = 120 }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;
  const rotation = -90;

  const colors = {
    blue: "stroke-blue-500 text-blue-500",
    green: "stroke-green-500 text-green-500",
    yellow: "stroke-yellow-500 text-yellow-500",
    red: "stroke-red-500 text-red-500",
  };

  const selectedColor = colors[color] || colors.blue;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="w-full h-full transform"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <circle
            className="text-neutral-200 dark:text-neutral-800 stroke-current"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className={`${selectedColor} transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className={`text-2xl font-bold ${selectedColor.split(" ")[1]}`}>
            {Math.round(value)}
          </span>
        </div>
      </div>
      {label && (
        <span className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {label}
        </span>
      )}
    </div>
  );
}
