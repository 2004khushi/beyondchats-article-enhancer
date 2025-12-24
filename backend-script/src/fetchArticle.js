// fetchArticle.js
import axios from "axios"; //HTTP Requests

export async function fetchLatestArticle() {
  const res = await axios.get("http://127.0.0.1:8000/api/articles");
  //console.log(res);

  const articles = res.data;
  //console.log(articles);
  
  if (!articles.length) {
    throw new Error("No articles found");
  }

  // assuming latest article is the last one created
  const latestArticle = articles[articles.length - 1];

  return latestArticle;
}
