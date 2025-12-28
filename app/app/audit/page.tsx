"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/app-store";
import { ModuleSidebar, ModuleDetail } from "@/components/audit/audit-module";
import { Heading, Text } from "@/components/ui/typography";
import { AuditModuleData } from "@/types";
import auditData from "@/data/audit-modules.json";

export default function AuditPage() {
  const { selectedModuleId, setSelectedModule } = useAppStore();
  const [modules, setModules] = useState<AuditModuleData[]>([]);
  const [selectedModule, setSelectedModuleState] = useState<AuditModuleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load audit modules
    setModules(auditData.auditModules);

    // Find selected module
    const module = auditData.auditModules.find(
      (m) => m.id === selectedModuleId
    );
    setSelectedModuleState(module || null);
    setIsLoading(false);
  }, [selectedModuleId]);

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId);
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Text color="secondary">Loading audit report...</Text>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Heading level={1} size="lg" className="mb-2">
          Comprehensive Audit Report
        </Heading>
        <Text color="secondary">
          Select a module to view detailed findings, issues, and recommendations
        </Text>
      </div>

      {/* Layout: Sidebar + Main */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 card-elevated p-0 rounded-lg overflow-hidden">
            <ModuleSidebar
              modules={modules}
              selectedModuleId={selectedModuleId || ""}
              onSelectModule={handleModuleSelect}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <ModuleDetail module={selectedModule} />
        </div>
      </div>
    </div>
  );
}
