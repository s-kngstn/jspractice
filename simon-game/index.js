let userClickedPattern = [];
let gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let gameStart = false;

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

$(".btn").click(function() {
    userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
    lastAnswerIndex = userClickedPattern.length - 1;
    checkAnswer(lastAnswerIndex);
})

function animatePress(currentColor) {
    
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
    
}

$(document).on("keypress", function(e){
    if(e && !gameStart){
        gameStart = true;
        $("h1").text(`Level ${level}`);
        nextSequence();
    } else {
        console.log("no")
    }

});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function(){
                nextSequence();
            }, 1000)
        }

    } else {

        playSound("wrong")
        $('body, html').addClass("game-over");
        setTimeout(function() {
            $('body, html').removeClass("game-over");
        }, 200);
        $("h1").text("Game Over");
        $("h1").after("<h4>Press F5 to Play Again</h4>");
        startOver();
    }
}


function nextSequence() {

    userClickedPattern = [];

    $("h1").text(`Level ${level++}`)

    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    console.log(randomChosenColor);
    console.log(gamePattern)

    $(`.${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStart = False;
}