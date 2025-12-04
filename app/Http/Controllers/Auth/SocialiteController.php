<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SocialiteController extends Controller
{
    //
    public function redirectToProvider(){
        return Socialite::driver('google')->redirect();
    }
    
    public function handleProviderCallback(){
        $googleUser = Socialite::driver('google')->user();
        
        $user = User::where('email', $googleUser->getEmail())->first();
        
        if($user){
            Auth::login($user);
            return redirect()->route('dashboard');
        }
        else{
            $newuser = User::create([
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'password' => bcrypt('password')
            ]);
            Auth::login($newuser);
            return redirect()->route('dashboard');
        }
        
        
        
        
    }
}
