<?php

namespace App\Observers;

use App\Models\Eleve;
use App\Models\Parametre;
use App\Events\EcolageState;
use Illuminate\Http\Request;

class EleveObserver
{
    /**
     * Handle the Eleve "created" event.
     */
    public function created(Eleve $eleve): void
    {
        $eleve->ref_eleve="RDM_{$eleve->id}";
        $eleve->save();
    }

    /**
     * Handle the Eleve "updated" event.
     */
    public function updated(Eleve $eleve): void
    {
        //
    }

    /**
     * Handle the Eleve "deleted" event.
     */
    public function deleted(Eleve $eleve): void
    {
        //
    }

    /**
     * Handle the Eleve "restored" event.
     */
    public function restored(Eleve $eleve): void
    {
        //
    }

    /**
     * Handle the Eleve "force deleted" event.
     */
    public function forceDeleted(Eleve $eleve): void
    {
        //
    }
}
