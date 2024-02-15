<?php
namespace App\Manager;

use App\Models\Parametre;
use App\Http\Requests\ParametreRequest;

class ParametreManager{
    public function build(Parametre $parametre,ParametreRequest $request){
        $parametre->annescolaire=$request->input('annescolaire');
        $parametre->listemois=$request->input('listemois');
        $parametre->save();
    }
}
?>
