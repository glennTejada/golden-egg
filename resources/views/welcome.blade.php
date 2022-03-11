<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Golden Egg</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

        svg {
            width: 100px;
            height: 100px;
            margin: auto;
            display: block;
        }
    </style>
</head>

<body>
<div id="app">
    {{-- todo: loadign animation fix & minify js & css --}}

    <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"
         enable-background="new 0 0 0 0" xml:space="preserve">
            <circle fill="#0c7e54" stroke="none" cx="6" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"/>
            </circle>
        <circle fill="#0c7e54" stroke="none" cx="26" cy="50" r="6">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"/>
        </circle>
        <circle fill="#0c7e54" stroke="none" cx="46" cy="50" r="6">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"/>
        </circle>
        </svg>
    <App></App>
</div>
<script defer src="/js/app.js"></script>
</body>

</html>
