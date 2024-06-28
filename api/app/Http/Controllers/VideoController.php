<?php

namespace App\Http\Controllers;

use App\Http\Resources\VideoResource;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::all();
        return view('backend.pages.video.index',compact('videos'));
    }

    public function create()
    {
        return view('backend.pages.video.create');
    }

    public function store(Request $request)
    {
        $videos = Video::create([
            'name' => $request->name,
            'page_name' => $request->page_name,
            'video_file' => $request->video_file,
        ]);

        try {
            $videos->addMedia($request->video_file)->toMediaCollection('video_file', 's3');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'File upload failed: ' . $e->getMessage()]);
        }

        return redirect()->route('video.index')->with('success', 'File Uploaded Successfully');
    }

    public function destroy($id)
    {
        $file = Video::find($id);
        $file->delete();
        return redirect()->route('video.index')->with('success', 'File Deleted Successfully');
    }

    public function allVideos()
    {
        $videos = Video::all();
        return VideoResource::collection($videos);
    }
}
