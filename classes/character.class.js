class Character extends MoveableObject {
    height = 270;
    y = 60;
    speed = 11;
    collidingOffset = {
        'top': 120,
        'right': 30,
        'bottom': 40,
        'left': 30,
    }
    lastHit = 0;
    energy = 100;
    imagesWalking = ['img/img/2_character_pepe/2_walk/W-21.png',
        'img/img/2_character_pepe/2_walk/W-22.png',
        'img/img/2_character_pepe/2_walk/W-23.png',
        'img/img/2_character_pepe/2_walk/W-24.png',
        'img/img/2_character_pepe/2_walk/W-25.png',
        'img/img/2_character_pepe/2_walk/W-26.png',
    ]
    imagesJumping = [
        'img/img/2_character_pepe/3_jump/J-31.png',
        'img/img/2_character_pepe/3_jump/J-32.png',
        'img/img/2_character_pepe/3_jump/J-33.png',
        'img/img/2_character_pepe/3_jump/J-34.png',
        'img/img/2_character_pepe/3_jump/J-35.png',
        'img/img/2_character_pepe/3_jump/J-36.png',
        'img/img/2_character_pepe/3_jump/J-37.png',
        'img/img/2_character_pepe/3_jump/J-38.png',
        'img/img/2_character_pepe/3_jump/J-39.png'
    ]
    imagesDead = [
        'img/img/2_character_pepe/5_dead/D-51.png',
        'img/img/2_character_pepe/5_dead/D-52.png',
        'img/img/2_character_pepe/5_dead/D-53.png',
        'img/img/2_character_pepe/5_dead/D-54.png',
        'img/img/2_character_pepe/5_dead/D-55.png',
        'img/img/2_character_pepe/5_dead/D-56.png',
        'img/img/2_character_pepe/5_dead/D-57.png',
    ]
    imagesHurt = [
        'img/img/2_character_pepe/4_hurt/H-41.png',
        'img/img/2_character_pepe/4_hurt/H-42.png',
        'img/img/2_character_pepe/4_hurt/H-43.png',
    ]
    imageIdle = [
        'img/img/2_character_pepe/1_idle/idle/I-1.png',
        'img/img/2_character_pepe/1_idle/idle/I-2.png',
        'img/img/2_character_pepe/1_idle/idle/I-3.png',
        'img/img/2_character_pepe/1_idle/idle/I-4.png',
        'img/img/2_character_pepe/1_idle/idle/I-5.png',
        'img/img/2_character_pepe/1_idle/idle/I-6.png',
        'img/img/2_character_pepe/1_idle/idle/I-7.png',
        'img/img/2_character_pepe/1_idle/idle/I-8.png',
        'img/img/2_character_pepe/1_idle/idle/I-9.png',
        'img/img/2_character_pepe/1_idle/idle/I-10.png'

    ]

    walking_sound = new Audio('audio/running.mp3');
    jump_sound = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imageIdle);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setStopableInterval(() => {
            this.animateRight();
            this.animateLeft();
            this.animateJump();
            this.world.camera_x = -this.x + 175;

        }, 1000 / 30);

        this.renderImages();
    }

    animateRight() {
        if (this.world.keyboard.right && this.x < this.world.level.levelEnd_x) {
            this.moveRight();
            this.otherDirection = false;
            this.walking_sound.volume = 0.9;
            this.walking_sound.play();
        } else {
            this.walking_sound.pause();
        }
    }

    animateLeft() {
        if (this.world.keyboard.left && this.x > parseFloat(-1150)) {
            this.moveLeft();
            this.otherDirection = true;
            this.walking_sound.volume = 0.9;
            this.walking_sound.play();
        }
    }

    animateJump() {
        if (this.world.keyboard.space && !this.isAboveGround()) {
            this.jump();
            this.jump_sound.play();
            this.jump_sound.volume = 0.25;
        }
    }
    renderImages() {
        setStopableInterval(() => {
            if (this.isDead(this.energy)) {
                world.endGameLose();
                this.walking_sound.pause();
            } else if (this.isHurt(this.lastHit)) {
                this.playAnimation(this.imagesHurt);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.imagesWalking);
            } else {
                this.playAnimation(this.imageIdle);
            }
        }, 75)
    }

    collidBoss() {
        this.energy = 0;
        this.setHit(this.energy);
    }
    collidChicken() {
        this.energy -= 4;
        world.audio.ouch_sound.play();
        this.setHit(this.energy);
    }

}