<?php

namespace App\Http\Controllers;

use App\Models\Avance;
use App\Models\Enseignant;
use Illuminate\Http\Request;
use App\Manager\AvanceManager;
use App\Http\Requests\AvanceRequest;

class AvanceController extends Controller
{
    private $avanceManager;

    public function __construct(AvanceManager $avanceManager){
        $this->avanceManager = $avanceManager;

   }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $ideneseigant = $request->query('idenseignant');
        $enseignant=Enseignant::find($ideneseigant);
        return view('avances.create',[
            'enseignant'=>$enseignant]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AvanceRequest $avancerequest)
    {
        $avance=new Avance();
        $validate=$avancerequest->validated();
        $this->avanceManager->build($avance,$avancerequest);
        //dd($avancerequest->enseignant_id);
        return redirect()->route('enseignants.show',['enseignant'=>$avancerequest->enseignant_id])->with("l'avance et bien enregistrer ");
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
