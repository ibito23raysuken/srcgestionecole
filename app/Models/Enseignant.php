<?php

namespace App\Models;

use App\Models\Avance;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Enseignant extends Model
{
    protected $fillable = [
        'nomenseignant',
        'prenomenseignant',
        'sexeenseignant',
        'addresseenseignant',
        'salaire',
        'contactenseignant',
        'classe_id',
    ];
    public function classe() {
        return $this->belongsTo(Classe::class);
    }
    public function avance() {
        return $this->hasMany(Avance::class);
    }
    public function avancedemande() {
        return $this->hasMany(Avance::class);
    }
    use HasFactory;
}
