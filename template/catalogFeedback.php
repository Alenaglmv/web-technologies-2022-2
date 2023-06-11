<?php foreach ($catalog as $item): ?>
    <div>
        <h2><?=$item['name']?></h2>
        <img src="<?="/image/" . $item['image']?>" alt="<?=$item['image']?>" style="width: 350px">
        <br>
        <span><b>Цена: </b><?= $item['price'] ?> </span>
        <p style="width: 500px"><b>Описание: </b><?= $item['description'] ?></p>
    </div>

    <h2>Отзывы</h2>
    <?php foreach ($feedback as $value): ?>
        <div>
            <strong><?=$value['name']?></strong>: <?=$value['feedback']?>
        </div>
    <?php endforeach; ?>

    <br>
    <form action="/catalogFeedback/add/?id=<?=$item['id']?>" method="post">
        Оставить отзыв: <br>
        <input type="text" name="name" placeholder="Ваше имя"><br>
        <input type="text" name="message" placeholder="Ваш отзыв"><br>
        <input type="number" name="catalogId" hidden value="<?=$item["id"]?>">
        <input type="submit" value="Отправить">
    </form>
<?php endforeach; ?>



