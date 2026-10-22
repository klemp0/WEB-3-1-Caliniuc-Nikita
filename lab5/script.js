let studenti = [
  {
    id: 1,
    nume: "Boico Mihai",
    grupa: "DAW-241",
    varsta: 18,
    specialitate: "Informatică",
    avatar: "👩‍💻"
  },
  {
    id: 2,
    nume: "Napoleon Bonaparte",
    grupa: "ME-232",
    varsta: 21,
    specialitate: "Economie",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    nume: "Mihai eminescu",
    grupa: "EC-232",
    varsta: 20,
    specialitate: "Economie",
    avatar: "👩‍🎓"
  },
  {
    id: 4,
    nume: "Nikita Caliniuc",
    grupa: "DAW-241",
    varsta: 18,
    specialitate: "Informatica",
    avatar: "👨‍💻"
  }
];

let lista = document.getElementById("lista");
let contor = document.getElementById("contor");

function afiseazaStudenti(){
    lista.innerHTML = "";
    contor.textContent = studenti.length;

    if(studenti.length === 0){
      lista.innerHTML = "<p>Nu exista studenti in catalog</p>"
      return;
    }

    for(let i=0; i<studenti.length; i++){
        const s = studenti[i];

        lista.innerHTML += `
        <div class="card">
        <div class="card-sus">
        <div class="avatar">${s.avatar}</div>
        <div>
        <h3>${s.nume}</h3>
        <p>Grupa: ${s.grupa}</p>
        </div>
        </div>
        <p>Vârsta: ${s.varsta} ani</p>
        <p>Specialitatea: ${s.specialitate}</p>
        <p>Statut: Înmatriculat</p>
        <button onclick = "stergeStudent(${s.id})">Sterge</button>
        </div>
        `;
    }
}

function stergeStudent(id){
  studenti = studenti.filter(function (m){
    return m.id !== id;
  });
  afiseazaStudenti();
}

afiseazaStudenti();

let formular = document.getElementById("formStudent");
let eroare = document.getElementById("eroare");
let urmatorulId = 5;

formular.addEventListener("submit", function (event){
    event.preventDefault();
  let nume = document.getElementById("nume").value.trim();
  let grupa = document.getElementById("grupa").value.trim();
  let varstaText = document.getElementById("varsta").value.trim();
  let specialitate = document.getElementById("specialitate").value.trim();
  let avatar = document.getElementById("avatar").value;

  if(nume === "" || grupa==="" || varstaText === "" || specialitate === "" || avatar ===""){
    eroare.textContent = "Completeaza toate campurile";
    return;
  }
  eroare.textContent = "";

  let varsta = Number(varstaText);
  if (!Number.isInteger(varsta) || varsta < 14 || varsta > 100) {
    eroare.textContent = "Varsta invalida";
    return;
  }

  let studentNou = {
    id: urmatorulId,
    nume: nume,
    grupa: grupa,
    varsta: varsta,
    specialitate: specialitate,
    avatar: avatar
  };

  studenti.push(studentNou);
  urmatorulId++;
  formular.reset();
  afiseazaStudenti();
});

function schimbaJustify (valoare){
  lista.style.justifyContent = valoare;
}

function schimbaAlign(valoare){
  lista.style.alignItems = valoare;
}

function schimbaWrap(valoare) {
  lista.style.flexWrap = valoare;
}

let campGap = document.getElementById("gap");
let valoareGap = document.getElementById("valoareGap");

campGap.addEventListener("input", function(){
  lista.style.gap = campGap.value + "px";
  valoareGap.textContent = campGap.value + "px";
});

afiseazaStudenti();