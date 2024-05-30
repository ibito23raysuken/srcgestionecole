<?php
namespace App\Manager;


use App\Models\AvanceDemande;
use App\Http\Requests\AvanceRequest;


class AvanceDemandeManager{
    public function build(AvanceDemande $avance,AvanceRequest $request){
        $avance->enseignant_id=$request->input('enseignant_id');
        $avance->dateavance=$request->input('dateavance');
        $avance->statut=$request->input('statut');
        $avance->avance=$request->input('avance');
        $avance->save();
    }
}
?>
