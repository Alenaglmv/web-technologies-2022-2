<?php

//1 (статично объявлено в html)
//echo file_get_contents('./index.html');


//2
const DIR_IMG = './gallery';

function renderTemplate($page, $arrImg = [], $arrHtml = []) {
    ob_start();
    include $page . ".php";
    return ob_get_clean();
}

function renderArr() {
    $arr = [];
    $scanDir = scandir(DIR_IMG);
    for ($i = 0; $i < count($scanDir); $i++) {
        if (strlen($scanDir[$i]) > 2) {
            $scanDirImg = scanDir(DIR_IMG . "/" . $scanDir[$i]);
            for ($j = 0; $j < count($scanDirImg); $j++) {
                if (strlen($scanDirImg[$j]) > 2) {
                    $arr[$i - 2][$j - 2] = DIR_IMG . "/" . $scanDir[$i] . "/" . $scanDirImg[$j];
                }
            }
        }
    }
    return $arr;
}

$arrImg = renderArr();
$gallery = renderTemplate('gallery', $arrImg);
$arrHtml = array($gallery);

echo renderTemplate('main', $arrImg, $arrHtml);


//3
if (!empty($_FILES)) {
    $path = "gallery/small/" . $_FILES["myFile"]["name"];

    if ($_FILES["myFile"]["size"] > 5*1024*1024) {
        echo "Размер файла не должен превышать 5 мб";
        exit;
    }

    //проверку на тип файла не делала, так как сразу указала расширение в input

    if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $path)) {
        echo $message = "Файл загружен";
        $image = imagecreatefromjpeg($path);
        imagejpeg($image, "gallery/big/" . $_FILES["myFile"]["name"]);
    } else {
        echo $message = "Ошибка загрузки";
    }
}
?>

    <!DOCTYPE html>
    <html lang="ru">

    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
    <div class="add">
        <form method="post" enctype="multipart/form-data">
            <input id="file" type="file" name="myFile" accept="image/jpg, image/jpeg">
            <input id="submit" type="submit" value="Загрузить">
        </form>
    </div>
    </body>

    </html>
<?php

//4и5
$day = date('G:i:s d:m:Y');

function logging($day) {
    if (file_exists("log.txt")) {
        $countRecord = count(file("log.txt"));
        if ($countRecord < 10) {
            file_put_contents("log.txt", $day . PHP_EOL, FILE_APPEND);
        }
        else {
            file_put_contents("countLog.txt", "Создан новый log файл," . PHP_EOL, FILE_APPEND);
            $numberOfFileLog = count(file("countLog.txt"));
            rename("log.txt", "log{$numberOfFileLog}.txt");
        }
    }
    else {
        file_put_contents('log.txt', $day . PHP_EOL, FILE_APPEND);
    }
}
logging($day);