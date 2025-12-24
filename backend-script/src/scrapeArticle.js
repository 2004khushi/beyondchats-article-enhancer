// scrapeArticle.js
import axios from "axios";
import * as cheerio from "cheerio"; //both together used for Web Scraping

export async function scrapeArticle(url) {
  const html = await axios.get(url);
  const $ = cheerio.load(html.data); // cheerio.load() -> Parse the HTML and give me a tool ($) to query it using CSS selectors
//   After this line:
            // $() works like document.querySelectorAll() in browser
            // You can select tags like article, p, h1, etc.



  const content = $("article").text() || $("p").text();
  return content.trim();
}
