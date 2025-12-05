"use client";

import React from "react";
import { ToolsProvider, useTools } from "./context/ToolsContext.jsx";
import { toolsConfig } from "./index.js";

export default function ToolsLayout({ children }) {
  return (
    <ToolsProvider config={toolsConfig}>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex-shrink-0 hidden md:flex flex-col">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="font-bold text-xl tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white"></div>
              next-tools
            </h1>
            <div className="text-xs text-neutral-500 mt-1 pl-4">v0.1.0</div>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <ToolsSidebarContent />
          </nav>
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-xs text-neutral-500 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              Env: {process.env.NODE_ENV}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-14 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 flex items-center px-6 justify-between sticky top-0 z-10">
            <div className="font-medium tracking-tight">Dashboard</div>
            <div className="text-sm text-neutral-500">Next.js Tools</div>
          </header>
          <div className="p-6 overflow-y-auto flex-1">
            <div className="max-w-6xl mx-auto w-full">{children}</div>
          </div>
        </main>
      </div>
    </ToolsProvider>
  );
}

import {
  LayoutDashboard,
  Search,
  Zap,
  Box,
  Cpu,
  Accessibility,
  FileText,
} from "lucide-react";

function ToolsSidebarContent() {
  const { setActiveModule, activeModule } = useTools();

  const navItems = [
    { id: null, label: "Dashboard", icon: LayoutDashboard },
    { id: "seo", label: "SEO", icon: Search },
    { id: "performance", label: "Performance", icon: Zap },
    { id: "build", label: "Build & RSC", icon: Box },
    { id: "runtime", label: "Runtime", icon: Cpu },
    { id: "accessibility", label: "Accessibility", icon: Accessibility },
    { id: "reporting", label: "Reporting", icon: FileText },
  ];

  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeModule === item.id;
        return (
          <button
            key={item.id || "dash"}
            onClick={() => setActiveModule(item.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
              isActive
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            }`}
          >
            <Icon
              size={18}
              className={
                isActive
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-400 dark:text-neutral-500"
              }
            />
            {item.label}
          </button>
        );
      })}
    </>
  );
}
