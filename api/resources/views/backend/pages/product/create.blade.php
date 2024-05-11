@extends('backend.layouts.master')

@section('title')
JIL - Product Page
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
                            <h5 class="card-title">Product Page Create</h5>
                        </div>
                        <div class="card-body">
                            <div class="example-container">
                                <div class="example-content">
                                    <form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Product Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" id="inputName" required>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputOrder" class="col-sm-2 col-form-label">Menu Order</label>
                                            <div class="col-sm-10">
                                                <input type="number" name="menu_order" class="form-control" id="inputOrder">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputOrder" class="col-sm-2 col-form-label">Page Image Order</label>
                                            <div class="col-sm-10">
                                                <input type="number" name="page_order" class="form-control" id="inputOrder">
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputFile" class="col-sm-2 col-form-label">Product Image</label>
                                            <div class="col-sm-10">
                                                <input type="file" name="product_image" class="form-control" id="inputFile" required>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Home Page Liquor ID Select</label>
                                            <div class="col-sm-10">
                                                <select name="liquor_id" class="form-control" id="inputName">
                                                    <option value="">Select ID</option>
                                                    @foreach ($liquors as $item)
                                                    <option value="{{ $item->id }}">{{$item->id}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success" style="width: 100%">Submit Product Page</button>
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
