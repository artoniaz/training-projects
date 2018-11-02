document.addEventListener("DOMContentLoaded", function(){

let list = $("ul");
let btn = $("button");

let counter = -1;

btn.on("click", function () {
    counter += 2;
    let newLi = `<li class="list">${counter}</li>`;
    let newLiBold = `<li class="list">${counter}</li>`;
    let newAgain = $("<li>").text(counter);
    newAgain.addClass("bold");
    list.append(newAgain);


    counter % 3 === 0 ? list.append(newLiBold) : list.append(newLi);

})





});