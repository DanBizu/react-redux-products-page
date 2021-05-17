import { Product } from "./interfaces";
import * as act from './actions';
import { store } from "./store";

export function setForEdit(product: Product) {
  store.dispatch(act.setForEdit(product));
}

export function updateProduct(product: Product) {
  store.dispatch(act.updateProduct(product));
}