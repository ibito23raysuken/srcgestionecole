<?php
namespace App\Manager;

use App\Models\Avance;
use App\Http\Requests\AvanceRequest;


class AvanceManager{
    public function build(Avance $avance,AvanceRequest $request){
        $avance->enseignant_id=$request->input('enseignant_id');
        $avance->dateavance=$request->input('dateavance');
        $avance->avance=$request->input('avance');
        $avance->save();
    }
}
?>
