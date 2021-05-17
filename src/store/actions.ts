import { Product } from "./interfaces";

export const SET_FOR_EDIT = 'SET_FOR_EDIT';
export const setForEdit = (product: Product) => {
  return {
    type: SET_FOR_EDIT,
    payload: product
  }
}

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = (product: Product) => ({
  type: UPDATE_PRODUCT,
  payload: product
})