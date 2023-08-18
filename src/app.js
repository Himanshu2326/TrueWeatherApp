
// Dependencies :-
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 1000  // process.env.PORT it is used When we Host To a Real Port


// const PubPath = path.join(__dirname, '../public');
const ParPath = path.join(__dirname, '../partials');
const public = path.join(__dirname, '../public');

//  Using hbs:-
app.set('view engine', 'hbs');

// app.use(express.static(PubPath));
hbs.registerPartials(ParPath)
app.use(express.static(public))

// Routing :-

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/index.hbs', (req, res) => {
    res.render('index')
})

app.get('/about.hbs', (req, res) => {
    res.render('about')
})

app.get('/weather.hbs', (req, res) => {
    res.render('weather')
})

app.get('*', (req, res) => {
    res.render('404')
})


// Live The Port:-
app.listen(port, () => {
    console.log(`Port :${port} is Live Now`)
})
