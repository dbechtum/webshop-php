<?php

// Turn on all errors, warnings and notifications at the top of this app
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

// .env configuration
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Starting a server PHP session
session_start();

// Include core modules
require 'core/core.php';

// Throw all errors to a central error handler function
// This function is in core/core.php file
set_exception_handler('exception_handler');

if (!isAjax()) {
    // Load the HTML <head> section
    require 'assets/views/layouts/head.view.php';
   
    $content = [];

    require 'assets/views/header.view.php';

    // Inject code from controller
    require 'core/bootstrap.php';

    // Close it with the bottom end </body> and </html> tags
    require 'assets/views/footer.view.php';

    // Close HTML <body> and <html> section
    require 'assets/views/layouts/bottom.view.php';
} else {
    require 'core/bootstrap.php';
}

?>
