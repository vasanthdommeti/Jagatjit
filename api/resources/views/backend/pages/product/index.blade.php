@extends('backend.layouts.master')

@section('title')
JIL - Product
@endsection

@section('css')
<link href="{{ asset('backend/plugins/highlight/styles/github-gist.css')}}" rel="stylesheet">
<link href="{{ asset('backend/plugins/datatables/datatables.min.css')}}" rel="stylesheet">
@endsection

@section('content')
<div class="app-content">
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header"
                            style="display: flex; justify-content:space-between; align-items: center;">
                            <h5 class="card-title">Product Table</h5>
                            <a href="{{ route('product.create')}}" class="btn btn-primary">Create New Product</a>
                        </div>
                        <div class="card-body">
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Menu Order</th>
                                        <th>Image Order</th>
                                        <th>Product Name</th>
                                        <th>Home Page Image Linking</th>
                                        <th>Product Slug</th>
                                        <th>Product Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($products as $item)
                                    <tr>
                                        <td>{{ $item->menu_order }}</td>
                                        <td>{{ $item->page_order }}</td>
                                        <td>{{ $item->name }}</td>
                                        <td>
                                            <button class="btn btn-secondary image-btn" data-bs-toggle="modal"
                                                data-bs-target="#imageModal" data-img-url="{{$item->liquor->liquor_image}}">
                                                <img src="{{$item->liquor->liquor_image}}" alt="Thumbnail"
                                                    style="width: 50px; height: 50px; border-radius: 50%;">
                                            </button>
                                        </td>
                                        <td>{{ $item->slug }}</td>
                                        <td>
                                            <button class="btn btn-secondary image-btn" data-bs-toggle="modal"
                                                data-bs-target="#imageModal" data-img-url="{{$item->product_image}}">
                                                <img src="{{$item->product_image}}" alt="Thumbnail"
                                                    style="width: 50px; height: 50px; border-radius: 50%;">
                                            </button>
                                        </td>
                                        <td class="d-flex">
                                            <a href="{{ route('product.edit',[$item->id]) }}" class="btn btn-info"
                                                style="margin-right: 5px;">Edit</a>

                                            <form action="{{ route('product.destroy',[$item->id]) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button style="padding: 0; border:none; background:none; " type="submit"
                                                    class="text-danger"><i class="material-icons">delete</i></button>
                                            </form>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body" style="text-align: center;">
                <!-- Large Image -->
                <img src="" alt="Large Image" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ asset('backend/plugins/bootstrap/js/popper.min.js') }}"></script>
<script src="{{ asset('backend/plugins/highlight/highlight.pack.js') }}"></script>
<script src="{{ asset('backend/plugins/datatables/datatables.min.js') }}"></script>
<script src="{{ asset('backend/js/pages/datatables.js') }}"></script>

<script>
    $(document).ready(function(){
        // Listen for clicks on buttons with the class 'image-btn'
        $('.image-btn').click(function() {
            // Retrieve the image URL from the data-img-url attribute of the clicked button
            var imgUrl = $(this).data('img-url');

            // Set the src attribute of the image in the modal to the retrieved URL
            $('#imageModal img').attr('src', imgUrl);
        });
    });
</script>
@endsection
