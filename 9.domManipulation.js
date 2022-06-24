//MANIPULARE DOM
//DOM = Document Object Module = Suma tuturor elementelor care alcatuiesc pagina HTML
//selectez <h1> din html si o atribui variabilei h1
//querySelector -> returneaza DOAR PRIMUL TAG (nod gasit) <h1> !!
var h1 = document.querySelector("h1");

//printez in consola variabila h1 care tine selectia <h1>
console.log(h1);

//selectare dupa id
var h2 = document.querySelector("#greeting");
console.log(h2);

//selectare dupa clasa -> selecteaza doar primul element din clasa hell-world
var h3 = document.querySelector(".hell-world");
console.log(h3);

//selectie TOATE elementele din clasa hell-world
// a gasit 2 noduri

var h4 = document.querySelectorAll(".hell-world");
console.log(h4); //va afisa un node list

//selectii dupa id
var queryId = document.getElementById("greeting");
//queryId - e un element HTM si va fi afisat in consola cu tahurile html
console.log(queryId);

//ca sa afiseze doar textul dintre taguri --> .innerText
console.log(queryId.innerText);

//innerHTML --> afiseaza copii din din parinte: <p> care e in <h1>
//h1 - e un nod; p- e un nod  copil pt h1
console.log(queryId.innerHTML);

//slectii dupa clasa --> toate elementele cu clasa hell-world
var queryClass = document.getElementsByClassName("hell-world");
console.log(queryClass);


//* ADAUGARE HTML DIN JS
//adaug textul: Buna ziua! la elementul selectat dupa id: queryId
queryId.append("Buna ziua!");

//afisez la consola continutul mesajului adaugat
console.log(queryId.innerText);

//adaug alt <p> tag la nodul parinte h1 cu id-ul: greeting salvat in queryId
queryId.innerHTML += "<p id = 'text'>Text adaugat cu innerHTML</p>"

//afisez tagurile, nodurile copii care sunt in queryId - selectia h1 dupa id
console.log(queryId.innerHTML);


//* STERGERE DIN DOM
//selectie paracgraf cu id text
var hello = document.getElementById("text");

//pt ca hello e un nod copil .removeChild
//textul adaugat cu innerHTML in queryId va disparea
//*? queryId.removeChild(hello);

//* SCHIMBARE STIL DIN JS
hello.style.color = "red";










