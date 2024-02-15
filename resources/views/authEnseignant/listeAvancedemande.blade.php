@extends('base')

@section('content')
<div id="AvanceDemandeListe" data-listeDemandeAvance="{{ json_encode($avancedemandeliste->load('enseignant')) }}">
</div>
@endsection
