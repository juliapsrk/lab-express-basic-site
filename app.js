const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

// app.get('/', (req, res, next) => res.render('/views/home.html'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'hbs');
// app.get('/', (req, res, next) => res.render('app'));

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);
