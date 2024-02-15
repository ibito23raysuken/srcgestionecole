<?php
namespace App\Manager;

use App\Models\Enseignant;
use App\Http\Requests\EnseignantRequest;

class EnseignantManager{
    public function build(Enseignant $enseigant,EnseignantRequest $request){
        $enseigant->nomenseignant=$request->input('nomenseignant');
        $enseigant->prenomenseignant=$request->input('prenomenseignant');
        $enseigant->sexeenseignant=$request->input('sexeenseignant');
        $enseigant->classe_id=$request->input('classeenseignant');
        $enseigant->salaire=$request->input('salaire');
        $enseigant->addresseenseignant=$request->input('addresseenseignant');
        $enseigant->contactenseignant=$request->input('contactenseignant');
        $enseigant->save();
    }
}
?>
