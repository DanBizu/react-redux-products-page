import { NewProduct, Product } from "./interfaces";
import * as act from "./actions";
import { store } from "./store";

export function setForEdit(product: Product) {
  store.dispatch(act.setForEdit(product));
}

export function updateProduct(product: Product) {
  store.dispatch(act.updateProduct(product));
}

export function addProduct(newProduct: NewProduct) {
  store.dispatch(act.addProduct(newProduct));
}


function padWithZero(value: number): string {
  let padded = value < 10 ? `0${value}` : value.toString();
  return padded;
}

export function formatSaveDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Starts from 0
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let formatedDate = `${year}-${padWithZero(month)}-${padWithZero(day)} ${padWithZero(hour)}:${padWithZero(minutes)}:${padWithZero(seconds)}`

  return formatedDate;
}

export function formatDisplayDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Starts from 0
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  let formatedDate = `${padWithZero(hour)}:${padWithZero(minutes)} ${padWithZero(day)}/${padWithZero(month)}/${year}`;

  return formatedDate;
}
