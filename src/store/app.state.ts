import { Product } from "../interfaces/products";

export interface AppState {
  products: Product[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ciuc',
    price: 3,
    created: new Date(2021, 4, 16, 18, 21)
  },
  {
    id: 2,
    name: 'Timisoreana',
    price: 2.5,
    created: new Date(2021, 4, 15, 13, 2)
  }
];

export const initialState: AppState = {
  products: products,
};