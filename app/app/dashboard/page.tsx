"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/app-store";
import { BrandSelector, SnapshotCards } from "@/components/dashboard/dashboard-cards";
import { Heading, Text } from "@/components/ui/typography";
import { Brand, DashboardMetrics } from "@/types";
import brandsData from "@/data/brands.json";
import metricsData from "@/data/dashboard-metrics.json";

export default function DashboardPage() {
  const { selectedBrandId, setSelectedBrand } = useAppStore();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedMetrics, setSelectedMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async data loading
    setBrands(brandsData.brands);
    
    const metrics = metricsData.dashboardMetrics.find(
      (m) => m.brandId === selectedBrandId
    );
    setSelectedMetrics(metrics || null);
    setIsLoading(false);
  }, [selectedBrandId]);

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Text color="secondary">Loading dashboard...</Text>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Heading level={1} size="lg" className="mb-2">
          Dashboard
        </Heading>
        <Text color="secondary">
          Monitor your brand's AI-native SEO health across all dimensions
        </Text>
      </div>

      {/* Brand Selector */}
      <BrandSelector
        brands={brands}
        selectedBrandId={selectedBrandId || ""}
        onSelectBrand={handleBrandSelect}
      />

      {/* Metrics Cards */}
      {selectedMetrics && <SnapshotCards metrics={selectedMetrics} />}
    </div>
  );
}
