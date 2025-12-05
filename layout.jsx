"use client";

import React from "react";
import { ToolsProvider, useTools } from "./context/ToolsContext";
import { toolsConfig } from "./index";

export default function ToolsLayout({ children }) {
  // In a real app, we might check headers/auth here or in the server component wrapper

  return (
    <ToolsProvider config={toolsConfig}>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex-shrink-0 hidden md:flex flex-col">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="font-bold text-xl tracking-tight">next-tools</h1>
            <div className="text-xs text-neutral-500 mt-1">v0.1.0</div>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {/* Navigation items will be handled by the main page's state or links if we used sub-routes */}
            {/* Since we are using a single page approach managed by context, we might want to render the nav triggers here.
                 However, the children (page.jsx) is where the content lives. 
                 If we want the sidebar to control the view, we need access to the context.
                 So we need a inner component or just rely on the Page to render everything including the sidebar content?
                 
                 Actually, the layout wraps the page. The page has access to context. The layout *children* has access to context if Provider is in Layout.
                 But Layout *component code* itself is outside the provider if I wrap it here?
                 No, I should split the provider.
                 
                 Better: The App Router `layout.jsx` in `src/app/__tools/layout.jsx` will wrap *this* layout?
                 The user said: "src/app/__tools/layout.jsx ... should wrap and render src/next-tools/layout.jsx".
                 
                 So `src/next-tools/layout.jsx` is a component that takes children. 
                 I will put the Provider inside `src/next-tools/layout.jsx`. 
                 But then `Sidebar` needs to be inside the Provider to use `setActiveModule`.
             */}
            <ToolsSidebarContent />
          </nav>
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-xs text-neutral-500">
              Environment: {process.env.NODE_ENV}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-14 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-6 justify-between">
            <div className="font-medium">Dashboard</div>
            <div className="text-sm text-neutral-500">Next.js Tools</div>
          </header>
          <div className="p-6 overflow-y-auto flex-1">{children}</div>
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
        return (
          <button
            key={item.id || "dash"}
            onClick={() => setActiveModule(item.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-3 ${
              activeModule === item.id
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            }`}
          >
            <Icon size={18} />
            {item.label}
          </button>
        );
      })}
    </>
  );
}
