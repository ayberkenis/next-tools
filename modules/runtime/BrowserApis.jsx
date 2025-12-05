"use client";
import React, { useEffect, useState } from "react";
import { Card, Badge } from "../../components/ui";

export function BrowserApis() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    const list = [
      { name: "Service Worker", supported: "serviceWorker" in navigator },
      {
        name: "Intersection Observer",
        supported: "IntersectionObserver" in window,
      },
      { name: "Web Share API", supported: "share" in navigator },
      { name: "WebCrypto", supported: "crypto" in window },
      { name: "Local Storage", supported: "localStorage" in window },
    ];
    setApis(list);
  }, []);

  return (
    <Card title="Browser Capabilities">
      <div className="flex flex-wrap gap-2">
        {apis.map((api) => (
          <Badge key={api.name} variant={api.supported ? "success" : "error"}>
            {api.name}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
