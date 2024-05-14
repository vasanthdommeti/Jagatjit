<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CorporateResource extends JsonResource
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
            'designation' => $this->designation,
            'joined_at' => $this->joined_at,
            'contact_mail' => $this->contact_mail,
        ];
    }
}
