const express = require("express");
const app = express();

//You need the urlencoded to write HTML items into this javascript
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.send("Hello");
});


app.listen(3000, function(){
  console.log("Server started on Port 3000");
});
