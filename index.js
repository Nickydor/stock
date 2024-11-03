const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('images'))

app.get('/', function (req, res) {
    return res.render('index');
});

app.get('/contact', function (req, res) {
    return res.render('contact');
});

app.get('/products', function (req, res) {
    return res.render('products');
});

app.get('/order', function (req, res) {
    return res.render('order');
});

app.get('/orders', function (req, res) {
    return res.render('orders');
});

app.get('/orderss', function (req, res) {
    return res.render('orderss');
});


app.listen(3000, function () {
    console.log('listening on port 3000');
});
