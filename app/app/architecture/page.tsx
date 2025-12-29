import { Heading, Text, Divider } from "@/components/ui/typography";
import { Card } from "@/components/ui/primitives";

export const metadata = {
  title: "System Architecture - Kasparro",
};

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Heading level={1} size="lg" className="mb-2">
          System Architecture
        </Heading>
        <Text color="secondary">
          Frontend representation of Kasparro's core system design
        </Text>
      </div>

      {/* Input Assembly */}
      <Card title="Stage 1: Input Assembly">
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading level={4} size="sm" className="text-brand-600 mb-3">
              Data Sources
            </Heading>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <div>
                  <Text weight="medium" size="sm">
                    Website Crawl
                  </Text>
                  <Text size="sm" color="secondary">
                    Full HTML, CSS, JS analysis
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <Text weight="medium" size="sm">
                    Performance Metrics
                  </Text>
                  <Text size="sm" color="secondary">
                    CWV, Lighthouse, PageSpeed
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🔗</span>
                <div>
                  <Text weight="medium" size="sm">
                    Link Analysis
                  </Text>
                  <Text size="sm" color="secondary">
                    Backlink profiles, RD, authority
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏆</span>
                <div>
                  <Text weight="medium" size="sm">
                    Competitive Landscape
                  </Text>
                  <Text size="sm" color="secondary">
                    SERP features, competitor analysis
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Heading level={4} size="sm" className="text-brand-600 mb-3">
              Output
            </Heading>
            <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-brand-600">
              <Text size="sm" weight="medium" className="mb-2">
                Unified Input Model
              </Text>
              <Text size="sm" color="secondary">
                All data normalized into consistent, typed schemas ready for module processing
              </Text>
            </div>
          </div>
        </div>
      </Card>

      {/* Context Pack */}
      <Card title="Stage 2: Context Pack">
        <Divider />
        <div className="space-y-4">
          <Text size="sm" color="secondary">
            Raw signals transformed into AI-readable representations
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <Text weight="medium" size="sm" className="mb-2">
                📝 Content Semantics
              </Text>
              <Text size="sm" color="secondary">
                Entity extraction, topical mapping, keyword relationships
              </Text>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <Text weight="medium" size="sm" className="mb-2">
                👤 Authority Signals
              </Text>
              <Text size="sm" color="secondary">
                Author credentials, E-E-A-T markers, brand signals
              </Text>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <Text weight="medium" size="sm" className="mb-2">
                ⚡ Technical Readiness
              </Text>
              <Text size="sm" color="secondary">
                Crawlability, indexability, performance scores
              </Text>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <Text weight="medium" size="sm" className="mb-2">
                🎯 Intent Alignment
              </Text>
              <Text size="sm" color="secondary">
                Query matching, SERP features, user intent
              </Text>
            </div>
          </div>
        </div>
      </Card>

      {/* Audit Modules */}
      <Card title="Stage 3: Seven Independent Audit Modules">
        <Divider />
        <div className="space-y-4">
          <Text size="sm" color="secondary">
            Each module processes the context pack independently, producing a specialized score and recommendations
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📄", title: "Content Quality", focus: "Topical depth, authenticity" },
              { icon: "🏆", title: "E-E-A-T", focus: "Authority and trust signals" },
              { icon: "⚙️", title: "Technical SEO", focus: "Performance and crawlability" },
              { icon: "🎯", title: "Keyword Strategy", focus: "Coverage and positioning" },
              { icon: "🏷️", title: "Structured Data", focus: "Schema and rich snippets" },
              { icon: "🔗", title: "Link Profile", focus: "Backlink quality" },
            ].map((mod) => (
              <div key={mod.title} className="border rounded-lg p-4">
                <div className="flex gap-3 items-start">
                  <span className="text-3xl">{mod.icon}</span>
                  <div className="flex-1">
                    <Text weight="medium" size="sm">
                      {mod.title}
                    </Text>
                    <Text size="sm" color="secondary">
                      Focus: {mod.focus}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Synthesis */}
      <Card title="Stage 4: Synthesis Layer">
        <Divider />
        <Text size="sm" className="mb-4">
          All module outputs combined to answer core question: "How will AI systems evaluate this domain?"
        </Text>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div className="flex gap-4 items-start">
            <span className="text-3xl">🧠</span>
            <div>
              <Text weight="medium" className="mb-2">
                Unified Intelligence Model
              </Text>
              <Text size="sm" color="secondary">
                Composite scoring across all dimensions, correlation analysis, priority ranking of recommendations, trend detection, and competitive positioning insights
              </Text>
            </div>
          </div>
        </div>
      </Card>

      {/* Output Surfaces */}
      <Card title="Stage 5: Output Surfaces">
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <Text weight="medium" size="sm" className="mb-3">
              📊 Dashboard
            </Text>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Real-time brand snapshots</li>
              <li>• Metric trends over time</li>
              <li>• Quick insight cards</li>
              <li>• Module status overview</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <Text weight="medium" size="sm" className="mb-3">
              📋 Audit Reports
            </Text>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Deep module analysis</li>
              <li>• Issue documentation</li>
              <li>• Actionable recommendations</li>
              <li>• Implementation guides</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <Text weight="medium" size="sm" className="mb-3">
              🔌 API Access
            </Text>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Structured JSON responses</li>
              <li>• Custom integrations</li>
              <li>• Programmatic access</li>
              <li>• Real-time webhooks</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <Text weight="medium" size="sm" className="mb-3">
              📧 Scheduled Reports
            </Text>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Weekly/monthly snapshots</li>
              <li>• Trend analysis</li>
              <li>• Key alerts</li>
              <li>• Executive summaries</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Data Flow */}
      <Card title="Complete Data Flow">
        <Divider />
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>Input Assembly</div>
            <span className="text-slate-400">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>Context Pack</div>
            <span className="text-slate-400">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>7 Independent Modules</div>
            <span className="text-slate-400">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>Synthesis Layer</div>
            <span className="text-slate-400">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-brand-50 rounded-lg border border-brand-200">
            <div className="font-semibold">Output Surfaces (Dashboard, API, Reports)</div>
          </div>
        </div>
      </Card>

      {/* Design Principles */}
      <Card title="Core Design Principles" className="bg-gradient-to-r from-brand-50 to-blue-50 border-0">
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Heading level={4} size="sm" className="text-brand-600 mb-2">
              Modularity
            </Heading>
            <Text size="sm" color="secondary">
              Each component can be updated independently without affecting others
            </Text>
          </div>
          <div>
            <Heading level={4} size="sm" className="text-brand-600 mb-2">
              Transparency
            </Heading>
            <Text size="sm" color="secondary">
              Clear data flow and no hidden transformations between stages
            </Text>
          </div>
          <div>
            <Heading level={4} size="sm" className="text-brand-600 mb-2">
              Extensibility
            </Heading>
            <Text size="sm" color="secondary">
              New modules can be added, outputs extended, without core changes
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
