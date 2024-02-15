@extends('base')

@section('content')

<div class="container pt-5 mt-5">
    <div class="card bg-light shadow mx-auto">
        <div class="card-body">
            <div class="text-center ">
                <h2><strong>CREATION D'UNE MATIERE</strong></h2>
            </div>
            <form action="{{ route('matieres.store') }}" method="POST" class="row g-3">
                @csrf
                <div >
                    <label for="nommatiere" class="form-label">Nom du matiere</label>
                    <input type="text" class="form-control" name="nommatiere" id="nommatiere">
                    @error('nommatiere')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div >
                    <button class="btn btn-danger red btn-lg" type="submit">Inscription</button>
                  </div>
            </form>
        </div>
    </div>
</div>
@endsection
