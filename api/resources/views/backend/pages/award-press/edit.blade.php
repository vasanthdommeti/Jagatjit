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
        <div class="breadcrumb-title pe-3">Team Create</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="p-0 mb-0 breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="team">Team Create</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="mx-auto col-xl-12">

            <div class="card">
                <div class="card-body">
                    <form action="{{ route('award-press.update',[$award_press->id])}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Award/Press name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="name" value="{{ $award_press->name }}" required>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">link</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="link" value="{{ $award_press->name }}" >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="headerimage" class="col-sm-2 col-form-label">Award/Press Image</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="headerimage" name="award_press_image">
                                <!-- If you want to show the current image -->
                                <div>
                                    <strong>Current Image:</strong>
                                    @if($award_press->award_press_image)
                                        <img src="{{ $award_press->award_press_image }}" alt="Current Image" style="max-width: 100px; max-height: 100px;">
                                    @else
                                        No image available.
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Order</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputEmail3" value="{{ $award_press->order }}" name="order" required>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="status" class="col-sm-2 col-form-label">Section</label>
                            <div class="col-sm-10">
                                <select type="text" class="form-control" id="status" name="status">
                                    <option @if ($award_press->status == 'award')
                                        selected
                                    @endif value="award">Award</option>
                                    <option @if ($award_press->status == 'press')
                                        selected
                                    @endif value="press">News</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Award/Press</button>
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
