<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogScraperController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/scrape', [BlogScraperController::class, 'scrape']);
