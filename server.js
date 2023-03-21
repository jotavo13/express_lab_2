//first to init express ---- import express
const express = require('express');
const app = express();

// console.log(models);

// Models - Database stuff
// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// new instance of express
const port = 3000;



// const drinks = require('drink');

// Middleware 
// This is a view engine that is looking for EJS files to be rendered. It also sets up that ALL the EJS files for my frontend will be located in a file named views


app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall <br> 
    <a href= '/98'> take one down ...</a>
    `)
})

app.get(`/0`, (req, res) =>{
    res.send(`0 Bottles of beer on the wall <br>
    <a href= '/'> put them back up </a>`);
})

app.get('/:number', (req, res) => {
    let reduNum = req.params.number - 1;
    res.send(`${req.params.number} Bottles of beer on the wall <br>
     <a href= '/${reduNum}'> take one down ...</a>`);
})






app.get('/greeting/:name', (req, res) =>{
    res.send(`hello ${req.params.name}`)
})



app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let totalTip = req.params.total * (req.params.tipPercentage / 100 ) 
    res.send(`here is your Tip ${totalTip}`)
})

let magicBallPhrases = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


app.get('/magic/:phrase', (req, res,) =>{
    let ranPhrase = Math.floor(Math.random() * 20);
    res.send(`${req.params.phrase}? the answer is ... ${magicBallPhrases[ranPhrase]}`)
})





app.listen(port, () => {
    console.log('server started and listening on port 3000')
});