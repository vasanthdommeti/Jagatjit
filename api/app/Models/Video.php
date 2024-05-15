<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Video extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'page_name',
    ];

    protected $appends = ['video_file'];

    public function getVideoFileAttribute()
    {
        if ($this->hasMedia('video_file')) {
            $mediaItem = $this->getMedia('video_file')->last();
            $path = parse_url($mediaItem->getUrl(), PHP_URL_PATH);
            return config('app.cloudfront_url') . $path;
        }

        return asset('frontend/img/logo.png');
    }
}
