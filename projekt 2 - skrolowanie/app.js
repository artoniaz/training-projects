document.addEventListener("DOMContentLoaded", function () {

    let newDiv = document.createElement("div");
    let size = 100;
    const body = document.querySelector("body");

    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    body.appendChild(newDiv);

    let grow = true;

    window.addEventListener("scroll", function () {
        if (grow == true){
            size += 5;
            newDiv.style.width = size + "px";
            newDiv.style.height = size + "px";
        }
        else {
            size -= 5;
            newDiv.style.width = size + "px";
            newDiv.style.height = size + "px";
        }

        if (size >= window.innerWidth * 0.5){
            grow = false;
        } else if (size === 0){
            grow = true;
        }





    });

});