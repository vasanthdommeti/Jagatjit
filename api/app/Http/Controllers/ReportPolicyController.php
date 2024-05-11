<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReportPolicyResource;
use App\Models\Category;
use App\Models\ReportPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportPolicyController extends Controller
{
    public function index()
    {
        $files = ReportPolicy::all();
        return view('backend.pages.investors.reports.index',compact('files'));
    }

    public function create()
    {
        $category = Category::where('section', 'reports')->get();
        return view('backend.pages.investors.reports.create',compact('category'));
    }

    public function store(Request $request)
    {
        $file = ReportPolicy::create([
            'file_name' => $request->file_name,
            'category_id' => $request->category_id,
            'file_description' => $request->file_description,
            'file_date' => $request->file_date,
        ]);

        try {
            $file->addMedia($request->report_policy)->toMediaCollection('report_policy_file', 's3');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'File upload failed: ' . $e->getMessage()]);
        }

        return redirect()->route('report.index')->with('success', 'File Uploaded Successfully');
    }

    public function destroy($id)
    {
        $file = ReportPolicy::find($id);
        $file->delete();
        return redirect()->route('report.index')->with('success', 'File Deleted Successfully');
    }

    public function allReportPolicies()
    {
        $reportPolicy = ReportPolicy::all();
        return ReportPolicyResource::collection($reportPolicy);
    }

    public function filterReportPolicies(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'category_id' => 'sometimes|required|integer',
            'year'        => 'sometimes|required|digits:4',
            'month'       => 'sometimes|required|digits:2'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $query = ReportPolicy::query();

        // Filter by category if it's provided
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by year if it's provided
        if ($request->has('year')) {
            $query->whereYear('file_date', $request->year);
        }

        // Filter by month if it's provided
        if ($request->has('month')) {
            // Ensure year is also selected when filtering by month
            if (!$request->has('year')) {
                return response()->json(['error' => 'Year is required when filtering by month'], 422);
            }
            $query->whereMonth('file_date', $request->month);
        }

        $reportPolicy = $query->get();
        return ReportPolicyResource::collection($reportPolicy);
    }
}
