//window.addEventListener("click", () => {
window.addEventListener("load", () => {

    //Tempo, em segundos, que queremos.
let tempo = 5;

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(tempo/60);
    let seg = tempo % 60;

    if (seg < 10) {
        seg = "0" + seg;
    }

    if (min < 10) {
        min = "0" + min;
    }

    //Vai gerar o formato do relógio XX:XX

    countDiv.innerHTML = min + ":" + seg;

    //Condição final

    if (tempo > 0) {
        tempo = tempo - 1;
    }
    else {
        countDiv.innerHTML = "Acabou!";
    }
};

const countDown = setInterval(() => secpass(), 1000);

});