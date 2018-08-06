<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkHistoryTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('work_history', function (Blueprint $table) {

            // Keys
            $table->increments('id');

            // Content
            $table->string('title', 75)->nullable()->default('');
            $table->string('company', 75)->nullable()->default('');
            $table->string('location', 75)->nullable()->default('');
            $table->mediumText('description')->nullable();

            // Flags
            $table->boolean('current')->unsigned()->nullable()->default(0);

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
        Schema::dropIfExists('work_history');
    }

}
