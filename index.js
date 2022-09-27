music = [];

class Music {
    title;
    length;

    constructor(title, length) {
        this.title = title;
        this.length = length;
    }
}

function getLength(){
    let sumOfLength = 0;
    for (let i = 0; i < music.length; i++) {
        sumOfLength += parseInt(music[i].length);
    }
    document.getElementById("output").value = sumOfLength;
}

function add() {
    let m = new Music(document.getElementById("title").value, document.getElementById("length").value);
    music.push(m);
    console.log(music);
    getLength();
}

document.getElementById("submit").addEventListener("click", add);