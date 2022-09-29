class Endboss extends MoveableObject {
    height = 290;
    width = 175;
    y = 80;
    speed = 15
    lastHit = 0;
    energy = 100;
    world;
    imagesAlert = [
        'img/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/img/4_enemie_boss_chicken/2_alert/G12.png',
    ]

    imagesHurt = [
        'img/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]
    imagesDead = [
        'img/img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/img/4_enemie_boss_chicken/5_dead/G26.png'
    ]
    imagesAttacking = [
        'img/img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/img/4_enemie_boss_chicken/3_attack/G20.png',
    ]

    constructor() {
        super().loadImage(this.imagesAlert[0]);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesAttacking);
        this.x = 4400;
        this.animate();
        this.applyGravity();
    }


    animate() {
        setStopableInterval(() => {
            if (this.isHurt(this.lastHit)) {
                this.bossJump();
            }
        }, 1000);
        setStopableInterval(() => {
            if (this.isDead(this.energy)) {
                world.endGameWin();
            } else if (this.isHurt(this.lastHit)) {
                this.playAnimation(this.imagesHurt);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imagesAttacking);
            } else {
                this.playAnimation(this.imagesAlert);
            }
        }, 200)
    }



    bossJump() {
        setTimeout(() => {
            this.speedY = 27.5;
            setInterval(() => {
                if (this.isAboveGround()) {
                    this.x -= this.speed
                }
            }, 50);
        }, 1000);
    }

    hitBoss() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }



}