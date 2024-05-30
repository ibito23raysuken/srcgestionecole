<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvanceDemande extends Model
{
    protected $fillable = [
        'avance','statut'
    ];
    use HasFactory;
    public function enseignant() {
        return $this->belongsTo(Enseignant::class);
    }
}
