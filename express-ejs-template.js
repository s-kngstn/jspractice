const express = require("express");
const app = express();

//You need the urlencoded to write HTML items into this javascript
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get("/", function(req, res){
  res.render("home");
});


app.listen(3000, function(){
  console.log("Server started on Port 3000");
});
