@extends('backend.layouts.master')

@section('title')
JIL - Users
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
                            <h5 class="card-title">User Create</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('user.store') }}" method="POST">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Full Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" id="inputName">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="email" name="email" class="form-control" id="inputEmail3">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" name="password" class="form-control" id="inputPassword3">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword3" class="col-sm-2 col-form-label">Select User Role</label>
                                            <div class="col-sm-10">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select User Role</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="user">User</option>
                                                </select>
                                            </div>
                                        </div>


                                        <button type="submit" class="btn btn-primary">Sign in</button>
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
