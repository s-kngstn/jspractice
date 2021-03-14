
// Anonymous function
const drums = document.querySelectorAll(".drum");

// Array.from(drums).forEach(d => {
//     d.addEventListener("click", () => {
//         alert("clicked");
//     });
// });

for (i = 0; i < drums.length; i++) {

    drums[i].addEventListener("click", function () {

        this.style.color = '#fff';

    });
}




// const tom1 = new Audio('sounds/tom-1.mp3');
// tom1.play();