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
        <h1>
            <?= 
                $greeting;
                
                foreach($names as $name){
                    echo "<li>$name</li>";
                }
            ?>
        </h1>
    </header>
</body>
</html>