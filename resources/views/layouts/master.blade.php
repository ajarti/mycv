<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,minimal-ui">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">
    <meta name="robots" content="index, follow"/>
    <base href="/">

    @include('layouts.opengraph')

    <link rel="canonical" href="http://{{ env('HTTP_HOST') }}/"/>
    <title>{{ env('APP_SITE') }} - @yield('title')</title>

    <!--[if lte IE 11]>
    <script type="text/javascript">
        window.location = "http://outdatedbrowser.com/en";
    </script>
    <![endif]-->

    <style>
        [v-cloak] {
            display: none !important;
        }
    </style>

    <!-- FONT -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,500,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/quasar.mat.css" type="text/css">
    @yield('override_css')
</head>
<body>

    @yield('layout')

    {{--INJECTED JSON--}}
    @include('partials.jsvars')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    </script>

    <script src="//maps.googleapis.com/maps/api/js?key={{ env('GOOGLE_GEOCODE_API') }}&libraries=places"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/quasar-framework/0.17.6/quasar.mat.umd.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/quasar-framework/0.17.6/quasar.ie.polyfills.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js"></script>

    @yield('javascripts')

</body>
</html>