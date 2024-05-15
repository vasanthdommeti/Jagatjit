<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use Illuminate\Http\Request;

class AchievementController extends Controller
{
    public function index()
    {
        $achievement = Achievement::orderBy('order')->get();
        return view('backend.pages.achievement.index', compact('achievement'));
    }

    public function create()
    {
        return view('backend.pages.achievement.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'order' => 'required|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $achievement = Achievement::create($request->only('name', 'order', 'status', 'link'));

        if ($request->hasFile('achievement_image')) {
            $achievement->addMedia($request->file('achievement_image'))->toMediaCollection('achievement_image', 's3');
        }

        return redirect()->route('achievement.index')->with('success', 'Achievement created successfully');
    }

    public function edit(Achievement $achievement)
    {
        return view('backend.pages.achievement.edit', compact('achievement'));
    }

    public function update(Request $request, Achievement $achievement)
    {
        $request->validate([
            'name' => 'required',
            'order' => 'required|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $achievement->update($request->only('name', 'order', 'status', 'link'));

        if ($request->hasFile('achievement_image')) {
            $achievement->clearMediaCollection('achievement_image');
            $achievement->addMedia($request->file('achievement_image'))->toMediaCollection('achievement_image', 's3');
        }

        return redirect()->route('achievement.index')->with('success', 'Award Press updated successfully');
    }

    public function destroy(Achievement $achievement)
    {
        $achievement->delete();
        return redirect()->route('achievement.index')->with('success', 'Award Press deleted successfully');
    }
}
