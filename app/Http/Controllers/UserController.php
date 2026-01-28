<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function AllUser(){
        $users = DB::table('users')->get();

        return Inertia::render('Admin/Users/index', ['users' => $users]);
    }
}
