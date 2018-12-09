<?php


// ---------------------- GENERAL ROUTES -------------------------------------- //


//Route::get('/test',function(){
//
//    // curl -X GET "https://graph.facebook.com/oauth/access_token?client_id=1730324767258471&client_secret=8f4c93717b74d569fabccfeeec8e5f47&redirect_uri=cv.app/redirect&grant_type=client_credentials"
//
//    curl -X GET "https://graph.facebook.com//oauth/access_token?grant_type=fb_exchange_token&client_id=1730324767258471&client_secret=8f4c93717b74d569fabccfeeec8e5f47&fb_exchange_token=1730324767258471|n5NKNE2qz_KVXo6uGp2QZwuZ1-0"
//    $accessToken = '1730324767258471|n5NKNE2qz_KVXo6uGp2QZwuZ1-0';
//    FacebookAds::init($accessToken);
//    $ads = FacebookAds::adAccounts()->all()->map(function ($adAccount) {
//        return $adAccount->ads(
//            [
//                'name',
//                'account_id',
//                'account_status',
//                'balance',
//                'campaign',
//                'campaign_id',
//                'status'
//            ]
//        );
//    });
//
//    dd($ads);
//
//});

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