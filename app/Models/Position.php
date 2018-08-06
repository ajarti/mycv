<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{

    /**
     * Disable Mass Assignment.
     *
     * @var array
     */
    protected $guarded = ['*'];

    /**
     * Extra date fields
     *
     * @var array
     */
    protected $dates = ['end_date_at','start_date_at'];

    /**
     * Hide the pivot data from Lazy loads
     *
     * @var array
     */
    protected $hidden = ['pivot'];


    /**
     * Table name.
     *
     * @var string
     */
    protected $table = 'positions';

}


