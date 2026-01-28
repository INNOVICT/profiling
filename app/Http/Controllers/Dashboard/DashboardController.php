<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $Mahasiswa = User::role('user')->get()->count();

        return Inertia::render('Dashboard', ['jumlah_mahasiswa' => $Mahasiswa]);
    }
}
