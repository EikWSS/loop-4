//for (let i = 0; i < 10; i=1+2) {

//  console.log(i);

//}

//let a = 0;
//while (a < 10 ) {
//console.log(a);

//  a++
//}

// "oppgave 1"
let a = 0;
while (a < 10) {
  // document.write(a, "<br>")
  document.write(`<p style="color: red">${a}</p>`);
  a++;
}

let b = 2;
while (b < 20) {
  document.write(`<p style="background-color: blue; color: white;">${b}</p>`);

  b+= 2

}

//opgave 3

var s = 0
var sum = 0

while (s < 11) {
  sum += s;
  s++
}
document.write(`<p>Summen er mellom 1-10 er ${sum}</p>`)


// oppgave 4


// var tekst="";

// while (tekst) {
//   teskt += "#"
// }
var tekst="";
var v = 0;
while (v <= 4) {
  tekst += "#"
  document.write(tekst+"<br>")
  v++;
}

//oppgave 5

var i = 20;

while (i >= 0) {

  i--
  document.write(i+"<br>")
  
}


//oppgave 6

let riktig = 48

while (true) {
  tall1 = Number(prompt("Skriv inn et tall mellom 1 og 100"))
  if (tall1 > riktig) {
    alert("Skriv inn et lavere tall")
  } else if (tall1 < riktig){
    alert("Skriv inn et høyere tall")
  } else {
    alert("Hurraaaa, gralla med dralla, du fikk riktig.")
    break
  }

}




