import { Brand, DashboardMetrics } from "@/types";
import { Card, ScoreDisplay } from "@/components/ui/primitives";
import { Heading, Text } from "@/components/ui/typography";

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrandId: string;
  onSelectBrand: (brandId: string) => void;
}

export function BrandSelector({
  brands,
  selectedBrandId,
  onSelectBrand,
}: BrandSelectorProps) {
  return (
    <Card title="Select Brand" className="mb-8">
      <div className="flex gap-3 flex-wrap">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onSelectBrand(brand.id)}
            aria-pressed={selectedBrandId === brand.id}
            aria-label={`Select ${brand.name}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transform-gpu transition-transform duration-200 ease-out motion-safe:hover:scale-105 motion-reduce:transition-none ${
              selectedBrandId === brand.id
                ? "bg-brand-600 text-white shadow-md ring-2 ring-offset-2 ring-brand-300"
                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
            } focus-visible:outline-none focus-visible:ring-2`}
          >
            <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="font-medium text-sm">{brand.name}</div>
              <div className="text-xs text-slate-500">{brand.domain}</div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}

interface SnapshotCardsProps {
  metrics: DashboardMetrics;
}

export function SnapshotCards({ metrics }: SnapshotCardsProps) {
  const getTrendIcon = (direction: string) => {
    if (direction === "up") return "↑";
    if (direction === "down") return "↓";
    return "→";
  };

  const getTrendColor = (direction: string) => {
    if (direction === "up") return "text-success-600";
    if (direction === "down") return "text-danger-600";
    return "text-slate-600";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card title="AI Visibility Score" className="flex flex-col items-center justify-center">
        <ScoreDisplay score={metrics.aiVisibilityScore} size="lg" />
        <div className={`mt-3 text-lg font-semibold ${getTrendColor(metrics.trendDirection)}`}>
          {getTrendIcon(metrics.trendDirection)}
        </div>
      </Card>

      <Card title="Trust / E-E-A-T Score" className="flex flex-col items-center justify-center">
        <ScoreDisplay score={metrics.trustEeatScore} size="lg" />
        <Text size="sm" color="secondary" className="mt-3">
          Authority indicators
        </Text>
      </Card>

      <Card title="Non-Branded Coverage" className="flex flex-col items-center justify-center">
        <ScoreDisplay score={metrics.nonBrandedCoverage} size="lg" />
        <Text size="sm" color="secondary" className="mt-3">
          % of target keywords
        </Text>
      </Card>

      <Card title="Last Audit">
        <div className="flex flex-col h-full justify-center">
          <Text size="sm" weight="medium">
            {new Date(metrics.lastAuditDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
          <Text size="xs" color="muted" className="mt-1">
            {new Date(metrics.lastAuditDate).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </Text>
        </div>
      </Card>
    </div>
  );
}

export function DashboardPlaceholder() {
  return (
    <div className="card-elevated p-12 text-center">
      <Heading level={3} size="sm" className="mb-2">
        Dashboard Summary
      </Heading>
      <Text color="secondary">
        Select a brand to see detailed metrics and audit results
      </Text>
    </div>
  );
}
