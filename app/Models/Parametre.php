<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parametre extends Model
{
    protected $fillable = [
        'annescolaire',
        'listemois',
    ];
    protected $casts = [
        'listemois' => 'json',
    ];
    use HasFactory;
}
