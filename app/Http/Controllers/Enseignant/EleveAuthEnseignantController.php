<?php

namespace App\Http\Controllers\Enseignant;

use App\Models\Eleve;
use App\Models\Enseignant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EleveAuthEnseignantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classe = Enseignant::where('nomEnseignant', Auth::user()->name)->first()->classe->id;
        $eleves=Eleve::where('classe_id', $classe)->get();
        return view('authEnseignant.listeEleve',[
            'eleves'=>$eleves]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $enseignant = Enseignant::where('nomEnseignant', Auth::user()->name)->first();
        return view('authEnseignant.avance',[
            'enseignant'=>$enseignant]);
    }
    public function store(Request $request)
    {
        //
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
