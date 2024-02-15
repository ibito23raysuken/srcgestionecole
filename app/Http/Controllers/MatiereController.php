<?php

namespace App\Http\Controllers;

use App\Models\Matiere;
use Illuminate\Http\Request;
use App\Manager\MatiereManager;
use App\Http\Requests\MatiereRequest;

class MatiereController extends Controller
{
    private $matiereManager;

    public function __construct(MatiereManager $matiereManager){
        $this->matiereManager = $matiereManager;

   }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $matieres=Matiere::All();
        return view('matieres.liste',[
            'matieres'=>$matieres]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('matieres.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MatiereRequest $matiererequest)
    {
        $matiere=new Matiere();
        $validate=$matiererequest->validated();
        $this->matiereManager->build($matiere,$matiererequest);
        return redirect()->route('matieres.index')->with('success',"creation de matiere reussit");
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
    public function update(Request $request, string $id)
    {
        $matiere = Matiere::findOrFail($id);
        $matiere->nommatiere = $request->input('nommatiere');
        $matiere->save();
        return response()->json(['message' => 'Données mises à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Matiere::findOrFail($id)->delete();
    }
}
