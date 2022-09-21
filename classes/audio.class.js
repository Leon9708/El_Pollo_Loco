class Audios extends MoveableObject {
    lifePlus_sound = new Audio('audio/life.mp3')
    win_sound = new Audio('audio/win_sound.mp3');
    win_cheer = new Audio('audio/win_cheer.mp3');
    ouch_sound = new Audio('audio/ouch.mp3');
    lost_melody = new Audio('audio/lost_melody.mp3');
    lost_memo = new Audio('audio/lost_memo.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    throw_sound = new Audio('audio/throw.mp3');




    setAudio() {
        this.win_cheer.muted = false;
        this.win_sound.muted = false;
        this.lost_melody.muted = false;
        this.lost_memo.muted = false;

    }

    resetAudio() {
        this.win_cheer.muted = true;
        this.win_sound.muted = true;
        this.lost_melody.muted = true;
        this.lost_memo.muted = true;

        this.win_cheer.currentTime = 0;
        this.win_sound.currentTime = 0;
        this.lost_melody.currentTime = 0;
        this.lost_memo.currentTime = 0;

    }

    win() {
        this.win_sound.play();
        this.win_cheer.play();
    }
}