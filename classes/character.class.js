class Character extends MoveableObject {
    height = 270;
    y = 60;
    speed = 10;
    imagesWalking = ['img/img/2_character_pepe/2_walk/W-21.png',
        'img/img/2_character_pepe/2_walk/W-22.png',
        'img/img/2_character_pepe/2_walk/W-23.png',
        'img/img/2_character_pepe/2_walk/W-24.png',
        'img/img/2_character_pepe/2_walk/W-25.png',
        'img/img/2_character_pepe/2_walk/W-26.png',
    ]
    world;
    walking_sound = new Audio('audio/running.mp3');

    constructor() {
        super().loadImage('img/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEnd_x) {

                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();

            }
            if (this.world.keyboard.left && this.x > parseFloat(-1250)) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }

            this.world.camera_x = -this.x + 150;
        }, 1000 / 30);
        setInterval(() => {

            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.imagesWalking)
            }
        }, 75)

    }

    jump() {

    }
}