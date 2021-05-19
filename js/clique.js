var sons = [];
var modoConessa = false;
function PlaySound(melody) {
    var path = "sons\\ratinho\\"
    var snd = new Audio(path + melody + ".mp3");
    pararSons();
    snd.play();
    sons.push(snd);
}

function aperta(Id, arquivo) {
    document.getElementById(Id).src = document.getElementById(Id).src.slice(0, -4) + "1.png";
}
function solta(Id, arquivo) {
    document.getElementById(Id).src =  document.getElementById(Id).src.slice(0, -5) + ".png"
}

function pararSons() {
    var i = 0;
    var tamanho = sons.length;
    if (modoConessa) {
        for (i = 0; i < tamanho; i++) {
            if (sons[i].ended) sons.pop(i);
        }
    } else {
        for (i = 0; i < tamanho; i++) {
            sons[i].pause();
        }
        sons = [];
    }
}


function ativarModoConessa() {
    modoConessa = !modoConessa;
}