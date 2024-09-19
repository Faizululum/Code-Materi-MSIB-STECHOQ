// switch case

let buah = ["apel", "jeruk", "mangga"];
let rasa;

switch (buah) {
    case "apel":
        rasa = "manis";
        break;
    case "jeruk":
        rasa = "asam";
        break;
    case "mangga":
        rasa = "Manis dan Lezat";
        break;
    default:
        rasa = "tidak ada";
}

// for loop

for (let i = 0; i < buah.length; i++) {
    console.log("Buah " + buah[i] + " mempunyai rasa " + rasa);
}

// while loop

// let i = 0;
// while (i < buah.length) {
//     console.log("Buah " + buah[i] + " mempunyai rasa " + rasa);
//     i++;
// }

// for in

let person = {
    name:  "John",
    age:  25,
    profession: "programmer"
};

for (let key in person) {
    console.log(key + " : " + person[key]);
}

// for of

// for (let buah of buah) {
//     console.log("Buah " + buah + " mempunyai rasa " + rasa);
// }

// do while

// let i = 0;
// do {
//     console.log("Buah " + buah[i] + " mempunyai rasa " + rasa);
//     i++;
// } while (i < buah.length);

// function

function greetings() {
    console.log("Halo");
}

greetings();

let add = function (a, b) {
    return a + b;
};

let result = add(2, 3);
console.log(result);

// function rekursif

function countdown(n) {
    if(n<=0) {
        console.log("selesai");
    } else {
        console.log(n);
        countdown(n-1);
    }
}

countdown(5);

// this and clousure
// this 

let mahasiswa = {
    nama: "Faizul",
    umur: 25,
    getInfo: function() {
        console.log("Nama : " + this.nama);
        console.log("Umur : " + this.umur);
    }
}

mahasiswa.getInfo();

// Closure

function outerFunction() {
    let outerVariable = "outer";
    function innerFunction() {
        let innerVariable = "inner";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return innerFunction;
}

let closureFunction = outerFunction();
closureFunction();