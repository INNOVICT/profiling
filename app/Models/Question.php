<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Question newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Question newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Question query()
 * @mixin \Eloquent
 */
class Question extends Model
{
    //
    protected $table = 'question';
    protected $fillable = ['question_text', 'no_soal'];

    public function options(){
        return $this->hasMany(Option::class);
    }
}
