<?php

namespace App\Http\Controllers;

use App\Http\Resources\AchievementResource;
use App\Http\Resources\NewsResource;
use App\Models\Achievement;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::orderBy('order')->get();
        return view('backend.pages.news.index', compact('news'));
    }

    public function create()
    {
        return view('backend.pages.news.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'order' => 'required|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $news = News::create($request->only('name', 'order', 'status', 'link'));

        if ($request->hasFile('news_image')) {
            $news->addMedia($request->file('news_image'))->toMediaCollection('news_image', 's3');
        }

        return redirect()->route('new.index')->with('success', 'News created successfully');
    }

    public function edit(News $news)
    {
        return view('backend.pages.news.edit', compact('news'));
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'name' => 'required',
            'order' => 'required|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $news->update($request->only('name', 'order', 'status', 'link'));

        if ($request->hasFile('news_image')) {
            $news->clearMediaCollection('news_image');
            $news->addMedia($request->file('news_image'))->toMediaCollection('news_image', 's3');
        }

        return redirect()->route('new.index')->with('success', 'Award Press updated successfully');
    }

    public function destroy(News $news)
    {
        $news->delete();
        return redirect()->route('new.index')->with('success', 'Award Press deleted successfully');
    }

    public function allNews()
    {
        $news = News::where('status', 'publish')->orderBy('order')->get();
        $achievement = Achievement::where('status', 'publish')->orderBy('order')->get();

        $newsResource = NewsResource::collection($news);
        $achievementResource = AchievementResource::collection($achievement);

        return response()->json([
            'news' => $newsResource,
            'achievement' => $achievementResource,
        ]);

    }
}
