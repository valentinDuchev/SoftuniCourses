<?php

include '3.selectDatabase.php';

$sql = "CREATE TABLE cars2 ("
        . "id INT(10) NOT NULL AUTO_INCREMENT,"
        . "make VARCHAR(32) DEFAULT NULL,"
        . "model VARCHAR(30) DEFAULT NULL,"
        . "year SMALLINT(6) DEFAULT NULL,"
        . "hp SMALLINT(6) DEFAULT NULL,"
        . "PRIMARY KEY  (id)"
        . ") ENGINE=INNODB DEFAULT CHARSET=utf8";

$result = mysqli_query($dbConn, $sql);

if (!$result) {
    die('Грешка при създаване на таблицата.');
}

echo "Таблицата е създадена!";

