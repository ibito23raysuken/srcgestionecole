<?php

namespace App\Http\Controllers;

use App\Models\Eleve;
use App\Models\Matiere;
use App\Models\noteeleve;
use App\Models\Enseignant;
use App\Manager\NoteManager;
use Illuminate\Http\Request;
use App\Http\Requests\NoteRequest;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    private $notetManager;

    public function __construct(NoteManager $notetManager){
        $this->notetManager = $notetManager;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(string $id)
    {
        $userId = Auth::user()->enseignant_id;
        $enseignant = Enseignant::where('id', $userId)->first();
        $eleve=Eleve::where('id', $id)->first();
        $classe=Eleve::where('id', $id)->first()->classe;
        $matieres=Matiere::All();
        return view('note.index',[
            'enseignant'=>$enseignant,'matieres'=>$matieres,'eleve'=>$eleve,'classe'=>$classe]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NoteRequest $noterequest)
    {
        try {
            $noteeleve=new noteeleve();
            $validate=$noterequest->validated();
            $this->notetManager->build($noteeleve,$noterequest);
            return response()->json(['message' => $noterequest->all()], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->any()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(NoteRequest $noterequest, string $id)
    {
        try {
            $noteeleve = noteeleve::findOrFail($id);
            $validate=$noterequest->validated();
            $this->notetManager->build($noteeleve,$noterequest);
            return response()->json(['message' => $noterequest->all(),$id], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->any()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            noteeleve::findOrFail($id)->delete();
            return response()->json(['message' => "bien effacer"], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->any()], 500);
        }

    }
    public function showAllNote(string $idexamen,int $ideleve,)
    {
        $userEnseignant = Auth::user()->enseignant_id;
        $noteeleve = noteeleve::with('matiere')->where('exam', $idexamen)->where('eleve_id', $ideleve)->get();
        return $noteeleve;

    }
    public function showAllNoteIdexam(string $exam)
    {
        $noteeleve = NoteEleve::with('matiere', 'eleve')
        ->whereHas('eleve', function ($query) {
            $classe = Enseignant::where('nomEnseignant', Auth::user()->name)->first()->classe->id;
            $query->where('classe_id', $classe);
        })->where('exam', $exam)->get();

        return $noteeleve;
    }
}
