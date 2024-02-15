<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Radama 1</title>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">

</head>
<body>
    <header>
            @include('template.drawers')

    </header>
    <main>
        <div class="base_main">
        @if ($message = Session::get('success'))
            <div id="alerte" data-alerts="{{ json_encode($message) }}"></div>
        @endif
        @yield('content')
        </div>
    </main>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</body>
</html>
