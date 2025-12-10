<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    //
    protected $fillable = ["question_id", "option_text", "traits"];
    
    public function questions()
    {
        return $this->belongsTo(Question::class);
    }
}
