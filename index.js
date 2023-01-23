const express = require('express');
const app = express();
const portNumber = 3003;

// app.listen(arg, arg2);

app.listen(() => {
    console.log(`Visit http://localhost:${portNumber} to view output`);
}, portNumber);


app.get('/', (req, resp) => {
    console.log('hello');
    resp.send('Hello world!');
});
    














// // index.js
// // http://localhost:3000/

// const express = require('express')
// const app = express();

// app.get('/', function (req, res) {
//     console.log('hello');
//   res.send('Hello World');
// })

// app.get('/about', function (req, res) {
//     console.log('about');
//   res.send('About company');
// })

// app.get('/contact', function (req, res) {
//     console.log('contact');
//   res.send('Contact us');
// })

// app.listen(3000);