@extends('base')

@section('content')
<div class="text-center mt-5">
    <h2><strong>Liste des etudiants</strong></h2>
</div>
<div id="tableau" data-eleves="{{ json_encode($eleves->load('classe','ecolages')) }}" data-listemois="{{ json_encode($listemois) }}" ></div>
@endsection
