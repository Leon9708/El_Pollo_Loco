class Coin extends MoveableObject {
    collidingOffset = {
        'top': 40,
        'right': 40,
        'bottom': 40,
        'left': 40,
    };
    constructor() {
        super().loadImage('img/img/8_coin/coin_1.png');
        this.height = 120;
        this.width = 120;
        this.x = 400 + Math.random() * 3000;
        this.y = 50 + Math.random() * 320;
    }
}