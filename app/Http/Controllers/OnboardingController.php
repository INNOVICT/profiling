<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    /**
     * Show onboarding page.
     */
    public function index(): Response
    {
        return Inertia::render('Onboarding/Index');
    }

    /**
     * Mark onboarding as completed.
     */
    public function complete(Request $request): RedirectResponse
    {
        $user = $request->user();

        if ($user && !$user->onboarded_at) {
            $user->forceFill([
                'onboarded_at' => now(),
            ])->save();
        }

        return redirect()->route('dashboard');
    }
}
