<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

    public function financial(){
        return $this->hasMany(Financial::class);
    }

    public function reportPolicy(){
        return $this->hasMany(ReportPolicy::class);
    }
}
