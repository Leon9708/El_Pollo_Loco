let canvas;
let world;
let keyboard = new Keyboard();


function render() {
    document.getElementById('background').classList.add('d-none');
    load();

}

function load() {
    let elem = document.getElementById("progress");
    let progress = document.getElementById("progressNum")
    let width = 1;
    let id = setInterval(frame, 25);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            setTimeout(() => {
                document.getElementById('background').classList.remove('d-none');
                document.getElementById('boxBar').classList.add('d-none');
            }, 400)
        } else {
            width++;
            elem.style.width = width + "%";
            progress.innerHTML = width + "%"
        }
    }
}

function gameInit() {
    canvas = document.getElementById('canvas');
    document.getElementById('background').classList.add('d-none');
    world = new World(canvas, keyboard);
    console.log('my character is', world.character);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.d = true;
    }
    if (e.keyCode == 39) {
        keyboard.right = true;
        keyboard.rightHold = true;

    }
    if (e.keyCode == 37) {
        keyboard.left = true;
        keyboard.rightHold = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = true;
    }
    if (e.keyCode == 40) {
        keyboard.down = true;
    }
    if (e.keyCode == 32) {
        keyboard.space = true;
    }

});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.right = false;
    }
    if (e.keyCode == 37) {
        keyboard.left = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = false;
    }
    if (e.keyCode == 40) {
        keyboard.down = false;
    }
    if (e.keyCode == 32) {
        keyboard.space = false;
    }
    if (e.keyCode == 68) {
        keyboard.d = false;
    }
});