<?php namespace App\Http\Resources;

use App;
use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class BaseTransformer extends JsonResource
{


    public function __construct($resource)
    {
        parent::__construct($resource);
    }


    /**
     * Convert all times to UnixTimeStamps for consistency.
     *
     * @param null $field
     *
     * @return null
     */
    final public function toTimestamp($field = null)
    {

        return ( !is_null($field) && is_a($field, Carbon::class) ) ? $field->getTimestamp() : null;

    }


    /**
     * Convert boolean to string (archaic, but stops JS untyped boolean conversion issues.)
     *
     * @param null $value
     *
     * @return string
     */
    final public function toYesNo($value = null)
    {
        if ( is_null($value) ) {
            return 'no';
        }
        return $value ? 'yes' : 'no';
    }

}
