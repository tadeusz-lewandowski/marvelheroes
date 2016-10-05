<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});

Route::get('/heroes/{name}', function ($name) {
    include_once(app_path() . '/myconfig/config.php');

    $client = new GuzzleHttp\Client();

    $res = $client->request('GET', 'http://gateway.marvel.com/v1/public/characters?apikey='.$apikey.'&hash='.$hash.'&ts='.$ts.'&name='.$name.'');
    return $res->getBody();
});
