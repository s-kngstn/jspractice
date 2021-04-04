const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

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
  useUnifiedTopology: true,
  useFindAndModify: false
}

// Local Connection Below
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

// Custom List items Schema
const listSchema = {
  name: String,
  items: [itemsSchema]
};
// Created new model for Custome List Schema
const List = mongoose.model("List", listSchema);


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

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect(`/${listName}`);
    });
  }

});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today"){
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Item Deleted")
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err){
        res.redirect(`/${listName}`);
      }
    })
  }

});

app.get("/:customListName", function(req, res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName}, function(err, foundList){
    if (!err){
      if (!foundList){
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect(`/${customListName}`);
      } else {
        // Show an existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });

 
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});