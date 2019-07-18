'use strict';

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res, next) => {
  // connecting to DB find all movies
  let message = null;
  const movies = [{title:'Detective Pikachu'}, {title:'Frozen'}]
  if (movies.length === 0) {
    message = {
      message: '404 not found'
    }
  }
  const data = {
    title: 'Hello',
    isShowing: true,
    message,
    movies,
  }
  res.render('index', data);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))