<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static static create(array $attributes = [])
 * @property-read \App\Models\User|null $users
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Prestasi newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Prestasi newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Prestasi query()
 * @mixin \Eloquent
 */

class Prestasi extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'nama_prestasi', 'tanggal'];
    
    public function users(){
        return $this->belongsTo(User::class);
    }
}
