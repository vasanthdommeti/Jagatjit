@extends('backend.layouts.master')

@section('title')
JIL - Video
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
                            <h5 class="card-title">Video Table</h5>
                            <a href="{{ route('video.create')}}" class="btn btn-primary">Add New Video</a>
                        </div>
                        <div class="card-body">
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Video Name</th>
                                        <th>Video Page</th>
                                        <th>Video Link</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($videos as $item)

                                    <tr>
                                        <td>{{ $item->name }}</td>
                                        <td>{{ $item->page_name }}</td>
                                        <td>{{ $item->video_file }}</td>
                                        <td class="d-flex">
                                            {{-- <a href="{{ route('financial.edit',[$item->id]) }}"><i class="material-icons">edit</i></a> --}}
                                            <form action="{{ route('video.destroy',[$item->id]) }}" method="POST">
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
@endsection

@section('scripts')
<script src="{{ asset('backend/plugins/bootstrap/js/popper.min.js') }}"></script>
<script src="{{ asset('backend/plugins/highlight/highlight.pack.js') }}"></script>
<script src="{{ asset('backend/plugins/datatables/datatables.min.js') }}"></script>
<script src="{{ asset('backend/js/pages/datatables.js') }}"></script>
@endsection
