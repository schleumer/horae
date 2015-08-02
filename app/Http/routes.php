<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('app');
});

Route::post('auth/login', 'AuthController@postLogin');
Route::get('auth/login', 'AuthController@getLogin');
Route::delete('auth/login', 'AuthController@deleteLogin');

Route::resource('users', 'UsersController');