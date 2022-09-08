class cloud extends MoveableObject {
    y = 25;
    height = 300;
    width = 500;

    constructor() {
        super().loadImage('img/img/5_background/layers/4_clouds/1.png');

        this.x = 0 + Math.random() * 500;
        this.animate();
    }
    animate() {
        this.moveLeft();

    }


}