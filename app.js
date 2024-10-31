const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory data storage
let items = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { items });
});

app.post('/add', (req, res) => {
    const item = req.body.item;
    items.push(item);
    res.redirect('/');
});

app.get('/edit/:index', (req, res) => {
    const index = req.params.index;
    res.render('edit', { item: items[index], index });
});

app.post('/update/:index', (req, res) => {
    const index = req.params.index;
    items[index] = req.body.item;
    res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
    const index = req.params.index;
    items.splice(index, 1);
    res.redirect('/');
});

app.get('/report', (req, res) => {
    res.send(`<h1>Report</h1><pre>${JSON.stringify(items, null, 2)}</pre>`);
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
