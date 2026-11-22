let elevi = JSON.parse(localStorage.getItem("elevi")) || [];

function salveaza(){
  localStorage.setItem("elevi", JSON.stringify(elevi));
}

let formular = document.getElementById("formElev");
let eroare = document.getElementById("eroare");
let lista = document.getElementById("lista");
let contor = document.getElementById("contor");

function afiseaza(){
  contor.textContent = elevi.length;
  if(elevi.length == 0){
    lista.innerHTML = `<div class="col-12"><div class="alert alert-info text-center mb-0">Nu există elevi înregistrați</div></div>`;
    return;
  }
  let html = "";
  elevi.forEach(function (e){
    html +=`<div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${e.nume}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Grupa: ${e.grupa}</h6>
            <p class="card-text mb-1">Vârstă: ${e.varsta} ani</p>
            <p class="card-text">E-mail: ${e.email}</p>
          </div>
          <div class="card-footer">
          <button class="btn btn-outline-danger btn-sm" data-id="${e.id}">Șterge</button>
          </div>
        </div>
      </div>`;
  });
  lista.innerHTML = html;
  let butoane = document.querySelectorAll("button[data-id]");
  butoane.forEach(function (btn){
    btn.addEventListener("click", function(){
      stergeElev(Number(btn.dataset.id));
    });
  });
}
afiseaza();

formular.addEventListener("submit", function (event){
  event.preventDefault();
  let nume = document.getElementById("nume").value.trim();
  let varsta = document.getElementById("varsta").value;
  let grupa = document.getElementById("grupa").value.trim();
  let email = document.getElementById("email").value.trim();

  if(nume === "" || grupa === "" || varsta === "" || email === ""){
    eroare.textContent = "Completati toate campurile";
    eroare.classList.remove("d-none");
    return;
  }

    if(!(Number(varsta)>0)){
    eroare.textContent = "Corectati varsta";
    eroare.classList.remove("d-none");
    return;
  }

  let formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!formatEmail.test(email)){
    eroare.textContent = "E-mailul nu are format valid";
    eroare.classList.remove("d-none");
    return;
  }
  eroare.classList.add("d-none");

  let elev = {
    id: Date.now(),
    nume: nume,
    varsta: Number(varsta ),
    grupa: grupa,
    email: email
  };
  elevi.push(elev);
  salveaza();
  formular.reset();
  afiseaza();
});

function stergeElev(id){
  elevi = elevi.filter(function (e){
    return e.id !== id;
  });
  salveaza();
  afiseaza();
}

let all = document.getElementById("all");
all.addEventListener("click", function(){
  if(elevi.length === 0){
    return;
  }
  if(confirm("Sunteti siguri ca vreti sa stergeti toti elevii?")){
    elevi = [];
    salveaza();
    afiseaza();
  }
});