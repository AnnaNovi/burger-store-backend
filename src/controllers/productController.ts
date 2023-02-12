import { Request, Response } from 'express';

exports.addProduct = function (request: Request, response: Response) {
  response.send('Добавление продукта');
};
exports.getProducts = function (request: Request, response: Response) {
  response.send('Список продуктов');
};
