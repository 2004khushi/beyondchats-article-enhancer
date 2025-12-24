// publishArticle.js
import axios from "axios";

export async function publishArticle(articleId, content, references) {
  await axios.put(`http://127.0.0.1:8000/api/articles/${articleId}`, {
    content: content + "\n\nReferences:\n" + references.join("\n")
  });
}
