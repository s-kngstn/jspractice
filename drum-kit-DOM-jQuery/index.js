// NOTICE: keypress is now deprecated, you should be using keydown instead.
// Anonymous function
const drums = document.querySelectorAll(".drum");

// Array.from(drums).forEach(d => {
//     d.addEventListener("click", () => {
//         alert("clicked");
//     });
// });

// Detecting Button Press

for (i = 0; i < drums.length; i++) {

    drums[i].addEventListener("click", function () {

        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
        
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
            case "w":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
                break;
            case "a":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
                break;
            case "s":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
                break;
            case "d":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
                break;
            case "j":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
                break;
            case "k":
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
                break;
            case "l":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
                break;
            default:
                break;
        }
}

function buttonAnimation(currentKey) {

    const activeBtn = document.querySelector(`.${currentKey}`);

    activeBtn.classList.add('pressed');

    setTimeout(function() { 
        activeBtn.classList.remove('pressed'); 
    }, 150);
}
