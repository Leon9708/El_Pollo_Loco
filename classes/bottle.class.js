class bottle extends MoveableObject {

    constructor() {
        super().loadImage('img/img/6_salsa_bottle/salsa_bottle.png');
        this.height = 100;
        this.width = 60;
        this.x = 300 + Math.random() * 1500;
        this.y = 50 + Math.random() * 320;
    }




}