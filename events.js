//Events in js
//mouse click -> event
//each event has an event handler => excutes function on click
//to respond an event --> define a function that is event response

//1.select button
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

//2. define a function taht shows how many cliks are made on btn
let ctn = 0; //# of clicks
function clickedBtn(e){
  ctn++; //increment contor
  e.target.textContent = `click me ${ctn}`;
  //e.taret --> is the button
  //.textContent --> button property
}

//method1: register function clickedBtn as avent handler
btn.onclick = clickedBtn;

//method2: register function clickedBtn as avent handler by adding event listener
btn2.addEventListener('click', clickedBtn2);
let cnt2 = 0;
function clickedBtn2(e){
  cnt2++;
  e.target.textContent = `just click ${cnt2}`;
}
