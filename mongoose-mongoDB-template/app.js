const mongoose = require('mongoose');

// Create a db name
const dbName = "fruitsDB";
// Current fix to deprication error
const depricationError = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

// Connect node and custom db to mongoose
mongoose.connect(`mongodb://localhost:27017/${dbName}`, depricationError);

// Create a schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Cmon, you must have a name. Everybody has a name."]
  },
  age: {
    type: Number,
    required: true
  },
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


const cherry = new Fruit({
  name: "Cherry",
  rating: 8,
  review: "Yummmy cherry!"
});

// cherry.save()


// person.save();

// add Schema to mongoose db

// Create db entry

const blueberry = new Fruit ({
  rating: 10,
  review: "The perfect summer fruit!"
});

//blueberry.save();

// const pear = new Fruit ({
//   rating: 9,
//   reviews: "Melts in your mouth when ripe, yumm"
// })

// pear.save();
// strawberry.save()

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "Sweet and sour"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Minions seem to love them!"
// });

//Save single entry
//banana.save();

// Create multiple (many) db entrys
// Fruit.insertMany([kiwi, banana], function(err){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("Successfully save all the fruit.")
//   }
// });

// ** HOW TO READ FROM YOUR DATABASE WITH MONGOOSE **

Fruit.find(function(err, fruits){

  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();
    // console.log(fruits);
    // loop through database object's name
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }

});



// UPDATE AND DELETING WITH MONGOOOSEEE

// Updating an entry
// Fruit.updateOne({_id: "60661e4ba7d6624237e315da"}, {name: "Blueberry"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// // Deleting an entry
// Fruit.deleteOne({name: "Blueberry"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Item deleted.");
//   }
// });

// Deleting a whole collection <-- EG : all items with the name: "Pear"
// Fruit.deleteMany({name: "Pear"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Items Deleted")
//   }
// });



// ESTABLISHING RELATIONSHIPS WITH DATA


Person.updateOne({_id: "6065dbf5a31d102d0e78117a"}, {favoriteFruit: cherry}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Document successfully updated.");
  }
});












