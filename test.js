function setup() {
    createCanvas(displayWidth, displayHeight);
    strokeWeight(10);
    stroke("black");
    fill(255)
}
color = "black"
$(document).ready(function () {
    $(".red").click(function () {
        color = "red"
    })
    $(".green").click(function () {
        color = "green"
    })
    $(".yellow").click(function () {
        color = "yellow"
    })
    $(".blue").click(function () {
        color = "blue"
    })
});

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(color)
    return false;
}

$(document).ready(function () {
    $(".reload").click(function () {
        location.reload()
    })
});