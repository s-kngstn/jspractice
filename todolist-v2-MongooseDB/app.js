const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// // While using Mongoose, I wont be using the item & workItem Arrays
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

// -------------- MONGOOSE INSTRUCTIONS --------------
// 1. Connect to and create a new mongo database.
const dbName = "todolistDB";
const depricationError = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}
mongoose.connect(`mongodb://localhost:27017/${dbName}`, depricationError);
// 2. Create a new mongoose Schema.
// Create Items Schema with one field of name which is data type string
const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
// 3. Using the created Schema, make a new model.
const Item = mongoose.model("Item", itemsSchema);
// 4. Create new Documents in your DB.
const item1 = new Item({
  name: "Welcome to your todolist!"
});
const item2 = new Item({
  name: "Hit the + button to add a new item."
});
const item3 = new Item({
  name: "<-- Hit this to delete an item."
});
// 5. Create an Array/List for your items.
const defaultItems = [item1, item2, item3];

app.get("/", function(_req, res) {

  Item.find({}, function(_err, foundItems){
    // console.log(foundItems);
    if (foundItems.length ===  0){
      // Putting your insertMany into this if statement prevents data repetition in the db
      // 6. Insert you Array into the database using the insertMany function.
      Item.insertMany(defaultItems, function(err){
        if (err){
          console.log(err);
        } else {
          console.log("Default items saved to database.")
        }
      });
      res.redirect("/"); 
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });

});

app.post("/", function(req, res){

  const item = new Item({
    name: req.body.newItem,
  });

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    //items.push(item);
    item.save();
    res.redirect("/");
  }
});

app.get("/work", function(_req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(_req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
