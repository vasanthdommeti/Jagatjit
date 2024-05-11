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
                            <h5 class="card-title">Product Edit</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('product.update', [$product->id]) }}" method="POST"
                                        enctype="multipart/form-data">
                                        @csrf
                                        @method('PUT')

                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Product Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" id="inputName"
                                                    value="{{ $product->name }}" required>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputOrder" class="col-sm-2 col-form-label">Menu Order</label>
                                            <div class="col-sm-10">
                                                <input type="number" name="menu_order" class="form-control" value="{{ $product->menu_order}}" id="inputOrder">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputOrder" class="col-sm-2 col-form-label">Page Image Order</label>
                                            <div class="col-sm-10">
                                                <input type="number" name="page_order" class="form-control" value="{{ $product->page_order}}" id="inputOrder">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputFile" class="col-sm-2 col-form-label">Product Image</label>
                                            <div class="col-sm-10">
                                                <input type="file" name="product_image" class="form-control" id="inputFile">
                                                @if ($product->product_image)
                                                    <img src="{{$product->product_image}}" alt="Product Image" style="width: 100px; margin-top: 10px;">
                                                @endif
                                            </div>
                                        </div>

                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Home Page Liquor ID
                                                Select</label>
                                            <div class="col-sm-10">
                                                <select name="liquor_id" class="form-control" id="inputName">
                                                    <option value="">Select ID</option>
                                                    @foreach ($liquors as $item)
                                                    <option @if ($product->liquor_id == $item->id)
                                                        selected
                                                        @endif
                                                        value="{{ $item->id }}"
                                                        >{{$item->id}}</option>
                                                    @endforeach
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
