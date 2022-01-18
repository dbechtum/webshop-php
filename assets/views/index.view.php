<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0px;
        }
        header {
        background: #e3e3e3;
        margin: 0px;
        padding: 2em;
        text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <ul
            <?php foreach ($persons as $key => $val) : ?>
                <li>
                    <?php
                    echo (($val == 'true') ? 'true' : (($val == 'false') ? 'false' : $val ));
                    ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </header>
</body>
</html>