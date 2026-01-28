<?php

use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Socialite;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get("/test", function () {
    return Inertia::render('Home');
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/users', function () {
    return Inertia::render('Admin/Users/index');
})->middleware(['auth', 'verified'])->name('usersdata');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/profiles', function () {
        // Inertia akan mencari komponen di Pages/Profile/Index.jsx
        return Inertia::render('Profile/Index', [
            // Anda dapat menambahkan data atau props di sini jika diperlukan
            'exampleProp' => 'Data dari Laravel',
        ]);
    })->name('profiles');
});

Route::get("/auth/google/redirect", [SocialiteController::class, 'redirectToProvider'])
    ->name('auth.google.redirect');

Route::get("/auth/google/callback", [SocialiteController::class, 'handleProviderCallback'])
    ->name('auth.google.callback');

require __DIR__ . '/auth.php';
