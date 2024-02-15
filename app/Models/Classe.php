<?php

namespace App\Models;

use App\Models\Eleve;
use App\Models\Ecolage;
use App\Models\Enseignant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Classe extends Model
{
    protected $fillable = [
        'nomclasse',
    ];
    use HasFactory;
    public function eleves() {
        return $this->hasMany(Eleve::class);
    }
    public function enseignants() {
        return $this->hasMany(Enseignant::class);
    }
    public function ecolages() {
        return $this->hasMany(Ecolage::class);
    }
}
