class Endboss extends MoveableObject {
    height = 350;
    width = 175;
    y = 100

    imagesWalking = [
        'img/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/img/4_enemie_boss_chicken/2_alert/G12.png',
    ]
    imagesAttacking = [

    ]


    constructor() {
        super().loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAttacking);
        this.x = 4400;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 250);
    }

}