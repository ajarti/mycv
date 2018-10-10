<?php


// ---------------------- GENERAL ROUTES -------------------------------------- //

Route::get('/', function () {

    // Fetch courses to demonstrate injection method.
    $courses = \App\Models\Course::all();

    // Inject js data.
    \JavaScript::put([
        'courses' => \App\Http\Resources\CourseTransformer::collection($courses)
    ]);

    // Return the default view.
    return view('app');
});

// ---------------------- API ROUTES ------------------------------------------ //

Route::group(['prefix' => 'api'], function () {

    Route::post('/positions', 'Api\PositionController@positions');

});