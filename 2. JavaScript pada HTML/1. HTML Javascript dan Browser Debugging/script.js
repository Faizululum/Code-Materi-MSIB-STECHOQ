// document.write("Hallo, ini adalah file eksternal javascript");
document.getElementById("additionResult").innerText = 5 + 3;
document.getElementById("substractionResult").innerText = 5 - 2;
document.getElementById("multiplicationResult").innerText = 30 * 3;
document.getElementById("divisionResult").innerText = 100 / 5;

let additionResult = document.getElementById("additionResult").innerText;
console.log(additionResult);
if (additionResult != 8) {
  console.error("Addition test has failed");
}
