import axios from "axios";

const API = "http://127.0.0.1:8000/api/articles";

export const getArticles = async () => {
  try {
    const res = await axios.get(API);
    return res.data ? res.data : [];
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return null; 
  }
}
export const getArticleById = async (id) => {
  if (!id || isNaN(id)) {
    console.warn("Invalid article ID:", id);
    return null;
  }

  try {
    const res = await axios.get(`${API}/${id}`);
    return res.data ? res.data : null;
  } catch (error) {
    console.error(`Failed to fetch article ${id}:`, error);
    return null;
  }
};
