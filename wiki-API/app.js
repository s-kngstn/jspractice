const express = require('express');
const mongoose = require('mongoose');
const app = express();
const serverPort = 3000;

const testContent = "Test successful!";


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const dbName = "wikiDB";
const depricationError = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,  
};
mongoose.connect('mongodb://localhost:27017/' + dbName, depricationError);
const articleSchema = {
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  }
}
const Article = mongoose.model("Article", articleSchema);

app.get("/", function(req, res){

  res.render("home", {testContent: testContent});
});

// Chaining methods 
app.route("/articles")
// GET: Fetches all the articles 
  .get(function(req, res){
    Article.find(function(err, foundArticles){
      // console.log(foundArticles);
      if (!err){
      res.send(foundArticles);
      } else {
      res.send(err);
      }
    });
  })
// POST: Creates one new article (using postman if no built UI)
  .post(function(req, res){
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function(err){
      if (!err){
        res.send("Successfully added new article.");
      } else {
        res.send(err);
      }
    });
  })
// DELETE: Deletes all articles
  .delete(function(req, res){
    Article.deleteMany(function(err){
      if (!err){
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    })
  });

app.listen(serverPort, function(){
  console.log("Express server running on " + serverPort);
});