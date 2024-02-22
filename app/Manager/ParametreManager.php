<?php
namespace App\Manager;

use App\Models\Parametre;
use App\Http\Requests\ParametreRequest;

class ParametreManager{
    public function build(Parametre $parametre,ParametreRequest $request){
        $listemois=str_replace(' ', '', $request->input('listemois'));
        $parametre->annescolaire=$request->input('annescolaire');
        $parametre->listemois=$listemois;
        $parametre->save();
    }
}
?>
