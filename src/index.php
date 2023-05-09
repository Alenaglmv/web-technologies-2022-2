<?php

$content = file_get_contents("./index.html");

$title = str_replace('{{ title }}', 'lesson16', $content);
$h1 = str_replace('{{ h1 }}', 'Задание №16', $title);
$thisYear = date('Y ') . 'год';
$year = str_replace('{{ year }}', $thisYear, $h1);

echo $year;

$hours = date('H') + 2;
$minutes = date('i');

if($hours == 1 or $hours == 21) {
    echo "$hours час ";
}
else if(($hours >= 2 and $hours <= 4) or ($hours >= 22 and $hours <= 24)) {
    echo "$hours часа ";
}
else if($hours >= 5 and $hours <= 20) {
    echo "$hours часов ";
}

if($minutes == 1 or $minutes == 21 or $minutes == 31 or $minutes == 41 or $minutes == 51) {
    echo "$minutes минута";
}
else if(($minutes >= 2 and $minutes <= 4) or ($minutes >= 22 and $minutes <= 24) or ($minutes >= 32 and $minutes <= 34) or ($minutes >= 42 and $minutes <= 44) or ($minutes >= 52 and $minutes <= 54)){
    echo "$minutes минуты";
}
else {
    echo "$minutes минут";
}