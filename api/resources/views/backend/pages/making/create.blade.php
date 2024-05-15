@extends('backend.layouts.master')

@section('title')
JIL - Making
@endsection

@section('css')

@endsection

@section('content')
<!--start content-->
<main class="mt-5 page-content">
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
        <div class="mx-auto col-xl-12">

            <div class="card">
                <div class="card-body">
                    <form action="@if($type == 'ourStory')
                    {{ route('ourStory.store') }}
                    @endif
                    @if ($type == 'making')
                    {{ route('making.store') }}
                    @endif
                    @if ($type == 'investor')
                    {{ route('investor.store') }}
                    @endif" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="p-4 border rounded">

                            <div class="col-12">
                                <input type="hidden" hidden name="type" value="{{ Request()->slug }}">

                                <input type="text" class="form-control" name="title" readonly
                                    value="{{ Request()->slug }}" id="inputText"
                                    style="text-align:center; font-size:20px; font-weight:600">
                                @error('title')
                                <p class="text-danger">{{ $message }}</p>
                                @enderror
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">

                                                <textarea name="description" cols="30" rows="10">@isset($making)
                                                    {!! $making->long_description !!}
                                                @endisset</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <style>
                                .color-picker {
                                    width: 100px;
                                    height: 50px;
                                }
                            </style>
                            @if ($type == 'making')
                                <!-- Color selection for Small Header -->
                                <div class="mb-3 row">
                                    <label for="smallHeaderColor" class="col-sm-2 col-form-label">Small Header Color</label>
                                    <div class="col-sm-10">
                                        <input type="color" class="form-control color-picker" id="smallHeaderColor" name="small_header_color" value="{{ $making->small_header_color }}" title="Choose your color">
                                    </div>
                                </div>

                                <!-- Color selection for Big Header -->
                                <div class="mb-3 row">
                                    <label for="bigHeaderColor" class="col-sm-2 col-form-label">Big Header Color</label>
                                    <div class="col-sm-10">
                                        <input type="color" class="form-control color-picker" id="bigHeaderColor" name="big_header_color" value="{{ $making->big_header_color }}" title="Choose your color">
                                    </div>
                                </div>
                            @endif

                            @if ($type == 'making')
                            <div class="d-flex">
                                <div class="col-6 ">
                                    @if (Request()->slug == 'Technology')
                                    <label for="">Upload Technology Image for {{ Request()->slug }} page</label>
                                    <input type="file" class="form-control" name="technology_file">
                                    @endif

                                    @if (Request()->slug == 'R&D')
                                    <label for="">Upload Our Story Image for {{ Request()->slug }} page</label>
                                    <input type="file" class="form-control" name="r_d_file">
                                    @endif

                                    @if (Request()->slug == 'Plants-and-Units')
                                    <label for="">Upload Our Story Image for {{ Request()->slug }} page</label>
                                    <input type="file" class="form-control" name="plants_and_units_file">
                                    @endif
                                </div>
                                <div class="col-6">
                                    @if (Request()->slug == 'Technology')
                                    <img src="{{ $making->technology_image }}" alt="" width="200px">
                                    @endif
                                    @if (Request()->slug == 'R&D')
                                    <img src="{{ $making->r_d_image }}" alt="" width="200px">
                                    @endif
                                    @if (Request()->slug == 'Plants-and-Units')
                                    <img src="{{ $making->plants_and_units_image }}" alt="" width="200px">
                                    @endif
                                </div>
                            </div>
                            @endif
                            <div class="row">

                                <div class="col-sm-9 ">
                                    <button type="submit" class="px-5 btn btn-primary">Update</button>
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
<!-- Place the first <script> tag in your HTML's <head> -->
    <script src="https://cdn.tiny.cloud/1/94vkuw19q9e13df8rg42umoewz0cmvb73sn8qx9w3svrjf8p/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>

    <!-- Place the following <script> and <textarea> tags your HTML's <body> -->
    <script>
      tinymce.init({
        selector: 'textarea',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      });
    </script>
@endsection
