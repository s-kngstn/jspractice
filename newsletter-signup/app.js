const https = require('https');
const express = require('express');
const { response } = require('express');
const app = express();

//You need the urlencoded to write HTML items into this javascript
app.use(express.urlencoded({extended: true}));
//Use below to allow access to CSS and JS files from a folder named "public"
app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(`${firstName}, ${lastName}, ${email}`);
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    }
    const jsonData = JSON.stringify(data);
    
    const url = "https://us1.api.mailchimp.com/3.0/lists/e5a65ba8c0";

    const options = {
        method: "POST",
        auth: undefined,
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){

             if (response.statusCode === 200){
                res.sendFile(`${__dirname}/success.html`);
                console.log(`Status Code: ${response.statusCode}`)
            } else {
                res.sendFile(`${__dirname}/failure.html`);
                console.log(`Status Code: ${response.statusCode}`)
            }
            console.log(JSON.parse(data));
        })

    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on Port 3000...")
});
