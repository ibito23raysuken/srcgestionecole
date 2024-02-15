@extends('base')

@section('content')
<div class="text-center mt-5 ">
    <h2><strong>Liste des classe</strong></h2>
</div>
<div id="tableauclasse" data-classes="{{ json_encode($classes) }}" ></div>
@endsection
