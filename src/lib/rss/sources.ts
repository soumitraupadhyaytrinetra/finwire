export interface RSSSource {
  name: string;
  feedUrl: string;
  url: string;
  category: string;
  authority: number;
}

export const defaultSources: RSSSource[] = [
  // Markets / general
  // Bloomberg Markets removed 2026-06-30 — paywalled article pages meant
  // every Bloomberg story had an empty body / no TL;DR. The four sources
  // below all return scrapeable article pages; OilPrice.com added for
  // commodity coverage, Business Insider Markets moved up from economy
  // because it's a better fit here.
  { name: "Reuters Business", feedUrl: "https://www.reutersagency.com/feed/?best-topics=business&post_type=best", url: "https://www.reuters.com/business/", category: "markets", authority: 10 },
  { name: "CNBC", feedUrl: "https://www.cnbc.com/id/100003114/device/rss/rss.html", url: "https://www.cnbc.com", category: "markets", authority: 8 },
  { name: "MarketWatch", feedUrl: "https://feeds.marketwatch.com/marketwatch/topstories/", url: "https://www.marketwatch.com", category: "markets", authority: 8 },
  { name: "Yahoo Finance", feedUrl: "https://finance.yahoo.com/news/rssindex", url: "https://finance.yahoo.com", category: "markets", authority: 7 },
  { name: "Business Insider Markets", feedUrl: "https://markets.businessinsider.com/rss/news", url: "https://markets.businessinsider.com", category: "markets", authority: 7 },
  { name: "OilPrice.com", feedUrl: "https://oilprice.com/rss/main", url: "https://oilprice.com", category: "markets", authority: 7 },

  // Stocks / investing
  { name: "Financial Times", feedUrl: "https://www.ft.com/rss/home", url: "https://www.ft.com", category: "stocks", authority: 9 },
  { name: "Wall Street Journal", feedUrl: "https://feeds.a.dj.com/rss/RSSMarkets.xml", url: "https://www.wsj.com", category: "stocks", authority: 9 },
  { name: "Seeking Alpha", feedUrl: "https://seekingalpha.com/feed.xml", url: "https://seekingalpha.com", category: "stocks", authority: 7 },
  { name: "Investing.com", feedUrl: "https://www.investing.com/rss/news.rss", url: "https://www.investing.com", category: "stocks", authority: 6 },
  { name: "Benzinga", feedUrl: "https://www.benzinga.com/feed", url: "https://www.benzinga.com", category: "stocks", authority: 6 },

  // Crypto
  { name: "CoinDesk", feedUrl: "https://www.coindesk.com/arc/outboundfeeds/rss/", url: "https://www.coindesk.com", category: "crypto", authority: 9 },
  { name: "Cointelegraph", feedUrl: "https://cointelegraph.com/rss", url: "https://cointelegraph.com", category: "crypto", authority: 7 },

  // Banking
  { name: "American Banker", feedUrl: "https://www.americanbanker.com/feed?rss=true", url: "https://www.americanbanker.com", category: "banking", authority: 8 },
  { name: "Banking Dive", feedUrl: "https://www.bankingdive.com/feeds/news/", url: "https://www.bankingdive.com", category: "banking", authority: 6 },
  { name: "PYMNTS", feedUrl: "https://www.pymnts.com/feed/", url: "https://www.pymnts.com", category: "banking", authority: 7 },

  // Fintech
  { name: "Finextra", feedUrl: "https://www.finextra.com/rss/feed.aspx", url: "https://www.finextra.com", category: "fintech", authority: 7 },
  { name: "Forbes", feedUrl: "https://www.forbes.com/finance/feed/", url: "https://www.forbes.com/finance/", category: "fintech", authority: 8 },
  { name: "Fortune", feedUrl: "https://fortune.com/feed/", url: "https://fortune.com", category: "fintech", authority: 8 },

  // Regulation
  { name: "SEC Press Releases", feedUrl: "https://www.sec.gov/news/pressreleases.rss", url: "https://www.sec.gov/news/pressreleases", category: "regulation", authority: 10 },
  { name: "Federal Reserve", feedUrl: "https://www.federalreserve.gov/feeds/press_all.xml", url: "https://www.federalreserve.gov", category: "regulation", authority: 10 },
  { name: "ECB", feedUrl: "https://www.ecb.europa.eu/rss/press.html", url: "https://www.ecb.europa.eu", category: "regulation", authority: 10 },

  // Economy
  { name: "The Economist", feedUrl: "https://www.economist.com/finance-and-economics/rss.xml", url: "https://www.economist.com/finance-and-economics", category: "economy", authority: 9 },

  // Forex
  { name: "FXStreet", feedUrl: "https://www.fxstreet.com/rss/news", url: "https://www.fxstreet.com", category: "forex", authority: 7 },
  { name: "FXEmpire", feedUrl: "https://www.fxempire.com/rss/news", url: "https://www.fxempire.com", category: "forex", authority: 6 },
];

export const categoryMapping: Record<string, string> = {
  markets: "markets",
  stocks: "stocks",
  crypto: "crypto",
  banking: "banking",
  fintech: "fintech",
  regulation: "regulation",
  economy: "economy",
  forex: "forex",
};
