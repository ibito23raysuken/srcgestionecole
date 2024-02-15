@extends('base')

@section('content')
<div class="gradient-red pt-4">
    <div class="text-center ">
        <h2><strong>Modification des données de l'élève.</strong></h2>
    </div>
<div class="card mx-auto mt-5 pt-5" style="width: 90%;">
    <div class="card-body">
        <form action="{{ route('eleves.update', ['elefe' => $eleve->id]) }}"method="POST" class="row g-3" enctype="multipart/form-data">
            @method("PUT")
            @csrf
            <div class="col-md-6">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" name="nom" id="nom" value="{{ $eleve->nom }}">
                @error('nom')
                <span role="alert" class="text-danger">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>

            <div class="col-md-6">
                <label for="prenom" class="form-label" >Prenom</label>
                <input type="text" class="form-control" name="prenom" id="prenom" value="{{ $eleve->prenom }}" >
                @error('prenom')
                <span role="alert" class="text-danger">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label   class="form-label">Date de Naissance</label>
                <div id="datedenaissance" data-datedenaisance="{{ json_encode($eleve->datedenaissance) }}"></div>
            </div>

            <div class="col-md-6">
                <label for="sexe" class="form-label">Sexe:</label>
                <select class="form-select" name="sexe" id="sexe">
                    <option value="" selected>Selectioner le sexe</option>
                    <option
                        @if ($eleve->sexe=="Homme")
                            selected
                        @else
                        @endif
                        value="Homme">Homme</option>
                    <option
                        @if ($eleve->sexe=="Femme")
                            selected
                        @else
                        @endif
                        value="Femme" >Femme</option>
                </select>
                  @error('sexe')
                  <span role="alert" class="text-danger">
                      <strong>{{ $message }}</strong>
                  </span>
                  @enderror
            </div>
            <div class="col-md-6">
                <label for="addresse" class="form-label">Addresse</label>
                <input type="text" class="form-control" name="addresse"  id="addresse" value="{{ $eleve->addresse }}" >
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="classe" class="form-label">Veuillez sélectionner un classe.</label>
                    <select name="classe" class="form-select" aria-label="Default select example">
                        <option value=""  selected>Choix du classe</option>
                        @foreach ($classes as $classe )
                            <option value="{{ $classe->id }}"
                            @if ($eleve->classe->nomclasse==$classe->nomclasse)
                                selected
                            @else
                            @endif>{{ $classe->nomclasse }}</option>
                        @endforeach
                      </select>
                </div>
                @error('classe')
                <span role="alert" class="text-danger">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
            <div class="col-md-4">
                <label for="ecoleanterieure" class="form-label">Ecole Anterieure</label>
                <input type="text" class="form-control" name="ecoleanterieure" id="ecoleanterieure" value="{{ $eleve->ecoleanterieure }}" >
            </div>
            <div class="col-md-4">
                <label for="classeanterieure" class="form-label">Classe Anterieure</label>
                <input type="text" class="form-control" name="classeanterieure"  id="classeanterieure" value="{{ $eleve->classeanterieure }}" >
            </div>
            <div id="formularhidden" data-parents="{{ json_encode("pere") }}" data-eleve="{{ json_encode($eleve) }}"></div>
            <div id="formularhidden2" data-parents="{{ json_encode("mere") }}" data-eleve="{{ json_encode($eleve) }}"></div>
            <div id="formularhidden3" data-parents="{{ json_encode("tuteur") }}" data-eleve="{{ json_encode($eleve) }}"></div>
            <input type="hidden" name="moischequer" value="{{ implode(',',$mois)}}">
            <input type="hidden" name="Droit" value="{{$eleve->droit}}">
            <div class="row">
                <div class="col-12 mt-5 d-flex justify-content-center ">
                    <div class="mx-5 ">
                        <a type="button" class="btn btn-primary btn-lg " href="{{ route("eleves.index") }}">
                            <img class="text-white-50 mr-2" src="/images/icone/arrow-left.svg" alt="Retour"/>
                            Retour
                        </a>
                    </div>
                    <div class="mx-5">
                        <button type="submit" class="btn btn-success  btn-lg ">
                            <img class="text-white-50 mr-2" src="/images/icone/floppy.svg" alt="Enregistrer"/>
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</div>

@endsection
