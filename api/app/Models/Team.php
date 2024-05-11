<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Team extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'experience',
        'order',
        'education',
        'joined_at',
    ];

    protected $casts = [
        'joined_at' => 'datetime',
        'order' => 'integer',
    ];

    protected $appends = [
        'team_image',
    ];

    public function getTeamImageAttribute()
    {
        if ($this->hasMedia('team_image')) {
            $mediaItem = $this->getMedia('team_image')->last();
            $path = parse_url($mediaItem->getUrl(), PHP_URL_PATH);
            return config('app.cloudfront_url') . $path;
        }

        return null;
    }

}

