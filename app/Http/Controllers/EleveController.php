<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Eleve;
use App\Models\Classe;
use App\Models\Ecolage;
use App\Models\Parametre;
use Illuminate\Http\Request;
use App\Manager\EleveManager;
use App\Http\Requests\EleveRequest;
use App\Http\Controllers\EcolageController;

class EleveController extends Controller
{
    private $eleveManager;

    public function __construct(EleveManager $eleveManager, EcolageController $ecolageController){
        $this->eleveManager = $eleveManager;
        $this->ecolageController = $ecolageController;

   }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listemois=Parametre::all();
        $eleves=Eleve::All();
        return view('eleves.liste',[
            'eleves'=>$eleves,'listemois'=>$listemois]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $listemois=Parametre::all();
        $classes=Classe::All();
        return view('eleves.create',[
            'classes'=>$classes,'listemois'=>$listemois]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EleveRequest $request)
    {

        $eleve=new Eleve();
        $validate=$request->validated();
        $this->eleveManager->build($eleve,$request);
        $listeMois = explode(",", $request->input('moischequer'));
        $ecolage = new Ecolage([
            'mois' => $listeMois,
            'classe_id'=>$request->input('classe'),
            'annee' => Carbon::now()->year,
            'datepayement' => Carbon::now()
        ]);

        $eleve->ecolages()->save($ecolage);
        return redirect()->route('eleves.index')->with('success',"L'étudiant a été bien enregistré.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $listemois=Parametre::all();
        $eleve=Eleve::find($id);
        return view('eleves.show',[
            'eleve'=>$eleve,'listemois'=>$listemois]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $classes=Classe::All();
        $eleve=Eleve::find($id);
        $mois = $eleve->ecolages[count($eleve->ecolages) - 1]->mois;
        return view('eleves.edit',[
            'eleve'=>$eleve,'classes'=>$classes,'mois' => $mois]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, EleveRequest $eleveRequest)
    {
        $eleve = Eleve::findOrFail($id);
        $validate=$eleveRequest->validated();
        $this->eleveManager->build($eleve,$eleveRequest);
        $ecolages = $eleve->ecolages->sortByDesc('updated_at');
        $dernierEcolage = $ecolages->first();
        $this->ecolageController->update($eleveRequest,$dernierEcolage->id);
        return redirect()->route('eleves.index')->with('success',"Les données de l'étudiant ont été bien modifiées.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Eleve::findOrFail($id)->delete();
        session()->flash('success', "Les données de l'étudiant ont été bien supprimé avec succès.");
    }
}
