<?php 

include '3.selectDatabase.php';

$result = mysqli_query($dbConn, "SELECT * FROM cars2");
while ($row = mysqli_fetch_assoc($result)) {
    echo "" .$row['id'].".". $row['make']." " .$row['model'].", Year: " .$row['year'].", " . $row['hp'] ."hp " ."<br>";
} 

print ("<form method='POST' action='index.php'>"
        . "<a href='index.php'>Go to Home Page</a>"
        . "</form>");


?>

