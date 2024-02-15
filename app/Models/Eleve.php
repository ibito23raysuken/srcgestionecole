<?php

namespace App\Models;

use App\Models\Classe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Eleve extends Model
{
    protected $fillable = [
        'nom',
        'prenom',
        'sexe',
        'datedenaissance',
        'classe',
        'addresse',
        'ecoleanterieure',
        'classeanterieure',
        'nomdupere',
        'prenomdupere',
        'professiondupere',
        'contactdupere',
        'nomdumere',
        'prenomdumere',
        'professiondumere',
        'contactdumere',
        'nomdututeur',
        'prenomdututeur',
        'professiondututeur',
        'contactdututeur',
        'droit',
        'ecolage',
        'classe_id'
    ];
    protected $casts = [
        'droit' => 'boolean',
        'ecolage' => 'boolean',
    ];
    public function classe() {
        return $this->belongsTo(Classe::class);
    }
    public function ecolages() {
        return $this->hasMany(Ecolage::class);
    }
    use HasFactory;
}
