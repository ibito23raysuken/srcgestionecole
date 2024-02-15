<?php
namespace App\Manager;

use Carbon\Carbon;
use App\Models\Eleve;
use App\Models\Ecolage;
use App\Models\Parametre;
use App\Http\Requests\EleveRequest;

class EleveManager{
    public function build(Eleve $eleve,EleveRequest $request){
        $eleve->nom=$request->input('nom');
        $eleve->prenom=$request->input('prenom');
        $eleve->datedenaissance=$request->input('datedenaissance');
        $eleve->sexe=$request->input('sexe');
        $eleve->classe_id=$request->input('classe');
        $eleve->addresse=$request->input('addresse');
        $eleve->ecoleanterieure=$request->input('ecoleanterieure');
        $eleve->classeanterieure=$request->input('classeanterieure');
        $eleve->nomdupere=$request->input('nomdupere');
        $eleve->prenomdupere=$request->input('prenomdupere');
        $eleve->professiondupere=$request->input('professiondupere');
        $eleve->contactdupere=$request->input('contactdupere');
        $eleve->nomdumere=$request->input('nomdumere');
        $eleve->prenomdumere=$request->input('prenomdumere');
        $eleve->professiondumere=$request->input('professiondumere');
        $eleve->contactdumere=$request->input('contactdumere');
        $eleve->nomdututeur=$request->input('nomdututeur');
        $eleve->prenomdututeur=$request->input('prenomdututeur');
        $eleve->professiondututeur=$request->input('professiondututeur');
        $eleve->contactdututeur=$request->input('contactdututeur');
        $eleve->droit=filter_var($request->input('Droit'), FILTER_VALIDATE_BOOLEAN);
        $eleve->ecolage=filter_var($this->EcolageState($request), FILTER_VALIDATE_BOOLEAN);
        $eleve->save();
    }
    public function EcolageState(EleveRequest $request){

            // Dictionnaire de correspondance pour les mois anglais vers les mois français
    $correspondanceMois = [
        'January'   => 'janvier',
        'February'  => 'février',
        'March'     => 'mars',
        'April'     => 'avril',
        'May'       => 'mai',
        'June'      => 'juin',
        'July'      => 'juillet',
        'August'    => 'août',
        'September' => 'septembre',
        'October'   => 'octobre',
        'November'  => 'novembre',
        'December'  => 'décembre',
    ];

        $listemois=Parametre::all();
        $listeMoisParametre = explode(', ', $listemois[count($listemois)-1]->listemois);
        $mois_actuel = ucfirst(strtolower(date('F')));
        $arrayEnMinuscules = array_map('strtolower', $listeMoisParametre);
        $listeMoisJusquaActuel = array_slice($listeMoisParametre, 0, array_search($correspondanceMois[$mois_actuel], $arrayEnMinuscules) + 1);
        $listeMoisSelectioner = explode(",", $request->input('moischequer'));

        function normaliserChaine($chaine) {
            return strtolower(str_replace(' ', '', iconv('UTF-8', 'ASCII//TRANSLIT', $chaine)));
        }
        // Appliquer la normalisation aux deux tableaux
        $array1Normalise = [];
        foreach ($listeMoisJusquaActuel as $mois) {
            $array1Normalise[] = normaliserChaine($mois);
        }

        $array2Normalise = [];
        foreach ($listeMoisSelectioner as $mois) {
            $array2Normalise[] = normaliserChaine($mois);
        }

        $resultat = empty(array_diff($array1Normalise, $array2Normalise));
        return $resultat;
    }
}
?>
