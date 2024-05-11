@extends('backend.layouts.master')

@section('title')
JIL - Liqour Images
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
                            <h5 class="card-title">Liqour Images Table</h5>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Add New Image
                            </button>
                        </div>
                        @if (session('success'))

                        <div class="alert alert-secondary alert-style-light" role="alert">
                            <strong>Success!</strong> {{session('success')}}
                        </div>

                        @endif
                        <div class="card-body">
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Image ID</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($liquors as $item)

                                    <tr>
                                        <td>{{ $item->sequence }}</td>
                                        <td>{{ $item->id }}</td>
                                        <td>
                                            <button class="btn btn-secondary image-btn" data-bs-toggle="modal"
                                                data-bs-target="#imageModal" data-img-url="{{$item->liquor_image}}">
                                                <img src="{{$item->liquor_image}}" alt="Thumbnail"
                                                    style="width: 50px; height: 50px; border-radius: 50%;">
                                            </button>
                                        </td>
                                        <td>
                                            <form action="{{ route('liquor.destroy',[$item->id]) }}" method="POST">
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
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Upload Image</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form enctype="multipart/form-data" method="POST" action="{{ route('liquor.upload')}}">
                @csrf
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="imageUpload" class="form-label">Upload image</label>
                        <input class="form-control" type="file" id="imageUpload" name="image">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
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
