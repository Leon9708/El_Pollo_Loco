class Level {
    enemies;
    clouds;
    backgroundObjects;
    levelEnd_x = 4800;
    bottles;
    coins;
    endboss;
    chickenSmall;

    constructor(enemies, clouds, backgroundObjects, bottles, coins, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
        this.endboss = endboss;

    }


}