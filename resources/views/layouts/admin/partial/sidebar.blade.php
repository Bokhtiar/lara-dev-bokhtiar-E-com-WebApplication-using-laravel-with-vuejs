<div class="page-sidebar">
    <a class="logo-box" href="index.html">
        <span>ecaps</span>
        <i class="icon-radio_button_unchecked" id="fixed-sidebar-toggle-button"></i>
        <i class="icon-close" id="sidebar-toggle-button-close"></i>
    </a>
    <div class="page-sidebar-inner">
        <div class="page-sidebar-menu">
            <ul class="accordion-menu">
                <li class="active-page">
                    <router-link to="/admin/dashboard">
                        <i class="menu-icon icon-home4"></i><span>Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/categories">
                        <i class="menu-icon icon-inbox"></i><span>Categories</span>
                    </router-link>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-flash_on"></i><span>Cateogires</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li> <a href="@route('admin.parentCategory.index')"> Parent Category</a> </li>
                        <li><a href="@route('admin.category.index')">Category list</a></li>
                        <li><a href="@route('admin.category.create')">Create Category</a></li>
                        <li><a href="@route('admin.subcategory.index')">Sub Category</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-layers"></i><span>Course's</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="@route('admin.course.index')">Course List</a></li>
                        <li><a href="@route('admin.course.create')">Course Create</a></li>
                        <li><a href="@route('admin.lession.index')">lessions</a></li>
                        <li><a href="@route('admin.video.index')">Videos</a></li>
                        <li><a href="@route('admin.quiz.index')">Quiz List</a></li>
                        <li><a href="@route('admin.quiz.create')">Quiz Create</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-code"></i><span>Quiz</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="@route('admin.quickquiz.index')">Quick Quizzes List</a></li>
                        <li><a href="@route('admin.quickquiz.create')">Quick Quiz Create</a></li>
                        <li><a href="@route('admin.weekquiz.index')">Week Quiz List</a></li>
                        <li><a href="@route('admin.weekquiz.create')">Week Quiz Create</a></li>
                        <li><a href="form-image-zoom.html">Image Zoom</a></li>
                        <li><a href="form-x-editable.html">X-editable</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-format_list_bulleted"></i><span>Tables</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="table-static.html">Static</a></li>
                        <li><a href="table-responsive.html">Responsive</a></li>
                        <li><a href="table-data.html">Data Tables</a></li>
                    </ul>
                </li>
                <li>
                    <a href="charts.html">
                        <i class="menu-icon icon-show_chart"></i><span>Charts</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-my_location"></i><span>Maps</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="maps-google.html">Google</a></li>
                        <li><a href="maps-vector.html">Vector</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="menu-icon icon-star"></i><span>Extra</span><i class="accordion-icon fa fa-angle-left"></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="invoice.html">Invoice</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="500.html">500 Page</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="lockscreen.html">Lockscreen</a></li>
                        <li><a href="todo.html">Todo</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="pricing-tables.html">Pricing Tables</a></li>
                        <li><a href="timeline.html">Timeline</a></li>
                    </ul>
                </li>
                <li class="menu-divider"></li>
                <li>
                    <a href="index.html">
                        <i class="menu-icon icon-help_outline"></i><span>Documentation</span>
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <i class="menu-icon icon-public"></i><span>Changelog</span><span class="label label-danger">1.0</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
