<?php

namespace App\Http\Controllers;

use App\Http\Resources\FinancialResource;
use App\Models\Category;
use App\Models\Financial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class FinancialController extends Controller
{
    public function index()
    {
        $files = Financial::all();
        return view('backend.pages.investors.financials.index',compact('files'));
    }

    public function create()
    {
        $category = Category::where('section', 'financials')->get();
        return view('backend.pages.investors.financials.create',compact('category'));
    }

    public function store(Request $request)
    {
        $file = Financial::create([
            'file_name' => $request->file_name,
            'category_id' => $request->category_id,
            'file_description' => $request->file_description,
            'file_date' => $request->file_date,
        ]);

        try {
            $file->addMedia($request->financial_file)->toMediaCollection('financial_file', 's3');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'File upload failed: ' . $e->getMessage()]);
        }

        return redirect()->route('financial.index')->with('success', 'File Uploaded Successfully');
    }

    public function destroy($id)
    {
        $file = Financial::find($id);
        $file->delete();
        return redirect()->route('financial.index')->with('success', 'File Deleted Successfully');
    }

    public function allFinancials()
    {
        $financial = Financial::all();
        return FinancialResource::collection($financial);
    }

    public function filterFinancial(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'sometimes|required|integer',
            'year'        => 'sometimes|required|digits:4',
            'month'       => 'sometimes|required|digits:2'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $query = Financial::query();

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->has('year')) {
            $query->whereYear('file_date', $request->year);
        }

        if ($request->has('month')) {
            if (!$request->has('year')) {
                return response()->json(['error' => 'Year is required when filtering by month'], 422);
            }
            $query->whereMonth('file_date', $request->month);
        }

        $financial = $query->get();

        return FinancialResource::collection($financial);
    }
}
