<?php

use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\OnboardingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\EnsureOnboarded;
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

Route::get("/home", function () {
    return Inertia::render('Home');
});



Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified', EnsureOnboarded::class])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/onboarding', [OnboardingController::class, 'index'])->name('onboarding.index');
    Route::post('/onboarding/complete', [OnboardingController::class, 'complete'])->name('onboarding.complete');
});




Route::middleware(['auth', EnsureOnboarded::class])->group(function () {
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

    Route::get("/test", function(){
        return Inertia::render("Test/index");
    });

    Route::resource("/question", QuestionController::class);
    Route::get('/users', [UserController::class, 'AllUser'])->middleware(['auth', 'verified'])->name('usersdata');

});

Route::get("/auth/google/redirect", [SocialiteController::class, 'redirectToProvider'])
    ->name('auth.google.redirect');

Route::get("/auth/google/callback", [SocialiteController::class, 'handleProviderCallback'])
    ->name('auth.google.callback');

Route::post("/auth/logout", [SocialiteController::class, 'logout'])->name('auth.google.logout');

Route::get("/error", function(){
    return Inertia::render('Error/index');
})->name('error');

require __DIR__ . '/auth.php';
