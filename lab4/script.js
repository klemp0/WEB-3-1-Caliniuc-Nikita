let fructe = ["mar", "banana", "portocala", "pruna", "persic"];
console.log(fructe);
console.log(fructe[0]);
console.log(fructe[fructe.length - 1]);
console.log(fructe.length);

let orase = ["Chișinău", "Bălți", "Cahul"];
orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();
console.log(orase);

let produse = ["Pâine", "Lapte", "Ouă"];

function show(){
    let zona = document.getElementById("zonaProd");
    if(produse.length===0){
        zona.innerHTML = "Lista e goala";
    } else {
        zona.innerHTML = produse.join(", ");
    }
}
show();

function adaugaSfarsit(){
    let text = document.getElementById("prodInput").value;
    produse.push(text);
    show();
}

function adaugaInceput(){
    let text = document.getElementById("prodInput").value;
    produse.unshift(text);
    show();
}

function stergeSfarsit(){
    produse.pop();
    show();
}

function stergeInceput(){
    produse.shift();
    show();
}

let elevi = [
{ nume: "Popescu Ana", varsta: 17, nota: 9 },
{ nume: "Rusu Mihai", varsta: 18, nota: 8 },
{ nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi(){
    let text = "";
    elevi.forEach(function(elev, index){
        text +=(index+1)+ ". "  + elev.nume + " " + elev.varsta + " ani " + "nota: " + elev.nota +"<br>";
    });
    document.getElementById("numarElevilor").innerHTML = "Număr de elevi: " + elevi.length;
    document.getElementById("zonaCatalog").innerHTML = text;
}

afiseazaElevi();

function adaugaElev(){
    let nume = document.getElementById("nume").value;
    let varsta = Number(document.getElementById("varsta").value);
    let nota = Number(document.getElementById("nota").value);

    let elevNou ={
        nume: nume,
        varsta: varsta,
        nota: nota
    };
    elevi.push(elevNou);
    afiseazaElevi();
    document.getElementById("nume").value = "";
    document.getElementById("varsta").value = "";
    document.getElementById("nota").value = "";
}

function stergeElev(){
    let nume = document.getElementById("stergeInput").value;
      let elev = elevi.find(function (e) {
        return e.nume === nume;
      });
        if (elev) {
            let pozitie = elevi.indexOf(elev);
            elevi.splice(pozitie, 1);
    }
  afiseazaElevi();
}

function cautaElev() {
  let nume = document.getElementById("cautaInput").value;
  let zona = document.getElementById("zonaCautare");
 
  let elev = elevi.find(function (e) {
    return e.nume === nume;
  });
 
  if (elev) {
    zona.innerHTML = "Elev găsit<br>" +
      "Nume: " + elev.nume + "<br>" +
      "Vârsta: " + elev.varsta + "<br>" +
      "Nota: " + elev.nota;
  } else {
    zona.innerHTML = "Elevul nu a fost găsit";
  }
}
afiseazaElevi();
