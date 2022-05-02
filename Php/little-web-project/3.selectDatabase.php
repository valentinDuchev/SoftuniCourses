<?php

//ако не сме създали базата данни, include-ваме този файл
//include '2. createDatabase.php'; 
//ако вече има създадена база, include-ваме този файл
include '1. connect.php';

$dbName = 'carShop';

//
//if (!$dbConn = mysqli_connect($host, $dbUser, $dbPass)) {
//// или mysqli_connect('localhost', 'root', 'root')
//    die('Не може да се осъществи връзка със сървъра:' . mysql_error());
//}
//
//echo "<br> Връзката е успешна. <br>";

if (!mysqli_select_db($dbConn, $dbName)) {
    die('Не може да се селектира базата от данни.');
}

echo " <br> Базата данни е селектирана. <br>";

