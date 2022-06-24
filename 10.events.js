//EVENIMENTE

//evenimente = triggere dupa care ascult ca sa fac anumite actiuni

//am selectat butonul din HTML
var submitButton = document.getElementById("btn-submit");

//adaug un ascultator dupa un eveniment
//1.primul parametru dat: numele evenimentului dupa care ascult -> click
//2. al doilea param -> ce se intampla cand s-a triguit eventul, cand s-a dat click --> functie cu parametru e =mouse event
submitButton.addEventListener("click", onBtnClick);

function onBtnClick(e){
  alert("Button was clicked");
}











