<?php

namespace Database\Seeders;

use App\Models\Classe;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ClasseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classeListe = ['CP', 'CE1', 'CE2', 'CM1', 'CM2'];

        foreach ($classeListe as $nomClasse) {
            Classe::create([
                'nomclasse' => $nomClasse
            ]);
        }
    }
}
