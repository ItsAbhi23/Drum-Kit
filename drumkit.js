var numberofbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var value = this.innerHTML;
        playSound(value);
    addAnimation(value);
    });
}
document.addEventListener("keypress", function (event) {
    playSound(event.key);
    addAnimation(event.key);
});
function playSound(value) {
    switch (value) {
        case "w":
            var bass = new Audio("audio/sounds_kick-bass.mp3");
            bass.play();
            break;

        case "a":
            var bass = new Audio("audio/sounds_snare.mp3");
            bass.play();
            break;

        case "s":
            var bass = new Audio("audio/sounds_tom-1.mp3");
            bass.play();
            break;

        case "d":
            var bass = new Audio("audio/sounds_tom-2.mp3");
            bass.play();
            break;

        case "j":
            var bass = new Audio("audio/sounds_tom-3.mp3");
            bass.play();
            break;

        case "k":
            var crash = new Audio("audio/sounds_crash.mp3");
            crash.play();
            break;

        case "l":
            var bass = new Audio("audio/sounds_tom-4.mp3");
            bass.play();
            break;

    }
}
function addAnimation(currentKey) {
    var activate = document.querySelector("." + currentKey);
    activate.classList.add("pressed");
    setTimeout(function () {
        activate.classList.remove("pressed");
    }, 100)
}