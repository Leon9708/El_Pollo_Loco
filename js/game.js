let canvas;
let world;
let keyboard = new Keyboard();
let background = document.getElementById('background');
let music_sound = new Audio('audio/music.mp3');
let intervalIds = [];

function render() {
    document.getElementById('background').classList.add('d-none');
    load();
}

function load() {
    let width = 1;
    let id = setInterval(frame, 25);

    function frame() {
        setTimeout(() => {
            if (width >= 100) {
                clearInterval(id);
                setTimeout(() => {
                    document.getElementById('background').classList.remove('d-none');
                    document.getElementById('boxBar').classList.add('d-none');
                }, 400)
            } else {
                width++;
                document.getElementById("progress").style.width = width + "%";
                document.getElementById("progressNum").innerHTML = width + "%"
            }
        }, 500);
    }
}

function gameInit() {
    init();
    music();
    canvas = document.getElementById('canvas');
    document.getElementById('gameover_lose').classList.add('d-none');
    document.getElementById('gameover_win').classList.add('d-none');
    document.getElementById('background').classList.add('d-none');
    world = new World(canvas, keyboard);
    console.log('my character is', world.character);
}

function music() {
    music_sound.volume = 0.3;
    music_sound.loop = true;
    music_sound.play();
}

function enterFullscreen() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    }
}

function openOptionsStart() {
    let optionsStart = document.getElementById('optionsStart');

    if (optionsStart.classList.contains('d-none')) {
        optionsStart.classList.remove('d-none');
    } else {
        optionsStart.classList.add('d-none');
    }
}

function openOptions() {
    let options = document.getElementById('options');

    if (options.classList.contains('d-none')) {
        options.classList.remove('d-none');
    } else {
        options.classList.add('d-none');
    }
}

function setStopableInterval(fn, time) {
    let idIntervall = setInterval(fn, time);
    intervalIds.push(idIntervall);
}

function stopInterval() {
    intervalIds.forEach(clearInterval);
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