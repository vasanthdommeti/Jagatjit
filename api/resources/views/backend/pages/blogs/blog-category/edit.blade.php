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
                            <h5 class="card-title">Blog Category Update</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('blog-category.update', [$category->id]) }}" method="POST">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Blog Category Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" value="{{ $category->name }}" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" style="width: 100%">Sign in</button>
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
