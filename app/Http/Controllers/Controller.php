<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    /**
     * Sends a 422 status JSON message.
     *
     * @param null|array $message
     *
     * @param null       $extras
     * @param int        $errorCode
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws Exception
     */
    protected function sendAjaxError($message = null, $extras = null, $errorCode = 422)
    {
        // Return the JSON response, setting type to error.
        return $this->sendAjaxMessage($message, $extras, $errorCode, 'error');
    }


    /**
     * Sends a 200 status JSON message.
     *
     * @param null|array $message
     * @param null|array $extras
     * @param int        $returnCode
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws Exception
     */
    protected function sendAjaxMessage($message = null, $extras = null, $returnCode = 200, $status = 'success')
    {
        // Check we have a message.
        if ( is_null($message) || !is_array($message) ) {
            throw new Exception('sendAjaxMessage requires a message.');
        }

        // Set message holder array;
        $data = [];
        $data['status'] = $status;
        foreach ( $message as $key => $value ) {
            $data['messages'][$key][] = $value;
        }

        // Check for extras.
        if ( isset($extras) && is_array($extras) ) {
            foreach ( $extras as $key => $val ) {
                $data[$key] = $val;
            }
        }

        // Return the JSON response.
        return response()->json($data, $returnCode);
    }
}
