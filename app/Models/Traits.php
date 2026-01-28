<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Traits whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Traits extends Model
{
    protected $fillable = ['code', 'name', 'description'];

    
}
