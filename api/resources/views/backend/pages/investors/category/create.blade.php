@extends('backend.layouts.master')

@section('title')
JIL - file Category
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
                            <h5 class="card-title">file Category Create</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('file.category.store') }}" method="POST">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">File Category Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <input type="hidden" name="section" value="{{$name}}" readonly>
                                        <button type="submit" class="btn btn-primary" style="width: 100%">Create Category</button>
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
