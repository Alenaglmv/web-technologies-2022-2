<?php

//1
echo "ЗАДАНИЕ 1. ";
$a = -2;
$b = 5;

if ($a >= 0 and $b >= 0) {
    echo $a - $b . ' - разность';
}
elseif ($a < 0 and $b < 0) {
    echo $a * $b . ' - произведение';
}
else {
    echo $a + $b . ' - сумма';
}


//2
echo "<br>";
echo "<br>ЗАДАНИЕ 2. ";

$a = 7;
switch ($a) {
    case 0:
        echo (0);
    case 1:
        echo (1) . ' ';
    case 2:
        echo (2) . ' ';
    case 3:
        echo (3) . ' ';
    case 4:
        echo (4) . ' ';
    case 5:
        echo (5) . ' ';
    case 6:
        echo (6) . ' ';
    case 7:
        echo (7) . ' ';
    case 8:
        echo (8) . ' ';
    case 9:
        echo (9) . ' ';
    case 10:
        echo (10) . ' ';
    case 11:
        echo (11) . ' ';
    case 12:
        echo (12) . ' ';
    case 13:
        echo (13) . ' ';
    case 14:
        echo (14) . ' ';
    case 15:
        echo (15) . ' ';
}


//3
echo "<br>";
echo "<br>ЗАДАНИЕ 3. ";

$a = 8;
$b = 2;

function sum($a, $b) {
    return $a + $b;
}
function dif($a, $b) {
    return $a - $b;
}
function mul($a, $b) {
    return $a * $b;
}
function div($a, $b) {
    return $a / $b;
}

echo sum($a, $b) . ' - сумма, ' . dif($a, $b) .  ' - разность, ' . mul($a, $b) . ' - произведение, ' . div($a, $b) . ' - деление';


//4
echo "<br>";
echo "<br>ЗАДАНИЕ 4. ";

$a = 10;
$b = 5;

function mathOperation($a, $b, $operation) {
    switch ($operation) {
        case '+' :
            return sum($a, $b);
        case '-' :
            return dif($a, $b);
        case '*' :
            return mul($a, $b);
        case '/' :
            return div($a, $b);
    }
}

echo mathOperation($a, $b, '+') . ' - сумма, ' . mathOperation($a, $b, '-') .  ' - разность, ' . mathOperation($a, $b, '*') . ' - произведение, ' . mathOperation($a, $b, '/') . ' - деление';;


//5
echo "<br>";
echo "<br>ЗАДАНИЕ 5. ";
$thisYear = date('Y ') . 'год';

//1способ
$content = file_get_contents("./index.html");
$year = str_replace('{{ year }}', $thisYear, $content);
echo $year;

//2способ
echo $thisYear;

//3способ
?>
    <!DOCTYPE html>
    <html lang='ru'>

    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <title></title>
    </head>

    <body>
    <div>
        <p><?= $thisYear?></p>
    </div>
    </body>

    </html>
<?php


//6
echo "ЗАДАНИЕ 6. ";

$val = 4;
$pow = 4;

function power($val, $pow) {
    if ($pow == 0 and $val != 0) {
        return 1;
    }
    elseif ($pow < 0) {
        return  1 / $val * power($val, $pow + 1);
    }
    elseif ($pow > 0) {
        return $val * power($val, $pow - 1);
    }
    elseif ($val == 0) {
        return 0;
    }
}

echo power($val, $pow);