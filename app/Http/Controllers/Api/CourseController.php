<?php namespace App\Http\Controllers\Api;


use App\Models\Course;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseTransformer;

class CourseController extends Controller
{

    /**
     *
     * @return mixed
     * @throws \Exception
     */
    public function courses(Course $course)
    {
        $courses = $course->all();

        return $this->sendAjaxMessage(
            [],
            ['courses' => CourseTransformer::collection($courses)]
        );
    }

}
