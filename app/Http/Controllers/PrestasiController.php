<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrestasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Prestasi/Index', [
            'prestasi' => Prestasi::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Prestasi/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'user_id' => 'required|users',
            'nama_prestasi' => 'required|string|min:6',
            'tanggal' => 'required|date',
        ]);

        $prestasi = Prestasi::create($validate);

        return redirect()->route('prestasi.index')->with('success', 'Prestasi berhasil ditambahkan');
            }

    /**
     * Display the specified resource.
     */
    public function show(Prestasi $prestasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prestasi $prestasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prestasi $prestasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prestasi $prestasi)
    {
        //
    }
}
