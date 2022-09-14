class Bottlebar extends DrawableObject {

    imagesBottles = [
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ]


    constructor() {
        super();
        this.loadImages(this.imagesBottles);
        this.x = 20;
        this.y = 50;
        this.height = 60;
        this.width = 200;
        this.setBottles(this.bottles);

    }

    setBottles(bottles) {
        this.bottles = bottles;
        let path = this.imagesBottles[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottles === 10) {
            return 5
        } else if (this.bottles > 8) {
            return 4
        } else if (this.bottles > 6) {
            return 3
        } else if (this.bottles > 3) {
            return 2
        } else if (this.bottles > 0) {
            return 1
        } else {
            return 0
        }
    }
}