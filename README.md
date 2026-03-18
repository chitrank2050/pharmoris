# Pharmoris Dashboard

> A high-performance, real-time pharmaceutical intelligence dashboard built for monitoring medicine supply, cost analytics, and regional trends.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Visualization**: Recharts
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🛠️ Engineering Decisions

### 1. Feature-First Architecture

The project follows a "Feature-First" directory structure (located in `src/features`). Each major domain (Cost Analytics, KPI Metrics, Supply Table, Trends) contains its own components, logic, and types. This ensures high cohesion and low coupling as the application scales.

### 2. Local-First Strategy

To ensure a zero-latency user experience during the assessment, all data is handled via a "Local-First" approach using imported mock data from `src/data`. This eliminates the need for a backend while demonstrating how the UI handles complex data structures.

### 3. Motion & Micro-interactions

Standard transition patterns were abstracted into `src/lib/animations.ts`. This ensures consistent entry animations (fade-ups, staggers) and hover states across the entire dashboard, providing a premium "app-like" feel.

### 4. Hybrid Layout System

The dashboard uses a combination of CSS Grid for macro-layouts (the main dashboard grid) and Flexbox for micro-layouts (card headers, navigation). This provides maximum flexibility for responsive adjustments.

## ⚖️ Technical Trade-offs

- **Client-Side Processing**: Data filtering and sorting for the Supply Table happen entirely on the client. While this provides instantaneous feedback for the current data size (~100 items), a production environment with thousands of records would require shifting this to server-side paginated queries.
- **Fixed-Height Sections**: The Cost Savings Chart and Insights panels use explicit vertical constraints to maintain a balanced "dashboard look". On extremely small vertical viewports, these might require scrollable containers.
- **Dark Mode Only**: The current design is optimized for a premium dark-mode experience. A light mode implementation was deferred to prioritize refined dark-theme tokens and accessibility.

## 🤖 AI Disclosure

Antigravity assisted with:

- Initial project scaffolding.
- Refining accessibility (A11y) labels.
- Code quality audit at the end of project.

Used **Google's Stitch** for design library guidance.

## 📥 Getting Started

> This project uses pnpm as the package manager. Please use pnpm to install dependencies.

1. **Install dependencies**:
   ```bash
   pnpm run init
   ```
2. **Run dev server**:
   ```bash
   pnpm dev
   ```
3. **Build for production**:
   ```bash
   pnpm build
   ```

## 📥 Other Commands

```bash
# Nuke or obliviate the project
pnpm run nuke

# Run clean setup (Nuke + Install)
pnpm run clean-setup

# Run clean build (Nuke + Build)
pnpm run clean-build

# Run lint
pnpm run lint

# Run format
pnpm run format:check
```

---

Developed by [Chitrank Agnihotri](https://www.chitrankagnihotri.com) as part of a Frontend Engineering Assessment.
