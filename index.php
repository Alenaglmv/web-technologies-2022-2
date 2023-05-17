<?php

//1
echo "ЗАДАНИЕ 1. <br>";
$i = 0;

do {
    if ($i % 2 === 1) {
        echo "$i - нечётное число.<br>";
    }
    elseif ($i % 2 === 0 and $i > 0) {
        echo "$i - чётное число.<br>";
    }
    else {
        echo "$i - это ноль.<br>";
    }
    $i++;
} while ($i <= 10);


//2
echo "<br>ЗАДАНИЕ 2. <br>";

$array = [];
$array[] = [
    'область' => 'Тюменская область : ',
    'города' => 'Тюмень, ', 'Тобольск, ', 'Заводоуковск, ', 'Ялуторовск, ', 'Ишим<br>'
];
$array[] = [
    'область' => 'ХМАО : ',
    'города' => 'Сургут, ', 'Нижневартовск, ', 'Ханты-Мансийск, ', 'Нефтеюганск, ', 'Когалым, ', 'Пыть-Ях<br>'
];
$array[] = [
    'область' => 'Свердловская область : ',
    'города' => 'Екатеринбург, ', 'Богданович, ', 'Тавда, ', '	Нижний Тагил, ', 'Туринск, ', 'Каменск-Уральский<br>'
];

foreach ($array as $key => $value) {
    if (is_array($value)) {
        foreach ($value as $new_key => $new_value) {
            echo $new_value;
        }
    }
}


//3
echo "<br>ЗАДАНИЕ 3. <br>";

$alphabet = [
    'a' => 'a',
    'б' => 'b',
    'в' => 'v',
    'г' => 'g',
    'д' => 'd',
    'е' => 'e',
    'ё' => 'yo',
    'ж' => 'zh',
    'з' => 'z',
    'и' => 'i',
    'й' => 'j',
    'к' => 'k',
    'л' => 'l',
    'м' => 'm',
    'н' => 'n',
    'о' => 'o',
    'п' => 'p',
    'р' => 'r',
    'с' => 's',
    'т' => 't',
    'у' => 'u',
    'ф' => 'f',
    'х' => 'x',
    'ц' => 'cz',
    'ч' => 'ch',
    'ш' => 'sh',
    'щ' => 'shh',
    'ъ' => '',
    'ы' => 'y',
    'ь' => '',
    'э' => 'e',
    'ю' => 'yu',
    'я' => 'ya'
];
$text = 'Программирование';

$new_text = strtr(mb_strtolower($text), $alphabet);
echo "$new_text<br>";


//4
echo "<br>ЗАДАНИЕ 4. <br>";

$menu = [
    'Главная',
    'Меню' => [
        'Салаты',
        'Горячее',
        'Пицца',
        'Десерты'
    ],
    'Контакты'
];

echo '<ul>';
foreach ($menu as $key => $value) {
    if (is_array($value)) {
        echo '<li>' . $key . '<ul>';
        foreach ($value as $new_value) {
            echo '<li>' . $new_value . '</li>';
        }
        echo '</ul>' . '</li>';
    }
    else {
        echo '<li>' . $value . '</li>';
    }
}
echo '</ul>';


//6
echo "<br>ЗАДАНИЕ 6. <br>";

foreach ($array as $key => $value) {
    if (is_array($value)) {
        foreach ($value as $new_key => $new_value) {
            if (mb_substr($new_value, 0,1) == 'К') {
                echo $new_value;
            }
        }
    }
}
echo '<br>';
