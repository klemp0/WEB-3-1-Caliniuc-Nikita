let studenti = [
  {
    id: 1,
    nume: "Ana Munteanu",
    grupa: "TI-231",
    varsta: 19,
    specialitate: "Informatică",
    avatar: "👩‍💻"
  },
  {
    id: 2,
    nume: "Mihai Rusu",
    grupa: "ME-232",
    varsta: 21,
    specialitate: "Mecanică",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    nume: "Elena Costin",
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

function afiseazaStudenti(){
    lista.innerHTML = "";

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
        </div>
        `;
    }
}

afiseazaStudenti();

let formular = document.getElementById("formStudent");
let eroare = document.getElementById("eroare");

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

});
