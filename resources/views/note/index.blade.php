@extends('base')

@section('content')
<div id="ListeNoteEnseignants" data-listenoteenseignants="{{ json_encode(['enseignant' => $enseignant, 'matieres' => $matieres, 'eleve' => $eleve]) }}">
</div>
@endsection
