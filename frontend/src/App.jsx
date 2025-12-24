import { useState } from "react";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Header from "./components/Header";

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  return (
    <> 
      <Header />

      {selectedArticleId === null ? (
        <Home onSelectArticle={setSelectedArticleId} />
      ) : (
        <ArticleDetail
          articleId={selectedArticleId}
          onBack={() => setSelectedArticleId(null)}
        />
      )}
    </>
  );
}
