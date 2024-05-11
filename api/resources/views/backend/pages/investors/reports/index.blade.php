@extends('backend.layouts.master')

@section('title')
JIL - Files
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
                            <h5 class="card-title">Files Table</h5>
                            <a href="{{ route('report.create')}}" class="btn btn-primary">Create New Files</a>
                        </div>
                        <div class="card-body">
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Files Name</th>
                                        <th>Files Link</th>
                                        <th>Files Description</th>
                                        <th>Files Category</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($files as $item)

                                    <tr>
                                        <td>{{ $item->file_name }}</td>
                                        <td>{{ $item->report_policy_file }}</td>
                                        <td>{{ $item->file_description}}</td>
                                        <td>{{ $item->file_category_id }}</td>
                                        <td>{{ $item->file_date}}</td>
                                        <td class="d-flex">
                                            {{-- <a href="{{ route('report.edit',[$item->id]) }}"><i class="material-icons">edit</i></a> --}}
                                            <form action="{{ route('report.destroy',[$item->id]) }}" method="POST">
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
