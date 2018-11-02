document.addEventListener("DOMContentLoaded", function(){


    let div = document.createElement("div");
    div.style.backgroundColor = "green";
    div.style.width = "100%";
    let height = 0;
    document.querySelector("body").style.height = "1000vh";
    let body = document.querySelector("body");
    body.appendChild(div);

    let grow = true;

    window.addEventListener("scroll", function () {
        if (grow == true){
            height += 5;
            div.style.height = height + "px";

        } else {
            height -= 5;
            div.style.height = height + "px";
        }
        if (height >= 100){
            grow = false;
            div.style.backgroundColor = "red";
        } else if (height <= 0){
            grow = true;
            div.style.backgroundColor = "green";

        }
    });





});