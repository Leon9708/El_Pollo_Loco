class Statusbar extends DrawableObject {


    imagesLife = [
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ]

    life = 100;

    constructor() {
        super();
        this.loadImages(this.imagesLife);
        this.setLife(100);
        this.x = 100;
        this.y = 100;
    }

    setLife(life) {
        this.life = life
        let path = this[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.life === 100) {
            return 5
        } else if (this.life > 80) {
            return 4
        } else if (this.life > 60) {
            return 3
        } else if (this.life > 40) {
            return 2
        } else if (this.life > 20) {
            return 1
        } else if (this.life === 0) {
            return 0
        }
    }
}