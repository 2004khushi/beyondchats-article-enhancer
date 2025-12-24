export default function ArticleCard({ article, onClick }) {

  return (
    <div className="card" onClick={onClick}>
      <h3>{article.title}</h3>

      <p className="date">
        {new Date(article.updated_at).toLocaleDateString()}
      </p>
    </div>
  );
}
