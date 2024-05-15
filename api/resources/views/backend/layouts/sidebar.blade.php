<div class="app-sidebar">
    <div class="logo">
        <a href="{{ route('dashboard')}}" class="logo-icon"><span class="logo-text">JIL</span></a>
        <div class="sidebar-user-switcher user-activity-online">
            <a href="#">
                <span class="user-info-text">{{ Auth::user()->name }}<br><span
                        class="user-state-info">Admin</span></span>
            </a>
        </div>
    </div>
    <div class="app-menu">
        <ul class="accordion-menu">
            <li class="sidebar-title">
                Admin
            </li>
            <li class="active-page">
                <a href="{{ route('dashboard')}}" class="active"><i
                        class="material-icons-two-tone">dashboard</i>Dashboard</a>
            </li>
            <li>
                <a href="{{ route('user.index')}}"><i class="material-icons-two-tone">people</i>Users</a>
            </li>
            <li>
                <a href="{{ route('contacts.index')}}"><i class="material-icons-two-tone">support_agent</i>Contact</a>
            </li>

            <li>
                <a href="{{ route('team.index')}}"><i class="material-icons-two-tone">people</i>Team Table</a>
            </li>

            <li>
                <a href="{{ route('corporate.index')}}"><i class="material-icons-two-tone">people</i>Corporate Member Table</a>
            </li>

            <li>
                <a href="{{ route('new.index')}}"><i class="material-icons-two-tone">people</i>News Table</a>
            </li>

            <li>
                <a href="{{ route('achievement.index')}}"><i class="material-icons-two-tone">people</i>Achievement Table</a>
            </li>

            <li>
                <a href="#"><i class="material-icons-two-tone">currency_rupee</i>Financials<i
                        class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('category.index',['financials'])}}">Category</a>
                    </li>
                    <li>
                        <a href="{{ route('financial.index')}}">Files</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="material-icons-two-tone">picture_as_pdf</i>Reports and Policies<i
                        class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('category.index',['reports'])}}">Category</a>
                    </li>
                    <li>
                        <a href="{{ route('report.index')}}">Files</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
