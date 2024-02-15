<?php

namespace App\Http\Controllers;

use App\Models\Eleve;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function index(Eleve $eleve)
    {
        return view('information.index',[
            'eleve'=>$eleve]);
    }

}
