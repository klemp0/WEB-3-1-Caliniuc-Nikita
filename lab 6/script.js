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
}
afiseaza();

formular.addEventListener("submit", function (event){
  event.preventDefault();
  let nume = document.getElementById("nume").value.trim();
  let varsta = document.getElementById("varsta").value;
  let grupa = document.getElementById("grupa").value.trim();
  let email = document.getElementById("email").value.trim();

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

lista.addEventListener("click", function(event){
  
})