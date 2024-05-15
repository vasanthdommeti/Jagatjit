@extends('backend.layouts.master')

@section('title')
JIL - Editing
@endsection

@section('css')

@endsection

@section('content')
<!--start content-->
<main class="mt-5 page-content">
    <!--breadcrumb-->
    <div class="mb-3 page-breadcrumb d-none d-sm-flex align-items-center">
        <div class="breadcrumb-title pe-3">Page Edit</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="p-0 mb-0 breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Page Edit</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="mx-auto col-xl-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('page.update', $pages->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <input type="number" readonly name="id" value="{{$pages->id}}" hidden>
                        <div class="mb-3 row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Page Title</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" name="title" required value="{{ $pages->title }}">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">Content</label>
                            <div class="col-sm-10">
                                <textarea name="content" cols="30" rows="20">{!! $pages->content !!}</textarea>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="headerimage" class="col-sm-2 col-form-label">Header Background Image</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="headerimage" name="page_image">
                                <!-- If you want to show the current image -->
                                <div>
                                    <strong>Current Image:</strong>
                                    @if($pages->page_image)
                                        <img src="{{ $pages->page_image }}" alt="Current Image" style="max-width: 100px; max-height: 100px;">
                                    @else
                                        No image available.
                                    @endif
                                </div>
                            </div>
                        </div>
                        <style>
                            .color-picker {
                                width: 100px;
                                height: 50px;
                            }
                        </style>
                        <div class="mb-3 row">
                            <label for="bigHeaderColor" class="col-sm-2 col-form-label">Header Color</label>
                            <div class="col-sm-10">
                                <input type="color" class="form-control color-picker" id="bigHeaderColor" name="big_header_color" title="Choose your color" value="{{ $pages->big_header_color }}">
                            </div>
                        </div>
                        <fieldset class="mb-3 row">
                            <legend class="pt-0 col-form-label col-sm-2">Page Status</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="gridRadios1" value="1" name="is_active" {{ $pages->is_active == 1 ? 'checked' : '' }}>
                                    <label class="form-check-label" for="gridRadios1">
                                        Active
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="gridRadios2" value="0" name="is_active" {{ $pages->is_active == 0 ? 'checked' : '' }}>
                                    <label class="form-check-label" for="gridRadios2">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary">Update Page</button>
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
