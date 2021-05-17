import { Product } from "./interfaces";
import { formatSaveDate } from "./services";

export interface AppState {
  products: Product[];
  forEdit: Product;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ciuc',
    price: 3,
    created: formatSaveDate(new Date(2021, 4, 16, 18, 21))
  },
  {
    id: 2,
    name: 'Timisoreana',
    price: 2.5,
    created: formatSaveDate(new Date(2021, 4, 15, 13, 2))
  }
];

export const initialState: AppState = {
  products: products,
  forEdit: {} as Product,
};