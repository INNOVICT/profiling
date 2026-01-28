<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Socialite\Socialite;
use App\Models\User;
use Error;
use Illuminate\Support\Facades\Auth;
use League\OAuth1\Client\Credentials\Credentials;

class SocialiteController extends Controller
{
    //
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        try{
            $googleUser = Socialite::driver('google')->user();
            $user = User::where('email', $googleUser->getEmail())->first();
            if ($user) {
                Auth::login($user);
                $user->assignRole('user');
                $user->status = 'active';
                return redirect()->route('dashboard');
            } else {
                $newuser = User::create([
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'status' => 'active',
                    'password' => bcrypt('password'),
                ]);
                // $newuser->assignRole('user');
                Auth::login($newuser);
                return redirect()->route('dashboard');
            }
        }
        catch(\Exception $e){
            dd($e);
        }
    }

    public function logout(Request $request){
        $User = User::where(Auth::guard()->id());

        $User->status = 'inactive';

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home')->with("success", "Anda berhasil logout");
    }
}
