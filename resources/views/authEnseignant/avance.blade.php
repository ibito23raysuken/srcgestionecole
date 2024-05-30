@extends('base')

@section('content')
<div class="container pt-4 mt-5 ">
    <div class="card mx-auto shadow" >
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <img src="{{ asset('images/avance.svg') }}" alt="Your Image" class="img-fluid">
                </div>
                <div class="col-md-9">
                    <h2 class="text-center"><strong>Demande de crédit</strong></h2>
                    <form action="{{ route('demande.store') }}" method="POST" class="row g-3">
                        @csrf
                        <div class="col-12">
                            <p>
                                Je vous prie de bien vouloir m'accorder un crédit,
                                Monsieur le directeur.
                            </p>
                            <p>
                                Mon nom est
                                <strong>
                                    @if ($enseignant->sexeenseignant=="Homme")
                                        Monsieur
                                    @else
                                        Madame
                                    @endif
                                    {{ $enseignant->nomenseignant}}
                                </strong>
                            </p>
                            <p>
                                La date de ma demande de crédit est :
                                <strong>{{ nl2br(date('Y-m-d')) }}</strong>
                            </p>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-5">
                                            Le montant demandé est de :
                                        </div>
                                        <div class="col-4">
                                            <input type="hidden" name="statut" value="attente">
                                            <input type="hidden" name="enseignant_id" value="{{ $enseignant->id }}">
                                            <input type="hidden" name="dateavance" value="{{ nl2br(date('Y-m-d')) }}">
                                            <input type="text" class="form-control" name="avance" id="avance">
                                            @error('avance')
                                            <span role="alert" class="text-danger">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="col-2">
                                            AR
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-5 d-flex justify-content-center ">
                                <div class="mx-5 ">
                                    <a type="button" class="btn btn-primary btn-lg " href="">
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
    </div>
</div>
@endsection
