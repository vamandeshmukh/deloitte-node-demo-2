// index.js    
// http://localhost:3000/

const express = require('express')
const app = express();

app.get('/', function (req, res) {
    console.log('hello');
  res.send('Hello World');
})

app.get('/about', function (req, res) {
    console.log('about');
  res.send('About company');
})

app.get('/contact', function (req, res) {
    console.log('contact');
  res.send('Contact us');
})

app.listen(3000);