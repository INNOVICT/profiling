<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestSession extends Model
{
    protected $fillable = ['user_id', 'start', 'end', 'progress'];
    
    public function users(){
        return $this->belongsTo(User::class);
    }
}
