@extends('base')

@section('content')
<div id="ListeEtudiantEnseignant" data-eleves="{{ json_encode($eleves->load('classe')) }}" ></div>
@endsection
