"use client";

import React, { useState } from "react";
import { Card, Section } from "../../components/ui/index.js";

export function CacheSimulator() {
  const [config, setConfig] = useState({
    sMaxage: 60,
    staleWhileRevalidate: 30,
    provider: "vercel",
  });

  return (
    <Card title="Cache-Control Simulator">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            s-maxage (seconds)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
            value={config.sMaxage}
            onChange={(e) =>
              setConfig({ ...config, sMaxage: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            stale-while-revalidate
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
            value={config.staleWhileRevalidate}
            onChange={(e) =>
              setConfig({
                ...config,
                staleWhileRevalidate: Number(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800">
        <h4 className="font-semibold mb-2">Visual Timeline</h4>
        <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden flex">
          <div
            className="h-full bg-green-500 flex items-center justify-center text-xs text-white"
            style={{ width: "40%" }}
          >
            Fresh ({config.sMaxage}s)
          </div>
          <div
            className="h-full bg-yellow-500 flex items-center justify-center text-xs text-white"
            style={{ width: "30%" }}
          >
            Stale ({config.staleWhileRevalidate}s)
          </div>
          <div
            className="h-full bg-red-500 flex items-center justify-center text-xs text-white"
            style={{ width: "30%" }}
          >
            Expired
          </div>
        </div>
        <p className="text-xs mt-2 text-neutral-500">
          Simulates how CDN (e.g. {config.provider}) handles cache states.
        </p>
      </div>
    </Card>
  );
}
