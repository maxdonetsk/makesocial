<?php

// Здесь нужно сделать все проверки передаваемых файлов и вывести ошибки если нужно
// Переменная ответа

$data = array();

if (isset($_GET['file'])) {
    $error = false;

    $uploaddir = './tmp'; // . - текущая папка где находится submit.php
    // Создадим папку если её нет

    if (!is_dir($uploaddir))
        mkdir($uploaddir, 0777);

    // переместим файлы из временной директории в указанную
//    echo $_FILES['quote-name']['name'];
    foreach ($_FILES as $file) {
        if (move_uploaded_file($file['quote-name']['tmp_name'], $uploaddir . basename($file['quote-name']['name']))) {
            $files = realpath($uploaddir . $file['quote-name']['name']);
            echo $files;
        } else {
            $error = true;
        }
    }
}