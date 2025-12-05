"use client";

import React, { useState, useEffect } from "react";
import { Card, Table, Badge } from "../../components/ui";

export function RuntimeComparison() {
  const [runtime, setRuntime] = useState("Loading...");

  useEffect(() => {
    // Simple detection
    const isEdge = typeof EdgeRuntime === "string";
    setRuntime(isEdge ? "Edge Runtime" : "Node.js Runtime");
  }, []);

  return (
    <Card title="Runtime Environment">
      <div className="flex items-center gap-4">
        <div className="text-sm">
          Current: <Badge>{runtime}</Badge>
        </div>
        <div className="text-sm text-neutral-500">
          Node.js v{process.version} (if available)
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Feature Support</h4>
        <Table
          headers={["Feature", "Node.js", "Edge"]}
          data={[
            { name: "Stream API", node: true, edge: true },
            { name: "Crypto Web API", node: true, edge: true },
            { name: "fs (FileSystem)", node: true, edge: false },
          ]}
          renderRow={(row, i) => (
            <tr key={i}>
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.node ? "✅" : "❌"}</td>
              <td className="p-2">{row.edge ? "✅" : "❌"}</td>
            </tr>
          )}
        />
      </div>
    </Card>
  );
}
