<?php

function getCatalog() {
    return getAssocResult("SELECT * FROM `catalog`");
}

function getOneCatalog($id) {
    return getAssocResult("SELECT * FROM `catalog` WHERE id = {$id}");
}