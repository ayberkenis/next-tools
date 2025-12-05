"use client";

import React, { useEffect, useState } from "react";
import { Card, Timeline } from "../../components/ui";

export default function PerformanceTimeline() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Simple observer for demonstration
    const paint = performance.getEntriesByType("paint");
    const nav = performance.getEntriesByType("navigation")[0];

    const timelineData = [];

    if (nav) {
      timelineData.push({
        label: "Navigation",
        start: 0,
        duration: nav.loadEventEnd - nav.startTime || 100,
        color: "bg-blue-500",
      });
      timelineData.push({
        label: "DOM Content Loaded",
        start: nav.domContentLoadedEventStart,
        duration:
          nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart || 5,
        color: "bg-purple-500",
      });
    }

    paint.forEach((p) => {
      timelineData.push({
        label: p.name,
        start: p.startTime,
        duration: 5, // instant event
        color: "bg-green-500",
      });
    });

    // Add some fake hydration markers for demo if none exist
    if (timelineData.length < 3) {
      timelineData.push({
        label: "Hydration",
        start: 150,
        duration: 45,
        color: "bg-orange-400",
      });
      timelineData.push({
        label: "First Contentful Paint",
        start: 80,
        duration: 5,
        color: "bg-green-500",
      });
    }

    setEntries(timelineData);
  }, []);

  return (
    <Card title="Performance Timeline">
      <Timeline items={entries} />
    </Card>
  );
}
