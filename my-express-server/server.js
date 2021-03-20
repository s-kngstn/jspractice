const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", function(req, res){
    res.send("Tony’s Pizza was established in 1985 by Tony Scotto di Carlo. Tony was born and raised right outside Naples Italy in a town called Monte Di Procida. Naples is known for amazing pizza and it comes as no surprise that at Tony’s that is what you will get. After a few years, Tony decided to go in as partners with two of his managers, Mike and Jim. Now that there are three, the ideas just keep on flowing of different dishes and specials to prepare. At Tony’s you will always find a new delicious dinner or pizza!")
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>code</li><li>cooking</li><li>travel</li></ul>")
})

app.get("/contact", function(req, res){
    res.send("Contact me at: yolo@gmail.com")
})

app.listen(3000, function() {
    console.log("Server started on port 3000....")
});
