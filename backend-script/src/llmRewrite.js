// llmRewrite.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function rewriteArticle(original, ref1, ref2) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
You are a professional content editor.

Original Article:
${original}

Reference Article 1:
${ref1}

Reference Article 2:
${ref2}

Task:
- Improve formatting
- Improve clarity and structure
- Match writing style of reference articles
- Do NOT copy text
- Keep facts accurate
`;

  const result = await model.generateContent(prompt);
  const response = result.response;

  return response.text();
}
