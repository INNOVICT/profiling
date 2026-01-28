<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property-read \App\Models\Question|null $questions
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Option newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Option newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Option query()
 * @mixin \Eloquent
 */
class Option extends Model
{
    //
    protected $fillable = ["question_id", "option_text", "traits"];
    
    public function questions()
    {
        return $this->belongsTo(Question::class);
    }
}
