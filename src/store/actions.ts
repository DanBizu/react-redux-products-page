import { NewProduct, Product } from "./interfaces";

export const SET_FOR_EDIT = 'SET_FOR_EDIT';
export const setForEdit = (product: Product) => ({
  type: SET_FOR_EDIT,
  payload: product
})

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = (product: Product) => ({
  type: UPDATE_PRODUCT,
  payload: product
});

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (newProduct: NewProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct
});