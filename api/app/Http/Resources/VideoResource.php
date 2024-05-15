<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
                'id' => $this->id,
                'name' => $this->name,
                'page_name' => $this->page_name,
                'video_file' => $this->video_file,
            ];
    }
}
