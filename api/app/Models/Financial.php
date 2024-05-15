<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Financial extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'file_name',
        'category_id',
        'file_description',
        'file_date',
    ];

    protected $appends = ['financial_file'];

    public function getFinancialFileAttribute()
    {
        if ($this->hasMedia('financial_file')) {
            $mediaItem = $this->getMedia('financial_file')->last();
            $path = parse_url($mediaItem->getUrl(), PHP_URL_PATH);
            return config('app.cloudfront_url') . $path;
        }

        return asset('frontend/img/logo.png');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
