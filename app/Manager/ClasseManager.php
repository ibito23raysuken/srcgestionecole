<?php
namespace App\Manager;

use App\Models\Classe;
use App\Http\Requests\ClasseRequest;

class ClasseManager{
    public function build(Classe $classe,ClasseRequest $request){
        $classe->nomclasse=$request->input('nomclasse');
        $classe->save();
    }
}
?>
