@extends('base')

@section('content')
<div class="container-fluid gradient-red3  pt-4">
    <div class="text-center ">
        <h2><strong>PARAMETRE</strong></h2>
    </div>
    <div class="px-5 mx-5" >
        <form action="{{ route('parametre.update', ['parametre' => "1"]) }}"  method="POST" class="row g-3">
            @method("PUT")
            @csrf
            <div id="rootformparams" data-parametre="{{ json_encode($parametre)}}" ></div>
        </form>
    </div>

</div>
@endsection
