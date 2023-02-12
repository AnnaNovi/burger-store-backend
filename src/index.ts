import { Request, Response } from 'express';
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');
const categoryRouter = require('./routes/categoryRouter.js');

const PORT = process.env.PORT || 80;

const app = express();

//парсинг в формате json
app.use(bodyParser.json());
// парсит запросы по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/static/'));

app.get('/', function (request: Request, response: Response) {
  response.send('<h2>Это стартовая страница приложения</h2>');
});

app.use('/webapi/data/users', userRouter);
app.use('/webapi/data/products', productRouter);
app.use('/webapi/data/categories', categoryRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
