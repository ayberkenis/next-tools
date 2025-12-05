"use client";

import React from "react";
import { useTools } from "./context/ToolsContext";

// Modules
import SeoAudit from "./modules/seo/SeoAudit";
import LighthouseScore from "./modules/performance/LighthouseScore";
import PerformanceTimeline from "./modules/performance/PerformanceTimeline";
import TtfbDashboard from "./modules/performance/TtfbDashboard";
import HydrationProfiler from "./modules/performance/HydrationProfiler";
import { CriticalCss } from "./modules/build/CriticalCss";
import { ComponentTree } from "./modules/build/ComponentTree";
import { RuntimeComparison } from "./modules/runtime/RuntimeComparison";
import { CacheSimulator } from "./modules/runtime/CacheSimulator";
import { BrowserApis } from "./modules/runtime/BrowserApis";
import { A11yAudit } from "./modules/accessibility/A11yAudit";
import AuditPdfExport from "./modules/reporting/AuditPdfExport";
import { Search, Zap, Box, Cpu, Accessibility, FileText } from "lucide-react";

export default function ToolsPage() {
  const { activeModule, setActiveModule } = useTools();

  if (activeModule === "seo") return <SeoAudit />;
  if (activeModule === "performance") {
    return (
      <div className="space-y-6">
        <LighthouseScore />
        <PerformanceTimeline />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TtfbDashboard />
          <HydrationProfiler />
        </div>
      </div>
    );
  }
  if (activeModule === "build") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CriticalCss />
          <ComponentTree />
        </div>
      </div>
    );
  }
  if (activeModule === "runtime") {
    return (
      <div className="space-y-6">
        <RuntimeComparison />
        <CacheSimulator />
        <BrowserApis />
      </div>
    );
  }
  if (activeModule === "accessibility") return <A11yAudit />;
  if (activeModule === "reporting") return <AuditPdfExport />;

  // Default: Dashboard
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="text-neutral-500">
          Welcome to your Next.js pre-production toolkit.
        </p>
      </div>

      <LighthouseScore />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="SEO"
          description="Check metadata, robots, and sitemaps."
          icon={Search}
          onClick={() => setActiveModule("seo")}
        />
        <DashboardCard
          title="Performance"
          description="Analyze TTFB, hydration, and timeline."
          icon={Zap}
          onClick={() => setActiveModule("performance")}
        />
        <DashboardCard
          title="Build & RSC"
          description="Inspect CSS and component tree."
          icon={Box}
          onClick={() => setActiveModule("build")}
        />
        <DashboardCard
          title="Runtime"
          description="Check browser APIs and simulating cache."
          icon={Cpu}
          onClick={() => setActiveModule("runtime")}
        />
        <DashboardCard
          title="Accessibility"
          description="WCAG checklist and contrast."
          icon={Accessibility}
          onClick={() => setActiveModule("accessibility")}
        />
        <DashboardCard
          title="Reporting"
          description="Export audit reports."
          icon={FileText}
          onClick={() => setActiveModule("reporting")}
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, description, icon: Icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <Icon size={20} />
          </div>
        )}
        <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </div>
  );
}
