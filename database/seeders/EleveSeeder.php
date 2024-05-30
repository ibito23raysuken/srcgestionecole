<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Eleve;
use App\Models\Ecolage;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class EleveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $nombreEleves = 100;
        for ($i = 0; $i < $nombreEleves; $i++) {
        $eleve = Eleve::create([
            'nom' => $faker->lastName,
            'prenom' => $faker->firstName,
            'datedenaissance' => $faker->date(),
            'sexe' => $faker->randomElement(['M', 'F']),
            'addresse' => $faker->address,
            'ecoleanterieure' => $faker->company,
            'classeanterieure' => 'Classe ' . $faker->randomDigitNotNull,
            'nomdupere' => $faker->lastName,
            'prenomdupere' => $faker->firstName,
            'professiondupere' => $faker->jobTitle,
            'contactdupere' => $faker->phoneNumber,
            'nomdumere' => $faker->lastName,
            'prenomdumere' => $faker->firstName,
            'professiondumere' => $faker->jobTitle,
            'contactdumere' => $faker->phoneNumber,
            'nomdututeur' => $faker->lastName,
            'prenomdututeur' => $faker->firstName,
            'professiondututeur' => $faker->jobTitle,
            'contactdututeur' => $faker->phoneNumber,
            'droit' => $faker->boolean,
            'ecolage' => $faker->boolean,
            'ref_eleve' => $faker->uuid,
            'classe_id' => $faker->numberBetween(1, 5),
        ]);

        // Création de l'instance de Ecolage associée à l'élève créé ci-dessus
        $moisListe = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        $nombreMois = $faker->numberBetween(1, count($moisListe));

        Ecolage::create([
            'mois' => $faker->randomElements($moisListe, $nombreMois),
            'classe_id' => $eleve->classe_id, // Assurez-vous que les IDs de classes existent
            'annee' => Carbon::now()->year,
            'datepayement' => Carbon::now(),
            'eleve_id' => $eleve->id, // Utilisez l'ID de l'élève créé ci-dessus
        ]);
    }
    }
}
