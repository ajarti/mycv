<?php

use App\Models\Position;

class PositionsTableSeeder extends MyCVSeeder
{

    public function run()
    {
        DB::table('positions')->truncate();
        Position::unguard();

        foreach ( $this->positions as $position ) {
            Position::create([
                'title'         => $position['title'],
                'company'       => $position['company'],
                'location'      => $position['location'],
                'description'   => $position['description'],
                'thumb'         => $position['thumb'],
                'current'       => $position['current'],
                'start_date_at' => $position['start_date_at'],
                'end_date_at'   => $position['end_date_at'],

            ]);
        }
    }

}