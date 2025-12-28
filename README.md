# Kasparro Frontend

Production-grade frontend system for an AI-native SaaS platform specializing in search intelligence.

## ⚡ Quick Start (First-Time Users)

**New to this project?** Start here:

```bash
npm install
npm run dev
```

Open your browser to: **http://localhost:3000**

→ **For more detailed instructions, see [GETTING_STARTED.md](./GETTING_STARTED.md)**

---

## Overview

Kasparro is a complete AI-native SEO and brand intelligence platform. This repository contains:

1. **Public Marketing Website** — Explains what Kasparro is, how it works, and why AI-first SEO matters
2. **Product Dashboard** — Mocked product interface showing brand audit results and AI visibility metrics
3. **Comprehensive Audit Reports** — Seven specialized audit modules with issues, insights, and recommendations

This is **not a landing page clone**. It's a system-design and frontend-engineering challenge demonstrating production-grade architecture, strong typing, and clean component composition.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion (purposeful, minimal)

## Project Structure

```
kasparro-frontend/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Header, Footer)
│   ├── page.tsx                  # Home page
│   ├── platform/page.tsx         # Platform/explainer page
│   ├── about/page.tsx            # About page
│   └── app/                      # Protected dashboard routes
│       ├── layout.tsx
│       ├── dashboard/page.tsx    # Brand snapshot dashboard
│       ├── audit/page.tsx        # Comprehensive audit report
│       └── architecture/page.tsx # System design visualization
│
├── components/
│   ├── layout/
│   │   └── header-footer.tsx     # Main navigation header and footer
│   ├── ui/
│   │   ├── primitives.tsx        # Button, Card, Badge, ScoreDisplay, ProgressBar
│   │   └── typography.tsx        # Heading, Text, Divider
│   ├── marketing/
│   │   └── sections.tsx          # HeroSection, ModulesGrid, etc.
│   ├── dashboard/
│   │   └── dashboard-cards.tsx   # BrandSelector, SnapshotCards
│   └── audit/
│       └── audit-module.tsx      # ModuleSidebar, ModuleDetail, IssueCard
│
├── data/
│   ├── brands.json               # Mock brand data
│   ├── dashboard-metrics.json    # Mock dashboard metrics
│   └── audit-modules.json        # Mock audit module results (7 modules)
│
├── store/
│   └── app-store.ts              # Zustand store for selected brand/module
│
├── types/
│   └── index.ts                  # All TypeScript interfaces
│
├── styles/
│   └── globals.css               # Global Tailwind utilities and custom components
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .gitignore
└── README.md
```

## Architectural Decisions

### 1. **Strong Typing First**
Every piece of data has a TypeScript interface. No ad-hoc object shapes. This prevents bugs and makes the codebase self-documenting.

```typescript
// types/index.ts defines:
- Brand, DashboardMetrics
- AuditModuleData, AuditIssue, AuditRecommendation
- ArchitectureComponent, ArchitectureFlow
- AppState for Zustand
```

### 2. **Mocked Data as JSON**
All mocked data lives in `/data` as static JSON files. This mirrors how a real API would return typed data. Each file corresponds to a domain model.

- `brands.json` — Available brands
- `dashboard-metrics.json` — KPI snapshots per brand
- `audit-modules.json` — Seven audit modules with detailed issues/recommendations

### 3. **Component Separation**
Clear boundaries between layers:

- **UI Primitives** (`Button`, `Card`, `Badge`) — Reusable, unstyled with defaults
- **Layout Components** (`Header`, `Footer`) — App chrome
- **Feature Components** (`BrandSelector`, `ModuleDetail`, `HeroSection`) — Domain logic + UI
- **Page Components** — Compose features, handle data loading

### 4. **State Management with Zustand**
Two pieces of state:

1. `selectedBrandId` — Which brand dashboard is being viewed
2. `selectedModuleId` — Which audit module is expanded

Zustand provides a lightweight, TypeScript-first store without Redux complexity.

```typescript
const { selectedBrandId, setSelectedBrand } = useAppStore();
```

### 5. **Client vs Server Components**
- Pages using interactive state are `"use client"`
- Static content pages are server-rendered
- This minimizes JavaScript bundle while keeping dashboard interactive

### 6. **Styling Strategy**
- **Tailwind CSS** — Utility-first styling
- **Custom Classes** — `.card-elevated`, `.badge-status`, `.glass-morphism`
- **Responsive Grid** — Mobile-first, scales gracefully to desktop

## Pages Breakdown

### Public Routes

#### `/` — Home Page
- **Hero Section**: Value prop + CTA
- **Modules Grid**: 7 audit modules overview
- **Differentiator Section**: Why AI-first vs traditional SEO
- **Pipeline Section**: How Kasparro works (5-step flow)
- **CTA Section**: Link to dashboard

#### `/platform` — Platform/Technical Explainer
- Input Assembly (data sources consumed)
- Context Pack (normalization layer)
- 7 Audit Modules (what each specializes in)
- Synthesis (combining modules)
- Output Surfaces (dashboard, API, reports)
- Philosophy: clarity over marketing

#### `/about` — About Page
- Mission statement
- Product philosophy (4 core beliefs)
- Vision for AI-first search
- Core values

### Protected Dashboard Routes (under `/app`)

#### `/app/dashboard` — Brand Snapshot
- Brand selector (3 mocked brands)
- 4 KPI cards:
  - AI Visibility Score
  - Trust/E-E-A-T Score
  - Non-Branded Keyword Coverage
  - Last Audit Timestamp
- Data from `dashboard-metrics.json`

#### `/app/audit` — Comprehensive Audit Report
**Most complex page.** Demonstrates system design.

- **Sidebar** (left): List of 7 modules with status badges
- **Main Panel** (right): Selected module detail view

Each module displays:
- Score + visual badge
- Key insights (3-4 bullet points)
- Issues (with severity, impact, affected pages)
- Recommendations (with priority, action items)

Data sourced from `audit-modules.json`.

#### `/app/architecture` — System Architecture Visualization
- 5 stages of the system:
  1. Input Assembly (data sources)
  2. Context Pack (normalization)
  3. 7 Audit Modules (independent processing)
  4. Synthesis Layer (combining results)
  5. Output Surfaces (dashboard, API, reports)
- Design principles: Modularity, Transparency, Extensibility
- Complete data flow diagram

## State Management

### Zustand Store (`store/app-store.ts`)

```typescript
interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: string | null;
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleId: string) => void;
}
```

**Why Zustand?**
- Lightweight and TypeScript-native
- No boilerplate (no Redux actions/reducers)
- Direct access: `useAppStore().selectedBrandId`
- Persistence-ready if needed

## Data Models

### Brand
```typescript
interface Brand {
  id: string;
  name: string;
  industry: string;
  domain: string;
  logoUrl: string;
}
```

### DashboardMetrics
```typescript
interface DashboardMetrics {
  brandId: string;
  aiVisibilityScore: number;
  trustEeatScore: number;
  nonBrandedCoverage: number;
  lastAuditDate: string;
  trendDirection: "up" | "down" | "stable";
}
```

### AuditModuleData
```typescript
interface AuditModuleData {
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
```

All data is **typed from end-to-end**. No `any` types.

## Component Composition Examples

### Example 1: Dashboard Page

```typescript
// app/app/dashboard/page.tsx
export default function DashboardPage() {
  const { selectedBrandId, setSelectedBrand } = useAppStore();
  const [brands, metricsData] = loadMockData();

  return (
    <div>
      <BrandSelector brands={brands} selectedBrandId={selectedBrandId} onSelectBrand={setSelectedBrand} />
      {selectedMetrics && <SnapshotCards metrics={selectedMetrics} />}
    </div>
  );
}
```

**Composition:**
- Page composes `BrandSelector` + `SnapshotCards`
- Both are pure components receiving props
- Page handles state and data loading

### Example 2: Audit Module Detail

```typescript
// ModuleDetail receives a single module and displays:
// 1. Header (score, status)
// 2. Key insights (bulleted list)
// 3. Issues (severity badges, impact)
// 4. Recommendations (priority, action items)
```

## UX Decisions

### Information Hierarchy
- **Color** indicates status: green (pass), yellow (warning), red (fail)
- **Score circles** use size and color to communicate priority
- **Badges** clarify severity and priority
- **Cards** group related information

### Responsive Design
- Mobile: Single column, stacked cards
- Tablet: 2-column layouts
- Desktop: 3-4 column grids with sidebars

### Dense Data Clarity
- Nested information, not overwhelming
- Modules expand on click (sidebar)
- Consistent spacing and typography
- Visual hierarchy through weight and size

## Tradeoffs & Assumptions

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| **State Library** | Zustand | Light enough for this scope; easy to migrate to Context later |
| **Mocked Data** | JSON files | Simulates API responses; easy to replace with real API |
| **Styling** | Tailwind CSS | Industry standard; utility-first avoids CSS conflicts |
| **No Authentication** | Built-in assumption | Assumes user is logged in; can add auth layer as needed |
| **No Real-time** | Static snapshots | Shows architecture; can add WebSocket for live updates |
| **Limited Animation** | Framer Motion minimally | Complexity for production shipping |

## Running the Project

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Future Enhancements

1. **Real API Integration** — Replace mock data with actual endpoints
2. **Authentication** — Add login/signup flow
3. **Multi-brand Dashboard** — Compare brands side-by-side
4. **Export Functionality** — PDF reports, CSV exports
5. **Custom Metrics** — Let users define their own KPIs
6. **Real-time Updates** — WebSocket for live audit progress
7. **Audit Scheduling** — Recurring audits with email reports
8. **Advanced Filtering** — Filter issues by type, severity, impact

## Code Quality Principles

✓ **Strong TypeScript** — No `any` types; strict mode enabled  
✓ **Component Reusability** — UI primitives composable, no duplication  
✓ **Clear Naming** — Files, functions, variables are self-documenting  
✓ **Separation of Concerns** — Data loading, state, rendering separated  
✓ **Accessibility Basics** — Semantic HTML, color contrast, keyboard navigation  
✓ **Performance** — Server rendering where possible, client interactivity where needed  

## Notes for Reviewers

This is a **system-design showcase**, not a landing page. Key aspects:

1. **Architecture is intentional** — Five-stage pipeline visualized in `/architecture`
2. **Typing is comprehensive** — All data flows through TypeScript interfaces
3. **Components are composable** — Primitives build up to features
4. **State is predictable** — Zustand store with minimal complexity
5. **Code is maintainable** — Clear folder structure, no god components

The product narrative (AI-first SEO) is expressed through:
- Copy and UX on marketing pages
- Data structure design (audit modules)
- Information hierarchy on dashboard
- System architecture visualization

This demonstrates **how to think about frontend systems as products**, not just UI buckets.

---

**Built as a comprehensive engineering challenge for a production SaaS frontend.**
