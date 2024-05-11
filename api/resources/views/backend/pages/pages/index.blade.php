@extends('backend.layouts.master')

@section('title')
JIL - Pages
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
                            <h5 class="card-title">Pages Table</h5>
                            <a href="{{ route('page.create')}}" class="btn btn-primary">Add New Page</a>
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
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Page Title</th>
                                        <th>Page slug</th>
                                        <th>Page isActive</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($pages as $item)

                                    <tr>
                                        <td>{{ $item->title }}</td>
                                        <td>{{ $item->slug }}</td>
                                        <td>
                                            @if($item->is_active == 1)
                                            <span class="badge badge-success">Active</span>
                                            @else
                                            <span class="badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="d-flex">
                                            <a href="{{ route('page.edit',[$item->id]) }}" class="btn btn-primary">Edit</a>
                                            <form action="{{ route('page.destroy',[$item->id]) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit"
                                                    class="btn btn-danger">delete</button>
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
