import { Button } from "@/components/ui/primitives";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 gradient-brand">
      <div className="container-section text-center text-white">
        <Heading
          level={1}
          size="xl"
          className="text-white mb-6 leading-tight max-w-3xl mx-auto"
        >
          AI-First SEO for Brands That Move Faster
        </Heading>
        <Text
          size="lg"
          className="text-white/90 max-w-2xl mx-auto mb-8"
        >
          Kasparro translates how AI reads your brand into actionable intelligence. Not another rank tracker. Not another audit tool. A fundamentally different approach to SEO.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/app/dashboard">
            <Button size="lg" variant="secondary">
              Try Demo Dashboard
            </Button>
          </Link>
          <Link href="/platform">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const AUDIT_MODULES = [
  {
    icon: "📄",
    title: "Content Quality",
    description: "Topical depth, authenticity, and AI-detection readiness",
  },
  {
    icon: "🏆",
    title: "E-E-A-T & Trust",
    description: "Experience, Expertise, Authority, and Trustworthiness signals",
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    description: "Core Web Vitals, crawlability, and performance metrics",
  },
  {
    icon: "🎯",
    title: "Keyword Strategy",
    description: "Coverage gaps, cannibalization, and competitive positioning",
  },
  {
    icon: "🏷️",
    title: "Structured Data",
    description: "Schema markup implementation and rich snippet eligibility",
  },
  {
    icon: "🔗",
    title: "Link Profile",
    description: "Backlink quality, diversity, and authority signals",
  },
  {
    icon: "💡",
    title: "Search Intent",
    description: "Content alignment with user intent and SERP patterns",
  },
];

export function ModulesGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <Heading level={2} size="lg" className="mb-4">
            7 Specialized AI Audit Modules
          </Heading>
          <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
            Each module isolates a critical dimension of your search visibility. Together, they form a complete picture of your AI-native SEO health.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIT_MODULES.map((module) => (
            <div key={module.title} className="card-elevated p-6">
              <div className="text-4xl mb-3">{module.icon}</div>
              <Heading level={3} size="sm" className="mb-2">
                {module.title}
              </Heading>
              <Text size="sm" color="secondary">
                {module.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferentiatorSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-section">
        <Heading level={2} size="lg" className="mb-12 text-center">
          Why AI-First SEO Is Different
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Heading level={3} size="sm" className="text-brand-600 mb-2">
                Traditional SEO Tools
              </Heading>
              <ul className="space-y-2 text-slate-600">
                <li>✗ Track rankings, not AI understanding</li>
                <li>✗ Surface-level link analysis</li>
                <li>✗ Generic, non-actionable recommendations</li>
                <li>✗ Disconnect between technical metrics and real impact</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Heading level={3} size="sm" className="text-brand-600 mb-2">
                Kasparro's Approach
              </Heading>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Model how AI systems evaluate your content</li>
                <li>✓ Deep topical authority analysis</li>
                <li>✓ Specific, implementation-ready actions</li>
                <li>✓ AI-native metrics that predict real search gains</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PIPELINE_STEPS = [
  {
    number: "1",
    title: "Input Assembly",
    description: "Your website crawled, content extracted, competitive landscape mapped",
  },
  {
    number: "2",
    title: "Context Pack",
    description: "All data normalized into AI-readable structures",
  },
  {
    number: "3",
    title: "7 Audit Modules",
    description: "Each module independently evaluates a critical SEO dimension",
  },
  {
    number: "4",
    title: "Synthesis",
    description: "Module outputs combined into a unified intelligence model",
  },
  {
    number: "5",
    title: "Output Surfaces",
    description: "Dashboard, reports, and API access to your SEO intelligence",
  },
];

export function PipelineSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-section">
        <Heading level={2} size="lg" className="mb-4 text-center">
          How Kasparro Works
        </Heading>
        <Text
          size="base"
          color="secondary"
          className="text-center max-w-2xl mx-auto mb-12"
        >
          A pipeline architecture designed for AI-native intelligence
        </Text>

        <div className="space-y-4">
          {PIPELINE_STEPS.map((step, idx) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <Heading level={3} size="sm" className="mb-1">
                  {step.title}
                </Heading>
                <Text size="sm" color="secondary">
                  {step.description}
                </Text>
              </div>
              {idx < PIPELINE_STEPS.length - 1 && (
                <div className="hidden md:block text-2xl text-slate-300 ml-4">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
      <div className="container-section text-center">
        <Heading level={2} size="lg" className="text-white mb-4">
          See Kasparro in Action
        </Heading>
        <Text size="lg" className="text-white/90 max-w-2xl mx-auto mb-8">
          Explore the product dashboard and audit reports with demo data
        </Text>
        <Link href="/app/dashboard">
          <Button size="lg" variant="secondary">
            Explore Dashboard
          </Button>
        </Link>
      </div>
    </section>
  );
}
