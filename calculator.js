const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Calculator +
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.post("/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;
    res.send(`The result is = ${result}`);
})

// calculator BMI
app.get("/bmicalculator", (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post("/bmicalculator", (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    const n = (weight / (height * height));
    res.send(`Your BMI is ${Math.floor(n)}`);
})

app.listen(3000, () => {
    console.log("Servernya Jalan Coeg");
});