@extends('base')

@section('content')
<div class="container pt-5 mt-5">
    <div class="card bg-light shadow mx-auto">
        <div class="card-body">
            <div class="text-center">
                <h2><strong>CREATION DE CLASSE</strong></h2>
            </div>
            <form action="{{ route('classes.store') }}" method="POST" class="row g-3">
                @csrf
                <div class="mb-3">
                    <label for="nomclasse" class="form-label">Nom</label>
                    <input type="text" class="form-control" name="nomclasse" id="nomclasse">
                    @error('nomclasse')
                    <span role="alert" class="text-danger">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger btn-lg" type="submit">Inscription</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
