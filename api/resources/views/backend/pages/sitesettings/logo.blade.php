@extends('backend.layouts.master')

@section('title')
JIL - Logo
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
                        <h1>Age Page</h1>
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
                            <h5 class="card-title">Change Logo from here</h5>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('logo.update', ['logo'])}}" method="POST" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="example-container">
                                    <div class="example-content">
                                        <label for="image" class="form-label">Website logo</label>
                                        <input type="file" name="site_logo" id="image">

                                        @if (!empty($data->site_logo))
                                        <img src="{{ $data->site_logo }}" class="half-width" width="30%" />
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
