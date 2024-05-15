@extends('backend.layouts.master')

@section('title')
JIL - Social Media
@endsection

@section('css')

@endsection

@section('content')
<div class="app-content">
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="page-description">
                        <h1>Social Media Page</h1>
                    </div>
                </div>
            </div>
            @if (session('success'))

            <div class="alert alert-secondary alert-style-light" role="alert">
                <strong>Success!</strong> {{session('success')}}
            </div>

            @endif
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Update Social Media Links from here</h5>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('social.update', ['social'])}}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="example-container">
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Facebook Link</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $data->text1 }}" name="text1">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">YouTube Link</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $data->text2 }}" name="text2">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Instagram Link</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $data->text3 }}" name="text3">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Twitter Link</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $data->text4 }}" name="text4">
                                    </div>
                                    <div>
                                        <button type="submit" class="px-5 btn btn-primary"
                                            style="width: 100%">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ asset('backend/plugins/highlight/highlight.pack.js') }}"></script>
<script src="{{ asset('backend/plugins/dropzone/min/dropzone.min.js') }}"></script>
@endsection
