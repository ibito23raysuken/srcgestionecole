@extends('base')

@section('content')
<div id="AvanceDemande" data-listeDemandeAvance="{{ json_encode($avancedemandeliste->load('enseignant')) }}">
</div>
@endsection
