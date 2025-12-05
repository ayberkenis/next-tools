"use client";

import React from "react";
import { Card } from "../../components/ui/index.js";

export function OgInspector() {
  return (
    <Card title="Open Graph Inspector">
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          og:title:{" "}
          <span className="text-neutral-900 dark:text-neutral-200">My App</span>
        </p>
        <p>
          og:image:{" "}
          <span className="text-neutral-900 dark:text-neutral-200">
            /og.png
          </span>{" "}
          (1200x630)
        </p>
      </div>
    </Card>
  );
}
