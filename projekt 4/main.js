document.addEventListener("DOMContentLoaded", function(){
    let par = $("p");

let body = document.querySelector("body");
body.addEventListener("mousemove", (e) =>{
    par.text(`${e.clientX}, ${e.clientY}`);
    body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 100)`

});

});