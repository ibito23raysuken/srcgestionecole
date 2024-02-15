<?php

namespace App\Models;

use App\Models\Eleve;
use App\Models\Classe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ecolage extends Model
{
    protected $fillable = [
        'eleve_id',
        'classe_id',
        'mois',
        'annee',
        'datepayement',
    ];
    protected $casts = [
        'mois' => 'json',
        'droit' => 'boolean',
        'ecolage' => 'boolean',
    ];
    use HasFactory;
    public function eleves() {
        return $this->belongsTo(Eleve::class);
    }
    public function classes() {
        return $this->belongsTo(Classe::class);
    }
}
