document.title = "Latihan DOM Manipulation";
const body = document.body;

body.append("Halo, ini adalah file eksternal javascript");


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementsByClassName("btn1")[0];

btn1.style.backgroundColor = "red";
btn2.style.backgroundColor = "blue";

btn2.addEventListener("click", function() {
    alert("Klik saya");
});

function clickSaya() {
    btn1.style.backgroundColor = "blue";
}

function ubahText(text) {
    btn1.innerText = text;
}
