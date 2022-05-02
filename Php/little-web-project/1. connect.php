<?php

//Машина, на която работи MySQL сървърът
$host = 'localhost';
// Потребителско име за MySQL 
$dbUser = 'root';
// Парола за MySQL
$dbPass = '';
//връзка със сървъра
if (!$dbConn = mysqli_connect($host, $dbUser, $dbPass)) {
    die('Не може да се осъществи връзка със сървъра.');
}
// тестване на връзката
echo 'Връзката е успешна!';
?>

