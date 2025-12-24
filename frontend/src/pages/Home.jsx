import { useEffect, useState } from "react";
import { getArticles } from "../api/articles";
import ArticleCard from "../components/ArticleCard";

export default function Home({ onSelectArticle }) {
  
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    setError(false);

    try {
      const data = await getArticles();

      if (!Array.isArray(data)) {
        throw new Error("Invalid response");
      }

      setArticles(data);

    } catch (err) {

      console.error("Failed to fetch articles:", err);
      setError(true);
      setArticles([]);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);


  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return (
      <p>
        Sorry, API fetching for articles was not successful. <br /><br />Please run  cd laravel-api then  php artisan serve in the terminal.
      </p>
    );
  }


  return (
    <div className="container">
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={() => onSelectArticle(article.id)}
        />
      ))}
    </div>
  );
}
