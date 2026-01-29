<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Option;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Test/AddQuestion/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'question' => 'required|string',
            'option' => 'required|array',
        ]);

        $LastNoSoal = Question::max('no_soal') ?? 0;
        $noSoal = $LastNoSoal + 1;

        $insertQuestion = Question::create([
            'question_text' => $request->question,
            'no_soal' => $noSoal,
        ]);

        $dataOption = [];

        foreach($request->option as $option){
            $dataOption = [
                "question_id" => $insertQuestion->id,
                "traits_id" => "1",
                "option_text" => $option,
                "created_at" => now(),
                "updated_at" => now(),
            ];
        }

        $insertOption = Option::insert($dataOption);

        return to_route("question.create")->with("sucess", "Data Sucessfuly added");
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
