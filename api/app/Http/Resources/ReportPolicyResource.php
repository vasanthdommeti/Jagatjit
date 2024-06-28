<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportPolicyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'file_name' => $this->file_name,
            'category_name' => $this->category->name,
            'file_description' => $this->file_description,
            'file_date' => $this->file_date,
            'file_url' => $this->report_policy_file,
        ];
    }
}
