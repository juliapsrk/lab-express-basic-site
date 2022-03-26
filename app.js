const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'My Application';

app.get('/home', (request, response) => {
  response.render('home', { message: 'Denis Villeneuve' });
});

app.get('/about', (request, response) => {
  response.render('about', { message: 'About' });
});

app.get('/works', (request, response) => {
  response.render('works', { message: 'Movies' });
});

app.get('/gallery', (request, response) => {
  response.render('gallery', { message: 'Photo Gallery' });
});

app.listen(3000);
