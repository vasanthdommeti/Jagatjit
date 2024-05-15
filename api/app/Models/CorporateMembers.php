<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorporateMembers extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'experience',
        'order',
        'joined_at',
        'designation',
        'contact_mail',
    ];

    protected $casts = [
        'joined_at' => 'datetime',
        'order' => 'integer',
    ];
}
