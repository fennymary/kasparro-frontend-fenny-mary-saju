// Brand types
export interface Brand {
  id: string;
  name: string;
  industry: string;
  domain: string;
  logoUrl: string;
}

// Dashboard metrics
export interface DashboardMetrics {
  brandId: string;
  aiVisibilityScore: number;
  trustEeatScore: number;
  nonBrandedCoverage: number;
  lastAuditDate: string;
  trendDirection: "up" | "down" | "stable";
}

// Audit module types
export interface AuditIssue {
  id: string;
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  affectedPages?: number;
  impact?: string;
}

export interface AuditRecommendation {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  estimatedImpact?: string;
  actionItems?: string[];
}

export interface AuditModuleData {
  id: string;
  name: string;
  displayName: string;
  description: string;
  icon: string;
  score: number;
  maxScore: number;
  status: "pass" | "warning" | "fail" | "pending";
  keyInsights: string[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
  executionTime?: string;
}

export interface AuditReport {
  brandId: string;
  reportId: string;
  timestamp: string;
  modules: AuditModuleData[];
  overallScore: number;
  executionTime: string;
}

// Architecture system types
export interface ArchitectureComponent {
  id: string;
  name: string;
  role: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
  dataProcessed?: string;
}

export interface ArchitectureFlow {
  id: string;
  name: string;
  steps: string[];
  components: ArchitectureComponent[];
}

// App state
export interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: string | null;
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleId: string) => void;
}
