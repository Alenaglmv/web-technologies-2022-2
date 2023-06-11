<?php

function getAllFeedback($id) {
    $sql = "SELECT * FROM `feedback` WHERE catalogId = {$id}";

    return getAssocResult($sql);
}

function getAllsFeedback() {
    $sql = "SELECT * FROM `feedback` ORDER BY id DESC";

    return getAssocResult($sql);
}

function addFeedback() {
    $sql = "INSERT INTO `feedback`(`name`, `feedback`, `catalogId`) VALUES ('{$_POST['name']}','{$_POST['message']}', '{$_POST['catalogId']}')";

    executeSql($sql);
    header("Location: /catalogFeedback/?id={$_POST['catalogId']}");
}

function doFeedbackAction($action) {
    if ($action === "add") {
        addFeedback();
    }
}
