class DrawableObject {
    x = 129;
    y = 280;


    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    img;
    bottles = 5;
    coins = 0;
    world;
    otherDirection = false;



    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}