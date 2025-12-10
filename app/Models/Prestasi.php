<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin \Eloquent
 * @method static static create(array $attributes = [])
 */

class Prestasi extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'nama_prestasi', 'tanggal'];
    
    public function users(){
        return $this->belongsTo(User::class);
    }
}
