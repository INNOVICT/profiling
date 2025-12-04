<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Socialite;

class SocialiteController extends Controller
{
    //
    public function redirectToProvider(){
        return Socialite::driver('google')->redirect();
    }
    
    public function handleProviderCallback(){
        $user = Socialite::driver('google')->user();
        
        
        
    }
}
