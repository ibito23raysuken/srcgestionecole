<?php

namespace App\Http\Controllers;

use App\Models\Enseignant;
use Illuminate\Http\Request;
use App\Models\AvanceDemande;
use App\Http\Requests\AvanceRequest;
use Illuminate\Support\Facades\Auth;
use App\Manager\AvanceDemandeManager;

class AvanceDemandeController extends Controller
{
    private $avanceDemandeManager;

    public function __construct(AvanceDemandeManager $avanceDemandeManager){
        $this->avanceDemandeManager = $avanceDemandeManager;

   }
    public function index()
    {
        $avancedemandeliste = AvanceDemande::All();
        return view('demande.AvanceDemande',['avancedemandeliste'=>$avancedemandeliste]);
    }
    public function indexliste()
    {
        $userId = Auth::user()->enseignant_id;
        $avancedemandeliste = AvanceDemande::where('enseignant_id',$userId)->get();
        return view('authEnseignant.listeAvancedemande',['avancedemandeliste'=>$avancedemandeliste]);
    }
    public function indexsend()
    {
        $userId = Auth::user()->enseignant_id;
        $enseignant = Enseignant::where('id', $userId)->first();
        return view('authEnseignant.avance',['enseignant'=>$enseignant]);
    }
    public function store(AvanceRequest $avancerequest)
    {
        $avance=new AvanceDemande();
        $validate=$avancerequest->validated();
        $this->avanceDemandeManager->build($avance,$avancerequest);
        return redirect()->route('demande.liste')->with("demande d'avance envoyer ");
    }
    public function destroy(string $id)
    {
        AvanceDemande::findOrFail($id)->delete();
    }
}
