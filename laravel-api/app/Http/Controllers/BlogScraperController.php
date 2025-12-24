<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\Article;

class BlogScraperController extends Controller
{
    public function scrape()
    {
        $client = new Client();

        // LAST PAGE = oldest articles
        $url = 'https://beyondchats.com/blogs/page/14/';

        $response = $client->get($url);
        $html = $response->getBody()->getContents();

        $crawler = new Crawler($html);

        $articles = $crawler->filter('article.entry-card');

        $count = $articles->count();

        // Take last 5 (oldest)
        $articles->slice($count - 5, 5)->each(function ($node) {

            $title = $node->filter('h2.entry-title a')->text();
            $url   = $node->filter('h2.entry-title a')->attr('href');

            Article::updateOrCreate(
                ['url' => $url],
                ['title' => $title]
            );
        });

        return "Scraping done ✅";
    }
}
