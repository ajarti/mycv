<?php namespace App\Http\Resources;


class CourseTransformer extends BaseTransformer
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
            'end_date_ts'   => $this->toTimestamp($this->end_date_at),
            'institution'   => $this->institution,
            'location'      => $this->location,
            'qualification' => $this->qualification,
            'start_date_ts' => $this->toTimestamp($this->start_date_at),
        ];
    }
}
