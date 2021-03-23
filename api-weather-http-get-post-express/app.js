const https = require('https');
const express = require('express');

const app = express();
// We need the code below to parse the post request **
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){

    res.sendFile(`${__dirname}/index.html`);
    
})

app.post("/", function(req, res){

    const query = req.body.cityName; //** <-- this is what we used with express.urlencoded
    const units = "Metric";
    const apiKey = undefined;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
    
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const iconCode = weatherData.weather[0].icon;
            const city = weatherData.name;
            console.log(temp, description);

            res.write(`<h1>The temperature in ${city} is ${temp} degrees Celcius.</h1>`);
            res.write(`<p>The weather is currently ${description}</p>`);
            res.write(`<img src="http://openweathermap.org/img/w/${iconCode}.png" alt="weather icon">`);
            
            res.send();
            // const object = {
            //     name: "Sam",
            //     favouriteFood: "Cheeseburger",
            // }
            // // *** stringify turns object into string
            // console.log(JSON.stringify(object));
            // 
        })
    })
})




app.listen(3000, function(){
    console.log("Server running on port 3000")
})