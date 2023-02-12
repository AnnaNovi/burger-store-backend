const users: IUser[] = [];

interface IUser {
  name: string;
  age: string;
}
// DATABASE
module.exports = class User {
  private name: string;
  private age: string;

  constructor({ name, age }: IUser) {
    this.name = name;
    this.age = age;
  }
  save() {
    console.log('Save User', this.name, this.age);
  }
  static getAll() {
    return users;
  }
};
