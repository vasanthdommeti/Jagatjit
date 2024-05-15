@extends('backend.layouts.master')

@section('title')
JIL - Numbers Section
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
                        <h1>Numbers Section</h1>
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
                            <h5 class="card-title">Update Numbers Section from here</h5>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('number.section.update', ['numbering'])}}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="example-container">
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">First Part Number</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text1->number }}" name="text1_number">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">First Part Content</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text1->content }}" name="text1_content">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Second Part Number</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text2->number }}" name="text2_number">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Second Part Content</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text2->content }}" name="text2_content">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Third Part Number</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text3->number }}" name="text3_number">
                                    </div>
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">Third Part Content</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $text3->content }}" name="text3_content">
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
