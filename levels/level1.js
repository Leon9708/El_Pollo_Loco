let level1;

function init() {
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall()

        ], [
            new cloud()
        ], [
            new BackgroundObjects('img/img/5_background/layers/air.png', -719 * 2),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/1.png', -719 * 2),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/1.png', -719 * 2),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/1.png', -719 * 2),
            new BackgroundObjects('img/img/5_background/layers/air.png', -719),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObjects('img/img/5_background/layers/air.png', 0),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObjects('img/img/5_background/layers/air.png', 719),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 2),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 3),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 4),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 5),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 6),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObjects('img/img/5_background/layers/air.png', 719 * 7),
            new BackgroundObjects('img/img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObjects('img/img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObjects('img/img/5_background/layers/1_first_layer/2.png', 719 * 7)

        ], [
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle()
        ], [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ], [
            new Endboss()
        ],
    )
}