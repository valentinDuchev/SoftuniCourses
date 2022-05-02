<?php

include 'selectDatabase.php';

$sql = "CREATE TABLE students ("
        . "id INT(10) NOT NULL,"
        . "name VARCHAR(32) DEFAULT NULL,"
        . "city VARCHAR(30) DEFAULT NULL,"
        . "age SMALLINT(6) DEFAULT NULL,"
        . "PRIMARY KEY  (id)"
        . ") ENGINE=INNODB DEFAULT CHARSET=utf8";

$result = mysqli_query($dbConn, $sql);

if (!$result) {
    die('Грешка при създаване на таблицата.');
}

echo "Таблицата е създадена!";

