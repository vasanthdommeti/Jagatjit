<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'experience' => $this->experience,
            'order' => $this->order,
            'education' => $this->education,
            'joined_at' => $this->joined_at,
            'team_image' => $this->getFirstMediaUrl('team_image'),
        ];
    }
}
