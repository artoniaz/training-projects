// document.addEventListener("DOMContentLoaded", function(){
//
// let body = $("body");
// let ul = $("<ul>");
// let btn = $("<button>");
// btn.text("Kliknij!!!");
// let fontSize = 1;
// let number = 0;
//
// body.append(ul);
// body.prepend(btn);
//
// btn.on("click", ()=>{
//     number ++;
//    fontSize ++;
//
//    ul.append(`<li style="font-size: ${fontSize + "px"}">Element ${number}</li>`);
// });
// });

document.addEventListener("DOMContentLoaded", function(){

let body = document.querySelector("body");
let btn = document.createElement("button");
body.appendChild(btn);
btn.innerText = "Kliknij  mnie błagam!!";
let ul = document.createElement("ul");
body.appendChild(ul);

let fontSize = 10;
let number = 0;

btn.addEventListener("click", () =>{
    fontSize ++;
    number ++;
    let li = document.createElement("li");
    li.style.fontSize = fontSize + "px";
    li.innerText = "Element " + number;
    ul.appendChild(li);

});


});