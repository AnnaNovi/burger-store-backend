import { ICategory } from "../types";

const category: ICategory[] = [
  {
    id: 1,
    name: 'Бургеры',
    type: 'category',
    order: 1,
    subcategory: [
      { id: 2, name: 'Говядина', type: 'subcategory', id_category: 1, order: 1 },
      { id: 3, name: 'Свинина', type: 'subcategory', id_category: 1, order: 2 },
      { id: 4, name: 'Курица', type: 'subcategory', id_category: 1, order: 3 },
      { id: 5, name: 'Рыба', type: 'subcategory', id_category: 1, order: 4 },
    ],
  },
  { id: 6, name: 'Закуски', type: 'category', order: 2 },
  { id: 10, name: 'Напитки', type: 'category', order: 3,
    subcategory: [
      { id: 11, name: 'Холодные напитки', type: 'subcategory', id_category: 10, order: 1 },
      { id: 12, name: 'Горячие напитки', type: 'subcategory', id_category: 10, order: 2 },
      { id: 13, name: 'Молочные коктейли', type: 'subcategory', id_category: 10, order: 3 },
    ],
  },
  { id: 14, name: 'Салаты', type: 'category', order: 4 },
  { id: 15, name: 'Десерты', type: 'category', order: 5 },
  { id: 16, name: 'Дополнительно', type: 'category', order: 6 },
];

// DATABASE
module.exports = class Category {
  private category: ICategory;

  constructor(category: ICategory) {
    this.category = category;
  }
  
  save() {
    console.log('Save Category', this.category);
  }
  
  static getAll(): ICategory[] {
    return category;
  }
};
