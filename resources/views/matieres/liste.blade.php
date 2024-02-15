@extends('base')

@section('content')
<div class="text-center mt-5 ">
    <h2><strong>Liste des Matieres</strong></h2>
</div>
<div id="ListeMatiere" data-matieres="{{ json_encode($matieres) }}" ></div>
@endsection
