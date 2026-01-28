<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property-read \App\Models\User|null $users
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TestSession newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TestSession newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TestSession query()
 * @mixin \Eloquent
 */
class TestSession extends Model
{
    protected $fillable = ['user_id', 'start', 'end', 'progress'];
    
    public function users(){
        return $this->belongsTo(User::class);
    }
}
