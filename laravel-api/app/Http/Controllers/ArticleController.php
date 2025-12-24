<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    // GET /api/articles
    public function index()
    {
        return Article::select(
            'id',
            'title',
            'url',
            'created_at',
            'updated_at'
        )->get();
    }

    // GET /api/articles/{id}
    public function show($id)
    {
        return Article::findOrFail($id);
    }

    // POST /api/articles
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'url'   => 'required|url|unique:articles,url',
        ]);

        return Article::create($validated);
    }

    // PUT /api/articles/{id}
    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string',
            'url'   => 'sometimes|url|unique:articles,url,' . $article->id,
            'content' => 'sometimes|string',
        ]);

        $article->update($validated);

        return $article;
    }

    // DELETE /api/articles/{id}
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return response()->json([
            'message' => 'Article deleted successfully'
        ]);
    }
}
