<?php


// ---------------------- GENERAL ROUTES -------------------------------------- //

Route::get('/', function () {
    return view('app');
});

Route::get('/privacy', function () {
    return view('privacy');
});

// ---------------------- API ROUTES ------------------------------------------ //

Route::group(['prefix' => 'api'], function () {

    Route::post('/positions', 'Api\PositionController@positions');
    Route::post('/courses', 'Api\CourseController@courses');

    // Protected routes.
    Route::group(['middleware' => 'auth'], function () {


    });

});

// ---------------------- SIMPLE TEST ROUTES ---------------------------------- //

Route::get('test', function () {
    return \App\Models\Position::all();
});