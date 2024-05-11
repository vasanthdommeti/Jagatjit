<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FinancialController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportPolicyController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('backend.pages.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('contacts', ContactController::class);
    Route::resource('user', UserController::class);
    Route::resource('team', TeamController::class);
    Route::resource('new', NewsController::class);
    Route::resource('financial', FinancialController::class);
    Route::resource('report', ReportPolicyController::class);

    // File Category
    Route::get('/category/{type}',[CategoryController::class, 'index'])->name('category.index');
    Route::get('/category/create/{type}',[CategoryController::class, 'create'])->name('category.create');
    Route::post('/category/store',[CategoryController::class, 'store'])->name('category.store');
    Route::delete('/category/destroy/{id}',[CategoryController::class, 'destroy'])->name('category.destroy');

});

require __DIR__.'/auth.php';
require __DIR__.'/backend.php';
