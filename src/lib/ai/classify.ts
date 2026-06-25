export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  markets: [
    "stock market", "wall street", "wall st", "equities", "equity market",
    "s&p 500", "s&p", "dow jones", "dow", "nasdaq", "russell 2000",
    "index fund", "broad market", "bull market", "bear market",
    "rally", "selloff", "sell-off", "market close", "market open",
    "intraday", "market cap", "market capitalization",
    "trading session", "trading day", "share price", "stock price",
  ],
  stocks: [
    "earnings", "revenue", "quarterly results", "q1 results", "q2 results",
    "q3 results", "q4 results", "guidance", "eps", "price target",
    "analyst rating", "buy rating", "sell rating", "hold rating",
    "merger", "acquisition", "acquires", "buyback", "share buyback",
    "dividend", "ipo", "initial public offering", "going public",
    "delisting", "tender offer", "hostile takeover", "spinoff",
    "stock split", "reverse split", "insider trading", "insider sale",
    "13f", "10-k", "10-q", "8-k",
  ],
  crypto: [
    "bitcoin", "btc", "ethereum", "eth", "crypto", "cryptocurrency",
    "blockchain", "defi", "decentralized finance", "nft", "non-fungible token",
    "stablecoin", "usdt", "usdc", "binance", "coinbase", "kraken",
    "altcoin", "memecoin", "solana", "sol", "xrp", "ripple", "cardano",
    "dogecoin", "litecoin", "web3", "token", "ico", "exchange-traded fund",
    "spot etf", "bitcoin etf", "ethereum etf", "halving", "mining",
  ],
  banking: [
    "bank", "banker", "banking", "commercial bank", "investment bank",
    "retail bank", "deposit", "deposits", "lending", "loan", "loans",
    "mortgage", "credit", "net interest margin", "nim",
    "jpmorgan", "jpm", "goldman sachs", "gs", "morgan stanley", "ms",
    "bank of america", "bac", "citigroup", "c", "wells fargo", "wfc",
    "hsbc", "barclays", "deutsche bank", "ubs", "credit suisse",
    "capital ratio", "tier 1", "basel", "basel iii", "fdic",
    "central bank", "interest rate", "rate hike", "rate cut",
  ],
  fintech: [
    "fintech", "payments", "payment platform", "digital wallet", "e-wallet",
    "neobank", "challenger bank", "stripe", "plaid", "square", "block",
    "paypal", "adyen", "wise", "revolut", "klarna", "affirm",
    "venmo", "cash app", "zelle", "apple pay", "google pay",
    "embedded finance", "bnpl", "buy now pay later", "remittance",
    "cross-border payments", "open banking", "rails",
  ],
  regulation: [
    "sec", "securities and exchange commission", "cftc", "cfpb",
    "finra", "fca", "esma", "eba", "occ", "fdic",
    "federal reserve", "fed", "fomc", "powell", "rate decision",
    "ecb", "european central bank", "lagarde", "boe", "bank of england",
    "boj", "bank of japan", "pboc", "people's bank of china",
    "regulation", "regulator", "regulatory", "compliance", "enforcement",
    "investigation", "subpoena", "lawsuit", "settlement", "fine", "penalty",
    "rule", "rulemaking", "comment letter", "no-action letter",
    "antitrust", "monopoly", "antitrust lawsuit",
    "executive order", "sanctions", "tariff",
  ],
  economy: [
    "gdp", "gross domestic product", "inflation", "cpi", "consumer price index",
    "ppi", "producer price index", "pce", "core pce",
    "unemployment", "jobless claims", "nonfarm payrolls", "nfp",
    "labor market", "wage growth", "wage inflation",
    "recession", "soft landing", "hard landing", "stagflation",
    "yield curve", "treasury", "treasuries", "bond yield", "10-year yield",
    "2-year yield", "yield inversion", "monetary policy", "fiscal policy",
    "stimulus", "quantitative easing", "qe", "quantitative tightening", "qt",
    "balance sheet", "dollar index", "dxy",
  ],
  forex: [
    "forex", "fx", "currency", "currencies", "exchange rate",
    "dollar", "usd", "euro", "eur", "yen", "jpy", "pound", "gbp",
    "franc", "chf", "yuan", "cny", "won", "krw", "rupee", "inr",
    "real", "brl", "peso", "mxn", "lira", "try",
    "usd/jpy", "eur/usd", "gbp/usd", "dxy", "dollar index",
    "carry trade", "fx intervention", "fx market", "currency market",
    "currency war", "devaluation", "revaluation",
  ],
};

export const SOURCE_CATEGORY_HINTS: Record<string, string[]> = {
  "Reuters Business": ["markets"],
  "Bloomberg Markets": ["markets"],
  "Financial Times": ["markets"],
  "Wall Street Journal": ["markets"],
  "CNBC": ["markets"],
  "MarketWatch": ["markets"],
  "Yahoo Finance": ["markets"],
  "Seeking Alpha": ["stocks"],
  "Investing.com": ["stocks"],
  "CoinDesk": ["crypto"],
  "Cointelegraph": ["crypto"],
  "Finextra": ["fintech"],
  "American Banker": ["banking"],
  "Banking Dive": ["banking"],
  "Forbes": ["fintech"],
  "Fortune": ["fintech"],
  "Business Insider": ["economy"],
  "The Economist": ["economy"],
  "SEC Press Releases": ["regulation"],
  "Federal Reserve": ["regulation"],
  "ECB": ["regulation"],
  "FXStreet": ["forex"],
  "FXEmpire": ["forex"],
  "Benzinga": ["stocks"],
};

function extractKeywords(title: string, content: string): string {
  const text = `${title} ${content}`.toLowerCase();
  return text;
}

export function classifyArticle(title: string, content: string): string[] {
  const text = extractKeywords(title, content);
  const matched: string[] = [];

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) {
      matched.push(category);
    }
  }

  return [...new Set(matched)];
}

export function getPrimaryCategory(
  title: string,
  content: string,
  source: string
): string {
  const keywords = classifyArticle(title, content);
  const sourceHint = SOURCE_CATEGORY_HINTS[source];

  if (keywords.length === 0 && sourceHint) {
    return sourceHint[0];
  }

  if (keywords.includes("research") && keywords.includes("ai")) {
    return "research";
  }

  if (keywords.includes("security")) return "security";
  if (keywords.includes("semiconductors")) return "semiconductors";
  if (keywords.includes("space")) return "space";
  if (keywords.includes("robotics")) return "robotics";
  if (keywords.includes("quantum")) return "research";
  if (keywords.includes("startups") && !keywords.includes("ai")) return "startups";
  if (keywords.includes("agents")) return "agents";
  if (keywords.includes("llms")) return "llms";
  if (keywords.includes("cloud")) return "cloud";
  if (keywords.includes("ai")) return "ai";

  if (sourceHint) return sourceHint[0];

  return "ai";
}

export const categoryMapping: Record<string, string> = {
  technology: "ai",
  ai: "ai",
  agents: "agents",
  llms: "llms",
  robotics: "robotics",
  startups: "startups",
  research: "research",
  security: "security",
  cloud: "cloud",
  semiconductors: "semiconductors",
  space: "space",
  quantum: "quantum",
};
