@extends('base')

@section('content')
<div class="gradient-red">
    <div class="text-center ">
        <h2><strong>INSCRIPTION DE L'ÉLÈVE</strong></h2>

    </div>

    <div class="card mx-auto mt-5" style="height: 100%; width: 80%; margin-bottom: 102px;">
        <div class="card-body">
            <form action="{{ route('eleves.store') }}" method="POST" class="row g-3">
                @csrf
                <div class="col-md-6">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control" name="nom" id="nom" value="{{ old('nom') }}">
                    @error('nom')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="col-md-6">
                    <label for="prenom" class="form-label">Prenom</label>
                    <input type="text" class="form-control" name="prenom" id="prenom" value="{{ old('prenom') }}">
                    @error('prenom')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="col-md-12">
                    <label   class="form-label">Date de Naissance</label>
                    <div id="datedenaissance" ></div>
                </div>

                <div class="col-md-6">
                    <label for="sexe" class="form-label">Sexe:</label>
                    <select class="form-select" name="sexe" id="sexe">
                        <option value="" selected>Selectioner le sexe</option>
                        <option value="M">Homme</option>
                        <option value="F">Femme</option>
                      </select>
                      @error('sexe')
                      <span role="alert" class="text-danger">
                          <strong>{{ $message }}</strong>
                      </span>
                      @enderror
                </div>
                <div class="col-md-6">
                    <label for="addresse" class="form-label">Addresse</label>
                    <input type="text" class="form-control" name="addresse"  id="addresse" value="{{ old('addresse') }}">
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="classe" class="form-label">Veuillez sélectionner un classe.</label>
                        <select name="classe" class="form-select" aria-label="Default select example">
                            <option value=""  selected>Choix du classe</option>
                            @foreach ($classes as $classe )
                                <option value="{{ $classe->id }}">{{ $classe->nomclasse }}</option>
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
                    <input type="text" class="form-control" name="ecoleanterieure" id="ecoleanterieure" value="{{ old('ecoleanterieure') }}">
                    @error('ecoleanterieure')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="col-md-4">
                    <label for="classeanterieure" class="form-label">Classe Anterieure</label>
                    <input type="text" class="form-control" name="classeanterieure"  id="classeanterieure" value="{{ old('classeanterieure') }}">
                    @error('classeanterieure')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div id="formularhidden" data-parents="{{ json_encode("pere") }}"></div>
                <div id="formularhidden2" data-parents="{{ json_encode("mere") }}"></div>
                <div id="formularhidden3" data-parents="{{ json_encode("tuteur") }}"></div>
                <div class="col-md-12">
                    <div class="form-check" id="droit" data-name="{{ json_encode("Droit") }}" ></div>
                    <div class="form-check" id="ecolage" data-name="{{ json_encode("Ecolage") }}" data-allmounthscolaire="{{ json_encode($listemois[$listemois->count()-1]) }}"></div>
                </div>

                 <hr class="hr" />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-danger red" type="submit">Inscription</button>
                  </div>
            </form>
        </div>
      </div>

</div>
@endsection
