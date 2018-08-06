<?php namespace App\Http\Resources;


class PositionTransformer extends BaseTransformer
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'company'       => $this->company,
            'current'       => $this->toYesNo($this->current),
            'description'   => $this->description,
            'end_date_ts'   => $this->toTimestamp($this->end_date_at),
            'location'      => $this->location,
            'start_date_ts' => $this->toTimestamp($this->start_date_at),
            'title'         => $this->title,
        ];
    }
}
