<?php
namespace App\Manager;

use App\Models\noteeleve;
use App\Http\Requests\NoteRequest;

class NoteManager{
    public function build(noteeleve $note,NoteRequest $request){
        $note->exam=$request->input('exam');
        $note->matiere_id=$request->input('matiere');
        $note->eleve_id=$request->input('idetudiant');
        $note->coefficient=$request->input('coefficient');
        $note->note=$request->input('note');
        $note->annee=$request->input('annee');
        $note->save();
    }
}
?>
