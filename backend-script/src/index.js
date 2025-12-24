import "dotenv/config";

import { fetchLatestArticle } from "./fetchArticle.js";
import { searchGoogle } from "./googleSearch.js";
import { scrapeArticle } from "./scrapeArticle.js";
import { rewriteArticle } from "./llmRewrite.js";
import { publishArticle } from "./publishArticle.js";

console.log("SERPER KEY:", process.env.SERPER_API_KEY ? "loaded" : "missing");
console.log("GEMINI KEY:", process.env.GEMINI_API_KEY ? "loaded" : "missing");


async function run() {
    
  const article = await fetchLatestArticle();
  const originalContent = await scrapeArticle(article.url);


  const results = await searchGoogle(article.title);

  const refContents = [];
  const refLinks = [];

  for (const r of results) {
    refLinks.push(r.link);
    refContents.push(await scrapeArticle(r.link));
  }

  const updated = await rewriteArticle(
    originalContent,
    refContents[0],
    refContents[1]
  );

  await publishArticle(article.id, updated, refLinks);

  console.log("✅ Article enhanced & published");
}

run();
