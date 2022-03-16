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

        #loading {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 5px solid rgb(26 108 97 / 56%);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
            -webkit-animation: spin 1s ease-in-out infinite;
            position: fixed;
            top: 50%;
            left: 50%;
        }

        @keyframes spin {
            to {
                -webkit-transform: rotate(360deg);
            }
        }

        @-webkit-keyframes spin {
            to {
                -webkit-transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>
<div id="app">
    {{-- todo: minify js & css --}}
    <div id="loading"></div>
    <App></App>
</div>
<script defer src="/js/app.js"></script>
</body>

</html>
