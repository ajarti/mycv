<?php namespace App\Http\Controllers\Api;


use App\Models\Position;
use App\Http\Controllers\Controller;
use App\Http\Resources\PositionTransformer;

class PositionController extends Controller
{

    /**
     *
     * @return mixed
     * @throws \Exception
     */
    public function positions(Position $position)
    {
        $positions = $position->all();

        return $this->sendAjaxMessage(
            [],
            ['positions' => PositionTransformer::collection($positions)]
        );
    }

}
