<?php
define('ROOT', dirname(__DIR__));
define('TEMPLATE_DIR', ROOT . '/template/');
define('LAYOUTS_DIR', 'layouts/');

include ROOT . "/engine/render.php";
include ROOT . "/engine/controller.php";
include ROOT . "/engine/db.php";
include ROOT . "/models/catalog.php";
include ROOT . "/models/feedback.php";

$url_array = explode("/", $_SERVER['REQUEST_URI']);

$action = $url_array[2] ?? '';

if ($url_array[1] === "") {
    $page = 'catalog';
} else {
    $page = $url_array[1];
}

$variables = prepareVariables($page, $action);

echo render($page, $variables['params'], $variables['layout']);




