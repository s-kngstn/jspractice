// $("h1").css("color", "red");

// document.querySelector("h1") === $("h1");

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

// $("h1").text("Bye");
// $("button").text("Dont click me");
// $("a").attr("href", "https://www.bing.com");
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })

// ------------ EVENTS ------------------
// // Without jQuery
// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// With jQuery
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

// let keyStrokes = [];
// $("input").keypress(function(event) {
//     $("h1").text(event.key);
//     keyStrokes.push(event.key);
// })
// console.log(keyStrokes)

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// // --------------- ADDING / REMOVING ELEMENTS ---------------
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");

// ---------------------- ANIMATIONS ------------------------

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
    // $("h1").animate({opacity: 0.5}); <-- only animates numeric values
    //$("h1").fadeToggle();
    //fadeOut(), fadeIn(), slideUp, slideToggle, slideDown
})

