# FinWire

A finance and markets news intelligence platform. Aggregates headlines from major wires, exchanges, regulators, and analyst outlets across 8 categories — markets, stocks, crypto, banking, fintech, regulation, economy, and forex.

**Live demo:** _(deploy after launch)_

## What FinWire is

FinWire is a static site that crawls ~25 RSS feeds from Reuters, Bloomberg, CNBC, MarketWatch, SEC, Federal Reserve, ECB, CoinDesk, Finextra, and others, then surfaces them through a category-indexed reading experience. Built on Astro, designed for fast page loads and zero-tracking browsing.

It is the finance-sector sibling of [DeepWire](https://github.com/Himan-D/deepwire), which covers AI and deep-tech instead.

## Features

- 8 category landing pages (Markets, Stocks, Crypto, Banking, Fintech, Regulation, Economy, Forex)
- Article detail pages with TL;DR, full text, importance score, related stories
- Trending sidebar with tag-driven growth tracking
- Full-text search across all ingested articles
- Dark theme, terracotta accent, Manrope typography — identical visual treatment to DeepWire
- Read-only admin dashboard at `/admin` showing counts, source list, and trends
- All static HTML output — no client-side database, no third-party trackers
- Article ingestion pipeline via RSS → keyword classifier → optional full-text crawl → JSON store

## Getting Started

### Clone and install

```sh
git clone https://github.com/Himan-D/finwire.git
cd finwire
npm install
npm run dev
```

Dev server runs at `http://localhost:4321/`.

### Ingest finance feeds

```sh
npm run ingest              # all sources
npm run ingest "CoinDesk"   # one source only
```

### Other worker commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build |
| `npm run ingest` | Pull RSS from all 24 sources into `data/articles.json` |
| `npm run process` | Backfill full content for unprocessed articles |
| `npm run backfill` | Pull recent SEC EDGAR 10-K filings |
| `npm run db:init` | Mirror `data/articles.json` ↔ SQLite at `data/finwire.db` |
| `npm test` | Run classifier unit tests |

## Configuration

All site identity lives in `src/config.ts`:

```ts
export const siteConfig = {
  name: "FinWire",
  description: "Finance & Markets News Intelligence",
  url: "https://finwire.app",
  // ...
};

export const categories = [
  { id: "markets", label: "Markets", icon: "📈" },
  // ...7 more
];
```

The RSS source list is in `src/lib/rss/sources.ts`. The category classifier vocabulary is in `src/lib/ai/classify.ts`.

## Project Structure

```
finwire/
├── astro.config.mjs
├── package.json
├── vitest.config.ts
├── data/                       # runtime: articles.json, sources-state.json, finwire.db
├── public/
├── src/
│   ├── config.ts               # siteConfig + categories + nav
│   ├── styles/global.css       # design tokens (identical to deepwire)
│   ├── layouts/{Base,Admin}Layout.astro
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── news/               # NewsCard, HeroSection, TrendingTopics, ...
│   │   ├── search/SearchBar.astro
│   │   └── ui/                 # Badge, TimeAgo
│   ├── lib/
│   │   ├── data.ts             # JSON-backed read API
│   │   ├── utils.ts
│   │   ├── rss/{parser,sources}.ts
│   │   ├── ai/classify.ts      # keyword + source-hint classifier
│   │   ├── content-crawler.ts  # jsdom + Mozilla Readability
│   │   └── db/{index,schema}.ts
│   └── pages/
│       ├── index.astro
│       ├── trending.astro
│       ├── markets.astro, stocks.astro, crypto.astro,
│       ├── banking.astro, fintech.astro, regulation.astro,
│       ├── economy.astro, forex.astro
│       ├── search.astro
│       ├── story/[slug].astro
│       ├── company/[slug].astro
│       ├── technology/[slug].astro
│       └── admin/{index,feeds,jobs,trends}.astro
├── tests/
│   └── ai/classify.test.ts
└── workers/
    ├── db-migrate.ts
    ├── rss-ingestion.ts
    ├── article-processing.ts
    └── backfill.ts             # SEC EDGAR puller
```

## License

MIT.
