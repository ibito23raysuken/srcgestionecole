<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use Illuminate\Http\Request;
use App\Manager\ClasseManager;
use App\Http\Requests\ClasseRequest;

class ClasseController extends Controller
{
    private $classeManager;

    public function __construct(ClasseManager $classeManager){
        $this->classeManager = $classeManager;

   }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classes=Classe::All();
        return view('classes.liste',[
            'classes'=>$classes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('classes.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClasseRequest $classerequest)
    {
        $classe=new Classe();
        $validate=$classerequest->validated();
        $this->classeManager->build($classe,$classerequest);
        return redirect()->route('classes.index')->with('success',"La carte étudiant a ete effacer ");
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
    $votreModele = Classe::findOrFail($id);
    $votreModele->nomclasse = $request->input('nomclasse');
    $votreModele->save();
    return response()->json(['message' => 'Données mises à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Classe::findOrFail($id)->delete();
    }
}
