<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

//.env configuration
$dotenv = Dotenv\Dotenv::createUmmutable(__DIR__);
$dotenv->load();

//Starting a server PHP session (local storage)
session_start();

$greeting = "Hey " . htmlspecialchars($_GET['name']);

$names = [
    'Henk',
    'John',
    'Dave'
];

foreach ($names as $name) {
    echo $name;
}

require '/assets/views/index.view.php';