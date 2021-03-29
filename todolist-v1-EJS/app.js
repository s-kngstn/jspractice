const express = require("express");
const date = require(`${__dirname}/date.js`);
const app = express();

// Global Variables
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = ["Finish code project"];

//You need the urlencoded to write HTML items into this javascript
app.use(express.urlencoded({extended: true}));
// Lets express know our CSS static files are stores in the 'Public' file
app.use(express.static("public"));
// vv Tells our app using express to use ejs as its view engine
app.set("view engine", "ejs");

app.get("/", function(req, res){

  const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
  
  const item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on Port 3000");
});