<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Jagatjit Industries Limited ">
    <meta name="keywords" content="login,dashboard">
    <meta name="author" content="stacks">
    <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Jagatjit Industries Limited</title>

    <!-- Styles -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet">
    <link href="{{ asset('backend/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('backend/plugins/perfectscroll/perfect-scrollbar.css') }}" rel="stylesheet">
    <link href="{{ asset('backend/plugins/pace/pace.css') }}" rel="stylesheet">


    <!-- Theme Styles -->
    <link href="{{ asset('backend/css/main.min.css') }}" rel="stylesheet">
    <link href="{{ asset('backend/css/darktheme.css') }}" rel="stylesheet">
    <link href="{{ asset('backend/css/custom.css') }}" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('frontend/img/logo.png') }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('frontend/img/logo.png') }}" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <div class="flex-wrap app app-auth-sign-in align-content-stretch d-flex justify-content-end">
        <div class="app-auth-background">

        </div>
        <div class="app-auth-container">
            <div class="logo">
                <a href="index.html">Jagatjit Industries Limited</a>
            </div>
            <p class="auth-description">Please sign-in to your account and continue to the dashboard.</p>

           <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="auth-credentials m-b-xxl">
                <label for="signInEmail" class="form-label">Email address</label>
                <input type="email" class="form-control m-b-md" id="signInEmail" aria-describedby="signInEmail"
                    placeholder="example@neptune.com" name="email">

                <label for="signInPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="signInPassword" name="password" aria-describedby="signInPassword"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
            </div>

            <div class="auth-submit">
                <button type="submit" class="btn btn-primary">Sign In</button>
                <a href="{{ route('password.request')}}" class="auth-forgot-password float-end">Forgot password?</a>
            </div>
           </form>
        </div>
    </div>

    <!-- Javascripts -->
    <script src="{{ asset('backend/plugins/jquery/jquery-3.5.1.min.js') }}"></script>
    <script src="{{ asset('backend/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('backend/plugins/perfectscroll/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('backend/plugins/pace/pace.min.js') }}"></script>
    <script src="{{ asset('backend/js/main.min.js') }}"></script>
    <script src="{{ asset('backend/js/custom.js') }}"></script>
</body>

</html>
