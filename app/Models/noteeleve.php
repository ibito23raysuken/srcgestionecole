<?php

namespace App\Models;

use App\Models\Eleve;
use App\Models\Matiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class noteeleve extends Model
{
    protected $fillable = [
        'exam',
        'matiere_id',
        'eleve_id',
        'coefficient',
        'note',
        'annee',
    ];
    use HasFactory;

    public function matiere() {
        return $this->belongsTo(Matiere::class);
    }
    public function eleve() {
        return $this->belongsTo(Eleve::class);
    }

}
