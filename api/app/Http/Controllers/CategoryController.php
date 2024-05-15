<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index($type)
    {
        if ($type == 'financials') {
            $data = Category::where('section', 'Financials')->get();
            $name = 'financials';
            return view('backend.pages.investors.category.index', compact('data','name'));
        } else {
            $data = Category::where('section', 'reports')->get();
            $name = 'reports';
            return view('backend.pages.investors.category.index', compact('data','name'));
        }
    }

    public function create($type)
    {
        if ($type == 'financials') {
            $name = 'financials';
            return view('backend.pages.investors.category.create', compact('name'));
        } else {
            $name = 'reports';
            return view('backend.pages.investors.category.create', compact('name'));
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'section' => 'required',
        ]);

        $data = new Category();
        $data->name = $request->name;
        $data->section = $request->section;
        $data->save();

        return redirect()->route('category.index', $request->section)->with('success', 'File Category Created Successfully');
    }

    public function destroy($id)
    {
        $data = Category::find($id);
        $data->delete();
        return redirect()->back()->with('success', 'File Category Deleted Successfully');
    }
}
