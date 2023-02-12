import { Request, Response } from 'express';
const Category = require('../models/category');

exports.addCategory = function (request: Request, response: Response) {
  response.send('addCategory');
};
exports.getCategories = function (request: Request, response: Response) {
  response.send(Category.getAll());
};
