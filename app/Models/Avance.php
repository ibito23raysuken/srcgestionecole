<?php

namespace App\Models;

use App\Models\Enseignant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Avance extends Model
{
    protected $fillable = [
        'avance',
    ];
    use HasFactory;
    public function enseignants() {
        return $this->belongsTo(Enseignant::class);
    }
}
