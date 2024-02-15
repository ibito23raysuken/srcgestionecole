<?php

namespace App\Http\Controllers;

use App\Models\Parametre;
use Illuminate\Http\Request;
use App\Manager\ParametreManager;
use App\Http\Requests\ParametreRequest;

class ParametreController extends Controller
{
    private $parametreManager;

    public function __construct(ParametreManager $parametreManager){
        $this->parametreManager = $parametreManager;

   }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //      $enseignant=Enseignant::All();
        return view('parametre.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ParametreRequest $parametreRequet)
    {
        $parametre=new Parametre();
        $validate=$parametreRequet->validated();
        $this->parametreManager->build($parametre,$parametreRequet);
        return redirect()->route('home')->with('success',"La carte étudiant a ete effacer ");
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
        $parametre=Parametre::find($id);
        return view('parametre.edit',[
            'parametre'=>$parametre]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ParametreRequest $parametreRequet, string $id)
    {

        $parametre = Parametre::findOrFail($id);
        $validate=$parametreRequet->validated();
        $this->parametreManager->build($parametre,$parametreRequet);
        return redirect()->route('home')->with('success',"La carte étudiant a ete effacer ");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
