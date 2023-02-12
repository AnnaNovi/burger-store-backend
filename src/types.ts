export interface ICategory {
    id?: number;
    name: string;
    type: 'category' | 'subcategory';
    // Foe ingredients
    order: number | null,
    id_category?: number | null;
    subcategory?: ICategory[] | null;
}

export interface IBurger extends IProduct {
  composition: IComposition[];
}

interface IProduct {
  id?: number;
  name: string;
  description: string;
  id_category: number;
  id_subcategory?: number;
  price: number;
  max_count: number;
  status: 'active' | 'disable' | 'soon' | 'new';
  images: IImage;
  weight: number;
  nutritional_value: INutritionalValue;
}

interface INutritionalValue {
  carb: number;
  fat: number;
  protein: number;
  kcal: number;
  kj: number;
}
interface IImage {
  image: string;
  image_128?: string;
  image_256?: string;
  image_512?: string;
}
interface IComposition {
  id?: number;
  name: string;
  description: string;
}


