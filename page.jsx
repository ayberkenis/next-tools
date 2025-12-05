"use client";

import React from "react";
import { useTools } from "./context/ToolsContext.jsx";

// Modules
import SeoAudit from "./modules/seo/SeoAudit.jsx";
import LighthouseScore from "./modules/performance/LighthouseScore.jsx";
import PerformanceTimeline from "./modules/performance/PerformanceTimeline.jsx";
import TtfbDashboard from "./modules/performance/TtfbDashboard.jsx";
import HydrationProfiler from "./modules/performance/HydrationProfiler.jsx";
import { CriticalCss } from "./modules/build/CriticalCss.jsx";
import { ComponentTree } from "./modules/build/ComponentTree.jsx";
import { RuntimeComparison } from "./modules/runtime/RuntimeComparison.jsx";
import { CacheSimulator } from "./modules/runtime/CacheSimulator.jsx";
import { BrowserApis } from "./modules/runtime/BrowserApis.jsx";
import { A11yAudit } from "./modules/accessibility/A11yAudit.jsx";
import AuditPdfExport from "./modules/reporting/AuditPdfExport.jsx";
import {
  Search,
  Zap,
  Box,
  Cpu,
  Accessibility,
  FileText,
  ArrowRight,
} from "lucide-react";

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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Overview
        </h2>
        <p className="text-neutral-500 mt-2 text-lg">
          Your application health at a glance.
        </p>
      </div>

      <LighthouseScore />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="SEO Audit"
          description="Check metadata, robots.txt, and sitemaps."
          icon={Search}
          onClick={() => setActiveModule("seo")}
        />
        <DashboardCard
          title="Performance"
          description="Analyze TTFB, hydration, and Core Web Vitals."
          icon={Zap}
          onClick={() => setActiveModule("performance")}
        />
        <DashboardCard
          title="Build Analysis"
          description="Inspect Critical CSS and component tree."
          icon={Box}
          onClick={() => setActiveModule("build")}
        />
        <DashboardCard
          title="Runtime"
          description="Browser APIs and cache simulation."
          icon={Cpu}
          onClick={() => setActiveModule("runtime")}
        />
        <DashboardCard
          title="Accessibility"
          description="WCAG checklist and contrast ratios."
          icon={Accessibility}
          onClick={() => setActiveModule("accessibility")}
        />
        <DashboardCard
          title="Reporting"
          description="Export full audit reports to PDF."
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
      className="bg-white border border-neutral-200 p-6 rounded-xl hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-200">
        <ArrowRight size={20} className="text-neutral-400" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
            <Icon size={20} />
          </div>
        )}
        <h3 className="font-semibold text-lg text-neutral-900">{title}</h3>
      </div>
      <p className="text-neutral-500 text-sm leading-relaxed pr-6">
        {description}
      </p>
    </div>
  );
}
