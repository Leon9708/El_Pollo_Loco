class DrawableObject {
    x = 129;
    y = 280;

    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    img;

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + 10, this.y, this.width - 20, this.height - 10);
            ctx.stroke()
        }
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