@extends('base')

@section('content')
<div class=" fond">
    <div class="row">
        <div class="col-md-10 px-5">
            <div >
                <h1 class="text-uppercase "> Informations de l'élève</h1>
                <div class="card p-5 " style="box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);">
                    <div class="row">
                        <div class="col-md-10">
                            <h5 class="card-title text-danger">Information generale</h5>
                            <div >
                                <div class="row">
                                    <p class="card-text">
                                        <p class="col-md-3"><strong>Ecole antérieure:</strong></p>
                                        <p class="col-md-9">{{ $eleve->ecoleanterieure }}</p>
                                        <p class="col-md-3"><strong>Classe antérieure:</strong></p>
                                        <p class="col-md-9">{{ $eleve->classeanterieure }}</p>
                                    </p>
                                </div>
                                @if ($eleve->nomdupere=="")
                                @else
                                <hr class="border-top border-danger">
                                <div class="row">
                                    <div class="col-md-3">
                                        <p class="card-text"><strong>Nom du père:</strong></p>
                                    </div>
                                    <p class="col-md-9">{{ $eleve->nomdupere }} {{ $eleve->prenomdupere }}</p>
                                    <p class="col-md-3"><strong>Profession du père :</strong></p>
                                    <p class="col-md-9">{{ $eleve->professiondupere }}</strong></p>
                                    <p class="col-md-3"><strong>Contact du père:</strong></p>
                                    <div class="col-md-9">
                                        <p class="card-text"><strong></strong> {{ $eleve->contactdupere }}</p>
                                    </div>
                                </div>
                                @endif
                                @if ($eleve->nomdumere=="")
                                @else
                                <hr class="border-top border-danger">
                                <div class="row ">
                                    <div class="col-md-3">
                                        <p class="card-text"><strong>Nom du mère:</strong></p>
                                    </div>
                                    <p class="col-md-9">{{ $eleve->nomdumere }} {{ $eleve->prenomdumere }}</p>
                                    <p class="col-md-3"><strong>Profession du mère :</strong></p>
                                    <p class="col-md-9">{{ $eleve->professiondumere }}</strong></p>
                                    <p class="col-md-3"><strong>Contact du mère:</strong></p>
                                    <div class="col-md-9">
                                        <p class="card-text"><strong></strong> {{ $eleve->contactdumere }}</p>
                                    </div>
                                </div>
                                @endif
                                @if ($eleve->nomdututeur=="")
                                @else
                                <hr class="border-top border-danger">
                                <div class="row ">
                                    <div class="col-md-3">
                                        <p class="card-text"><strong>Nom du tuteur:</strong></p>
                                    </div>
                                    <p class="col-md-9">{{ $eleve->nomdututeur }} {{ $eleve->prenomdututeur }}</p>
                                    <p class="col-md-3"><strong>Profession du tuteur :</strong></p>
                                    <p class="col-md-9">{{ $eleve->professiondututeur }}</strong></p>
                                    <p class="col-md-3"><strong>Contact du tuteur:</strong></p>
                                    <div class="col-md-9">
                                        <p class="card-text"><strong></strong> {{ $eleve->contactdututeur }}</p>
                                    </div>
                                </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-2">
                            <a type="button" class="btn btn-danger ms-5" href="{{ route('eleves.edit',$eleve) }}">
                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                                    </svg>
                                </span>
                                Modifier
                            </a>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                <form action="{{ route('eleves.update', ['elefe' => $eleve->id]) }}" method="POST" >
                    @method("PUT")
                    @csrf
                    @foreach($eleve->getAttributes() as $key => $value)
                        <input type="hidden" name="{{ $key }}" value="{{ $value }}">
                    @endforeach
                    <input type="hidden" name="classe" value="{{ $eleve->classe_id }}">
                    @if($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                    <div class="row">
                        <div class="col-md-10 ">
                            <h5 class="card-title text-danger">Modaliter</h5>
                                <div class="card-text"><strong>Droit:</strong></div>
                                <div class="form-check" id="droit" data-name="{{ json_encode("Droit") }}" data-chequer="{{ json_encode($eleve->droit) }}" ></div>

                            <div class="card-text"><strong>Ecolage payer :</strong>
                                <div class="card-text" id="show-ecolage" data-name="{{ json_encode("Ecolage") }}" data-eleve="{{ json_encode($eleve->load('ecolages'))}}" data-parametre="{{ json_encode($listemois)}}">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <button class="btn btn-danger mt-4 ms-5 " type="submit">
                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                                    </svg>
                                </span>
                                Modifier
                            </button>
                        </div>
                      </div>
                </form>
                </div>
            </div>
            <div class="mt-5">
                <a type="button" class="btn btn-primary  btn-lg" href="{{ route("eleves.index") }}">
                    <img class="text-white-50" src="/images/icone/arrow-left.svg" alt="Retour"/>
                    Retour
                </a>
            </div>
        </div>
        <!-- Second Column -->
        <div class="col-md-2">
            <div id="cardprofile" data-card="{{ json_encode($eleve->load('classe')) }}">
            </div>
            <div class="mx-auto text-center mt-5">
                <a type="button" class="btn btn-danger  btn-lg" href="{{ route("information", ['eleve' => $eleve]) }}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"/>
                      </svg>
                    Dossier de l'etudiant
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
