"use client";
import React from "react";
import { Card, Badge } from "../../components/ui";

export function RobotsInspector() {
  return (
    <Card title="Robots.txt">
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="success">Allowed</Badge>
        <span className="text-xs text-neutral-500">User-agent: *</span>
      </div>
      <pre className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded text-xs overflow-x-auto">
        User-agent: *{"\n"}
        Allow: /{"\n"}
        Disallow: /api/admin
      </pre>
    </Card>
  );
}
