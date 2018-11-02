$(function () {

    let btn = $("#newDivBtn");
    let counter = 0;


    btn.on("click", function () {
        counter ++;
        let mainDiv = $(".elements");
        let newDiv = `<div class="newDiv">${counter}</div>`;

        let circleDiv = `<div class=" newDiv circle">${counter}</div>`;
        counter % 5 === 0 ? mainDiv.append(circleDiv) : mainDiv.append(newDiv)
        });
});