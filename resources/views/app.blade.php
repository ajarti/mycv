@extends('layouts.master')
@section('override_css')
    <link rel="stylesheet" href="{{ mix('css/overrides.css') }}" type="text/css">
@endsection
@section('layout')
    <div id="app" v-cloak>
        <q-layout class="page-bg">

            <q-layout-drawer
                    :content-style="{'border-right' : '1px solid #EEE', 'padding-top': '2px'}"
                    behavior="desktop"
                    content-class="bg-white"
                    side="left"
                    v-model="showLeft"
            >
                @include('left-menu')
            </q-layout-drawer>

            <!-- REQUIRED -->
            <q-page-container>
                    <router-view></router-view>
                <q-btn
                        v-back-to-top
                        round
                        color="teal-5"
                        class="fixed-bottom-right"
                        style="margin: 0 15px 15px 0"
                >
                    <q-icon name="fas fa-chevron-up"/>
                </q-btn>
            </q-page-container>

        </q-layout>
    </div>
@endsection
@section('javascripts')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
