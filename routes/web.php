<?php

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\admin\AuthController;
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

Route::get('/admin-login', [AuthController::class, 'login'])->name('login');
Route::post('/admin-login-post', [AuthController::class, 'login_post'])->name('loginPost');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::prefix("admin")->middleware("auth")->group(function (){
    Route::get('/', [AdminController::class, 'index']);
    Route::get('/winner-list', [AdminController::class, 'list'])->name('winnerList');
    Route::get('/delete/{id}/', [AdminController::class, 'delete'])
        ->name('delete');
    Route::get('file-export', [AdminController::class, 'fileExport'])->name('file-export');
});

