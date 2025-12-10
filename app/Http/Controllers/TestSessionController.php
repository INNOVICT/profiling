<?php

namespace App\Http\Controllers;

use App\Models\TestSession;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('TestSession/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $testSession = new TestSession();
        return Inertia::render('TestSession/Create', ['testSession' => $testSession]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'user_id' => "required|exists:users, id",
            'start' => 'required|date',
            'end' => 'required|date',
            'progress' => 'required|string|max:255'
        ]);

        $testSession = TestSession::create($request->all());
        return redirect()->route('test-session.index')->with("success", "Test session created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(TestSession $testSession)
    {
        return Inertia::render('TestSession/Show', ['testSession' => $testSession]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TestSession $testSession)
    {
        return Inertia::render('TestSession/Edit', ['testSession' => $testSession]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TestSession $testSession)
    {
        $validate = $request->validate([
            'user_id' => "nullable|exists:users, id",
            'start' => 'nullable|date',
            'end' => 'nullable|date',
            'progress' => 'nullable|string|max:255'
        ]);

        $testSession->update($request->all());
        return redirect()->route('test-session.index')->with("success", "Test session updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TestSession $testSession)
    {
        $testSession->delete();
        return redirect()->route('test-session.index')->with("success", "Test session deleted successfully");
    }
}
