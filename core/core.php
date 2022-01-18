<?php

function dd(...$inputs) {
    foreach ($inputs as $input){
        echo '<pre>';
        var_dump($input);
        echo '</pre>';
    };
    die();
}

/**
 * Create an encrypted token and set the token var in the SESSION
 */
function createToken()
{
    $token = bin2hex(openssl_random_pseudo_bytes(16));

    $options = 0;

    $_SESSION['token'] = openssl_encrypt($token, $_ENV['CIPHERING'], $_ENV['SECRET'], $options, $_ENV['ENCRYPTION_IV']);
    $_SESSION['token_time'] = time();

    return $_SESSION['token'];
}


/**
 * De-crypt a token and compare given token with the one in the SESSION
 * @param $token (string)
 * @return true when tokens compare with each other or false when not
 */
function decryptToken($token)
{
    $options = 0;
    $decryption = openssl_decrypt($token, $_ENV['CIPHERING'], $_ENV['SECRET'], $options, $_ENV['ENCRYPTION_IV']);

    return $token === $decryption;
}


/**
 * Create a HTML hidden input element with a token
 * When posting data the value of this hidden field 
 * will be compared with the one in the session
 * This comparission is done in the Request class (App\Libraies\Request)
 */
function generateFormTokenHTML()
{
    return "<input type=\"hidden\" value=\"" . createToken() . "\" name=\"f_token\">";
}

function isAjax()
{
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function exception_handler()
{
    
}

function getRequestMethod()
{
    return $_SERVER['REQUEST_METHOD'];
}

function getPage()
{
    return array_key_exists('page', $_GET) ? $_GET['page'] : 'home';
}

function getAction()
{
    return array_key_exists('action', $_GET) ? $_GET['action'] : 'index';
}

function render($view, $data = array())
{
    require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}