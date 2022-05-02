<?php

include 'connect.php';

$sql = 'CREATE Database student61';

if ($queryResource=mysqli_query($dbConn,$sql)) {
    //или mysqli_query($dbConn,'CREATE DATABASE student61' )
    echo "Базата данни е създадена. <br>";
} else {
    echo "Грешка при създаване на базата данни:";
}

