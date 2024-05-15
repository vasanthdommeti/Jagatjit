@extends('backend.layouts.master')

@section('title')
JIL - Video File Upload
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
                            <h5 class="card-title">Video File Upload</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('video.store') }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Video Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Video Page Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="page_name" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Upload File</label>
                                            <div class="col-sm-10">
                                                <input type="file" name="video_file" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success" style="width: 100%">Submit File</button>
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
