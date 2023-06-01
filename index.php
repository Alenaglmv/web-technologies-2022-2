<?php

include "./db.php";

function renderLesson($items, $nested) {
    foreach ($items as $item) {
        if ($item["nested"] == $nested) {
            echo '<div class="list-item list-item_open" data-parent>' .
                '<div class="list-item__inner">' .
                '<img class="list-item__arrow" src="img/chevron-down.png" alt="" data-open>' .
                '<img class="list-item__folder" src="img/folder2.png" alt="">';
            echo $item["name"];
            echo '</div>';
            echo '<div class="list-item__items">';
            renderLesson($items, $item["id"]);
            echo '</div>';
            echo '</div>';
        }
    }
}

function getLesson() {
    return getAssocResult("SELECT * FROM `lesson`");
}
?>

<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Каталог</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="list-items" id="list-items">
    <?=renderLesson(getLesson(), null)?>
</div>

<script type="module" src="script.js"></script>

</body>

</html>

