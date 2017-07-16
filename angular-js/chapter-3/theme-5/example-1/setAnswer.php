<?php

if(isset($_GET['id']) && isset($_GET['up'])) {
    $id = $_GET['id'];
    $up = $_GET['up'];
    $data = [
        'id' => $id,
        'up' => $up
    ];
    echo json_encode($data);
} else {
    echo 'Введение данных некорректны';
}