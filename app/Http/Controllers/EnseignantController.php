<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\Enseignant;
use Illuminate\Http\Request;
use App\Manager\EnseignantManager;
use App\Http\Requests\EnseignantRequest;

class EnseignantController extends Controller
{
    private $enseignantManager;

    public function __construct(EnseignantManager $enseignantManager){
        $this->enseignantManager = $enseignantManager;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enseignant=Enseignant::All();
        return view('enseignants.liste',[
            'enseignant'=>$enseignant,]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes=Classe::All();
        return view('enseignants.create',[
            'classes'=>$classes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EnseignantRequest $enseignantrequest)
    {
        $enseignant=new Enseignant();
        $validate=$enseignantrequest->validated();
        $this->enseignantManager->build($enseignant,$enseignantrequest);
        return redirect()->route('enseignants.index')->with('success',"La carte étudiant a ete effacer ");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $enseignant=Enseignant::find($id);
        return view('enseignants.show',[
            'enseignant'=>$enseignant]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $classes=Classe::All();
        $enseignant=Enseignant::find($id);
        return view('enseignants.edit',[
            'enseignant'=>$enseignant,'classes'=>$classes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, EnseignantRequest $enseignantrequest)
    {
        $enseignant = Enseignant::findOrFail($id);
        $validate=$enseignantrequest->validated();
        $this->enseignantManager->build($enseignant,$enseignantrequest);
        return redirect()->route('enseignants.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Enseignant::findOrFail($id)->delete();
    }
}
