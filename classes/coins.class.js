class Coin extends MoveableObject {

    constructor() {
        super().loadImage('img/img/8_coin/coin_1.png');
        this.height = 120;
        this.width = 120;
        this.x = 400 + Math.random() * 3000;
        this.y = 50 + Math.random() * 320;
    }


}