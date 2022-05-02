<?php

include 'selectDatabase.php';

$sql = " INSERT INTO students (id, name, city, age) VALUES (2234576, 'Иван', 'Варна', 25)";

$result = mysqli_query($dbConn, $sql);
if (!$result) {
    die('Грешка!!!');
}

echo "Добавихте един запис.";
