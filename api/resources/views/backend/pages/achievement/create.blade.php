@extends('backend.layouts.master')

@section('title')
JIL - Making
@endsection

@section('css')

@endsection

@section('content')
<!--start content-->
<main class="mt-5 team-content">
    <!--breadcrumb-->
    <div class="mb-3 team-breadcrumb d-none d-sm-flex align-items-center">
        <div class="breadcrumb-title pe-3">Achievement Create</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="p-0 mb-0 breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="team">Achievement Create</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="mx-auto col-xl-12">

            <div class="card">
                <div class="card-body">
                    <form action="{{ route('achievement.store')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Achievement name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="name" required>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">link</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="link" >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="headerimage" class="col-sm-2 col-form-label">Achievement Image</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="headerimage" name="achievement_image">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputName" class="col-sm-2 col-form-label">Published Date</label>
                            <div class="col-sm-10">
                                <input type="date" name="date" class="form-control" id="inputName">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="status" class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <select type="text" class="form-control" id="status" name="status">
                                    <option value="publish">Publish</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Achievement</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--end row-->
</main>
<!--end team main-->
@endsection

@section('scripts')

@endsection
