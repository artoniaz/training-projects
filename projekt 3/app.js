//rozwiązanie jQuery


// document.addEventListener("DOMContentLoaded", function(){
//
// let btn = $("button");
// let lis = $("li");
// let ul =$("ul");
// let fontSize = 14;
// ul.hide();
//
// btn.on("click",  function () {
//     fontSize ++;
//     lis.css("fontSize", fontSize + "px");
//     ul.show();
// })
//
// });

//rozwiązanie JS
document.addEventListener("DOMContentLoaded", function(){

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = ul.querySelectorAll("li");

let fontSize = 14;
ul.style.display = "none";

btn.addEventListener("click", () => {
    fontSize ++;
    for (let i = 0; i < lis.length; i++){
        lis[i].style.fontSize = fontSize + "px";
    }
    ul.style.display = "block";
})


});