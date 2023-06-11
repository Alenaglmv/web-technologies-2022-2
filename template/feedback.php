<h2>Отзывы на все десерты</h2>
<?php foreach ($feedback as $value): ?>
    <div>
        <strong style="font-size: 17px"><?=$value['name']?></strong>: <a style="font-size: 17px"><?=$value['feedback'];?>
            <a style="font-size: 12px"><?php switch ($value['catalogId']) {
            case '1':
                echo ' (Чизкейк)';
                break;
            case '2':
                echo ' (Медовик)';
                break;
            case '3':
                echo ' (Красный бархат)';
                break;
            case '4':
                echo ' (Павлова)';
                break;
            }?>

    </div>
<?php endforeach; ?>
