<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class News extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'order',
        'status',
        'link',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    protected $appends = [
        'news_image',
    ];

    public function getNewsImageAttribute()
    {
        if ($this->hasMedia('news_image')) {
            $mediaItem = $this->getMedia('news_image')->last();
            $path = parse_url($mediaItem->getUrl(), PHP_URL_PATH);
            return config('app.cloudfront_url') . $path;
        }

        return asset('frontend/img/logo.png');
    }
}
