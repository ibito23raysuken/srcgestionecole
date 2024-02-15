@extends('base')

@section('content')
<div class="text-center mt-5">
    <h2><strong>Liste des enseignants</strong></h2>
</div>
<div id="tableauenseignant" data-enseignants="{{ json_encode($enseignant->load('classe')) }}" ></div>
@endsection
