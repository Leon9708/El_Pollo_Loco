class bottle extends MoveableObject {

    imagesBottle = ['img/img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 'img/img/6_salsa_bottle/2_salsa_bottle_on_ground.png']

    constructor() {
        super();
        this.randomBottle();
        this.height = 110;
        this.width = 60;
        this.x = 800 + Math.random() * 3400;
        this.y = 340;
    }

    randomBottle() {
        let random_index = Math.floor(Math.random() * this.imagesBottle.length);
        let selectImage = this.imagesBottle[random_index];
        this.loadImage(selectImage);
    }

}