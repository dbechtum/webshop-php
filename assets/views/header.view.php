<header class ="header">
    <nav class="navbar navbar-expand-md navbar-light bg-light front">
        <div class="container border-bottom">
            <a class="navbar-brand" href="?page=home"><img class="logo"
                    src="/assets/images/logo.png" width="35" height="35">
                <p class="logo text-dark">POSTER SPACE</p>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse col-12 col-md-auto mb-2 justify-content-center mb-md-0"
                id="navbarNavDropdown">
                <ul class="navbar-nav container align-items-md-center">
                    <!-- <li class="nav-item">
                        <a id="home" class="nav-link" href="index.html">Home</a>
                    </li> -->
                    <li class="nav-item me-auto"> <!--use 'me-auto' on the last pagenav button. This will move the rest of the buttons over -->
                        <a id="browse" class="nav-link" href="?page=home">Home</a>
                    </li>
                    <!-- <li class="nav-item me-auto">
                        <a id="subscribe" class="nav-link"
                            href="">Subscribe</a>
                    </li> -->
                    
                    <!-- <li class="nav-item me-5">
                        <h4><a href="create.html"><span
                                    class="createbutton badge bg-primary">Create</span></a>
                        </h4>
                    </li> -->
                    <li class="nav-item me-3">
                        <div class="nav-link navCart">
                            <img class="navCartImg" src="assets/images/icons/cart.svg"
                                onclick="Event.$emit('showCart', [])">
                            <span class="cartAmount badge bg-primary"></span>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="navUserDropdown nav-link dropdown-toggle" href="#"
                            id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img class="navUserDropdownImg"
                                src="assets/images/icons/person.svg" alt="User Dropdown">
                        </a>
                        <ul class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink">
                            <li><a id="navSignup" class="dropdown-item navSignup"
                                    href="#"><img class="navSignupImg"
                                        src="assets/images/icons/person-plus.svg">
                                    Signup</a></li>
                            <li><a id="navLogin" class="dropdown-item navLogin"
                                    href="#">Login</a>
                            </li>
                            <li><a id="navSettings" class="dropdown-item navSettings"
                                    href="#">Settings</a></li>
                            <li><a id="navLogout" class="dropdown-item navLogout"
                                    href="#">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
