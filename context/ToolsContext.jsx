"use client";

import React, { createContext, useContext, useState } from "react";

const ToolsContext = createContext();

export function ToolsProvider({ children, config }) {
  const [scores, setScores] = useState({
    performance: 0,
    seo: 0,
    accessibility: 0,
    bestPractices: 0,
  });
  const [findings, setFindings] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  // Shared state for extra features
  const [runtimeInfo, setRuntimeInfo] = useState(null);

  const addFinding = (moduleName, finding) => {
    setFindings((prev) => [
      ...prev,
      { module: moduleName, ...finding, id: Date.now() },
    ]);
  };

  const value = {
    config,
    scores,
    setScores,
    findings,
    setFindings,
    addFinding,
    activeModule,
    setActiveModule,
    runtimeInfo,
    setRuntimeInfo,
  };

  return (
    <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>
  );
}

export function useTools() {
  const context = useContext(ToolsContext);
  if (!context) {
    throw new Error("useTools must be used within a ToolsProvider");
  }
  return context;
}
