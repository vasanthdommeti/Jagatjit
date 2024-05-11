@extends('backend.layouts.master')

@section('title')
JIL - Blog Category
@endsection

@section('css')

@endsection

@section('content')
<div class="app-content">
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Blog Category Edit</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('blog.update', [$blog->id]) }}" method="POST"
                                        enctype="multipart/form-data">
                                        @csrf
                                        @method('PUT')

                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Title</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="title" value="{{ $blog->title }}"
                                                    class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Excerpt</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="excerpt" value="{{ $blog->title }}"
                                                    class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Content</label>
                                            <div class="col-sm-10">
                                                <textarea name="content" id="summernote" cols="30"
                                                    rows="10">{{ $blog->title }}</textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Category
                                                Select</label>
                                            <div class="col-sm-10">
                                                <select name="category_id" class="form-control" id="inputName">
                                                    <option value="">Select Category</option>
                                                    @foreach ($category as $item)
                                                    <option value="{{ $item->id }}" @if ($item->id ==
                                                        $blog->category_id)
                                                        selected
                                                        @endif>{{$item->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Content</label>
                                            <div class="col-sm-5">
                                                <input type="file" name="blog_image" class="form-control"
                                                    id="inputName">
                                            </div>
                                            <div class="col-sm-5">
                                                <img src="{{ $blog->blog_image }}" width="50%">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Status
                                                Select</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control" id="inputName">
                                                    <option value="draft" @if ($blog->status == 'draft')
                                                        selected
                                                        @endif>Draft</option>

                                                    <option value="published" @if ($blog->status == 'publish')
                                                        selected
                                                        @endif>Publish</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success" style="width: 100%">Submit
                                            Blog</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')

@endsection
