/**
 * Generic action
 */
export interface Action<T> {
  type: string;
  payload?: T;
}

export interface Product extends NewProduct {
  id: number;
}

/**
 * Did this to add the id when we're adding the product in the array.
 */
export interface NewProduct {
  name: string;
  price: number;
  created: Date;
}