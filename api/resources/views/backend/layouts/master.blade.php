<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Jagatjit Industries Limited">
    <meta name="keywords" content="login,dashboard">
    <meta name="author" content="stacks">
    <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>@yield('title')</title>

    @yield('css')
    @include('backend.layouts.css')
</head>

<body>
    <div class="flex-wrap app align-content-stretch d-flex">
        @include('backend.layouts.sidebar')

        <div class="app-container">
            <div class="search">
                <form>
                    <input class="form-control" type="text" placeholder="Type here..." aria-label="Search">
                </form>
                <a href="#" class="toggle-search"><i class="material-icons">close</i></a>
            </div>

            @include('backend.layouts.header')

            @yield('content')
        </div>
    </div>


    @include('backend.layouts.scripts')
    @yield('scripts')
</body>

</html>
