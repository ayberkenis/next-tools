"use client";
import React from "react";
import { Card, Badge } from "../../components/ui";

export function A11yAudit() {
  return (
    <div className="space-y-4">
      <Card title="WCAG 2.2 Checklist">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Images have alt text</span>
            <Badge variant="success">Pass</Badge>
          </div>
          <div className="flex justify-between">
            <span>Form labels present</span>
            <Badge variant="warning">Check manual</Badge>
          </div>
        </div>
      </Card>
      <ContrastChecker />
    </div>
  );
}

export function ContrastChecker() {
  return (
    <Card title="Contrast Checker">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
          Aa
        </div>
        <div>
          <p className="font-bold">Ratio: 4.5:1</p>
          <Badge variant="success">AA Pass</Badge>
        </div>
      </div>
    </Card>
  );
}
