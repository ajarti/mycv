<?php

use App\Models\Course;

class CoursesTableSeeder extends MyCVSeeder
{

    public function run()
    {
        DB::table('courses')->truncate();
        Course::unguard();

        foreach ( $this->courses as $course ) {
            Course::create([
                'end_date_at'   => $course['end_date_at'],
                'institution'   => $course['institution'],
                'location'      => $course['location'],
                'qualification' => $course['qualification'],
                'start_date_at' => $course['start_date_at'],
            ]);
        }
    }

}