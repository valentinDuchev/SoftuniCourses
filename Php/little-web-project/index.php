<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Project/PHP/PHPProject.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Create Car</title>
    </head>
    <body>
        <?php
        print ("<form method='POST' action='insertInTable.php'><br>"
                . "Make: <input type='text' name='make'><br>"
                . "Model: <input type='text' name='model'><br>"
                . "Year: <input type='number' name='year'><br>"
                . "Horse Power: <input type='number' name='hp'><br>"
                . "<input type='submit' value='Create Car' name='submit'>"
                . "</form");
                
        print ("<form method='POST' action='showAll.php'>"
                . "<br><a href='showAll.php'> Show All </a>"
                . "</form>")
        ?>
    </body>
</html>
