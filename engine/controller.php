<?php

function prepareVariables($page, $action) {
    $params = [];
    $layout = 'layout';

    switch ($page) {
        case 'catalog':
            $params['title'] = 'Каталог';
            $params['catalog'] = getCatalog();
            break;

        case 'feedback':
            doFeedbackAction($action);
            $params['feedback'] = getAllsFeedback();
            break;

        case 'catalogFeedback':
            doFeedbackAction($action);
            $id = (int) $_GET['id'];
            $params['title'] = 'Отзывы';
            $params['feedback'] = getAllFeedback($id);
            $params['catalog'] = getOneCatalog($id);
            break;

        default:
            echo '404';
            die();
    }

    return [
        'params' => $params,
        'layout' => $layout,
    ];
}
