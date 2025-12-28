import { Heading, Text, Divider } from "@/components/ui/typography";
import { Card } from "@/components/ui/primitives";

export const metadata = {
  title: "About - Kasparro",
};

export default function About() {
  return (
    <div className="py-20">
      <div className="container-section max-w-3xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <Heading level={1} size="xl" className="mb-4">
            About Kasparro
          </Heading>
          <Text size="lg" color="secondary">
            Founder vision, product philosophy, and the future of search
          </Text>
        </div>

        {/* Mission */}
        <Card title="Our Mission" className="mb-12">
          <Divider />
          <Text className="mb-4">
            To translate how AI systems understand and evaluate content into actionable intelligence for brands.
          </Text>
          <Text color="secondary">
            SEO has always been about understanding how search engines work. AI changed everything. Search is no longer algorithmic ranking—it's multi-modal AI understanding. Most SEO tools haven't caught up.
          </Text>
        </Card>

        {/* Philosophy */}
        <Card title="Product Philosophy" className="mb-12">
          <Divider />
          <div className="space-y-6">
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                1. Specificity Over Generality
              </Heading>
              <Text size="sm" color="secondary">
                Generic recommendations don't drive results. Each audit module is specialized to evaluate one critical dimension. Specificity creates actionability.
              </Text>
            </div>

            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                2. AI-Native, Not AI-Powered
              </Heading>
              <Text size="sm" color="secondary">
                We don't use AI as a buzzword. Our entire platform is designed around how AI systems actually evaluate brand content. The architecture mirrors modern LLM behavior and understanding.
              </Text>
            </div>

            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                3. Architecture First
              </Heading>
              <Text size="sm" color="secondary">
                Clean system design enables trust and extensibility. Our input → context → modules → synthesis → output pipeline is transparent and auditable. No black boxes.
              </Text>
            </div>

            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                4. Data Modeling Discipline
              </Heading>
              <Text size="sm" color="secondary">
                Strong schemas everywhere. Typed data structures ensure consistency, reduce bugs, and make the platform composable for future features and integrations.
              </Text>
            </div>
          </div>
        </Card>

        {/* Vision */}
        <Card title="Vision for AI-First Search" className="mb-12">
          <Divider />
          <Text className="mb-4">
            In 2025 and beyond, "SEO" will mean something different. As search shifts from algorithmic rankings to AI-generated answers, the questions brands need to answer change:
          </Text>
          <ul className="space-y-3 text-sm text-slate-700 mb-4">
            <li className="flex gap-3">
              <span className="text-brand-600 font-bold">•</span>
              <span>
                <span className="font-semibold">Will AI systems choose my content?</span>
                {" "}(over competitors)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 font-bold">•</span>
              <span>
                <span className="font-semibold">Do I have the E-E-A-T signals</span>
                {" "}AI systems verify?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 font-bold">•</span>
              <span>
                <span className="font-semibold">Am I vulnerable to AI-driven commoditization?</span>
                {" "}(generic LLM answers)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 font-bold">•</span>
              <span>
                <span className="font-semibold">What's my brand's unique positioning</span>
                {" "}in an AI world?
              </span>
            </li>
          </ul>
          <Text color="secondary">
            Kasparro exists to help brands answer these questions with data, not guesses.
          </Text>
        </Card>

        {/* Team */}
        <Card title="Building Kasparro" className="mb-12">
          <Divider />
          <Text className="mb-4">
            Built by engineers and product strategists who've spent years in SEO, content strategy, and AI systems.
          </Text>
          <Text color="secondary">
            We obsess over clean architecture, strong typing, and user clarity. We believe frontend engineering discipline is critical to shipping products that feel solid, trustworthy, and maintainable.
          </Text>
        </Card>

        {/* Values */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
          <Heading level={3} size="md" className="mb-6">
            Core Values
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                Clarity
              </Heading>
              <Text size="sm" color="secondary">
                Complex problems deserve clear solutions. We prioritize understanding over cleverness.
              </Text>
            </div>
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                Rigor
              </Heading>
              <Text size="sm" color="secondary">
                Strong types, structured data, and disciplined architecture everywhere.
              </Text>
            </div>
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                Actionability
              </Heading>
              <Text size="sm" color="secondary">
                Intelligence without action is analysis paralysis. We focus on recommendations you can implement.
              </Text>
            </div>
            <div>
              <Heading level={4} size="sm" className="text-brand-600 mb-2">
                Honesty
              </Heading>
              <Text size="sm" color="secondary">
                We show trade-offs, limitations, and real impact. No overselling.
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
