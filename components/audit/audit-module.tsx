import { AuditModuleData, AuditIssue, AuditRecommendation } from "@/types";
import { Card, Badge, ProgressBar, ScoreDisplay } from "@/components/ui/primitives";
import { Heading, Text } from "@/components/ui/typography";

interface ModuleSidebarProps {
  modules: AuditModuleData[];
  selectedModuleId: string;
  onSelectModule: (moduleId: string) => void;
}

export function ModuleSidebar({
  modules,
  selectedModuleId,
  onSelectModule,
}: ModuleSidebarProps) {
  return (
    <div className="space-y-2">
      <Heading level={3} size="sm" className="px-3 py-2">
        Audit Modules ({modules.length})
      </Heading>
      {modules.map((module) => {
        const isSelected = selectedModuleId === module.id;
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all border-2 ${
              isSelected
                ? "border-brand-600 bg-brand-50 text-slate-900"
                : "border-transparent bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-medium text-sm">{module.icon} {module.displayName}</div>
                <div className="text-xs text-slate-500 mt-1">
                  Score: {module.score}/{module.maxScore}
                </div>
              </div>
              <Badge status={module.status} className="flex-shrink-0">
                {module.status}
              </Badge>
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface ModuleDetailProps {
  module: AuditModuleData | null;
}

export function ModuleDetail({ module }: ModuleDetailProps) {
  if (!module) {
    return (
      <div className="card-elevated p-12 text-center">
        <Heading level={3} size="sm" className="mb-2">
          Select a Module
        </Heading>
        <Text color="secondary">
          Choose an audit module from the sidebar to view detailed findings
        </Text>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card-elevated p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-3xl mb-2">{module.icon}</div>
            <Heading level={2} size="lg" className="mb-2">
              {module.name}
            </Heading>
            <Text color="secondary">{module.description}</Text>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ScoreDisplay score={module.score} maxScore={module.maxScore} size="lg" />
            <Badge status={module.status}>{module.status}</Badge>
          </div>
        </div>

        <ProgressBar
          percentage={(module.score / module.maxScore) * 100}
          label="Module Score"
          showLabel={true}
        />

        {module.executionTime && (
          <Text size="xs" color="muted" className="mt-4">
            Execution time: {module.executionTime}
          </Text>
        )}
      </div>

      {/* Key Insights */}
      {module.keyInsights.length > 0 && (
        <Card title="Key Insights">
          <ul className="space-y-3">
            {module.keyInsights.map((insight, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-brand-600 font-bold flex-shrink-0">✓</span>
                <Text size="sm">{insight}</Text>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Issues */}
      {module.issues.length > 0 && (
        <Card title={`Issues Found (${module.issues.length})`}>
          <div className="space-y-4">
            {module.issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </Card>
      )}

      {/* Recommendations */}
      {module.recommendations.length > 0 && (
        <Card title={`Recommendations (${module.recommendations.length})`}>
          <div className="space-y-4">
            {module.recommendations.map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

interface IssueCardProps {
  issue: AuditIssue;
}

function IssueCard({ issue }: IssueCardProps) {
  const severityColors = {
    critical: "bg-danger-50 border-danger-200",
    high: "bg-warning-50 border-warning-200",
    medium: "bg-slate-100 border-slate-200",
    low: "bg-slate-50 border-slate-200",
  };

  return (
    <div className={`border rounded-lg p-4 ${severityColors[issue.severity]}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <Heading level={4} size="sm">
          {issue.title}
        </Heading>
        <Badge
          status={issue.severity === "critical" || issue.severity === "high" ? "fail" : issue.severity === "medium" ? "warning" : "pass"}
        >
          {issue.severity}
        </Badge>
      </div>
      <Text size="sm" className="mb-3">
        {issue.description}
      </Text>
      {issue.affectedPages && (
        <Text size="xs" color="muted">
          Affected: {issue.affectedPages} {issue.affectedPages === 1 ? "page" : "pages"}
        </Text>
      )}
      {issue.impact && (
        <Text size="xs" color="muted">
          Impact: {issue.impact}
        </Text>
      )}
    </div>
  );
}

interface RecommendationCardProps {
  recommendation: AuditRecommendation;
}

function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const priorityColors = {
    high: "bg-brand-50 border-brand-200",
    medium: "bg-slate-100 border-slate-200",
    low: "bg-slate-50 border-slate-200",
  };

  return (
    <div className={`border rounded-lg p-4 ${priorityColors[recommendation.priority]}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <Heading level={4} size="sm">
          {recommendation.title}
        </Heading>
        <Badge status={recommendation.priority === "high" ? "fail" : recommendation.priority === "medium" ? "warning" : "pass"}>
          {recommendation.priority}
        </Badge>
      </div>
      <Text size="sm" className="mb-3">
        {recommendation.description}
      </Text>
      {recommendation.estimatedImpact && (
        <Text size="xs" color="secondary" weight="medium" className="mb-2">
          Estimated Impact: {recommendation.estimatedImpact}
        </Text>
      )}
      {recommendation.actionItems && recommendation.actionItems.length > 0 && (
        <div className="mt-3">
          <Text size="xs" weight="medium" className="mb-2">
            Action Items:
          </Text>
          <ul className="space-y-1">
            {recommendation.actionItems.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-600 flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
