@extends('backend.layouts.master')

@section('title')
JIL - Financials File Upload
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
                            <h5 class="card-title">Financials File Upload</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('financial.store') }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">File Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="file_name" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">File Description</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="file_description" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">File Date</label>
                                            <div class="col-sm-10">
                                                <input type="date" name="file_date" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">File Category Select</label>
                                            <div class="col-sm-10">
                                                <select name="file_category_id" class="form-control" id="inputName">
                                                    <option value="">Select Category</option>
                                                    @foreach ($category as $item)
                                                    <option value="{{ $item->id }}">{{$item->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Upload File</label>
                                            <div class="col-sm-10">
                                                <input type="file" name="financial_file" class="form-control" id="inputName">
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
