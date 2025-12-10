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
            'user_id' => 'required|exists:users,id',
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
        $prestasi = Prestasi::find($prestasi->id)->get();
        
        return Inertia::render('Prestasi/Show', [
            'prestasi' => $prestasi,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prestasi $prestasi)
    {
        $prestasi = Prestasi::find($prestasi->id)->get();
        
        return Inertia::render('Prestasi/Edit', [
            'prestasi' => $prestasi,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prestasi $prestasi)
    {
        $validate = $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'nama_prestasi' => 'nullable|string|min:6',
            'tanggal' => 'nullable|date',
        ]);

        $prestasi->update($validate);

        return redirect()->route('prestasi.index')->with('success', 'Prestasi berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prestasi $prestasi)
    {
        $prestasi->delete();
        return redirect()->route('prestasi.index')->with('success', 'Prestasi berhasil dihapus');
    }
}
