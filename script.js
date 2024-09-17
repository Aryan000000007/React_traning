window.onload = function() {
    var canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")

    // context.beginPath();

    // context.moveTo(100, 100)
    // context.lineTo(300, 100)
    // context.lineTo(300, 200)
    // context.lineTo(100, 200)s

    // context.closePath()

    //context.stroke()

    //2nd method:-
    // context.rect(400, 300, 100, 100)

    // context.fill();

    //3rd method:-
    context.fillRect(400, 300, 100, 100)
}