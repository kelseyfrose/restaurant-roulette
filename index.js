const express = require('express');
const router = require('./router');
const pug = require('pug');

const app = express();
const PORT = 8000;

app.use('/', router);
app.set('view engine', 'pug');
app.listen(PORT);