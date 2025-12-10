<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    //
    protected $fillable = ['test_session_id', 'question_id', 'option_id'];
    
    public function testSession()
    {
        return $this->belongsTo(TestSession::class);
    }
    
    public function options()
    {
        return $this->belongsTo(Option::class);
    }
    
    public function questions()
    {
        return $this->belongsTo(Question::class);
    }
}
