<?php

include '3.selectDatabase.php';

if (isset($_POST["submit"])) {
    $make = $_POST['make'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $hp = $_POST['hp'];

    $sql = " INSERT INTO cars2 (make, model, year, hp) VALUES ('$make', '$model', $year, $hp)";

    $result = mysqli_query($dbConn, $sql);
    if (!$result) {
        die('Грешка!!!');
    }
}
echo "Добавихте един запис.";

print ("<form method='POST' action='index.php'>"
        . "<a href='index.php'>Go to Home Page</a>"
        . "</form>");

print ("<form method='POST' action='showAll.php'>"
        . "<br><a href='showAll.php'> Show All </a>"
        . "</form>");

