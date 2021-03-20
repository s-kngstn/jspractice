const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    
    var result = Number(num1) + Number(num2);

    console.log(req.body);
    console.log(req.body.num1)    
    res.send(`The result of the calculation is ${result}.`)
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post('/bmicalculator', function(req, res) {
    var BMI = parseFloat(req.body.weight / (req.body.height ** 2));

    if (BMI < 18.5) {
        res.send(`Your BMI is ${BMI}, you are underweight.`);
    } else if (BMI >= 18.5 && BMI < 25) {
        res.send(`Your BMI is ${BMI}, you are a normal weight.`);
    } else if (BMI >= 25 && BMI < 30) {
        res.send(`Your BMI is ${BMI}, you are overweight.`);
    } else {
        res.send(`Your BMI is ${BMI}, you are obese.`);
    }

});

app.listen(3000, function() {
    console.log("Server listening on port 3000..")
});