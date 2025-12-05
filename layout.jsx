"use client";

import React from "react";
import { ToolsProvider, useTools } from "./context/ToolsContext.jsx";
import { toolsConfig } from "./index.js";

export default function ToolsLayout({ children }) {
  return (
    <ToolsProvider config={toolsConfig}>
      <div className="min-h-screen bg-white text-neutral-950 flex antialiased font-sans">
        {/* Sidebar */}
        <aside className="w-64 border-r border-neutral-200 bg-neutral-50/40 hidden md:flex flex-col">
          <div className="h-14 flex items-center px-6 border-b border-neutral-200/50">
            <div className="font-semibold text-lg tracking-tight flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-neutral-900"></div>
              Next Tools
            </div>
            <span className="ml-2 text-[10px] font-medium bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-500">
              BETA
            </span>
          </div>

          <div className="flex-1 py-6 px-3">
            <div className="mb-2 px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Platform
            </div>
            <nav className="space-y-1">
              <ToolsSidebarContent />
            </nav>
          </div>

          <div className="p-4 border-t border-neutral-200">
            <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-100 p-2 rounded border border-neutral-200">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Environment:{" "}
              <span className="font-mono font-medium">
                {process.env.NODE_ENV}
              </span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 bg-white">
          <header className="h-14 border-b border-neutral-200 flex items-center justify-between px-6 bg-white sticky top-0 z-20">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="font-medium text-neutral-900">Dashboard</span>
              <span>/</span>
              <span>Overview</span>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-5xl mx-auto w-full space-y-8">{children}</div>
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
  ChevronRight,
} from "lucide-react";

function ToolsSidebarContent() {
  const { setActiveModule, activeModule } = useTools();

  const navItems = [
    { id: null, label: "Overview", icon: LayoutDashboard },
    { id: "seo", label: "SEO Audit", icon: Search },
    { id: "performance", label: "Performance", icon: Zap },
    { id: "build", label: "Build Analysis", icon: Box },
    { id: "runtime", label: "Runtime & Cache", icon: Cpu },
    { id: "accessibility", label: "Accessibility", icon: Accessibility },
    { id: "reporting", label: "Reports", icon: FileText },
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
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${
                isActive
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                className={isActive ? "text-neutral-900" : "text-neutral-500"}
              />
              {item.label}
            </div>
            {isActive && (
              <ChevronRight size={14} className="text-neutral-400" />
            )}
          </button>
        );
      })}
    </>
  );
}
