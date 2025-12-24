import { useEffect, useState } from "react";
import { getArticleById } from "../api/articles";
import Loader from "../components/Loader";

export default function ArticleDetail({ articleId, onBack }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(articleId).then(setArticle);
  }, [articleId]);

  if (!article) return <Loader />;

  // 🚫 Case 1: Article not enhanced yet
  if (!article.content) {
    return (
      <div className="container article-detail">
        <button onClick={onBack}>← Back</button>

        <h1>{article.title}</h1>

        <a href={article.url} target="_blank" rel="noreferrer">
          Read original article
        </a>

        <p style={{ marginTop: "16px", color: "#555" }}>
          This article has not been enhanced yet.
        </p>
      </div>
    );
  }

  // ✅ Case 2: Enhanced article
  const isEnhanced = article.content.includes("References:");

  let mainContent = article.content;
  let references = [];

  if (isEnhanced) {
    const parts = article.content.split("References:");
    mainContent = parts[0];
    references = parts[1]
      .split("\n")
      .map(r => r.trim())
      .filter(Boolean);
  }

  return (
    <div className="container article-detail">
      <button onClick={onBack}>← Back</button>

      <h1>{article.title}</h1>

      <a href={article.url} target="_blank" rel="noreferrer">
        Original Source
      </a>

      <span className="badge enhanced">Enhanced Article</span>

      <div className="content">
        {mainContent.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {references.length > 0 && (
        <div className="references">
          <h3>References</h3>
          <ul>
            {references.map((ref, i) => (
              <li key={i}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
