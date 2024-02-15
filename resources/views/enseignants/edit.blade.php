@extends('base')

@section('content')
<div class="card mx-auto mt-5" style="height: 100%; width: 80%; margin-bottom: 102px;">
    <div class="card-body">
        <form action="{{ route('enseignants.update', ['enseignant' => $enseignant->id]) }}" method="POST" class="row g-3">
            @method("PUT")
            @csrf
            <div class="col-md-12">
                <label for="nomenseignant" class="form-label">Nom</label>
                <input type="text" class="form-control" name="nomenseignant" id="nomenseignant" value="{{ $enseignant->nomenseignant }}">
                @error('nomenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="col-md-12">
                <label for="prenomenseignant" class="form-label">Prenom</label>
                <input type="text" class="form-control" name="prenomenseignant" id="prenomenseignant" value="{{ $enseignant->prenomenseignant }}">
                @error('prenomenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="col-md-12">
                <label for="sexeenseignant" class="form-label">Sexe:</label>
                <select class="form-select" name="sexeenseignant" id="sexeenseignant">
                    <option value="" selected>Selectioner le sexe</option>
                    <option
                        @if ($enseignant->sexeenseignant=="Homme")
                            selected
                        @else
                        @endif
                        value="Homme">Homme</option>
                    <option
                        @if ($enseignant->sexeenseignant=="Femme")
                            selected
                        @else
                        @endif
                        value="Femme" >Femme</option>
                </select>
                </select>
                @error('sexeenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Classe</label>
                <select name="classeenseignant" class="form-select" aria-label="Default select example">
                    <option value=""  selected>Choix du classe</option>
                    @foreach ($classes as $classe )
                        <option value="{{ $classe->id }}"
                        @if ($enseignant->classe->nomclasse==$classe->nomclasse)
                            selected
                        @else
                        @endif>{{ $classe->nomclasse }}</option>
                    @endforeach
                  </select>
                @error('classeenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Veuillez entree le salaire</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="salaire" id="salaire" value="{{ $enseignant->salaire }}">
                    <div class="input-group-append">
                        <span class="input-group-text">ARIARY</span>
                    </div>
                </div>
                @error('salaire')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-6">
                <label for="addresseenseignant" class="form-label">Addresse</label>
                <input type="text" class="form-control" name="addresseenseignant"  id="addresseenseignant" value="{{ $enseignant->addresseenseignant }}">
            </div>
            <div class="col-md-6">
                <div id="phonenunber" data-phonenumber="{{ json_encode($enseignant->contactenseignant ) }}"></div>
            </div>

            <div class="row">
                <div class="col-12 mt-5 d-flex justify-content-center ">
                    <div class="mx-5 ">
                        <a type="button" class="btn btn-primary btn-lg " href="{{ route("enseignants.index") }}">
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
@endsection
