"use client";

import React from "react";
import { Card, Section, Badge } from "../../components/ui";
import { OgInspector } from "./OgInspector";
import { RobotsInspector } from "./RobotsInspector";
import { SitemapInspector } from "./SitemapInspector";

export default function SeoAudit() {
  return (
    <div className="space-y-6">
      <Section
        title="SEO Audit"
        description="Check metadata, robots, and sitemaps."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Meta Tags Analysis">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Title Tag</span>
                <Badge variant="success">Present</Badge>
              </div>
              <div className="flex justify-between">
                <span>Meta Description</span>
                <Badge variant="warning">Missing</Badge>
              </div>
              <div className="flex justify-between">
                <span>Canonical URL</span>
                <Badge variant="success">Valid</Badge>
              </div>
            </div>
          </Card>
          <OgInspector />
          <RobotsInspector />
          <SitemapInspector />
        </div>
      </Section>
    </div>
  );
}
