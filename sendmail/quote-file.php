<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$uploaddir = 'tmp/';
$file = '';

if (!is_dir($uploaddir))
    mkdir($uploaddir, 0777);

if (move_uploaded_file($_FILES['quote-file']['tmp_name'], $uploaddir . basename($_FILES['quote-file']['name']))) {
    $file = realpath($uploaddir . $_FILES['quote-file']['name']);
}
echo $file;
?>