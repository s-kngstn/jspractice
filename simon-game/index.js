const userClickedPattern = [];
const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    console.log(randomChosenColor);

    $(`.${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

$(".btn").click(function() {
    userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
})

