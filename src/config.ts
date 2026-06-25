export const siteConfig = {
  name: "FinWire",
  description: "Finance & Markets News Intelligence",
  url: process.env.SITE_URL || "https://finwire.app",
  author: "FinWire",
  twitter: "@finwire",
};

export const categories = [
  { id: "markets", label: "Markets", icon: "📈" },
  { id: "stocks", label: "Stocks", icon: "💹" },
  { id: "crypto", label: "Crypto", icon: "₿" },
  { id: "banking", label: "Banking", icon: "🏦" },
  { id: "fintech", label: "Fintech", icon: "💳" },
  { id: "regulation", label: "Regulation", icon: "⚖️" },
  { id: "economy", label: "Economy", icon: "🌐" },
  { id: "forex", label: "Forex", icon: "💱" },
];

export const navigation = [
  { title: "Trending", url: "/trending" },
  { title: "Markets", url: "/markets" },
  { title: "Stocks", url: "/stocks" },
  { title: "Crypto", url: "/crypto" },
  { title: "Banking", url: "/banking" },
  { title: "Fintech", url: "/fintech" },
  { title: "Economy", url: "/economy" },
  { title: "Forex", url: "/forex" },
];
