<?php

namespace App\Http\Controllers;

use App\Models\CorporateMembers;
use Illuminate\Http\Request;

class CorporateMembersController extends Controller
{
    public function index()
    {
        $corporate = CorporateMembers::orderBy('order')->get();
        return view('backend.pages.corporate.index', compact('corporate'));
    }

    public function create()
    {
        return view('backend.pages.corporate.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'experience' => 'required|integer',
            'order' => 'required|integer',
            'joined_at' => 'required|date',
            'designation' => 'required',
            'contact_mail' => 'required|email',
        ]);

        $corporate = CorporateMembers::create($request->only('name', 'experience', 'order', 'joined_at', 'designation', 'contact_mail'));

        return redirect()->route('corporate.index')->with('success', 'Corporate Member created successfully');
    }

    public function edit(CorporateMembers $corporate)
    {
        return view('backend.pages.corporate.edit', compact('corporate'));
    }

    public function update(Request $request, CorporateMembers $corporate)
    {
        $request->validate([
            'name' => 'required',
            'experience' => 'required|integer',
            'order' => 'required|integer',
            'joined_at' => 'required|date',
            'designation' => 'required',
            'contact_mail' => 'required|email',
        ]);

        $corporate->update($request->only('name', 'experience', 'order', 'joined_at', 'designation', 'contact_mail'));

        return redirect()->route('corporate.index')->with('success', 'Corporate Member updated successfully');
    }

    public function destroy(CorporateMembers $corporate)
    {
        $corporate->delete();
        return redirect()->route('corporate.index')->with('success', 'Corporate Member deleted successfully');
    }
}
