<?php
namespace App\Manager;

use App\Models\Matiere;
use App\Http\Requests\MatiereRequest;

class MatiereManager{
    public function build(Matiere $matiere,MatiereRequest $request){
        $matiere->nommatiere=$request->input('nommatiere');
        $matiere->save();
    }
}
?>
