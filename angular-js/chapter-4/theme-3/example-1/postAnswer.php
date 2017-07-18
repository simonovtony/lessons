<?php

$data = file_get_contents('php://input');

$data = json_decode($data, true);

if(isset($data['text']) && isset($data['author'])) {
    $answer = [
        'text'   => $data['text'],
        'author' => $data['author'],
    ];
    echo json_encode($answer);
} else {
    echo 'Не введено текст или автор ответа!';
}