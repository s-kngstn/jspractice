const express = require('express');
const mongoose = require('mongoose');
const app = express();
const serverPort = 3000;
const _ = require('lodash');
const { kebabCase } = require('lodash');

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

// Chaining methods on all articles ////////////////
app.route("/articles")
// GET: Fetches all the articles 
  .get(function(req, res){
    Article.find(function(err, foundArticles){
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

//// Requests targeting specific articles ///////

app.route("/articles/:articleTitle")
  .get(function(req, res){
    Article.findOne({ title: req.params.articleTitle }, function(err, foundArticle){
      if (foundArticle){
        res.send(foundArticle);
      } else {
        res.send("No matching articles with that title found.");
      }
    });
  })
  // PUT REQUEST REPLACES THE ENTIRE RESOURCE (In this case the title & content will be changed)
  .put(function(req, res){
    Article.replaceOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if (!err){
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch(function(req, res){
    Article.updateOne(
      {title: req.params.articleTitle},
      {$set: req.body},
      function(err){
        if(!err){
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete(function(req, res){
    Article.deleteOne({title: req.params.articleTitle}, function(err){
      if (!err){
        res.send("This article has successfully been deleted.");
      } else {
        res.send(err);
      }
    });
  });


app.listen(serverPort, function(){
  console.log("Express server running on " + serverPort);
});