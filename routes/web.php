<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\EleveController;
use App\Http\Controllers\AvanceController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\MatiereController;
use App\Http\Controllers\ParametreController;
use App\Http\Controllers\EnseignantController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AvanceDemandeController;
use App\Http\Controllers\RegisterCustomController;
use App\Http\Controllers\Enseignant\EleveAuthEnseignantController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::get('/information/{eleve}', [InformationController::class, 'index'])->name('information');
Route::resource('enseignants/eleves',EleveAuthEnseignantController::class)->middleware('enseignant');;

Route::resource('eleves',EleveController::class)->middleware('admin');
Route::resource('enseignants',EnseignantController::class)->middleware('admin');
Route::resource('classes',ClasseController::class)->middleware('admin');
Route::resource('parametre',ParametreController::class)->middleware('admin');
Route::resource('avance',AvanceController::class)->middleware('admin');
Route::resource('matieres',MatiereController::class)->middleware('admin');
Auth::routes();
Route::get('register/{enseignant}', [RegisterController::class, 'RegistrerCustom'])->middleware('admin');
Route::get('demandes', [AvanceDemandeController::class, 'index'])->name('demande')->middleware('admin');
Route::get('demandes/liste', [AvanceDemandeController::class, 'indexliste'])->name('demande.liste');
Route::get('demandes/send', [AvanceDemandeController::class, 'indexsend'])->name('demande.send');
Route::post('demandes', [AvanceDemandeController::class, 'store'])->name('demande.store');
Route::delete('demandes/destroy/{AvanceDemande}', [AvanceDemandeController::class, 'destroy'])->name('demande.destroy');
Route::get('notes/{eleve}', [NoteController::class, 'index'])->name('notes');
