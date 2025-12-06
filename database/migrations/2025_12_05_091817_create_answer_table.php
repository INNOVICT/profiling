<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('answer', function (Blueprint $table) {
            $table->uuid();
            $table->foreignUuid("test_session_id")->constrained('test_session')->cascadeOnDelete();
            $table->foreignUuid("question_id")->constrained('question')->cascadeOnDelete();
            $table->foreignUuid("option_id")->constrained("option")->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('answer');
    }
};
