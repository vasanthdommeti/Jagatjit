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
        <div class="breadcrumb-title pe-3">Achievement Edit</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="p-0 mb-0 breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="team">Achievement Edit</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="mx-auto col-xl-12">

            <div class="card">
                <div class="card-body">
                    <form action="{{ route('achievement.update',[$achievement->id])}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Achievement name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="name" value="{{ $achievement->name }}" required>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">link</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="link" value="{{ $achievement->link }}" >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="headerimage" class="col-sm-2 col-form-label">Achievement Image</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="headerimage" name="news_image">
                                <!-- If you want to show the current image -->
                                <div>
                                    <strong>Current Image:</strong>
                                    @if($achievement->achievement_image)
                                        <img src="{{ $achievement->achievement_image }}" alt="Current Image" style="max-width: 100px; max-height: 100px;">
                                    @else
                                        No image available.
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Order</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputEmail3" value="{{ $achievement->order }}" name="order" required>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="status" class="col-sm-2 col-form-label">Section</label>
                            <div class="col-sm-10">
                                <select type="text" class="form-control" id="status" name="status">
                                    <option @if ($achievement->status == 'publish')
                                        selected
                                    @endif value="publish">Publish</option>
                                    <option @if ($achievement->status == 'draft')
                                        selected
                                    @endif value="draft">Draft</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Update Achievement</button>
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
