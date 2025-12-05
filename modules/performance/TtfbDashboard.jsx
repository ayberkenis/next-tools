"use client";

import React, { useEffect, useState } from 'react';
import { Card, Table } from '../../components/ui';

export default function TtfbDashboard() {
  const [timing, setTiming] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && performance.getEntriesByType) {
      const nav = performance.getEntriesByType('navigation')[0];
      if (nav) {
        setTiming({
          dns: nav.domainLookupEnd - nav.domainLookupStart,
          tcp: nav.connectEnd - nav.connectStart,
          ttfb: nav.responseStart - nav.requestStart,
          download: nav.responseEnd - nav.responseStart,
          total: nav.duration
        });
      }
    }
  }, []);

  if (!timing) return <Card title="TTFB Breakdown">Loading...</Card>;

  return (
    <Card title="TTFB Breakdown">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
        <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="text-xs text-neutral-500">DNS</div>
          <div className="font-mono">{Math.round(timing.dns)}ms</div>
        </div>
        <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="text-xs text-neutral-500">TCP</div>
          <div className="font-mono">{Math.round(timing.tcp)}ms</div>
        </div>
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <div className="text-xs text-blue-600 dark:text-blue-400 font-bold">TTFB</div>
          <div className="font-mono font-bold">{Math.round(timing.ttfb)}ms</div>
        </div>
        <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="text-xs text-neutral-500">Download</div>
          <div className="font-mono">{Math.round(timing.download)}ms</div>
        </div>
        <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
          <div className="text-xs text-neutral-500">Total</div>
          <div className="font-mono">{Math.round(timing.total)}ms</div>
        </div>
      </div>
    </Card>
  );
}

