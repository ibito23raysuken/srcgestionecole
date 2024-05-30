@extends('base')

@section('content')
<div class="gradient-red2 pt-4">
    <div class="text-center ">
        <h2><strong>ENREGISTRER UN ENSEIGNANT</strong></h2>
    </div>
<div class="card mx-auto mt-5" style="height: 100%; width: 80%; margin-bottom: 267px;">
    <div class="card-body">
        <form action="{{ route('enseignants.store') }}" method="POST" class="row g-3">
            @csrf
            <div class="col-md-12">
                <label for="nomenseignant" class="form-label">Nom</label>
                <input type="text" class="form-control" name="nomenseignant" id="nomenseignant">
                @error('nomenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="col-md-12">
                <label for="prenomenseignant" class="form-label">Prenom</label>
                <input type="text" class="form-control" name="prenomenseignant" id="prenomenseignant">
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
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                </select>
                @error('sexeenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Situation Familiale</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="situationfamiliale" id="situationfamiliale">
                </div>
                @error('situationfamiliale')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Numero CIN</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="cin" id="cin">
                </div>
                @error('cin')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <div class="mb-3">
                    <label for="classeenseignant" class="form-label">Veuillez sélectionner un classe.</label>
                    <select name="classeenseignant" class="form-select" aria-label="Default select example">
                        <option value=""  selected>Choix du classe</option>
                        @foreach ($classes as $classe )
                            <option value="{{ $classe->id }}">{{ $classe->nomclasse }}</option>
                        @endforeach
                      </select>
                </div>
                @error('classeenseignant')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Date d'embauche</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="dateembauche" id="dateembauche">
                </div>
                @error('dateembauche')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-md-12">
                <label for="classeenseignant" class="form-label">Veuillez entree le salaire</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="salaire" id="salaire">
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
                <input type="text" class="form-control" name="addresseenseignant"  id="addresse"enseignant>
            </div>
            <div class="col-md-6">
                <div id="phonenunber"></div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-danger" type="submit">Enregistrer</button>
            </div>
        </form>
    </div>
</div>
</div>
@endsection
