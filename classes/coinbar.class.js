class Coinbar extends DrawableObject {

    imagesCoin = [
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ]


    constructor() {
        super();
        this.loadImages(this.imagesCoin);
        this.x = 20;
        this.y = 100;
        this.height = 60;
        this.width = 200;
        this.setCoins(this.coins);

    }

    setCoins(coins) {
        this.coins = coins;
        let path = this.imagesCoin[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coins === 5) {
            return 5
        } else if (this.coins > 3) {
            return 4
        } else if (this.coins > 2) {
            return 3
        } else if (this.coins > 1) {
            return 2
        } else if (this.coins > 0) {
            return 1
        } else {
            return 0
        }
    }
}