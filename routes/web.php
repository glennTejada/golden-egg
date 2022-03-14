<?php

use App\Http\Controllers\admin\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{reactRoutes}', function () {
    return view('welcome');
})->where('reactRoutes', '|entry|winner|good-crack|winner-list');

Route::get('/admin', [AdminController::class, 'index']);
Route::get('/admin/winner-list', [AdminController::class, 'list'])->name('winnerList');
