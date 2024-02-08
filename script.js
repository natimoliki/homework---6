"use strict";



const inputelement = document.getElementById("input");
const addbuttons = document.querySelector(".addbtn");
const ulitems = document.querySelector(".ul-items");
const deleteall = document.getElementById('deletebtn');
const formel = document.getElementById ('formelement')

addbuttons.addEventListener("click", function (event) {
  event.preventDefault();
  const valueInput = inputelement.value;

 
    if (inputelement.value == "" || inputelement.value == null ) {
      return;
    }
  
  const li = document.createElement("li");

 
  const deletebtn = document.createElement ('i');
  deletebtn.classList.add('fa-solid', 'fa-trash');

  deletebtn.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = valueInput;
  li.appendChild(deletebtn);
  ulitems.appendChild(li);
  inputelement.value = "";
});
deleteall.addEventListener ('click',function (){
  ulitems.innerHTML = '';
})

 inputelement.addEventListener("focus", function (event) {
    event.target.outline = "none";
  });
inputelement.addEventListener("keydown", function (event) {
  event.target.style.border = "5px solid blue";
  event.target.style.backgroundColor = "yellow";
});





var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});




