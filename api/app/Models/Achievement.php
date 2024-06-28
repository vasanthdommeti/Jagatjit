<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Achievement extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'order',
        'status',
        'link',
        'date',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    protected $appends = [
        'achievement_image',
    ];

    public function getAchievementImageAttribute()
    {
        if ($this->hasMedia('achievement_image')) {
            $mediaItem = $this->getMedia('achievement_image')->last();
            $path = parse_url($mediaItem->getUrl(), PHP_URL_PATH);
            return config('app.cloudfront_url') . $path;
        }

        return asset('frontend/img/logo.png');
    }
}
