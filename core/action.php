<?php

$connect = new PDO("mysql:host=127.0.0.1;dbname=products;user", "root", "Gorilla1!");

$received_data = json_decode(file_get_contents("php://input"));

$data = array();

if($received_data->action == 'fetchall') {
    $query = "
    SELECT * FROM posters
    ORDER BY id DESC
    ";
    $statement = $connect->prepare($query);
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
        $data[] = $row;
    }
    echo json_encode($data);
}