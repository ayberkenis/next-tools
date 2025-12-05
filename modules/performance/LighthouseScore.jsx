"use client";

import React, { useEffect, useState } from 'react';
import { Card, Gauge } from '../../components/ui';
import { useTools } from '../../context/ToolsContext';

export default function LighthouseScore() {
  const { scores, setScores } = useTools();

  useEffect(() => {
    // Mock calculation of scores
    // In a real scenario, this would run actual audits
    const mockScores = {
      performance: Math.floor(Math.random() * 20) + 80,
      seo: Math.floor(Math.random() * 10) + 90,
      accessibility: Math.floor(Math.random() * 15) + 85,
      bestPractices: Math.floor(Math.random() * 10) + 90,
    };
    setScores(mockScores);
  }, [setScores]);

  return (
    <Card title="Lighthouse Estimates (Unofficial)">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Gauge value={scores.performance} label="Performance" color={scores.performance >= 90 ? "green" : "yellow"} />
        <Gauge value={scores.accessibility} label="Accessibility" color={scores.accessibility >= 90 ? "green" : "yellow"} />
        <Gauge value={scores.bestPractices} label="Best Practices" color={scores.bestPractices >= 90 ? "green" : "yellow"} />
        <Gauge value={scores.seo} label="SEO" color={scores.seo >= 90 ? "green" : "yellow"} />
      </div>
    </Card>
  );
}

