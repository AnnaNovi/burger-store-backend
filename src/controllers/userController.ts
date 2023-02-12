import { Request, Response } from 'express';
const User = require('../models/user');

exports.addUser = function (request: Request, response: Response) {
  const user = new User({ name: 'Hagris', age: '43' });
  user.save();
  response.send('Добавление пользователя');
};
exports.getUsers = function (request: Request, response: Response) {
  const users = User.getAll();
  response.send(users);
};
