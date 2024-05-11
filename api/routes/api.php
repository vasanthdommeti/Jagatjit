<?php

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::post('contact', function (Request $request) {

    $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'body' => 'required',
    ]);

    Contact::create($request->all());

    return response()->json([
        'message' => 'Your message has been sent!',
        'data' => $request->all(),
    ]);

});
