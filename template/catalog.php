<div>
    <?php foreach ($catalog as $item): ?>
        <div>
            <h2><?=$item['name']?></h2>
            <img src="/image/<?=$item['image']?>" alt="<?=$item['image']?>" style="width: 350px">
            <br>
            <span><b>Цена: </b><?=$item['price']?></span>
            <br>
            <a href="/catalogFeedback/?id=<?=$item['id']?>">Посмотреть описание и отзывы</a>
            <hr>
        </div>
    <?php endforeach; ?>
</div>
