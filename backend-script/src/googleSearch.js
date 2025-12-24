// googleSearch.js
import axios from "axios";

export async function searchGoogle(title) {

  const res = await axios.post(
    "https://google.serper.dev/search",
    { q: title },
    {
      headers: {
        "X-API-KEY": process.env.SERPER_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data.organic
    .slice(0, 2);
}
