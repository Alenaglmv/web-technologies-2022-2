<link rel="stylesheet" href="style.css">
<div id="main">
    <div class="post_title"><h2 style="margin-left: 20px">Моя галерея</h2></div>
    <div class="gallery">
        <?php
        foreach ($arrImg['1'] as $img){
            ?>
            <a rel="gallery" class="photo" href='<?=$img?>' target="_blank">
                <img src="<?=$img?>" width="180px" height="120" alt="img" />
            </a>
            <?php
        }
        ?>
    </div>
</div>
