@extends('base')

@section('content')
<div class="container mt-4">
    <h1>Informations sur l'enseignant</h1>
    <div id="card-profileenseignant" data-enseignant="{{ json_encode($enseignant->load('classe','avance')) }}" ></div>
    </div>
</div>
@endsection
