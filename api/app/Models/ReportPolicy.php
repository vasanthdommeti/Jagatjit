<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ReportPolicy extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'file_name',
        'category_id',
        'file_description',
    ];

    protected $appends = ['report_policy_file'];

    public function getReportPolicyFileAttribute()
    {
        if ($this->hasMedia('report_policy_file')) {
            $mediaItem = $this->getMedia('report_policy_file')->last();
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
