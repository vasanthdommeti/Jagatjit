<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeamResource;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TeamController extends Controller
{
    public function index()
    {
        $team = Team::orderBy('order')->get();
        return view('backend.pages.team.index', compact('team'));
    }

    public function create()
    {
        return view('backend.pages.team.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'experience' => 'required|integer',
            'order' => 'required|integer',
            'education' => 'required',
            'joined_at' => 'required|date',
            'team_image' => 'required|image',
        ]);

        $team = Team::create($request->only('name', 'experience', 'order', 'education', 'joined_at'));

        if ($request->hasFile('team_image')) {
            $team->addMedia($request->file('team_image'))->toMediaCollection('team_image', 's3');
        }

        return redirect()->route('team.index')->with('success', 'Team created successfully');
    }

    public function edit(Team $team)
    {
        return view('backend.pages.team.edit', compact('team'));
    }

    public function update(Request $request, Team $team)
    {
        $request->validate([
            'name' => 'required',
            'experience' => 'required|integer',
            'order' => 'required|integer',
            'education' => 'required',
            'joined_at' => 'required|date',
            'team_image' => 'required|image',
        ]);
        Log::info($request->all());
        $team->update($request->only('name', 'experience', 'order', 'education', 'joined_at'));

        if ($request->hasFile('team_image')) {
            $team->addMedia($request->file('team_image'))->toMediaCollection('team_image', 's3');
        }

        return redirect()->route('team.index')->with('success', 'Team updated successfully');
    }

    public function destroy(Team $team)
    {
        $team->delete();
        return redirect()->route('team.index')->with('success', 'Team deleted successfully');
    }

    public function allteam()
    {
        $team = Team::orderBy('order')->get();
        return TeamResource::collection($team);
    }
}
