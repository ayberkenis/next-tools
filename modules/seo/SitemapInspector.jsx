"use client";
import React from "react";
import { Card, Badge } from "../../components/ui/index.js";

export function SitemapInspector() {
  return (
    <Card title="Sitemap.xml">
      <div className="flex items-center justify-between mb-2">
        <span>/sitemap.xml</span>
        <Badge variant="success">Found</Badge>
      </div>
      <p className="text-xs text-neutral-500">
        Contains 12 URLs. Last modified: today.
      </p>
    </Card>
  );
}
