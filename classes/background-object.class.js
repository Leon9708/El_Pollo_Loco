class BackgroundObjects extends MoveableObject {
    width = 720;
    height = 480;


    constructor(imagepath, x) {
        super().loadImage(imagepath);
        this.x = x;
        this.y = 480 - this.height;
    }
}