@extends('backend.layouts.master')

@section('title')
JIL - Footer Section
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
                        <h1>Footer Section</h1>
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
                            <h5 class="card-title">Update Footer Section from here</h5>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('footer.section.update', ['footer'])}}" method="POST" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="example-container">
                                    {{-- <div class="example-content">
                                        <label for="exampleInput" class="form-label">Footer Content</label>
                                        <textarea id="summernote" cols="30" rows="10" class="form-control" id="exampleInput" name="text1">{!! $data->text1 !!}</textarea>
                                    </div> --}}
                                    <div class="example-content">
                                        <label for="exampleInput" class="form-label">About Section Big Title</label>
                                        <input type="text" class="form-control" id="exampleInput" value="{{ $data->text2 }}" name="text2">
                                    </div>
                                    <div class="example-content">
                                        <label for="image" class="form-label">Footer Section Image</label>
                                        <input type="file" name="footer_image" id="image">

                                        @if (!empty($data->footer_image))
                                        <img src="{{ $data->footer_image }}" class="half-width" width="30%" />
                                        @else
                                        <img src="{{ asset('frontend/img/logo.png') }}" class="half-width" width="30%" />
                                        @endif
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
