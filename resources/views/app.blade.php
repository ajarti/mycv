@extends('layouts.master')
@section('override_css')
    <link rel="stylesheet" href="/css/app.css" type="text/css">
    <link rel="stylesheet" href="/css/dashmix.css" type="text/css">
    <link rel="stylesheet" href="/css/themes/xmodern.css" type="text/css">
    <link rel="stylesheet" href="{{ mix('css/overrides.css') }}" type="text/css">
@endsection
@section('layout')
    <div id="app" class="p-sm-3 px-lg-2 bg-white" style="max-width: 1400px; margin: auto" v-cloak>
        <div id="page-container" class="page-header-glass block block-fx-pop mb-5" style="border: 1px solid rgba(52,76,125,0.2) !important;">
            <main id="main-container">
                @include('partials.banner')
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </main>
        </div>
    </div>
@endsection
@section('javascripts')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
