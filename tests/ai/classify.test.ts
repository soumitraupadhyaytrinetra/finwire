import { describe, it, expect } from "vitest";
import { classifyArticle, getPrimaryCategory } from "../../src/lib/ai/classify";

describe("classifyArticle — finance categories", () => {
  it("tags a crypto article as crypto", () => {
    const tags = classifyArticle(
      "Bitcoin surges past $100,000 as ETF inflows accelerate",
      "The price of bitcoin climbed to a new all-time high today, driven by spot ETF inflows from institutional investors. Ethereum also rallied."
    );
    expect(tags).toContain("crypto");
  });

  it("tags a banking article as banking", () => {
    const tags = classifyArticle(
      "JPMorgan reports record quarterly profit on strong lending",
      "The bank's net interest margin expanded as deposits grew. JPMorgan Chase beat analyst estimates."
    );
    expect(tags).toContain("banking");
  });

  it("tags a regulation article as regulation", () => {
    const tags = classifyArticle(
      "SEC charges hedge fund with insider trading",
      "The Securities and Exchange Commission filed a civil complaint alleging violations of federal securities law."
    );
    expect(tags).toContain("regulation");
  });

  it("tags a forex article as forex", () => {
    const tags = classifyArticle(
      "Dollar weakens against yen after BOJ signals rate hike",
      "The US dollar fell against the Japanese yen as the Bank of Japan hinted at tightening monetary policy. Currency traders repositioned."
    );
    expect(tags).toContain("forex");
  });

  it("tags an economy article as economy", () => {
    const tags = classifyArticle(
      "US inflation cools to 2.4 percent in latest CPI report",
      "Consumer prices rose less than expected, suggesting the Federal Reserve's interest rate policy is working. GDP growth also slowed."
    );
    expect(tags).toContain("economy");
  });

  it("tags a fintech article as fintech", () => {
    const tags = classifyArticle(
      "Stripe launches new embedded payments API for neobanks",
      "The fintech giant released a developer toolkit targeting digital banks and payment platforms. Stripe competes with Plaid and Adyen."
    );
    expect(tags).toContain("fintech");
  });

  it("does NOT match the old tech keywords (regression guard)", () => {
    const tags = classifyArticle(
      "OpenAI releases GPT-5 with improved reasoning",
      "The new large language model from OpenAI shows stronger performance on coding benchmarks and math."
    );
    expect(tags).not.toContain("ai");
    expect(tags).not.toContain("llms");
  });
});

describe("getPrimaryCategory — finance source hints", () => {
  it("falls back to source hint when article text has no keywords", () => {
    const cat = getPrimaryCategory(
      "Untitled market update",
      "no recognizable keywords here",
      "SEC Press Releases"
    );
    expect(cat).toBe("regulation");
  });

  it("returns crypto for a crypto article even with crypto source name", () => {
    const cat = getPrimaryCategory(
      "Ethereum staking yields climb",
      "ethereum staking rewards rose this week as more validators joined the network",
      "CoinDesk"
    );
    expect(cat).toBe("crypto");
  });
});
