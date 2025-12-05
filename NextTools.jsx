"use client";

import React, { useState, useEffect } from "react";
import { ToolsProvider, useTools } from "./context/ToolsContext.jsx";
import { toolsConfig } from "./index.js";
import ToolsPage from "./page.jsx";
import { Modal } from "./components/ui/index.js";
import {
  LayoutDashboard,
  Search,
  Zap,
  Box,
  Cpu,
  Accessibility,
  FileText,
  ChevronRight,
  Activity,
  Wrench,
} from "lucide-react";

export default function NextTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ToolsProvider config={toolsConfig}>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 z-[9998] group">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-neutral-900 p-3 rounded-full shadow-lg border border-neutral-200 hover:bg-neutral-50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 flex items-center gap-2"
          title="Open Next.js Tools"
        >
          <div className="bg-neutral-900 text-white p-1.5 rounded-full">
            <Activity size={20} />
          </div>
          <span className="pr-2 font-medium text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Next Tools
          </span>
        </button>
      </div>

      {/* Main Modal Dashboard */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Next.js Developer Tools"
      >
        <DashboardLayout>
          <ToolsPage />
        </DashboardLayout>
      </Modal>
    </ToolsProvider>
  );
}

function DashboardLayout({ children }) {
  return (
    <div className="flex h-full min-h-[600px]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-200 bg-neutral-50/50 flex-shrink-0 hidden md:flex flex-col">
        <div className="p-4">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-2">
            Modules
          </div>
          <nav className="space-y-1">
            <ToolsSidebarContent />
          </nav>
        </div>
        <div className="mt-auto p-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-500 bg-white p-2 rounded border border-neutral-200">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            Env:{" "}
            <span className="font-mono font-medium">
              {process.env.NODE_ENV}
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-white p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}

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
                  ? "bg-neutral-100 text-neutral-900 shadow-sm ring-1 ring-neutral-200"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
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
