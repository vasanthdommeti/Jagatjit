@extends('backend.layouts.master')

@section('title')
JIL - Users
@endsection

@section('css')

@endsection

@section('content')
<!--start content-->
<main class="page-content">
    <!--breadcrumb-->
    <div class="mb-3 page-breadcrumb d-none d-sm-flex align-items-center">
        <div class="breadcrumb-title pe-3">Forms</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="p-0 mb-0 breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Form Layouts</li>
                </ol>
            </nav>
        </div>
        <div class="ms-auto">
            <div class="btn-group">
                <button type="button" class="btn btn-primary">Settings</button>
                <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"> <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a class="dropdown-item"
                        href="javascript:;">Action</a>
                    <a class="dropdown-item" href="javascript:;">Another action</a>
                    <a class="dropdown-item" href="javascript:;">Something else here</a>
                    <div class="dropdown-divider"></div> <a class="dropdown-item" href="javascript:;">Separated
                        link</a>
                </div>
            </div>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="mx-auto col-xl-9">

            <div class="card">
                <div class="card-body">
                    <form action="{{ route('user.store') }}" method="POST">
                        @csrf
                        <div class="p-4 border rounded">
                            <div class="card-title d-flex align-items-center">
                                <h5 class="mb-0">User Registration</h5>
                            </div>
                            <hr />
                            <div class="mb-3 row">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Enter Your
                                    Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="name" id="inputEnterYourName"
                                        placeholder="Enter Your Name">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Email
                                    Address</label>
                                <div class="col-sm-9">
                                    <input type="email" class="form-control" id="inputEmailAddress2"
                                        placeholder="Email Address" name="email">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputChoosePassword2" class="col-sm-3 col-form-label">Enter
                                    Password</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="inputChoosePassword2"
                                        placeholder="Choose Password" name="password">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputChoosePassword2" class="col-sm-3 col-form-label">User Role</label>
                                <div class="col-sm-9">
                                    <select type="email" class="form-control" id="inputChoosePassword2"
                                        placeholder="Choose Password" name="role">
                                        <option>Select User Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
                                    <button type="submit" class="px-5 btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--end row-->
</main>
<!--end page main-->
@endsection

@section('scripts')

@endsection
