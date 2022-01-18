<?php


// Get page from URL
$page = getPage();

// Get action from URL
$action = getAction();

if (!empty($page) && file_exists('controllers/' . $page . '.php')) {
    require_once 'controllers/' . $page . '.php';

    // Call function in controller
    $action($page);
}