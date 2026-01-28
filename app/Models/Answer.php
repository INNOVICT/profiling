<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property-read \App\Models\Option|null $options
 * @property-read \App\Models\Question|null $questions
 * @property-read \App\Models\TestSession|null $testSession
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Answer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Answer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Answer query()
 * @mixin \Eloquent
 */
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
