@extends('backend.layouts.master')

@section('title')
JIL - Award Press
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
                            <h5 class="card-title">News Table</h5>
                            <a href="{{ route('new.create')}}" class="btn btn-primary">Add New News</a>
                        </div>
                        @if (session('success'))

                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>

                        @endif
                        @if (session('danger'))

                        <div class="alert alert-danger" role="alert">
                            {{ session('danger') }}
                        </div>

                        @endif
                        <div class="card-body">
                            <table id="datatable" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Name</th>
                                        <th>Link</th>
                                        <th>Image</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($news as $item)
                                    <tr>
                                        <td>{{ $item->order }}</td>
                                        <td>{{ $item->name }}</td>
                                        <td>{{ $item->link }}</td>
                                        <td>
                                            @if (!empty($item->news_image))
                                            <button class="btn btn-secondary image-btn" data-bs-toggle="modal"
                                                data-bs-target="#imageModal" data-img-url="{{$item->news_image}}">
                                                <img src="{{$item->news_image}}" alt="Thumbnail"
                                                    style="width: 50px; height: 50px; border-radius: 50%;">
                                            </button>
                                            @endif
                                        </td>
                                        <td>{{ $item->status }}</td>
                                        <td class="d-flex">
                                            <a href="{{ route('new.edit',[$item->id]) }}"
                                                class="btn btn-primary">Edit</a>
                                            <form action="{{ route('new.destroy',[$item->id]) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">delete</button>
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
    $(document).ready(function () {
        // Listen for clicks on buttons with the class 'image-btn'
        $('.image-btn').click(function () {
            // Retrieve the image URL from the data-img-url attribute of the clicked button
            var imgUrl = $(this).data('img-url');

            // Set the src attribute of the image in the modal to the retrieved URL
            $('#imageModal img').attr('src', imgUrl);
        });
    });

</script>
@endsection
