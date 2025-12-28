import { Heading, Text, Divider } from "@/components/ui/typography";
import { Button, Card } from "@/components/ui/primitives";
import Link from "next/link";

export const metadata = {
  title: "Platform - Kasparro",
};

export default function Platform() {
  return (
    <div className="py-20">
      <div className="container-section">
        {/* Hero */}
        <div className="text-center mb-20">
          <Heading level={1} size="xl" className="mb-4">
            How Kasparro Works
          </Heading>
          <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
            A technical explainer for how we transform your website into AI-native SEO intelligence
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Input */}
          <Card title="1. Input Assembly">
            <div className="space-y-4">
              <div>
                <Heading level={4} size="sm" className="text-brand-600 mb-2">
                  What We Consume
                </Heading>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Full website crawl (HTML, CSS, JavaScript)</li>
                  <li>• Structured data and metadata</li>
                  <li>• Page speed and performance metrics</li>
                  <li>• Backlink profile and domain authority</li>
                  <li>• Competitive SERP analysis</li>
                  <li>• Brand mention signals</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Context Pack */}
          <Card title="2. Context Pack">
            <div className="space-y-4">
              <div>
                <Heading level={4} size="sm" className="text-brand-600 mb-2">
                  Data Normalization
                </Heading>
                <Text size="sm" className="mb-3">
                  Raw signals normalized into AI-readable structures:
                </Text>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Content semantics and topical entities</li>
                  <li>• Authority indicators (EEAT signals)</li>
                  <li>• Technical readiness for AI systems</li>
                  <li>• Competitive feature inventory</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Modules */}
        <Card title="3. Seven Audit Modules" className="mb-20">
          <Divider />
          <div className="space-y-6">
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-3">
                Core Dimensions
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl mb-2">📄</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    Content Quality & Relevance
                  </Heading>
                  <Text size="xs" color="secondary">
                    Topical depth, authenticity detection, AI pattern analysis
                  </Text>
                </div>
                <div>
                  <div className="text-2xl mb-2">🏆</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    E-E-A-T & Trust
                  </Heading>
                  <Text size="xs" color="secondary">
                    Author credentials, brand authority, trust signals
                  </Text>
                </div>
                <div>
                  <div className="text-2xl mb-2">⚙️</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    Technical SEO
                  </Heading>
                  <Text size="xs" color="secondary">
                    Core Web Vitals, crawlability, JS execution
                  </Text>
                </div>
                <div>
                  <div className="text-2xl mb-2">🎯</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    Keyword Strategy
                  </Heading>
                  <Text size="xs" color="secondary">
                    Coverage gaps, cannibalization, competitive positioning
                  </Text>
                </div>
                <div>
                  <div className="text-2xl mb-2">🏷️</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    Structured Data
                  </Heading>
                  <Text size="xs" color="secondary">
                    Schema markup, rich snippet eligibility
                  </Text>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔗</div>
                  <Heading level={5} className="font-semibold mb-1 text-sm">
                    Link Profile & Authority
                  </Heading>
                  <Text size="xs" color="secondary">
                    Backlink quality, diversity, toxicity
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card title="4. Synthesis">
            <div className="space-y-4">
              <Heading level={4} size="sm" className="text-brand-600">
                Unified Model
              </Heading>
              <Text size="sm">
                Module outputs combined to answer: "How will AI systems rank this domain for target queries?"
              </Text>
              <Text size="sm" color="secondary">
                Outputs a single coherent intelligence model representing your AI-native SEO health across all dimensions.
              </Text>
            </div>
          </Card>

          <Card title="5. Output Surfaces">
            <div className="space-y-4">
              <Heading level={4} size="sm" className="text-brand-600">
                Access Your Intelligence
              </Heading>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Dashboard (real-time snapshots)</li>
                <li>✓ Detailed audit reports (actionable)</li>
                <li>✓ API access (custom integrations)</li>
                <li>✓ Scheduled reports (recurring)</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Differentiator */}
        <Card className="mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
          <Heading level={3} size="md" className="mb-4">
            Why This Architecture Matters
          </Heading>
          <div className="space-y-3">
            <Text size="sm">
              <span className="font-semibold text-brand-600">Traditional approach:</span> Track rankings + generic audit = surface-level recommendations
            </Text>
            <Text size="sm">
              <span className="font-semibold text-brand-600">Kasparro approach:</span> Model AI understanding + module isolation + synthesis = specific, actionable intelligence
            </Text>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Heading level={3} size="md" className="mb-4">
            See It in Action
          </Heading>
          <Text color="secondary" className="mb-8 max-w-xl mx-auto">
            The dashboard and audit reports show real-world data structures and recommendations based on this architecture
          </Text>
          <Link href="/app/dashboard">
            <Button size="lg">Open Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
