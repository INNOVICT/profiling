<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prestasi extends Model
{
    //
    protected $fillable = ['user_id', 'nama_prestasi', 'tanggal'];
    
    public function users(){
        return $this->belongsTo(User::class);
    }
}
