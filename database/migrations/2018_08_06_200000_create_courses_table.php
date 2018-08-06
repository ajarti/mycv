<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('courses', function (Blueprint $table) {

            // Keys
            $table->increments('id');

            // Content
            $table->string('qualification', 75)->nullable()->default('');
            $table->string('institution', 75)->nullable()->default('');
            $table->string('location', 75)->nullable()->default('');

            // Dates
            $table->date('start_date_at')->nullable()->default(NULL);
            $table->date('end_date_at')->nullable()->default(NULL);
            $table->nullableTimestamps();
            $table->softDeletes();

            // Indexes
            $table->index('id');

        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }

}