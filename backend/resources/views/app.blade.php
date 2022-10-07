<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico" />
    <meta name="theme-color" content="#000000" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <base href="/" />

    {{-- This'll load our extracted and hashed CSS assets here --}}
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    @env('production')
        @if (isset($ngAssets) && count($ngAssets))
            <link rel="stylesheet" href="{{ asset('/build/'. $ngAssets['styles']) }}">
        @endif
    @endenv
  </head>
  <body class="bg-gradient-primary">

    <noscript>You need to enable JavaScript to run this app.</noscript>

    <app-root></app-root>

    {{-- This'll load our hashed assets when in production --}}
    @env('production')
        @if (isset($ngAssets) && count($ngAssets))
            <script src="{{ asset('/build/'. $ngAssets['runtime']) }}" type="module"></script>
            <script src="{{ asset('/build/'. $ngAssets['polyfills']) }}" type="module"></script>
            <script src="{{ asset('/build/'. $ngAssets['scripts']) }}" type="module"></script>
            <script src="{{ asset('/build/'. $ngAssets['main']) }}" type="module"></script>
        @endif
    {{-- This'll load the development assets when in dev mode --}}
    @else
        <script src="/build/runtime.js" type="module"></script>
        <script src="/build/polyfills.js" type="module"></script>
        <script src="/build/styles.js" defer></script>
        <script src="/build/vendor.js" type="module"></script>
        <script src="/build/main.js" type="module"></script>
    @endenv
  </body>
</html>
