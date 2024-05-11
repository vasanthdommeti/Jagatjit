<?php

use App\Http\Controllers\FinancialController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ReportPolicyController;
use App\Http\Controllers\TeamController;
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

// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('filter/financials', [FinancialController::class, 'filterFinancial']);
//     Route::post('filter/report-policies', [ReportPolicyController::class, 'filterReportPolicies']);
// });

Route::get('management', [TeamController::class, 'allteam']);
Route::get('news', [NewsController::class, 'allNews']);
Route::get('financials', [FinancialController::class, 'allFinancials']);
Route::post('filter/financials', [FinancialController::class, 'filterFinancial']);
Route::get('report-policies', [ReportPolicyController::class, 'allReportPolicies']);
Route::post('filter/report-policies', [ReportPolicyController::class, 'filterReportPolicies']);
